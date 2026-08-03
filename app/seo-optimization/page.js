import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "SEO Optimization",
  description:
    "Professional SEO optimization services by GeeksBot. Improve your search engine rankings, drive organic traffic, and grow your online visibility with proven strategies.",
  alternates: { canonical: "/seo-optimization" },
};

const features = [
  "Technical SEO Audit",
  "On-Page Optimization",
  "Link Building Strategy",
  "Local SEO",
  "Keyword Research & Analysis",
];

const process = [
  {
    title: "Audit",
    text: "We perform a comprehensive technical SEO audit to identify issues affecting your search rankings, including site speed, crawlability, indexing errors, and structural problems.",
  },
  {
    title: "Optimize",
    text: "We optimize your on-page elements including meta tags, headings, content structure, internal linking, and keyword placement to align with search engine best practices.",
  },
  {
    title: "Build",
    text: "We develop a strategic link building campaign to earn high-quality backlinks from authoritative sources, boosting your domain authority and search visibility.",
  },
  {
    title: "Monitor",
    text: "We continuously track your rankings, traffic, and conversions with detailed analytics and reporting, making data-driven adjustments to maximize your SEO performance.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="SEO Optimization"
        text="Boost your online visibility and drive organic traffic with our data-driven SEO strategies. We help businesses rank higher on search engines and attract the right audience to fuel sustainable growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Rank Higher, Grow Faster</h2>
              <p>
                Our comprehensive SEO optimization services are designed to
                improve your website&apos;s search engine rankings, increase
                organic traffic, and maximize your online presence. We
                combine technical expertise with creative strategies to
                deliver measurable results that drive real business growth.
              </p>
              <ul className="service-detail__list">
                {features.map((feature) => (
                  <li key={feature}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn--primary header-btn">
                Get Started
              </Link>
            </div>
            <div className="service-detail__image animate">
              <Image src="/images/project-04.png" alt="SEO Optimization" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Our Process</h4>
            </div>
            <h2 className="section-title__heading">Our SEO Process</h2>
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
            <h2 className="cta__title">Ready to Dominate Search Results?</h2>
            <p className="cta__text">
              Let our SEO experts help you climb the rankings and drive
              qualified organic traffic to your business. Get started with a
              free SEO consultation today.
            </p>
          </div>
          <div className="animate">
            <Link href="/contact" className="btn btn--white">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
