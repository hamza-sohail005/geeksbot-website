import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { BOOKING_URL } from "@/data/site";

const NEXT_STEPS = [
  { t: "We Reply Within 24 Hours", d: "A real person reads your message and gets back to you, Monday to Saturday, 9 AM to 6 PM (PKT)." },
  { t: "Free Discovery Call", d: "We talk through your goals, your current setup and what success looks like. No commitment needed." },
  { t: "Proposal & Timeline", d: "You get a clear scope, a custom quote and a realistic timeline before any work begins." },
  { t: "Kickoff & Build", d: "Work starts in milestones (Discovery, Design, Development, Launch) and you always know where things stand." },
];

const RECENT_WORK = [
  { href: "/case-studies/sb-fragrances", tag: "E-Commerce · SEO", title: "SB Fragrances & Oud", img: "/images/case-studies/sb-fragrances/home-hero.webp", w: 1296, h: 513 },
  { href: "/case-studies/intake24", tag: "Research Platform", title: "Intake24", img: "/images/case-studies/intake24/home-hero.webp", w: 1296, h: 504 },
  { href: "/case-studies/logyn", tag: "Product Launch", title: "Logyn", img: "/images/case-studies/logyn/hero.webp", w: 1296, h: 810 },
];

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GeeksBot for AI chatbot development, automation services, web application development, and mobile app development. Book a free consultation today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us - GeeksBot",
    description:
      "Get in touch with GeeksBot for AI chatbot development, automation services, web application development, and mobile app development.",
    url: "https://geeksbot.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Have a question or want to work together? We'd love to hear from you. Get in touch with us and let's start building something great."
      />

      <section className="contact dm-light">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__info-cards">
              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4>Our Address</h4>
                <p>C158, 1, Block 9 Gulshan-e-Iqbal,<br />Karachi, KHI 75300, Pakistan</p>
              </div>

              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4>Phone Number</h4>
                <p><a href="tel:+923232013083">+92 (323) 201-3083</a></p>
              </div>

              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h4>Email Address</h4>
                <p><a href="mailto:geeksbotdev@gmail.com">geeksbotdev@gmail.com</a></p>
              </div>

              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h4>Book a Meeting</h4>
                <p><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a free 30-minute call</a></p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-next dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">What Happens Next</h4>
            </div>
            <h2 className="section-title__heading">
              From Message To <span className="gradient-text">Kickoff</span>
            </h2>
            <p className="section-title__text">
              No sales pressure and no guesswork. Here is exactly what happens
              after you reach out.
            </p>
          </div>

          <ol className="contact-next__steps">
            {NEXT_STEPS.map((s, i) => (
              <li className="contact-next__step animate" key={s.t}>
                <span className="contact-next__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="contact-next__work animate">
            <p className="contact-next__work-label">See what we have built recently</p>
            <div className="contact-next__work-grid">
              {RECENT_WORK.map((w) => (
                <Link href={w.href} className="contact-next__card" key={w.href}>
                  <span className="contact-next__shot">
                    <Image src={w.img} alt={`${w.title} website`} width={w.w} height={w.h} sizes="(max-width: 767px) 100vw, 360px" />
                  </span>
                  <span className="contact-next__meta">
                    <em>{w.tag}</em>
                    <strong>{w.title}</strong>
                    <span>Read the case study →</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
