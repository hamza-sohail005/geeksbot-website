"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const leftServices = [
  {
    href: "/ai-chatbot-development",
    title: "AI Chatbot Development",
    text: "AI chatbots that answer, qualify, and support customers 24/7.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    href: "/ai-automation-services",
    title: "Automation Service",
    text: "Workflow automation that cuts busywork and connects your tools.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
];

const rightServices = [
  {
    href: "/web-development",
    title: "Web Application Development",
    text: "Fast, secure web apps built to grow with your business.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    href: "/app-development",
    title: "Mobile App Development",
    text: "iOS and Android apps built to launch and scale with confidence.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
  },
];

// Curved connector paths in a 1200x640 reference box, one per service in
// display order (left0, left1, right0, right1). pathLength="100"
// normalizes stroke-dasharray math for the scroll-in "draw" animation.
const connectors = [
  { d: "M160,160 C 430,160 430,270 590,300" },
  { d: "M160,480 C 430,480 430,370 590,340" },
  { d: "M1040,160 C 770,160 770,270 640,300" },
  { d: "M1040,480 C 770,480 770,370 640,340" },
];

function ServiceIcon({ children, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function ServiceCard({ service, id, hovered, onHover, onLeave, side }) {
  const state =
    hovered === id ? "is-active" : hovered !== null ? "is-dim" : "";

  return (
    <Link
      href={service.href}
      className={`services-orbit__card services-orbit__card--${side} ${state}`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
      onFocus={() => onHover(id)}
      onBlur={onLeave}
    >
      <span className="services-orbit__card-icon">
        <ServiceIcon>{service.icon}</ServiceIcon>
      </span>
      <span className="services-orbit__card-text">
        <h4>{service.title}</h4>
        <p>{service.text}</p>
      </span>
      <span className="services-orbit__card-arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}

export default function ServicesOrbit() {
  const [hovered, setHovered] = useState(null);
  const isActive = hovered !== null;

  return (
    <section className="services-orbit">
      <div className="container">
        <div className="section-title animate">
          <div className="about_sub-title-background services-orbit__badge">
            <span className="services-orbit__badge-dot"></span>
            <h4 className="about__subtitle">Our Services</h4>
            <span className="services-orbit__badge-dot"></span>
          </div>
          <h2 className="section-title__heading">
            What We Can <span className="gradient-text">Build For You</span>
          </h2>
          <p className="services-orbit__subtitle">
            We keep up with the latest digital tools and trends so you do not have to. It is part of why more businesses are starting to see GeeksBot as one of the top agencies worth calling first.
          </p>
        </div>

        <div className="services-orbit__stage animate">
          <svg className="services-orbit__connectors" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
            {connectors.map((c, i) => (
              <g key={i} className={`services-orbit__connector ${hovered === i ? "is-active" : ""}`}>
                <path
                  id={`services-orbit-path-${i}`}
                  d={c.d}
                  pathLength="100"
                  className="services-orbit__connector-path"
                />
                <circle r="4" className="services-orbit__connector-dot">
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 0.45}s`}>
                    <mpath href={`#services-orbit-path-${i}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}
          </svg>

          <div className="services-orbit__rings" aria-hidden="true">
            <span className="services-orbit__ring services-orbit__ring--1"></span>
            <span className="services-orbit__ring services-orbit__ring--2"></span>
            <span className="services-orbit__ring services-orbit__ring--3"></span>
          </div>

          <div className="services-orbit__center">
            <span className={`services-orbit__center-glow ${isActive ? "is-boost" : ""}`}></span>
            <div className="services-orbit__center-mask">
              <Image
                src="/images/robot-face.png"
                alt="GeeksBot AI assistant"
                width={340}
                height={340}
                className={`services-orbit__center-img ${isActive ? "is-active" : ""}`}
                priority
              />
            </div>
          </div>

          <div className="services-orbit__col services-orbit__col--left">
            {leftServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                id={i}
                side="left"
                hovered={hovered}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>

          <div className="services-orbit__col services-orbit__col--right">
            {rightServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                id={i + 2}
                side="right"
                hovered={hovered}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>

        <div className="services-orbit__cta animate">
          <Link href={leftServices[0].href} className="btn btn--primary header-btn services-orbit__cta-btn">
            See All Our Services
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
