import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export const metadata = {
  metadataBase: new URL("https://geeksbot.com"),
  title: {
    default: "GeeksBot - IT Solutions & Digital Services",
    template: "%s | GeeksBot",
  },
  description:
    "GeeksBot offers professional IT solutions including web development, UI/UX design, digital marketing, SEO optimization, and mobile app development to help businesses grow digitally.",
  keywords: [
    "IT solutions",
    "web development",
    "UI/UX design",
    "digital marketing",
    "SEO optimization",
    "app development",
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
    title: "GeeksBot - IT Solutions & Digital Services",
    description:
      "We help businesses transform their digital presence with cutting-edge web development, UI/UX design, and data-driven marketing strategies.",
    url: "https://geeksbot.com/",
    siteName: "GeeksBot",
    images: ["/images/GeeksBot-Full.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeeksBot - IT Solutions & Digital Services",
    description:
      "Professional IT solutions including web development, UI/UX design, digital marketing, and app development.",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="cursor" id="cursor"></div>
        <div className="cursor-follower" id="cursorFollower"></div>

        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
