import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us",
  description:
    "Learn about GeeksBot - a passionate team of developers, designers, and strategists dedicated to delivering exceptional digital solutions that drive real business results.",
  alternates: { canonical: "/about" },
};

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

const team = [
  { image: "/images/team-01.png", name: "Sarah Johnson", role: "CEO & Founder" },
  { image: "/images/team-02.png", name: "Michael Chen", role: "Lead Developer" },
  { image: "/images/team-01.png", name: "Emily Rodriguez", role: "UI/UX Designer" },
  { image: "/images/team-02.png", name: "David Williams", role: "Marketing Director" },
];

function TeamSocial() {
  return (
    <div className="team__social">
      <a href="#" aria-label="Facebook">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66634 10.25H8.74968L9.58301 6.91669H6.66634V5.25002C6.66634 4.39169 6.66634 3.58335 8.33301 3.58335H9.58301V0.783354C9.31134 0.74752 8.28551 0.666687 7.20218 0.666687C4.93968 0.666687 3.33301 2.04752 3.33301 4.58335V6.91669H0.833008V10.25H3.33301V17.3334H6.66634V10.25Z" />
        </svg>
      </a>
      <a href="#" aria-label="Twitter">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4683 1.71333C16.8321 1.99475 16.1574 2.17956 15.4666 2.26167C16.1947 1.82619 16.7397 1.14085 16.9999 0.333333C16.3166 0.74 15.5674 1.025 14.7866 1.17917C14.2621 0.617982 13.5669 0.245803 12.809 0.120487C12.0512 -0.00482822 11.2732 0.123742 10.596 0.486211C9.91875 0.848679 9.38024 1.42474 9.06418 2.12483C8.74812 2.82492 8.67221 3.60982 8.84825 4.3575C7.46251 4.28805 6.10686 3.92794 4.86933 3.30055C3.63179 2.67317 2.54003 1.79254 1.66492 0.715833C1.35516 1.24788 1.19238 1.85269 1.19326 2.46833C1.19326 3.67667 1.80826 4.74417 2.74326 5.36917C2.18993 5.35175 1.64878 5.20232 1.16492 4.93333V4.97667C1.16509 5.78142 1.44356 6.56135 1.95313 7.18422C2.46269 7.80709 3.17199 8.23456 3.96075 8.39417C3.4471 8.53337 2.90851 8.55388 2.38576 8.45417C2.60814 9.14686 3.04159 9.75267 3.62541 10.1868C4.20924 10.6209 4.9142 10.8615 5.64159 10.875C4.91866 11.4428 4.0909 11.8625 3.20566 12.1101C2.32041 12.3578 1.39503 12.4285 0.482422 12.3183C2.0755 13.3429 3.93 13.8868 5.82409 13.885C12.2349 13.885 15.7408 8.57417 15.7408 3.96833C15.7408 3.81833 15.7366 3.66667 15.7299 3.51833C16.4123 3.02514 17.0013 2.41418 17.4691 1.71417L17.4683 1.71333Z" />
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665Z" />
        </svg>
      </a>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="We are a passionate team of developers, designers, and strategists dedicated to delivering exceptional digital solutions that drive real business results."
      />

      {/* ===== Mission / Vision / Values ===== */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__card animate">
              <div className="about-mission__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative digital solutions that
                drive growth, enhance efficiency, and create lasting impact in
                an ever-evolving digital landscape.
              </p>
            </div>

            <div className="about-mission__card animate">
              <div className="about-mission__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading digital agency recognized for transforming
                ideas into powerful digital experiences that redefine
                industries and inspire innovation worldwide.
              </p>
            </div>

            <div className="about-mission__card animate">
              <div className="about-mission__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>
                We believe in integrity, collaboration, and excellence. Every
                project we undertake is driven by our commitment to quality,
                transparency, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__images">
              <div>
                <Image src="/images/about-01.png" alt="GeeksBot team working together" width={300} height={300} />
                <Image src="/images/about-02.png" alt="Creative design process at GeeksBot" width={300} height={300} />
              </div>
              <div>
                <Image src="/images/about-03.png" alt="GeeksBot project delivery" width={300} height={300} />
              </div>
            </div>

            <div className="about__content animate">
              <div className="about_sub-title-background">
                <h4 className="about__subtitle">Who We Are</h4>
              </div>
              <h2 className="about__title">Empower Your Business Every Step of the Way</h2>
              <p className="about__description">
                With over 15 years of experience in the digital industry, we
                have helped hundreds of businesses transform their online
                presence. Our team combines creativity with technical
                expertise to deliver solutions that not only look great but
                also perform exceptionally.
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

              <Link href="/contact" className="btn btn--primary header-btn" style={{ marginTop: "40px" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="team">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Our Team</h4>
            </div>
            <h2 className="section-title__heading">
              Meet The <span className="gradient-text">Team Members</span>
            </h2>
            <p className="section-title__text">
              Our talented team of professionals is dedicated to delivering
              exceptional results for every project we undertake.
            </p>
          </div>

          <div className="team__grid">
            {team.map((member) => (
              <div className="team__card animate" key={member.name}>
                <div className="team__image">
                  <Image src={member.image} alt={member.name} width={280} height={280} />
                </div>
                <div className="team__info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
                <TeamSocial />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready to Take Your Business to the Next Level?</h2>
            <p className="cta__text">
              Partner with GeeksBot and get access to a dedicated team of
              experts who are passionate about delivering digital solutions
              that drive growth and success.
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
