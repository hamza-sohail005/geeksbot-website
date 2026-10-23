import LogynCaseStudy from "@/components/case-study/LogynCaseStudy";

export const metadata = {
  title: "Logyn — Case Study",
  description:
    "How Geeks Bot designed and built the launch landing page for Logyn, a hardware password manager: a 7-section narrative, 5 conversion points, price anchoring and a phone-first React + Tailwind build.",
  alternates: { canonical: "/case-studies/logyn" },
  openGraph: {
    title: "Logyn — Product Launch Landing Page Case Study | Geeks Bot",
    description:
      "Explaining offline password storage, selling the device and driving app installs — in one focused scroll.",
    url: "https://geeksbot.com/case-studies/logyn",
    type: "article",
    images: ["/images/case-studies/logyn/hero.webp"],
  },
};

export default function LogynCaseStudyPage() {
  return <LogynCaseStudy />;
}
