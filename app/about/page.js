import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | Trusted Digital Agency in USA",
  description:
    "Learn about Geeks Bot, a trusted digital agency in USA specializing in AI chatbot development, web application development, automation services, and mobile app development.",
  alternates: { canonical: "/about" },
};

const aboutCards = [
  {
    title: "Why Businesses Choose Geeks Bot",
    text: "We listen to your goals, understand your industry, and recommend solutions that create real value for your business instead of simply delivering projects.",
  },
  {
    title: "Experience You Can Trust",
    text: "Our team has delivered websites, business applications, AI chatbots, automation systems, and mobile apps that meet modern business requirements.",
  },
  {
    title: "Honest, Transparent Communication",
    text: "You will always know what stage your project is at and why. We would rather have an honest conversation than leave you guessing.",
  },
  {
    title: "Built To Grow With Your Business",
    text: "Every solution is built on a foundation that can scale, so you are not stuck rebuilding from scratch the moment your business takes off.",
  },
];

const insights = [
  {
    tag: "Automation",
    title: "Why Most Automation Projects Stall Before Launch",
    text: "The projects that succeed start with a short audit of your actual workflow, not a list of tools. We map where time is really being lost before we write a single integration.",
  },
  {
    tag: "AI Chatbots",
    title: "What Makes A Chatbot Worth Talking To",
    text: "A chatbot earns trust by knowing when to answer and when to hand off to a human. We design conversation flows around your real customer questions, not generic scripts.",
  },
  {
    tag: "Web & Mobile",
    title: "Building For Where Your Business Will Be In Two Years",
    text: "We choose technology based on what your team can maintain and what your growth actually requires, so your platform holds up long after launch day.",
  },
];

const team = [
  {
    initials: "AP",
    variant: "team__avatar--teal",
    name: "Arsalan Pervez",
    role: "Project Manager",
    photo: "/images/team/arsalan-pervez.jpg",
    bio: "Top Rated full-stack engineer with a 100% Job Success Score on Upwork. Builds high-performance web apps, custom WordPress and Shopify stores, and secure payment integrations that clients trust and keep coming back for.",
    upwork: "https://www.upwork.com/freelancers/~01d1c37562a9c58d28",
    linkedin: "https://www.linkedin.com/in/arsalan-pervez-364375137/",
    twitter: "https://x.com/arsalan_pervez5",
  },
  {
    initials: "AS",
    variant: "team__avatar--pink",
    name: "Ashar Shahbaz",
    role: "Team Lead",
    bio: "Leads our development team from strategy to launch. Turns complex business requirements into scalable, secure digital products, keeping every build on schedule and every client informed at each step.",
    linkedin: "https://www.linkedin.com/in/ashar-shahbaz-779b93252/",
  },
  {
    initials: "HA",
    variant: "team__avatar--violet",
    name: "Hamza Ather",
    role: "SEO Specialist",
    bio: "Builds search strategies that turn visibility into revenue. From technical audits and on-page optimization to local SEO and authority link building, he helps brands earn page-1 Google rankings and steady organic growth.",
  },
];

function TeamSocial({ member }) {
  return (
    <div className="team__social">
      {member.upwork && (
        <a href={member.upwork} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Upwork`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
          </svg>
        </a>
      )}
      <a
        href={member.twitter || "https://x.com/Geeks_Bot"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={member.twitter ? `${member.name} on X (Twitter)` : "GeeksBot on X (Twitter)"}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={member.linkedin || "https://www.linkedin.com/company/geeks-bot/"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={member.linkedin ? `${member.name} on LinkedIn` : "GeeksBot on LinkedIn"}
      >
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
        text="At Geeks Bot, we help businesses grow with innovative digital solutions that solve real business challenges. Led by Arsalan Pervez and Ashar Shahbaz, we specialize in AI chatbot development, web application development, automation services, and mobile app development."
      />

      {/* ===== Insights ===== */}
      <section className="case-studies dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">How We Think</h4>
            </div>
            <h2 className="section-title__heading">
              Insights From <span className="gradient-text">Building This Every Day</span>
            </h2>
            <p className="section-title__text">
              A few things we have learned from delivering chatbots,
              automation, and full digital products for real businesses.
            </p>
          </div>

          <div className="case-studies__grid">
            {insights.map((item, i) => (
              <div className="case-study animate" key={item.title}>
                <span className="case-study__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="case-study__tag">{item.tag}</span>
                <h3 className="case-study__title">{item.title}</h3>
                <p className="case-study__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className="about dm-dark">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__intro animate">
              <div className="about_sub-title-background">
                <h4 className="about__subtitle">Empowering Businesses with Smart Digital Solutions</h4>
              </div>
              <h2 className="about__title">We Never Rely On Generic Solutions</h2>
              <p className="about__description">
                Every business has different goals, which is why we take time
                to understand your business, identify challenges, and develop
                technology that delivers practical results. Our leads,
                Arsalan Pervez and Ashar Shahbaz, have successfully
                completed projects for businesses across different
                industries as Top Rated professionals on Upwork.
              </p>
              <p className="about__description">
                Your success is our priority. From planning and development
                to testing and ongoing support, we work closely with our
                clients to ensure every solution delivers measurable
                business value.
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

              <Link href="/contact" className="btn btn--primary header-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="team dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Meet Our Team</h4>
            </div>
            <h2 className="section-title__heading">
              Behind Every Project Is A <span className="gradient-text">Passionate Team</span>
            </h2>
            <p className="section-title__text">
              Led by Arsalan Pervez and Ashar Shahbaz, our team combines
              creativity, technical expertise, and industry knowledge to
              deliver solutions that help businesses grow with confidence.
            </p>
          </div>

          <div className="team__grid">
            {team.map((member) => (
              <div className="team__card animate" key={member.name}>
                <div className="team__avatar-wrap">
                  <div className={`team__avatar ${member.variant}`}>
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={140}
                        height={140}
                        className="team__avatar-img"
                      />
                    ) : (
                      <span>{member.initials}</span>
                    )}
                  </div>
                </div>
                <div className="team__info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  {member.bio && <p className="team__bio">{member.bio}</p>}
                </div>
                {(member.upwork || member.linkedin || member.twitter) && <TeamSocial member={member} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready to Grow Your Business?</h2>
            <p className="cta__text">
              Whether you are looking for AI chatbot development, web
              application development, automation services, or mobile app
              development, Geeks Bot is here to help. Let&apos;s create
              technology that helps your business grow.
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
