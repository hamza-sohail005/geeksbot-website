/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// `npm run build:hostinger` sets STATIC_EXPORT=1: plain HTML/CSS/JS for
// shared hosting (public_html), no server. Images are served as-is (already
// WebP) and the chatbot API is reached via NEXT_PUBLIC_API_BASE.
if (process.env.STATIC_EXPORT === "1") {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
} else if (process.env.NOINDEX === "1") {
  // The Netlify deploy only serves the chatbot API for geeksbot.com - keep
  // its copy of the pages out of Google (netlify.toml headers don't reach
  // pages rendered by the Next.js runtime). Remove if the site moves there.
  nextConfig.headers = async () => [
    { source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
  ];
}

export default nextConfig;
