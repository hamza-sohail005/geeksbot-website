import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Web Development",
  description:
    "Professional web development services by GeeksBot. We build modern, responsive websites and web applications using React, Next.js, Vue.js, Node.js, and more.",
  alternates: { canonical: "/web-development" },
};

const features = [
  "Custom Website Development",
  "E-Commerce Solutions",
  "CMS Development",
  "API Integration",
  "Performance Optimization",
];

const process = [
  {
    title: "Discovery",
    text: "We start by understanding your business goals, target audience, and project requirements to create a solid foundation for development.",
  },
  {
    title: "Design",
    text: "Our designers craft intuitive wireframes and visual mockups that align with your brand identity and provide an exceptional user experience.",
  },
  {
    title: "Development",
    text: "Our expert developers bring the designs to life using the latest technologies, ensuring clean code, responsiveness, and optimal performance.",
  },
  {
    title: "Launch",
    text: "After thorough testing and quality assurance, we deploy your project and provide ongoing support to ensure everything runs smoothly.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Web Development"
        text="We build modern, high-performance websites and web applications tailored to your business needs. From custom solutions to scalable platforms, our development team delivers results that drive growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Build Powerful Digital Experiences</h2>
              <p>
                Our web development services combine cutting-edge technology
                with creative design to deliver websites that not only look
                stunning but also perform exceptionally. We focus on creating
                user-centric solutions that help businesses establish a
                strong online presence and achieve their digital goals.
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
              <Image src="/images/project-01.png" alt="Web Development" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our Development Process</h2>
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
            <h2 className="cta__title">Ready to Build Your Next Web Project?</h2>
            <p className="cta__text">
              Let&apos;s work together to create a powerful web presence that
              drives results for your business. Get in touch with our team
              today.
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
