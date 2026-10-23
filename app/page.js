import Link from "next/link";
import { BOOKING_URL } from "@/data/site";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Portfolio from "@/components/Portfolio";
import HeroRobot from "@/components/HeroRobot";
import ServicesOrbit from "@/components/ServicesOrbit";

export const metadata = {
  alternates: { canonical: "/" },
};

const aboutCards = [
  {
    title: "AI That Actually Helps",
    text: "Every solution we build uses AI where it actually helps, not just because it sounds good. From smart chatbots to automated workflows, we pick the right tool for the job.",
  },
  {
    title: "Growth You Can Actually Measure",
    text: "We use analytics to turn guesswork into actionable insight. From content marketing and paid search to conversion optimization, everything is tracked against real ROI, so you always know what is working.",
  },
  {
    title: "Delivered On Time, Every Time",
    text: "We plan every project around realistic milestones and stick to them. You will always know where things stand, without having to chase us for an update.",
  },
  {
    title: "A Team That Stays Involved",
    text: "We do not disappear after launch. Our team stays close after delivery, keeping an eye on performance and ready to help as your business keeps growing.",
  },
];

// Verified 5.0 Upwork client reviews. Excerpts are verbatim.
const testimonials = [
  {
    text: "After a very difficult experience with a previous developer, I was honestly nervous about continuing the work on this website. Arsalan completely changed that experience for me. He is professional, thoughtful, patient, and extremely easy to work with. I would highly recommend Arsalan to anyone looking for a dependable, skilled, and trustworthy developer.",
    name: "WordPress Website Completion",
    role: "Verified Upwork Review · Jul 2026",
  },
  {
    text: "I think I started this project a bit cautiously, considering the language differences and the distance. However, it turned out not to be an issue at all. I really appreciated his goal-oriented and success-driven mindset. He brought complex ideas to the table, and we were able to implement them together successfully.",
    name: "Shopify & Amazon Website",
    role: "Verified Upwork Review · Apr 2026",
  },
  {
    text: "The collaboration was excellent. Reliable communication and complete execution of all tasks immediately after the order was placed. He is accessible and provides personalized advice whenever questions arise. I look forward to working together again. Highly recommended! Expert and reliable.",
    name: "WordPress Update & Content Migration",
    role: "Verified Upwork Review · Jun 2026",
  },
  {
    text: "Thorough, patient, and detailed. He was able to build my website and update everything exactly as I wanted. Definitely recommend!",
    name: "Rebrand & SEO Optimization",
    role: "Verified Upwork Review · Oct 2026",
  },
];

const smallFeatures = [
  {
    icon: "/images/icon-01.svg",
    variant: "small-features__icon--pink",
    title: "Support Around The Clock",
    text: "Our team is here whenever you need us, day or night, to keep things running.",
  },
  {
    icon: "/images/icon-02.svg",
    variant: "small-features__icon--green",
    title: "We Take Real Ownership",
    text: "We treat every project like it is our own, from the first meeting to launch and beyond.",
  },
  {
    icon: "/images/icon-03.svg",
    variant: "small-features__icon--orange",
    title: "We Work As One Team",
    text: "You will always know what is happening and why, because we keep you close at every step.",
  },
];

function Stars() {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero__decor">
          <div className="hero__decor-panel hero__decor-panel--code">
            <div className="hero__decor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hero__decor-line" style={{ width: "80%" }}></div>
            <div className="hero__decor-line" style={{ width: "55%" }}></div>
            <div className="hero__decor-line" style={{ width: "65%", marginBottom: 0 }}></div>
          </div>

          <div className="hero__decor-panel hero__decor-panel--dashboard">
            <div className="hero__decor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <svg width="100%" height="36" viewBox="0 0 160 36" fill="none">
              <polyline
                points="0,28 20,20 40,26 60,10 80,18 100,6 120,14 140,4 160,12"
                stroke="#2dd4bf"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="hero__decor-cube hero__decor-cube--1"></div>
          <div className="hero__decor-cube hero__decor-cube--2"></div>
          <div className="hero__decor-cube hero__decor-cube--3"></div>
        </div>

        <div className="container">
          <div className="hero__content animate">
            <div className="hero-label">
              <h4 className="label-text">Trusted IT Partner For Modern Businesses</h4>
            </div>
            <h1 className="hero__title">
              A <span>Digital Agency</span> That Builds What Your Business Actually Needs
            </h1>
            <p className="hero__description">
              GeeksBot helps companies grow with AI chatbots, automation
              tools, websites, and mobile apps built around real business
              goals. Every project is designed for measurable results well
              into 2026.
            </p>

            <div className="hero__actions">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary header-btn">
                Book A Free Consultation
              </a>
            </div>
          </div>

          <div className="hero-main-img">
            <HeroRobot />
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats dm-light">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__card animate">
              <div className="stats__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="stats__info">
                <CountUp target={250} suffix="+" />
                <div className="stats__label">Projects Completed</div>
              </div>
            </div>

            <div className="stats__card animate">
              <div className="stats__icon stats__icon--blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stats__info">
                <CountUp target={90} suffix="K+" />
                <div className="stats__label">Happy Clients</div>
              </div>
            </div>

            <div className="stats__card animate">
              <div className="stats__icon stats__icon--green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="stats__info">
                <CountUp target={7} suffix="+" />
                <div className="stats__label">Years Experience</div>
              </div>
            </div>

            <div className="stats__card animate">
              <div className="stats__icon stats__icon--orange">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <div className="stats__info">
                <CountUp target={99} suffix="%" />
                <div className="stats__label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dm-dark">
        <Portfolio />
      </div>

      {/* ===== About / Why Choose Us ===== */}
      <section className="about dm-light">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__intro animate">
              <div className="about_sub-title-background">
                <h4 className="about__subtitle">Why Businesses Choose GeeksBot</h4>
              </div>
              <h2 className="about__title">We Build For The Long Run</h2>
              <p className="about__description">
                GeeksBot brings together web development and digital
                marketing under one roof, so nothing falls through the cracks
                between building your product and getting people to use it.
                We mix real technical skill with a genuine interest in your
                business growth. Before we write a single line of code, we
                run a short audit of what you already have and build a clear
                roadmap for 2026, so nothing is guesswork.
              </p>
            </div>

            <div className="about__content animate">
              <div className="about-reasons">
                {aboutCards.map((card, i) => (
                  <div className="about-reason" key={card.title}>
                    <span className="about-reason__index">{String(i + 1).padStart(2, "0")}</span>
                    <div className="about-reason__body">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn btn--primary header-btn">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="dm-dark">
        <ServicesOrbit />
      </div>

      {/* ===== Testimonials ===== */}
      <section className="testimonials dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Testimonials</h4>
            </div>
            <h2 className="section-title__heading">
              Businesses Like Yours <span className="gradient-text">Trust GeeksBot</span>
            </h2>
            <p className="section-title__text">
              Verified 5-star reviews from clients we have worked with on Upwork.
            </p>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <div
                className="testimonial__card animate"
                key={testimonial.name}
              >
                <Stars />
                <p className="testimonial__text">&quot;{testimonial.text}&quot;</p>
                <div className="testimonial__author">
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Small Features ===== */}
      <section className="small-features dm-dark" id="features">
        <div className="container">
          <div className="small-features__grid">
            {smallFeatures.map((feature) => (
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

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready To Build Something That Actually Works?</h2>
            <p className="cta__text">
              Whether you need a chatbot, an app, or a full digital rebuild,
              our team is ready to help you turn the idea into something real
              in 2026. Let us help grow your brand&apos;s reach, starting with
              a free consultation.
            </p>
          </div>
          <div className="animate">
            <Link href="/contact" className="btn btn--white">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
