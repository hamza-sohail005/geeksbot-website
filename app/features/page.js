import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Features",
  description:
    "Explore GeeksBot's powerful features - from 24/7 support and agile development to cutting-edge technology solutions that drive your business forward.",
  alternates: { canonical: "/features" },
};

const features = [
  {
    icon: "/images/icon-01.svg",
    variant: "small-features__icon--pink",
    title: "24/7 Support",
    text: "Our dedicated team is available around the clock to resolve your queries and keep your systems running smoothly.",
  },
  {
    icon: "/images/icon-02.svg",
    variant: "small-features__icon--green",
    title: "Take Ownership",
    text: "We treat every project as our own, taking full responsibility from concept to launch and beyond.",
  },
  {
    icon: "/images/icon-03.svg",
    variant: "small-features__icon--orange",
    title: "Team Work",
    text: "We collaborate closely with you at every step, ensuring transparency and alignment with your vision.",
  },
];

export default function Page() {
  return (
    <>
      <section className="features-hero">
        <div className="container">
          <div className="features-hero__content animate">
            <h1 className="features-hero__title">Our Features</h1>
            <p className="features-hero__text">
              Discover what makes us different. We provide top-notch services
              to help your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="small-features" id="features">
        <div className="container">
          <div className="small-features__grid">
            {features.map((feature) => (
              <div className="small-features__item animate" key={feature.title}>
                <div className={`small-features__icon ${feature.variant}`}>
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <div>
                  <h4 className="small-features__title">{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__images">
              <div>
                <Image src="/images/about-01.png" alt="Team collaboration at GeeksBot" width={300} height={300} />
                <Image src="/images/about-02.png" alt="GeeksBot development process" width={300} height={300} />
              </div>
              <div>
                <Image src="/images/about-03.png" alt="Project delivery and support" width={300} height={300} />
              </div>
            </div>

            <div className="about__content animate">
              <div className="about_sub-title-background">
                <h4 className="about__subtitle">Why Choose Us</h4>
              </div>
              <h2 className="about__title">We Make Our Customers Happy by Giving Best Services.</h2>
              <p className="about__description">
                At GeeksBot, we combine technical expertise with creative
                thinking to build solutions that drive real business growth.
                Our skilled team delivers projects on time and beyond
                expectations.
              </p>

              <a href="#" className="about__video-link">
                <span className="about__play-btn">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 8L0.5 15.7942L0.5 0.205771L13.5 8Z" fill="white" />
                  </svg>
                </span>
                <span className="about__video-text">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Explore What GeeksBot Can Do for Your Business.</h2>
            <p className="cta__text">
              From powerful web apps to data-driven marketing, our features
              are designed to help you scale faster and smarter. Let&apos;s
              get started today.
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
