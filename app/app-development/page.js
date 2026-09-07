import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCoreVisual from "@/components/ServiceCoreVisual";

const whyGeeksbot = [
  { icon: "target", title: "Business Aligned", text: "Built around your goals and real outcomes." },
  { icon: "users", title: "User Obsessed", text: "Intuitive experiences people enjoy using." },
  { icon: "trend", title: "Future Ready", text: "Scalable foundations built for growth." },
  { icon: "shield", title: "Reliable Partner", text: "Invested in your success well past launch." },
];

export const metadata = {
  title: "Mobile App Development Company | Custom iOS & Android Apps",
  description:
    "Build high performance mobile apps with Geeks Bot. We are a trusted mobile app development company creating custom iOS, Android, and cross platform apps for businesses.",
  alternates: { canonical: "/app-development" },
};

const features = [
  "Custom Mobile Application Development",
  "iOS App Development",
  "Android App Development",
  "Cross Platform App Development",
  "App Maintenance and Support",
];

const process = [
  {
    title: "Discovery",
    text: "We begin by understanding your business, target audience, and app requirements. This helps us create a clear development strategy that aligns with your goals and delivers the best user experience.",
  },
  {
    title: "Design",
    text: "Our designers create intuitive app interfaces and engaging user experiences that make your mobile application simple to navigate and enjoyable to use across all devices.",
  },
  {
    title: "Development",
    text: "Our experienced app developers build secure and scalable mobile applications using modern technologies and industry best practices. We develop native and cross platform applications, integrate third party services, and optimize every feature for speed, performance, and reliability.",
  },
  {
    title: "Launch",
    text: "Before launch, every application goes through thorough testing to ensure quality, security, and performance. After deployment, we continue providing updates, maintenance, and technical support to keep your app performing at its best.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Mobile App Development"
        text="Turn your app idea into a powerful digital product with Geeks Bot. As a trusted Mobile App Development Company, we build secure, scalable, and user friendly mobile applications that help businesses connect with customers, improve operations, and drive growth."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail dm-light">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Build Custom Mobile Apps That Drive Business Growth</h2>
              <p>
                Every successful mobile application starts with understanding
                your business goals and your users. Our app development
                services focus on creating custom mobile applications that
                deliver outstanding performance, seamless user experiences,
                and reliable functionality.
              </p>
              <p>
                As a leading mobile software development company, we create
                mobile solutions for startups, growing businesses, and
                enterprise organizations. From customer focused apps to
                business management platforms, our development team builds
                applications that are secure, scalable, and ready for the
                future.
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
              flowLabel="Why choose GeeksBot for mobile app development"
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our Mobile App Development Process</h2>
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
            <h2 className="cta__title">Ready to Build Your Mobile App?</h2>
            <p className="cta__text">
              Whether you need a custom business application, ecommerce app,
              customer engagement platform, or enterprise mobile solution,
              Geeks Bot is ready to bring your vision to life. Let&apos;s
              build a mobile app that delivers real results for your
              business.
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
