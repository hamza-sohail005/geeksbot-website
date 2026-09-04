export const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

let currentAudio = null;
let currentStopResolve = null;

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "");
}

function speakWithBrowserVoice(text) {
  return new Promise((resolve) => {
    if (!speechSupported) return resolve();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.lang.startsWith("en") && /Google|Natural/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    currentStopResolve = resolve;
    utterance.onend = () => {
      currentStopResolve = null;
      resolve();
    };
    utterance.onerror = () => {
      currentStopResolve = null;
      resolve();
    };
    window.speechSynthesis.speak(utterance);
  });
}

// Fetches Geek's ElevenLabs voice for some text and hands back a playable
// blob URL, without playing it. Split out from speak() so a caller that
// knows text in advance (e.g. the hero robot's greeting) can kick this off
// the moment the page loads - well before the visitor does anything - so
// the network round-trip is already done by the time playback is actually
// allowed to start, instead of adding its latency on top.
export async function synthesizeSpeech(text) {
  const cleaned = stripMarkdown(text).trim();
  if (!cleaned) return null;

  try {
    const res = await fetch("/api/speak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: cleaned }),
    });
    if (!res.ok) throw new Error(`TTS request failed: ${res.status}`);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  } catch (err) {
    console.error("ElevenLabs speech synthesis failed:", err);
    return null;
  }
}

// Plays a blob URL from synthesizeSpeech(). Resolves only once playback
// actually finishes (or is stopped), same contract as speak().
export function playAudioUrl(url) {
  stopSpeaking();
  const audio = new Audio(url);
  currentAudio = audio;

  return new Promise((resolve) => {
    currentStopResolve = resolve;
    audio.onended = () => {
      URL.revokeObjectURL(url);
      currentStopResolve = null;
      resolve();
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      currentStopResolve = null;
      resolve();
    };
    audio.play().catch(() => resolve());
  });
}

// Tries Geek's ElevenLabs voice first (server-side, key never reaches the
// browser); falls back to the browser's built-in voice on any failure -
// network error, misconfiguration, or the free tier's monthly quota running
// out mid-conversation. Either way the visitor always hears a reply.
//
// Resolves only once playback actually finishes (or is stopped) - not just
// once it starts - so callers can chain "speak, then do the next thing"
// (e.g. continuous voice mode listening again once Geek stops talking).
export async function speak(text) {
  stopSpeaking();
  const url = await synthesizeSpeech(text);
  if (url) {
    await playAudioUrl(url);
  } else {
    await speakWithBrowserVoice(stripMarkdown(text).trim());
  }
}

export function stopSpeaking() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (speechSupported) window.speechSynthesis.cancel();
  if (currentStopResolve) {
    const resolve = currentStopResolve;
    currentStopResolve = null;
    resolve();
  }
}
