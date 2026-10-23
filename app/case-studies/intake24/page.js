import Intake24CaseStudy from "@/components/case-study/Intake24CaseStudy";

export const metadata = {
  title: "Intake24 — Case Study",
  description:
    "How Geeks Bot designed and built the public website for Intake24, an open-source dietary recall platform: 9 pages, 31 Vue components, a 5-step product walk-through, Lighthouse 95 desktop performance and 67% lighter images.",
  alternates: { canonical: "/case-studies/intake24" },
  openGraph: {
    title: "Intake24 — Research Platform Website Case Study | Geeks Bot",
    description:
      "Turning a scientific dietary recall method into a clear, credible, fast website — Vue 3, Vuetify and a performance-first build pipeline.",
    url: "https://geeksbot.com/case-studies/intake24",
    type: "article",
    images: ["/images/case-studies/intake24/home-hero.webp"],
  },
};

export default function Intake24CaseStudyPage() {
  return <Intake24CaseStudy />;
}
