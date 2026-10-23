// CORS for the API routes, so the static site on geeksbot.com (Hostinger)
// can call the chatbot / voice API hosted on Netlify.
const ALLOWED_ORIGINS = [
  "https://geeksbot.com",
  "https://www.geeksbot.com",
  "http://localhost:3005",
  ...(process.env.EXTRA_ALLOWED_ORIGINS || "").split(",").map((o) => o.trim()).filter(Boolean),
];

export function corsHeaders(req) {
  const origin = req.headers.get("origin");
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

/** Copies the CORS headers onto an existing Response. */
export function withCors(req, res) {
  for (const [k, v] of Object.entries(corsHeaders(req))) res.headers.set(k, v);
  return res;
}

export function preflight(req) {
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}
