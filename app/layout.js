import "./globals.css";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import SiteBackground from "@/components/SiteBackground";
import GeekAssistantLoader from "@/components/GeekAssistantLoader";

// Self-hosted, subset and preloaded - replaces the render-blocking
// @import in globals.css. Only the weights the design actually uses.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://geeksbot.com"),
  title: {
    default: "Digital Agency in USA. AI, Web and Mobile App Development. GeeksBot",
    template: "%s | GeeksBot",
  },
  description:
    "GeeksBot is a digital agency in the USA. We build AI chatbots, automation, web apps, and mobile apps for businesses that want real, measurable growth.",
  keywords: [
    "digital agency USA",
    "AI chatbot development",
    "automation service",
    "web application development",
    "mobile app development",
    "GeeksBot",
  ],
  authors: [{ name: "GeeksBot" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Digital Agency in USA. AI, Web and Mobile App Development. GeeksBot",
    description:
      "GeeksBot helps companies grow with AI chatbots, automation tools, websites, and mobile apps built around real business goals.",
    url: "https://geeksbot.com/",
    siteName: "GeeksBot",
    images: ["/images/GeeksBot-Full.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Agency in USA. AI, Web and Mobile App Development. GeeksBot",
    description:
      "GeeksBot is a digital agency in the USA. We build AI chatbots, automation, web apps, and mobile apps for businesses that want real, measurable growth.",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="cursor" id="cursor"></div>
        <div className="cursor-follower" id="cursorFollower"></div>

        <SiteBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollEffects />
        <GeekAssistantLoader />
      </body>
    </html>
  );
}
