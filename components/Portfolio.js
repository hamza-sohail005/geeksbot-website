"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Chatbots", value: "chatbot" },
];

const projects = [
  {
    id: "portfolio-sb-fragrances",
    category: "web",
    wide: true,
    caseStudy: true,
    tag: "Case Study",
    title: "SB Fragrances & Oud",
    desc: "A complete fragrance commerce ecosystem built from zero — storefront, catalog, AI product photography, social creative, SEO and local search.",
    href: "/case-studies/sb-fragrances",
  },
  {
    id: "portfolio-retail-store",
    category: "web",
    wide: false,
    image: "/images/project-01.png",
    tag: "Web Apps",
    title: "Online Store For A Retail Brand",
    desc: "A fast, secure online store where customers can browse and pay in just a few clicks, built to increase conversions.",
    href: "/web-development",
  },
  {
    id: "portfolio-saas-dashboard",
    category: "web",
    wide: false,
    image: "/images/showcase-business-growth.png",
    tag: "Web Apps",
    title: "Dashboard For A SaaS Company",
    desc: "A clean, easy to use dashboard that shows live analytics, so teams can see what is happening the moment it happens.",
    href: "/web-development",
  },
  {
    id: "portfolio-logistics-site",
    category: "web",
    wide: false,
    image: "/images/project-03.png",
    tag: "Web Apps",
    title: "Website For A Logistics Company",
    desc: "A modern company website with a built in blog and fast load times, made to support their team's day to day work.",
    href: "/web-development",
  },
  {
    id: "portfolio-fintech-app",
    category: "mobile",
    wide: true,
    image: "/images/project-04.png",
    tag: "Mobile Apps",
    title: "App Redesign For A Fintech Brand",
    desc: "A full redesign of their mobile app that made it easier to use and helped more people stick around after signing up.",
    href: "/app-development",
  },
];

export default function Portfolio({ showIntro = true, showCta = true }) {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="portfolio" id="our-work">
      <div className="container">
        {showIntro && (
        <div className="section-title animate">
          <div className="about_sub-title-background">
            <h4 className="about__subtitle">Our Work</h4>
          </div>
          <h2 className="section-title__heading">
            Real Projects, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="section-title__text">
            Here is a look at some of the work we have delivered, from
            chatbots to full mobile apps. Each project was built to solve a
            real problem, not just look good in a portfolio.
          </p>
        </div>
        )}

        <div className="portfolio__filters animate">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`portfolio__filter ${activeFilter === filter.value ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => {
            const visible = activeFilter === "all" || activeFilter === project.category;
            return (
              <div
                key={project.title}
                id={project.id}
                className={`portfolio__item ${project.wide ? "portfolio__item--wide" : ""} animate ${visible ? "portfolio-show" : "portfolio-hide"}`}
              >
                <div className={`portfolio__image ${project.caseStudy ? "portfolio__image--case" : ""}`}>
                  {project.caseStudy ? (
                    <div className="portfolio__casemock" aria-hidden="true">
                      <span className="portfolio__casemock-bar">
                        <i></i><i></i><i></i>sbfragrances.com
                      </span>
                      <span className="portfolio__casemock-hero"></span>
                      <span className="portfolio__casemock-row">
                        <b></b><b></b><b></b><b></b>
                      </span>
                    </div>
                  ) : (
                    <Image src={project.image} alt={project.title} width={600} height={450} />
                  )}
                  <div className="portfolio__overlay">
                    <div className="portfolio__overlay-content">
                      <span className="portfolio__tag">{project.tag}</span>
                      <h3 className="portfolio__title">{project.title}</h3>
                      <p className="portfolio__desc">{project.desc}</p>
                      <Link href={project.href} className="portfolio__link">
                        <span>View Project</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showCta && (
        <div className="portfolio__cta animate">
          <Link href="/portfolio" className="btn btn--primary header-btn">
            See All Projects
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
