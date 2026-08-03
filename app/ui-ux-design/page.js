import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "UI/UX Design",
  description:
    "Professional UI/UX design services by GeeksBot. We create intuitive, visually stunning designs that elevate user experiences and drive engagement.",
  alternates: { canonical: "/ui-ux-design" },
};

const features = [
  "User Research & Analysis",
  "Wireframing & Prototyping",
  "Visual Design & Branding",
  "Interaction Design",
  "Usability Testing",
];

const process = [
  {
    title: "Research",
    text: "We begin by understanding your users, business goals, and market landscape through in-depth research and analysis to inform every design decision.",
  },
  {
    title: "Wireframe",
    text: "We create detailed wireframes and low-fidelity prototypes to map out user flows, layout structures, and key interactions before visual design begins.",
  },
  {
    title: "Design",
    text: "Our designers craft pixel-perfect, visually compelling interfaces with consistent branding, typography, and color systems that bring your product to life.",
  },
  {
    title: "Test",
    text: "We conduct rigorous usability testing and gather user feedback to validate designs, identify pain points, and iterate until the experience is seamless.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="UI/UX Design"
        text="We create intuitive, visually stunning designs that elevate user experiences and drive engagement. Our design team blends creativity with strategy to deliver interfaces that users love."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Crafting Beautiful User Experiences</h2>
              <p>
                Our UI/UX design services focus on creating seamless digital
                experiences that delight users and achieve business goals. We
                combine research-driven insights with creative excellence to
                design interfaces that are both beautiful and functional.
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
              <Link href="/contact" className="btn btn--primary header-btn">
                Get Started
              </Link>
            </div>
            <div className="service-detail__image animate">
              <Image src="/images/project-02.png" alt="UI/UX Design" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our Design Process</h2>
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
            <h2 className="cta__title">Ready to Transform Your User Experience?</h2>
            <p className="cta__text">
              Let our expert designers create intuitive, beautiful interfaces
              that your users will love. Get in touch today and let&apos;s
              bring your vision to life.
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
