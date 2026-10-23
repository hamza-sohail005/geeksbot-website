import Link from "next/link";
import { BOOKING_URL } from "@/data/site";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore GeeksBot's portfolio of AI chatbots, automation systems, web applications, and mobile apps delivered for real businesses.",
  alternates: { canonical: "/portfolio" },
};

const caseStudies = [
  {
    id: "case-sb-fragrances",
    tag: "E-Commerce · SEO · AI Creative",
    title: "SB Fragrances & Oud — A Fragrance Commerce Ecosystem, Built From Zero",
    text: "No website to a connected system: WordPress + WooCommerce storefront, 40+ product listings, 40+ AI product visuals, 100+ social creatives, technical and local SEO, and 1000+ backlinks.",
    href: "/case-studies/sb-fragrances",
    featured: true,
  },
  {
    id: "case-intake24",
    tag: "Website · Vue 3 · Performance",
    title: "Intake24 — Making a Research Method Feel Easy",
    text: "The public website for an open-source dietary recall platform: 9 pages, 31 Vue components, a 5-step product walk-through, Lighthouse 95 desktop performance and 67% lighter images.",
    href: "/case-studies/intake24",
    featured: true,
  },
  {
    id: "case-logyn",
    tag: "Landing Page · React · Conversion",
    title: "Logyn — Selling a New Kind of Password Security",
    text: "A launch page for a hardware password manager: a 7-section narrative, 5 conversion points, $15 vs $44 price anchoring and a phone-first React + Tailwind build.",
    href: "/case-studies/logyn",
    featured: true,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        text="A look at the work we have delivered and the thinking behind it, from quick wins to full product builds."
      />

      <div className="dm-dark">
        <Portfolio showIntro={false} showCta={false} />
      </div>

      <section className="case-studies dm-light" id="case-studies">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Case Studies</h4>
            </div>
            <h2 className="section-title__heading">
              The Story <span className="gradient-text">Behind The Work</span>
            </h2>
            <p className="section-title__text">
              A closer look at how a few of these projects came together,
              from the first conversation to launch.
            </p>
          </div>

          <div className="case-studies__grid">
            {caseStudies.map((item, i) => (
              <Link
                href={item.href}
                className={`case-study animate${item.featured ? " case-study--featured" : ""}`}
                id={item.id}
                key={item.title}
              >
                <span className="case-study__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="case-study__tag">{item.tag}</span>
                <h3 className="case-study__title">{item.title}</h3>
                <p className="case-study__text">{item.text}</p>
                <span className="case-study__arrow" aria-hidden="true">
                  {item.featured ? "Read the case study" : null}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready To Add Your Project To This List?</h2>
            <p className="cta__text">
              Whether you need a chatbot, an app, or a full digital rebuild,
              let&apos;s talk about what you&apos;re building.
            </p>
          </div>
          <div className="animate">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              Book a Call Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
