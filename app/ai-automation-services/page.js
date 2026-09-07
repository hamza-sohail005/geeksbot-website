import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCoreVisual from "@/components/ServiceCoreVisual";

const whyGeeksbot = [
  { icon: "loop", title: "Less Repetition", text: "Manual, repetitive work handled for you." },
  { icon: "link", title: "Connected Operations", text: "Tools, data and workflows acting as one." },
  { icon: "spark", title: "Smarter Decisions", text: "AI applied where it truly improves work." },
  { icon: "trend", title: "Room To Scale", text: "Automate more as the business grows." },
];

export const metadata = {
  title: "AI Automation Agency | AI Automation Services for Businesses",
  description:
    "Improve efficiency with Geeks Bot, a trusted AI automation agency working with various ai models & ai tools, offering workflow automation, AI applications, API integration, and custom business automation solutions.",
  alternates: { canonical: "/ai-automation-services" },
};

const features = [
  "Custom AI Application Development",
  "AI Data Processing Solutions",
  "AI SaaS Development",
  "AI API Integration",
  "Workflow Automation Development",
];

const process = [
  {
    title: "Discovery",
    text: "We begin by understanding your business operations, existing workflows, and automation goals. This helps us identify opportunities where AI and automation can create the greatest impact.",
  },
  {
    title: "Strategy and Development",
    text: "Our team designs and develops custom AI automation solutions using modern artificial intelligence, generative AI, and intelligent automation technologies. We build secure systems that integrate with your CRM, internal software, and business platforms while supporting future growth.",
  },
  {
    title: "Testing and Integration",
    text: "Before launch, every solution is carefully tested for performance, security, and accuracy. We integrate your automation with existing tools to ensure smooth business operations and reliable results.",
  },
  {
    title: "Launch and Continuous Improvement",
    text: "Once your automation solution is live, we monitor its performance, optimize workflows, and provide ongoing support to help your business continue improving efficiency as your needs evolve.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="AI Automation Services"
        text="At Geeks Bot, we help businesses work smarter with intelligent AI automation solutions. As a trusted AI automation agency, we build custom systems that automate repetitive tasks, improve workflows, and increase productivity."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail dm-light">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Transform Your Business with Intelligent AI Automation</h2>
              <p>
                Modern businesses need more than simple automation. They need
                intelligent systems that learn, adapt, and improve everyday
                operations. Our AI automation services are designed to
                streamline business processes, reduce manual effort, and
                improve decision making through artificial intelligence.
              </p>
              <p>
                As an experienced AI automation company, we build solutions
                that integrate with your existing software and automate time
                consuming tasks across departments. Whether you need document
                processing, workflow automation, AI data processing, or
                custom AI applications, our team delivers solutions that
                improve efficiency and support long term business growth.
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
                Book a Call Today
              </Link>
            </div>
            <ServiceCoreVisual
              benefits={whyGeeksbot}
              flowLabel="Why choose GeeksBot for AI automation"
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our AI Automation Process</h2>
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
            <h2 className="cta__title">Ready to Automate Your Business?</h2>
            <p className="cta__text">
              Stop spending valuable time on repetitive work and start
              focusing on business growth. Partner with Geeks Bot to build
              intelligent AI automation solutions that simplify operations,
              improve customer experiences, and help your team accomplish
              more every day.
            </p>
          </div>
          <div className="animate">
            <Link href="/contact" className="btn btn--white">
              Book a Call Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
