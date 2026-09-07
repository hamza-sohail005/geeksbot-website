import SbFragrancesCaseStudy from "@/components/case-study/SbFragrancesCaseStudy";

export const metadata = {
  title: "SB Fragrances & Oud — Case Study",
  description:
    "How Geeks Bot built a complete fragrance commerce ecosystem for SB Fragrances & Oud from zero: WordPress + WooCommerce storefront, 40+ product listings, 40+ AI product visuals, 100+ social creatives, technical and local SEO, and a 1000+ backlink authority program.",
  alternates: { canonical: "/case-studies/sb-fragrances" },
  openGraph: {
    title: "SB Fragrances & Oud — Digital Transformation Case Study | Geeks Bot",
    description:
      "From no website to a connected fragrance commerce ecosystem — e-commerce, AI creative, SEO, local search and authority building.",
    url: "https://geeksbot.com/case-studies/sb-fragrances",
    type: "article",
  },
};

export default function SbFragrancesCaseStudyPage() {
  return <SbFragrancesCaseStudy />;
}
