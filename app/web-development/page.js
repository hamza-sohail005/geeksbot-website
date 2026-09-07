import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCoreVisual from "@/components/ServiceCoreVisual";

const whyGeeksbot = [
  { icon: "target", title: "Business Focused", text: "Every feature serves a clear goal." },
  { icon: "gauge", title: "Fast Experiences", text: "Performance that keeps users engaged." },
  { icon: "layers", title: "Flexible Foundation", text: "Architecture that adapts as needs change." },
  { icon: "shield", title: "Digital Credibility", text: "A polished experience customers trust." },
];

export const metadata = {
  title: "Web App Development Services | Custom Web Applications USA",
  description:
    "Build secure and scalable web applications with Geeks Bot. We provide custom web app development services for startups, ecommerce, and enterprise businesses across the USA.",
  alternates: { canonical: "/web-development" },
};

const features = [
  "Custom Web App Development Services",
  "Progressive Web App Development Services",
  "Enterprise Web App Development Services",
  "Shopify Web App Development Services",
  "Web Application Maintenance and Support",
];

const process = [
  {
    title: "Discovery",
    text: "We begin by understanding your business goals, users, and project requirements. This allows us to create the right strategy for your web application and ensure every feature supports your business objectives.",
  },
  {
    title: "Design",
    text: "Our designers create intuitive user interfaces and seamless user experiences that make your web application easy to use across desktop, tablet, and mobile devices.",
  },
  {
    title: "Development",
    text: "Our experienced web app developers build secure and scalable web applications using modern technologies and industry best practices. We develop custom web applications, integrate third party services, and optimize every solution for speed and reliability.",
  },
  {
    title: "Launch",
    text: "Before deployment, every web application is thoroughly tested for performance, security, and usability. After launch, we provide ongoing support, updates, and improvements to keep your application running smoothly.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Web App Development Services"
        text="Transform your ideas into powerful digital solutions with our Web App Development Services. At Geeks Bot, we design and develop secure, scalable, and high performance web applications that help businesses improve operations, engage customers, and support long term growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail dm-light">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Build Custom Web Applications That Grow Your Business</h2>
              <p>
                Every business has unique challenges that require more than
                an ordinary website. Our web app development services focus
                on building custom web applications that improve
                productivity, simplify business processes, and create better
                user experiences.
              </p>
              <p>
                As a trusted web application development firm in USA, we
                create modern web applications using the latest technologies
                and development practices. From startups to enterprise
                organizations, our team develops responsive and scalable web
                solutions that are built for performance, security, and
                future growth.
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
              flowLabel="Why choose GeeksBot for web application development"
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our Web App Development Process</h2>
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
            <h2 className="cta__title">Ready to Build Your Next Web Application?</h2>
            <p className="cta__text">
              Whether you need a custom business platform, enterprise web
              application, progressive web app, or Shopify web solution,
              Geeks Bot is here to help. Let&apos;s build a web application
              that moves your business forward.
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
