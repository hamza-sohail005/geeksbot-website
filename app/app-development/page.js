import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "App Development",
  description:
    "High-performance mobile app development by GeeksBot. We build iOS and Android apps using Flutter, React Native, Swift, and Kotlin for seamless user experiences.",
  alternates: { canonical: "/app-development" },
};

const features = [
  "Cross-Platform Development - Build once, deploy everywhere. We use Flutter and React Native to create apps that work flawlessly on both iOS and Android.",
  "Native Performance - When performance is critical, we develop native apps using Swift for iOS and Kotlin for Android that fully leverage device capabilities.",
  "User-Centric Design - Every app we build starts with understanding your users. We create intuitive interfaces that keep users engaged and coming back.",
  "Scalable Architecture - Our apps are built on robust, scalable architectures that grow with your business and handle increasing user loads effortlessly.",
];

const process = [
  {
    title: "Discovery & Strategy",
    text: "Understanding your goals, target audience, and market landscape to define a clear roadmap for your app.",
  },
  {
    title: "UI/UX Design",
    text: "Crafting wireframes, prototypes, and polished app interfaces that deliver an exceptional mobile experience.",
  },
  {
    title: "Development & Testing",
    text: "Agile development with rigorous QA testing at every sprint to ensure reliability and performance.",
  },
  {
    title: "Launch & Support",
    text: "App store submission, deployment, and ongoing maintenance to keep your app running at its best.",
  },
];

const technologies = [
  {
    title: "Flutter",
    text: "Google's UI toolkit for building natively compiled applications for mobile from a single codebase.",
  },
  {
    title: "React Native",
    text: "A powerful framework for building cross-platform mobile apps using JavaScript and React.",
  },
  {
    title: "Swift & Kotlin",
    text: "Native languages for iOS and Android development, delivering peak performance and full platform access.",
  },
  {
    title: "Firebase & AWS Amplify",
    text: "Cloud backends for authentication, real-time databases, push notifications, and scalable infrastructure.",
  },
  {
    title: "Node.js",
    text: "A fast, event-driven runtime for building scalable backend APIs and microservices for mobile apps.",
  },
  {
    title: "MongoDB",
    text: "A flexible NoSQL database for storing and managing app data with high availability and scalability.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="App Development"
        text="We build high-performance mobile applications for iOS and Android that deliver seamless user experiences and drive business growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Why Choose Our App Development Services</h2>
              <p>
                Our app development team combines technical expertise with a
                deep understanding of mobile platforms to deliver
                applications that stand out in the marketplace. We focus on
                performance, usability, and scalability to ensure your app
                succeeds from day one.
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
              <Image src="/images/project-01.png" alt="App Development" width={600} height={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our App Development Process</h2>
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

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Technologies We Use</h2>
          </div>
          <div className="process__grid">
            {technologies.map((tech) => (
              <div className="process__card animate" key={tech.title}>
                <h4>{tech.title}</h4>
                <p>{tech.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready to Build Your Next Mobile App?</h2>
            <p className="cta__text">
              Let&apos;s work together to create a powerful mobile experience
              that drives results for your business. Get in touch with our
              team today.
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
