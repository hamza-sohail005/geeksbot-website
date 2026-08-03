import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Digital Marketing",
  description:
    "Data-driven digital marketing services by GeeksBot. We boost your online presence with social media marketing, PPC, content marketing, and email campaigns.",
  alternates: { canonical: "/digital-marketing" },
};

const features = [
  "Social Media Marketing",
  "Content Marketing Strategy",
  "PPC & Google Ads",
  "Email Marketing Campaigns",
  "Analytics & Reporting",
];

const process = [
  {
    title: "Strategy",
    text: "We analyze your market, audience, and competitors to build a comprehensive digital marketing strategy aligned with your business objectives.",
  },
  {
    title: "Execute",
    text: "Our team implements targeted campaigns across multiple channels, creating compelling content and ads that resonate with your audience.",
  },
  {
    title: "Optimize",
    text: "We continuously monitor performance metrics and A/B test campaigns to refine messaging, targeting, and budget allocation for maximum impact.",
  },
  {
    title: "Scale",
    text: "Once we identify winning strategies, we scale successful campaigns to drive exponential growth and expand your market reach.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Digital Marketing"
        text="Drive measurable growth and maximize your ROI with our data-driven digital marketing strategies tailored to your business goals."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Grow Your Brand Online</h2>
              <p>
                In today&apos;s digital landscape, having a strong online
                presence is essential for business success. Our digital
                marketing team combines creativity with data-driven insights
                to craft campaigns that reach your target audience, drive
                engagement, and convert visitors into loyal customers.
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
              <Image src="/images/project-03.png" alt="Digital Marketing" width={600} height={450} />
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
            <h2 className="section-title__heading">Our Marketing Process</h2>
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
            <h2 className="cta__title">Ready to Grow Your Business with Digital Marketing?</h2>
            <p className="cta__text">
              Let us help you reach your target audience, increase brand
              awareness, and drive conversions with our proven marketing
              strategies.
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
