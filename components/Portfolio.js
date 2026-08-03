"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "UI/UX Design", value: "design" },
];

const projects = [
  {
    category: "web",
    wide: true,
    image: "/images/project-01.png",
    tag: "Web Development",
    title: "E-Commerce Platform",
    desc: "A fully responsive e-commerce store with product management, secure payments, and seamless checkout experience.",
    href: "/web-development",
  },
  {
    category: "design",
    wide: false,
    image: "/images/project-02.png",
    tag: "UI/UX Design",
    title: "SaaS Dashboard",
    desc: "Clean, intuitive dashboard interface designed for a cloud-based analytics platform with real-time data visualization.",
    href: "/ui-ux-design",
  },
  {
    category: "web",
    wide: false,
    image: "/images/project-03.png",
    tag: "Web Development",
    title: "Corporate Website",
    desc: "Modern corporate website with custom CMS, blog integration, and optimized performance for a logistics company.",
    href: "/web-development",
  },
  {
    category: "design",
    wide: true,
    image: "/images/project-04.png",
    tag: "UI/UX Design",
    title: "Mobile App Redesign",
    desc: "Complete UI/UX overhaul for a fintech mobile app, improving user retention by 40% with a fresh, modern interface.",
    href: "/ui-ux-design",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="portfolio">
      <div className="container">
        <div className="section-title animate">
          <div className="about_sub-title-background">
            <h4 className="about__subtitle">Our Portfolio</h4>
          </div>
          <h2 className="section-title__heading">
            Our Recent <span className="gradient-text">Creative Works</span>
          </h2>
          <p className="section-title__text">
            Take a look at some of our finest work. Each project is crafted
            with precision, creativity, and a focus on delivering results.
          </p>
        </div>

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
                className={`portfolio__item ${project.wide ? "portfolio__item--wide" : ""} animate ${visible ? "portfolio-show" : "portfolio-hide"}`}
              >
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

        <div className="portfolio__cta animate">
          <Link href="/features" className="btn btn--primary header-btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
