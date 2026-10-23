// Where the chatbot / voice API lives. Empty on a normal Next.js deploy
// (same-origin /api/...). The static Hostinger build has no server, so it
// points at the Netlify deploy that still runs the API routes.
export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/$/, "");
