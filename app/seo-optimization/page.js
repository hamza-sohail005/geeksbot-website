import Link from "next/link";
import { BOOKING_URL } from "@/data/site";
import PageHero from "@/components/PageHero";
import ServiceCoreVisual from "@/components/ServiceCoreVisual";
import SeoResults from "@/components/SeoResults";
import BrightCoreResults from "@/components/BrightCoreResults";

const whyGeeksbot = [
  { icon: "target", title: "Revenue Focused", text: "Keywords chosen for buyers, not vanity." },
  { icon: "gauge", title: "Technically Sound", text: "Fast, crawlable, indexable sites." },
  { icon: "trend", title: "Long Term Growth", text: "Rankings built to last, not spike." },
  { icon: "shield", title: "White Hat Only", text: "Clean links and safe practices." },
];

export const metadata = {
  title: "SEO Optimization Services | Technical, Local & Ecommerce SEO USA",
  description:
    "Grow organic traffic with Geeks Bot SEO optimization services. Technical SEO, on-page and content SEO, local SEO and Google Business Profile, ecommerce SEO, and white hat link building for businesses across the USA.",
  alternates: { canonical: "/seo-optimization" },
  openGraph: {
    title: "SEO Optimization Services - GeeksBot",
    description:
      "Technical, on-page, local and ecommerce SEO with white hat link building, built into your website rather than bolted on.",
    url: "https://geeksbot.com/seo-optimization",
  },
};

const features = [
  "Technical SEO Audits and Fixes",
  "On-Page and Content SEO",
  "Local SEO and Google Business Profile",
  "Ecommerce and Product SEO",
  "White Hat Link Building",
  "AI Search Visibility (Google AI Answers)",
];

const pillars = [
  {
    title: "Technical SEO",
    text: "Site speed, Core Web Vitals, crawlability, indexing, XML sitemaps, schema markup and mobile usability, so search engines can read and trust every page you publish.",
  },
  {
    title: "On-Page & Content",
    text: "Keyword research by search intent, optimized titles, meta descriptions, headings and internal links, plus blog and category content that answers what your customers are actually searching.",
  },
  {
    title: "Local SEO",
    text: "Google Business Profile optimization, local landing pages, consistent business listings and review strategy, so nearby customers find you when they search \"near me\".",
  },
  {
    title: "Authority & Links",
    text: "Guest posts and relevant backlinks from real, quality websites, with spam score control and natural anchor text, building domain authority that holds up over time.",
  },
];

const process = [
  {
    title: "Audit",
    text: "We start with a full SEO audit of your website, competitors and current rankings. You get a clear picture of what is holding your site back and where the biggest opportunities are.",
  },
  {
    title: "Strategy",
    text: "We map keywords to pages by search intent, plan your site structure and content, and set priorities so the work with the highest impact on traffic and leads comes first.",
  },
  {
    title: "Optimization",
    text: "Our team fixes technical issues, optimizes pages and products, creates content and builds quality backlinks, with SEO built into the structure of your site rather than added at the end.",
  },
  {
    title: "Reporting",
    text: "We track rankings, organic traffic and conversions, share clear reports on what changed and why, and keep refining the strategy as search engines and your market evolve.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="SEO Optimization Services"
        text="Get found by the customers already searching for what you sell. At Geeks Bot, we deliver technical, on-page, local and ecommerce SEO that improves your visibility on Google, brings in qualified traffic, and turns that traffic into real business growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail dm-light">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Rank Higher, Get Found, And Grow Organically</h2>
              <p>
                A great website only works if people can find it. Our SEO
                optimization services make sure your business shows up when
                customers search for your products and services, on Google,
                in Maps, and in local results.
              </p>
              <p>
                We treat SEO as part of how your website is built, not a
                checklist added after launch. From site architecture and page
                speed to content, local presence and authority building,
                every layer works together. See it in action in our{" "}
                <Link href="/case-studies/sb-fragrances">SB Fragrances case study</Link>
                , where we combined technical, semantic and local SEO with
                1000+ backlinks for a nationwide and local store.
              </p>
              <ul className="service-detail__list">
                {features.map((feature) => (
                  <li key={feature}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22 4 12 14.01 9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary header-btn">
                Book a Call Today
              </a>
            </div>
            <ServiceCoreVisual
              benefits={whyGeeksbot}
              flowLabel="Why choose GeeksBot for SEO optimization"
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">What Our SEO Covers</h2>
          </div>
          <div className="process__grid">
            {pillars.map((step) => (
              <div className="process__card animate" key={step.title}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-proof dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Real Client Results</h4>
            </div>
            <h2 className="section-title__heading">
              Results You Can <span className="gradient-text">Check On Google</span>
            </h2>
            <p className="section-title__text">
              Real screenshots, not promises. Here is how our SEO work shows
              up in Google for two of our clients: a fragrance store selling
              across the USA, and a commercial cleaning company in Charlotte.
            </p>
          </div>

          <div className="seo-client__intro animate">
            <span className="seo-client__intro-label">Client · E-commerce SEO</span>
            <h3>SB Fragrances &amp; Oud: Page 1 On Google</h3>
            <p>
              Ranking next to Wikipedia and national retailers for high-intent
              oud searches, with rich product listings.
            </p>
          </div>
          <SeoResults compact />

          <BrightCoreResults />
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our SEO Optimization Process</h2>
          </div>
          <div className="process__grid">
            {process.map((step) => (
              <div className="process__card animate" key={step.title}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready to Grow Your Organic Traffic?</h2>
            <p className="cta__text">
              Whether you need a technical SEO audit, local SEO for your
              store, ecommerce SEO for your product catalog, or a long term
              link building plan, Geeks Bot is here to help. Let&apos;s get
              your business found by the right customers.
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
