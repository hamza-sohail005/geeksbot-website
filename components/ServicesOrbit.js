import Image from "next/image";
import Link from "next/link";

const leftServices = [
  {
    href: "/web-development",
    title: "Web Development",
    text: "High-performance websites built for speed and growth.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    href: "/app-development",
    title: "App Development",
    text: "Scalable mobile apps for iOS & Android platforms.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
  },
  {
    href: "/ui-ux-design",
    title: "UI/UX Design",
    text: "Beautiful, intuitive and user-focused designs.",
    icon: <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />,
  },
];

const rightServices = [
  {
    href: "/digital-marketing",
    title: "Digital Marketing",
    text: "Data-driven strategies that drive real results.",
    icon: (
      <>
        <path d="M3 11v3a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18 6a8 8 0 0 1 0 12" />
      </>
    ),
  },
  {
    href: "/seo-optimization",
    title: "SEO Optimization",
    text: "Rank higher and attract more organic traffic.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
];

const leftNodes = [
  (
    <>
      <polyline points="9 8 5 12 9 16" />
      <polyline points="15 8 19 12 15 16" />
    </>
  ),
  (
    <>
      <rect x="4" y="4" width="11" height="11" rx="1.5" />
      <polyline points="14 11 20 11 20 20 11 20 11 14" />
    </>
  ),
  (
    <>
      <polyline points="9 8 5 12 9 16" />
      <polyline points="15 8 19 12 15 16" />
    </>
  ),
];

// Only 2 items on the right (5 services total) - place them at the
// top and bottom rows so they stay visually balanced against the
// 3-item left column, leaving the middle row clear next to the bot.
const rightNodes = [
  {
    row: 1,
    icon: (
      <>
        <path d="M3 11v3a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      </>
    ),
  },
  {
    row: 3,
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
      </>
    ),
  },
];

function ServiceIcon({ children, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function ServiceItem({ service, reverse }) {
  return (
    <Link href={service.href} className="services-orbit__item">
      {!reverse && (
        <span className="services-orbit__item-icon">
          <ServiceIcon>{service.icon}</ServiceIcon>
        </span>
      )}
      <span className="services-orbit__item-text">
        <h4>{service.title}</h4>
        <p>{service.text}</p>
      </span>
      {reverse && (
        <span className="services-orbit__item-icon">
          <ServiceIcon>{service.icon}</ServiceIcon>
        </span>
      )}
    </Link>
  );
}

export default function ServicesOrbit() {
  return (
    <section className="services-orbit">
      <div className="container">
        <div className="section-title animate">
          <div className="about_sub-title-background">
            <h4 className="about__subtitle">Our Services</h4>
          </div>
          <h2 className="section-title__heading">
            Solutions That Power <span className="gradient-text">Your Business</span>
          </h2>
        </div>

        <div className="services-orbit__diagram animate">
          <span className="services-orbit__ring services-orbit__ring--1"></span>
          <span className="services-orbit__ring services-orbit__ring--2"></span>

          {leftServices.map((service, i) => (
            <div className="services-orbit__item-cell services-orbit__item-cell--left" style={{ gridRow: i + 1 }} key={service.title}>
              <ServiceItem service={service} reverse />
            </div>
          ))}

          {leftNodes.map((icon, i) => (
            <div className="services-orbit__node-cell services-orbit__node-cell--left" style={{ gridRow: i + 1 }} key={`ln-${i}`}>
              <span className="services-orbit__node">
                <ServiceIcon size={16}>{icon}</ServiceIcon>
              </span>
            </div>
          ))}

          <div className="services-orbit__center-wrap">
            <span className="services-orbit__center-glow"></span>
            <div className="services-orbit__center">
              <div className="services-orbit__center-mask">
                <Image
                  src="/images/robot-face.png"
                  alt="GeeksBot AI assistant"
                  width={260}
                  height={260}
                  className="services-orbit__center-img"
                  priority
                />
              </div>
            </div>
          </div>

          {rightNodes.map((node, i) => (
            <div className="services-orbit__node-cell services-orbit__node-cell--right" style={{ gridRow: node.row }} key={`rn-${i}`}>
              <span className="services-orbit__node">
                <ServiceIcon size={16}>{node.icon}</ServiceIcon>
              </span>
            </div>
          ))}

          {rightServices.map((service, i) => (
            <div className="services-orbit__item-cell services-orbit__item-cell--right" style={{ gridRow: rightNodes[i].row }} key={service.title}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>

        <div className="services-orbit__cta animate">
          <Link href="/features" className="btn btn--primary header-btn">
            Explore All Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
