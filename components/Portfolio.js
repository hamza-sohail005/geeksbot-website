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
    featured: true,
    tag: "Featured Case Study",
    title: "SB Fragrances & Oud",
    desc: "A complete fragrance commerce ecosystem built from zero — storefront, catalog, AI product photography, SEO and local search. Now on page 1 of Google, with 1.05K organic clicks in 3 months.",
    href: "/case-studies/sb-fragrances",
    domain: "sbfragrances.com",
    shot: "/images/case-studies/sb-fragrances/home-hero.webp",
    shotW: 1296,
    shotH: 513,
  },
  {
    id: "portfolio-intake24",
    category: "web",
    featured: true,
    theme: "intake",
    tag: "Case Study · Research Platform",
    title: "Intake24",
    desc: "The public website for an open-source dietary research platform — 9 pages, a 5-step product walk-through, Lighthouse 95 desktop performance and 67% lighter images.",
    href: "/case-studies/intake24",
    domain: "intake24.org",
    shot: "/images/case-studies/intake24/home-hero.webp",
    shotW: 1296,
    shotH: 504,
  },
  {
    id: "portfolio-logyn",
    category: "web",
    featured: true,
    theme: "logyn",
    reverse: true,
    tag: "Case Study · Product Launch",
    title: "Logyn",
    desc: "A launch landing page for a hardware password manager — one scroll from \"what is this?\" to buy now and download, built phone-first in React + Tailwind.",
    href: "/case-studies/logyn",
    domain: "logyn-geeksbot.netlify.app",
    shot: "/images/case-studies/logyn/hero.webp",
    shotW: 1296,
    shotH: 810,
  },
];

export default function Portfolio({
  showIntro = true,
  showCta = true,
  showFeatured = true,
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const shown = showFeatured ? projects : projects.filter((p) => !p.featured);
  // Only offer filters that have projects behind them; hide the bar when
  // there is nothing to filter between.
  const usedFilters = filters.filter(
    (f) => f.value === "all" || shown.some((p) => p.category === f.value)
  );

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
            Here is a look at some of the work we have delivered, from a
            full e-commerce store to a research platform and a product
            launch. Each project was built to solve a real problem, not just
            look good in a portfolio.
          </p>
        </div>
        )}

        {usedFilters.length > 2 && (
        <div className="portfolio__filters animate">
          {usedFilters.map((filter) => (
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
        )}

        <div className="portfolio__grid">
          {shown.map((project) => {
            const visible = activeFilter === "all" || activeFilter === project.category;
            const classes = [
              "portfolio__item",
              project.featured ? "portfolio__item--featured" : "",
              project.theme ? `portfolio__item--${project.theme}` : "",
              project.reverse ? "portfolio__item--reverse" : "",
              project.wide ? "portfolio__item--wide" : "",
              "animate",
              visible ? "portfolio-show" : "portfolio-hide",
            ]
              .filter(Boolean)
              .join(" ");

            if (project.featured) {
              return (
                <Link href={project.href} key={project.title} id={project.id} className={classes}>
                  <div className="portfolio__case">
                    <div className="portfolio__case-text">
                      <span className="portfolio__tag">{project.tag}</span>
                      <h3 className="portfolio__title">{project.title}</h3>
                      <p className="portfolio__desc">{project.desc}</p>
                      <span className="portfolio__link">
                        <span>View case study</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                    <div className="portfolio__case-mock" aria-hidden="true">
                      <span className="portfolio__case-bar">
                        <i></i><i></i><i></i>{project.domain}
                      </span>
                      {project.shot ? (
                        <span className="portfolio__case-shot">
                          <Image src={project.shot} alt="" width={project.shotW} height={project.shotH} sizes="(max-width: 767px) 92vw, 520px" />
                        </span>
                      ) : (
                        <>
                          <span className="portfolio__case-hero" />
                          <span className="portfolio__case-row">
                            <b /><b /><b /><b />
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <div key={project.title} id={project.id} className={classes}>
                <div className="portfolio__image">
                  <Image src={project.image} alt={project.title} width={600} height={450} />
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
