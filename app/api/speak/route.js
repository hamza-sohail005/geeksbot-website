import { preflight, withCors } from "@/lib/cors";

export function OPTIONS(req) {
  return preflight(req);
}

export async function POST(req) {
  return withCors(req, await synthesize(req));
}

async function synthesize(req) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;

  if (!apiKey || !voiceId) {
    return new Response("ElevenLabs not configured", { status: 500 });
  }

  const { text } = await req.json();
  if (!text || !text.trim()) {
    return new Response("No text provided", { status: 400 });
  }

  const elevenLabsResponse = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
    }
  );

  if (!elevenLabsResponse.ok) {
    const errorBody = await elevenLabsResponse.text();
    console.error("ElevenLabs TTS error:", elevenLabsResponse.status, errorBody);
    return new Response("Speech generation failed", { status: 502 });
  }

  return new Response(elevenLabsResponse.body, {
    headers: { "Content-Type": "audio/mpeg" },
  });
}
