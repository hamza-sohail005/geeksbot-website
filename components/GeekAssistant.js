"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { useRouter } from "next/navigation";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { scrollToAndHighlight } from "@/lib/scrollToAndHighlight";
import { useSpeechRecognition } from "@/lib/useSpeechRecognition";
import { speak, stopSpeaking, speechSupported } from "@/lib/speak";
import { GEEK_GREETING } from "@/lib/geekGreeting";
import { API_BASE } from "@/lib/api-base";

// Chat history persistence - sessionStorage so a closed/reopened panel (or
// an accidental page reload) still shows the same conversation, but a new
// tab/browser session starts fresh instead of piling up forever.
const CHAT_HISTORY_KEY = "geekChatHistory";

function loadStoredMessages() {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.sessionStorage.getItem(CHAT_HISTORY_KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

function MuteToggle({ voiceOutputEnabled, onToggle }) {
  if (!speechSupported) return null;
  return (
    <button
      type="button"
      className="geek__mute"
      onClick={onToggle}
      aria-label={voiceOutputEnabled ? "Mute Geek's voice" : "Unmute Geek's voice"}
      aria-pressed={!voiceOutputEnabled}
    >
      {voiceOutputEnabled ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}

function MessageList({ messages, sendingId, onConfirm, onCancel }) {
  return messages.map((m) => (
    <div key={m.id} className={`geek__msg geek__msg--${m.role}`}>
      {m.parts.map((part, i) => {
        if (part.type === "text") return <span key={i}>{part.text}</span>;

        if (part.type === "tool-submitContactForm") {
          if (part.state === "input-available") {
            const isSending = sendingId === part.toolCallId;
            return (
              <div className="geek__confirm" key={i}>
                <p className="geek__confirm-title">Send this to GeeksBot?</p>
                <p><strong>Name:</strong> {part.input.name}</p>
                <p><strong>Email:</strong> {part.input.email}</p>
                <p><strong>Message:</strong> {part.input.message}</p>
                <div className="geek__confirm-actions">
                  <button type="button" onClick={() => onConfirm(part)} disabled={isSending}>
                    {isSending ? "Sending..." : "Send"}
                  </button>
                  <button type="button" onClick={() => onCancel(part)} disabled={isSending}>
                    Cancel
                  </button>
                </div>
              </div>
            );
          }
          if (part.state === "output-available") {
            return <span key={i} className="geek__confirm-result">{part.output}</span>;
          }
          return null;
        }

        return null;
      })}
    </div>
  ));
}

export default function GeekAssistant() {
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [input, setInput] = useState("");
  const [sendingId, setSendingId] = useState(null);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const router = useRouter();
  const containerRef = useRef(null);
  const messagesRef = useRef(null);
  const lastInputWasVoiceRef = useRef(false);
  const prevStatusRef = useRef("ready");
  const fullScreenRef = useRef(false);
  const prevFullScreenRef = useRef(false);

  useEffect(() => {
    fullScreenRef.current = fullScreen;
  }, [fullScreen]);

  const { messages, sendMessage, addToolOutput, status, error } = useChat({
    messages: loadStoredMessages(),
    transport: new DefaultChatTransport({
      api: `${API_BASE}/api/chat`,
      body: () => ({ currentPath: window.location.pathname }),
    }),
    // Without this, addToolOutput() records the tool result locally but never
    // re-sends the conversation, so Geek never confirms the action out loud.
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    onToolCall({ toolCall }) {
      if (toolCall.toolName === "navigateTo") {
        const { path } = toolCall.input;
        router.push(path);
        // A hash on the SAME page won't change pathname, so ScrollEffects'
        // pathname-keyed effect won't fire for it - handle it directly here.
        // (Harmless to also fire when the page does change - it just retries
        // until the element exists.)
        const hash = path.includes("#") ? path.split("#")[1] : null;
        if (hash) setTimeout(() => scrollToAndHighlight(hash), 300);
        addToolOutput({
          tool: "navigateTo",
          toolCallId: toolCall.toolCallId,
          output: `Navigated to ${path}.`,
        });
      } else if (toolCall.toolName === "scrollToSection") {
        const el = document.getElementById(toolCall.input.sectionId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        addToolOutput({
          tool: "scrollToSection",
          toolCallId: toolCall.toolCallId,
          output: el
            ? `Scrolled to ${toolCall.input.sectionId}.`
            : "That section isn't on the current page.",
        });
      }
      // submitContactForm is deliberately NOT resolved here - it needs an
      // explicit visitor click (see the confirm card below) before a real
      // email goes out. Leaving it unresolved keeps the tool part in
      // "input-available" state until confirmSend/cancelSend runs.
    },
  });

  async function confirmSend(part) {
    setSendingId(part.toolCallId);
    try {
      await sendContactEmail(part.input);
      addToolOutput({
        tool: "submitContactForm",
        toolCallId: part.toolCallId,
        output: "Message sent — GeeksBot will be in touch soon.",
      });
    } catch (err) {
      console.error("Geek contact form send error:", err);
      addToolOutput({
        tool: "submitContactForm",
        toolCallId: part.toolCallId,
        output: "Sending failed — please try the Contact page directly.",
      });
    } finally {
      setSendingId(null);
    }
  }

  function cancelSend(part) {
    addToolOutput({
      tool: "submitContactForm",
      toolCallId: part.toolCallId,
      output: "The visitor chose not to send this.",
    });
  }

  const recognition = useSpeechRecognition({
    onFinalResult: (transcript) => {
      if (!transcript) return;
      lastInputWasVoiceRef.current = true;
      sendMessage({ text: transcript });
    },
  });

  // Speaks text, tracking a UI "speaking" state, then - only in full-screen
  // continuous mode - resumes listening once Geek is done talking. Shared by
  // both the "speak Geek's reply" effect and the full-screen greeting.
  async function speakAndMaybeRelisten(text) {
    setIsSpeaking(true);
    await speak(text);
    setIsSpeaking(false);
    if (fullScreenRef.current) recognition.start();
  }

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, status]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (messages.length === 0) {
        window.sessionStorage.removeItem(CHAT_HISTORY_KEY);
      } else {
        window.sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
      }
    } catch {
      // Storage full/unavailable (e.g. private browsing) - history just
      // won't persist, not worth surfacing to the visitor.
    }
  }, [messages]);

  // Speak Geek's reply only when the visitor asked by voice - never for a
  // typed message. A multi-step turn (e.g. a tool call followed by a
  // confirmation reply) passes through "ready" once with no text yet; only
  // reset the flag once real text is actually found and spoken.
  useEffect(() => {
    const wasBusy = prevStatusRef.current === "submitted" || prevStatusRef.current === "streaming";
    prevStatusRef.current = status;
    if (status !== "ready" || !wasBusy) return;
    if (!lastInputWasVoiceRef.current || !voiceOutputEnabled) return;

    const last = messages[messages.length - 1];
    if (!last || last.role !== "assistant") return;
    const text = last.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text)
      .join(" ")
      .trim();
    if (!text) return;

    lastInputWasVoiceRef.current = false;
    speakAndMaybeRelisten(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, messages, voiceOutputEnabled]);

  // Greet + start listening once when entering full-screen mode. This is a
  // deliberate visitor action (tapping the expand button), so it always
  // greets - unlike the passive on-load greeting, which now lives on the
  // hero robot itself (see HeroRobot.js) and only speaks once per browser.
  useEffect(() => {
    if (fullScreen && !prevFullScreenRef.current) {
      if (voiceOutputEnabled) {
        speakAndMaybeRelisten(GEEK_GREETING);
      } else {
        recognition.start();
      }
    }
    prevFullScreenRef.current = fullScreen;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullScreen]);

  // Close the compact panel when the visitor clicks anywhere outside it -
  // not just the X/launcher button. Full-screen mode is exempt: it already
  // covers the entire viewport, so there's no "outside" to click.
  useEffect(() => {
    if (!open || fullScreen) return;
    function handleOutsideClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeWidget();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, fullScreen]);

  const busy = status === "submitted" || status === "streaming";
  const voiceState = recognition.listening ? "listening" : isSpeaking ? "speaking" : busy ? "processing" : "idle";

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || busy) return;
    lastInputWasVoiceRef.current = false;
    sendMessage({ text: input });
    setInput("");
  }

  function closeWidget() {
    stopSpeaking();
    recognition.stop();
    setFullScreen(false);
    setOpen(false);
  }

  function collapseToCompact() {
    stopSpeaking();
    recognition.stop();
    setFullScreen(false);
  }

  return (
    <div className="geek" ref={containerRef}>
      <button
        type="button"
        className={`geek__launcher ${open ? "geek__launcher--close" : ""}`}
        onClick={() => (open ? closeWidget() : setOpen(true))}
        aria-label={open ? "Close Geek assistant" : "Chat with Geek"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <span className="geek__launcher-ring" aria-hidden="true" />
            <span className="geek__launcher-avatar" aria-hidden="true" />
            <span className="geek__launcher-badge" aria-hidden="true">G</span>
          </>
        )}
      </button>

      {open && fullScreen && (
        <div className="geek-fs" role="dialog" aria-label="Geek AI assistant, full screen voice mode">
          <div className="geek-fs__header">
            <button type="button" className="geek-fs__collapse" onClick={collapseToCompact} aria-label="Exit full screen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="geek-fs__title">Geek</div>
            <MuteToggle voiceOutputEnabled={voiceOutputEnabled} onToggle={() => {
              if (voiceOutputEnabled) stopSpeaking();
              setVoiceOutputEnabled((v) => !v);
            }} />
          </div>

          <div className="geek-fs__stage">
            <div className={`geek-fs__orb geek-fs__orb--${voiceState}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="geek-fs__status">
              {voiceState === "listening" && "Listening..."}
              {voiceState === "processing" && "Thinking..."}
              {voiceState === "speaking" && "Speaking..."}
              {voiceState === "idle" && recognition.error === "not-allowed" && "Mic access blocked — allow it in your browser, or type below"}
              {voiceState === "idle" && recognition.error && recognition.error !== "not-allowed" && "Didn't catch that — tap the mic to try again, or type below"}
              {voiceState === "idle" && !recognition.error && (recognition.supported ? "Tap the mic to talk" : "Type a message below")}
            </p>
            {recognition.listening && recognition.interimText && (
              <p className="geek-fs__interim">&ldquo;{recognition.interimText}&rdquo;</p>
            )}
          </div>

          <div className="geek-fs__messages" ref={messagesRef}>
            <MessageList messages={messages} sendingId={sendingId} onConfirm={confirmSend} onCancel={cancelSend} />
            {error && (
              <div className="geek__msg geek__msg--error">
                Geek is having trouble responding right now. Please try again in a moment.
              </div>
            )}
          </div>

          <form className="geek-fs__form" onSubmit={handleSubmit}>
            {recognition.supported && (
              <button
                type="button"
                className={`geek__mic geek-fs__mic ${recognition.listening ? "geek__mic--listening" : ""}`}
                onClick={() => (recognition.listening ? recognition.stop() : recognition.start())}
                disabled={busy}
                aria-label={recognition.listening ? "Stop listening" : "Speak to Geek"}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                </svg>
              </button>
            )}
            <input
              className="geek__input"
              value={recognition.listening ? recognition.interimText : input}
              onChange={(e) => setInput(e.target.value)}
              disabled={busy || recognition.listening}
              placeholder="Or type here..."
              aria-label="Message Geek"
            />
            <button type="submit" className="geek__send" disabled={busy || !input.trim()} aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {open && !fullScreen && (
        <div className="geek__panel" role="dialog" aria-label="Geek AI assistant">
          <div className="geek__header">
            <span className="geek__header-avatar">G</span>
            <div className="geek__header-text">
              <div className="geek__header-title">Geek</div>
              <div className="geek__header-subtitle">GeeksBot's AI guide</div>
            </div>
            {recognition.supported && (
              <button
                type="button"
                className="geek__expand"
                onClick={() => setFullScreen(true)}
                aria-label="Switch to full-screen voice mode"
                title="Full-screen voice mode"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            )}
            <MuteToggle voiceOutputEnabled={voiceOutputEnabled} onToggle={() => {
              if (voiceOutputEnabled) stopSpeaking();
              setVoiceOutputEnabled((v) => !v);
            }} />
          </div>

          <div className="geek__messages" ref={messagesRef}>
            {messages.length === 0 && (
              <div className="geek__msg geek__msg--assistant">
                Hey, I&apos;m Geek 👋 Ask me anything — about GeeksBot, your project idea,
                or tech in general — and I can guide you around the site too.
              </div>
            )}
            <MessageList messages={messages} sendingId={sendingId} onConfirm={confirmSend} onCancel={cancelSend} />
            {busy && (
              <div className="geek__msg geek__msg--assistant geek__msg--typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {error && (
              <div className="geek__msg geek__msg--error">
                Geek is having trouble responding right now. Please try again in a moment.
              </div>
            )}
          </div>

          <form className="geek__form" onSubmit={handleSubmit}>
            {recognition.supported && (
              <button
                type="button"
                className={`geek__mic ${recognition.listening ? "geek__mic--listening" : ""}`}
                onClick={() => (recognition.listening ? recognition.stop() : recognition.start())}
                disabled={busy}
                aria-label={recognition.listening ? "Stop listening" : "Speak to Geek"}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                </svg>
              </button>
            )}
            <input
              className="geek__input"
              value={recognition.listening ? recognition.interimText : input}
              onChange={(e) => setInput(e.target.value)}
              disabled={busy || recognition.listening}
              placeholder={recognition.listening ? "Listening..." : "Ask Geek anything..."}
              aria-label="Message Geek"
            />
            <button type="submit" className="geek__send" disabled={busy || !input.trim()} aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
