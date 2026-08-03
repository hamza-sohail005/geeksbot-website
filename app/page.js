import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Portfolio from "@/components/Portfolio";
import HeroRobot from "@/components/HeroRobot";
import ServicesOrbit from "@/components/ServicesOrbit";

const aboutCards = [
  {
    icon: "/images/about-icon-1.svg",
    title: "Excellence in Solution",
    text: "We are committed delivering innovative, reliable & scalable.",
  },
  {
    icon: "/images/about-icon-2.svg",
    title: "Difference We Deliver",
    text: (
      <>
        Our team of experts brings <br /> years of experience across.
      </>
    ),
  },
];

const testimonials = [
  {
    text: "GeeksBot transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 150%. Absolutely recommend their services!",
    image: "/images/team-01.png",
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    featured: false,
  },
  {
    text: "Working with GeeksBot was a game-changer for our startup. They built our entire SaaS platform from scratch and the quality exceeded all expectations. The team is incredibly talented and professional.",
    image: "/images/team-02.png",
    name: "Michael Chen",
    role: "Founder, CloudSync",
    featured: true,
  },
  {
    text: "Their digital marketing strategy doubled our leads within 3 months. The ROI has been phenomenal. GeeksBot truly understands what modern businesses need.",
    image: "/images/team-01.png",
    name: "Emily Rodriguez",
    role: "CMO, GrowthLab",
    featured: false,
  },
];

const smallFeatures = [
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
              <h4 className="label-text">IT Solutions for a Smarter Future</h4>
            </div>
            <h1 className="hero__title">
              IT Solutions For A <span>Digital-First</span> World
            </h1>
            <p className="hero__description">
              We help businesses transform their digital presence with
              cutting-edge web development, UI/UX design, and data-driven
              marketing strategies that deliver measurable results.
            </p>

            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary header-btn">
                Book a Free Consultation
              </Link>
              <span className="hero__contact">
                <div className="company-status">
                  <span>90</span>
                  <span>K</span>
                  <h5>Happy Client</h5>
                </div>
                <div className="company-status">
                  <span>650</span>
                  <span>+</span>
                  <h5>Total Projects</h5>
                </div>
                <div className="company-status">
                  <span>85</span>
                  <span>+</span>
                  <h5>Work Together</h5>
                </div>
              </span>
            </div>
          </div>

          <div className="hero-main-img">
            <HeroRobot />
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats">
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
                <CountUp target={650} suffix="+" />
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
                <CountUp target={15} suffix="+" />
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

      <Portfolio />

      {/* ===== About / Why Choose Us ===== */}
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__images">
              <div>
                <Image src="/images/about-01.png" alt="GeeksBot team collaborating on a project" width={300} height={300} />
                <Image src="/images/about-02.png" alt="Creative workspace at GeeksBot" width={300} height={300} />
              </div>
              <div>
                <Image src="/images/about-03.png" alt="GeeksBot delivering digital solutions" width={300} height={300} />
              </div>
            </div>

            <div className="about__content animate">
              <div className="about_sub-title-background">
                <h4 className="about__subtitle">Why Choose Us</h4>
              </div>
              <h2 className="about__title">
                Empower Your Business
                <br />
                Every Step of the Way
              </h2>
              <p className="about__description">
                At GeeksBot, we combine technical expertise with creative
                thinking to build solutions that drive real business growth.
                Our team of skilled developers, designers, and strategists
                work together to deliver projects on time and beyond
                expectations.
              </p>

              <div className="about-cards">
                {aboutCards.map((card) => (
                  <div className="cards" key={card.title}>
                    <div className="about-icon">
                      <span className="about-icon-bg">
                        <Image src={card.icon} alt={`${card.title} icon`} width={32} height={32} />
                      </span>
                    </div>
                    <div className="about-card-content">
                      <h3>
                        <Link href="/about">{card.title}</Link>
                      </h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn btn--primary header-btn" style={{ marginTop: "40px" }}>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesOrbit />

      {/* ===== Testimonials ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Testimonials</h4>
            </div>
            <h2 className="section-title__heading">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-title__text">
              Hear from businesses we&apos;ve helped grow with our digital
              solutions.
            </p>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <div
                className={`testimonial__card ${testimonial.featured ? "testimonial__card--featured" : ""} animate`}
                key={testimonial.name}
              >
                <Stars />
                <p className="testimonial__text">&quot;{testimonial.text}&quot;</p>
                <div className="testimonial__author">
                  <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} />
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
      <section className="small-features" id="features">
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
            <h2 className="cta__title">Ready to Build Something Amazing? Let&apos;s Talk.</h2>
            <p className="cta__text">
              Whether you need a brand-new website, a mobile app, or a
              complete digital transformation — our team is ready to turn
              your ideas into reality. Get a free consultation today.
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
