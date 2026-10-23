const SITE_URL = "https://geeksbot.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/ai-chatbot-development", priority: 0.9 },
  { path: "/ai-automation-services", priority: 0.9 },
  { path: "/web-development", priority: 0.9 },
  { path: "/app-development", priority: 0.9 },
  { path: "/seo-optimization", priority: 0.9 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/case-studies/sb-fragrances", priority: 0.7 },
  { path: "/case-studies/intake24", priority: 0.7 },
  { path: "/case-studies/logyn", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/faqs", priority: 0.6 },
  { path: "/help-center", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
