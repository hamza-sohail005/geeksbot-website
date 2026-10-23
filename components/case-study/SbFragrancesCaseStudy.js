"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCounter from "./CaseStudyCounter";
import SeoResults from "../SeoResults";
import { MoreWork, ScrollShot, ShotTabs, PhoneShot } from "./CaseStudyKit";
import "./case-study.css";

const LIVE_URL = "https://sbfragrances.com/";

/* ---------------------------------------------------------------- data --- */

const SERVICE_TAGS = [
  "Website",
  "E-Commerce",
  "Product Experience",
  "AI Creative / Social Media",
  "Video",
  "SEO",
  "Local Search",
];

const STATS = [
  { value: 6, prefix: "~", label: "Months", sub: "Project duration" },
  { value: 40, suffix: "+", label: "Products", sub: "Catalogued & optimized" },
  { value: 13, suffix: "+", label: "Competitors", sub: "Researched" },
  { value: 100, suffix: "+", label: "Social creatives", sub: "Produced" },
  { value: 40, suffix: "+", label: "AI visual assets", sub: "Product photography" },
  { value: 25, suffix: "+", label: "Pages", sub: "Category / blog / template" },
  { value: 1000, suffix: "+", label: "Backlinks", sub: "Authority building" },
  { value: 2, label: "Markets", sub: "Nationwide USA + Garland/Dallas" },
];

const CHALLENGES = [
  { n: "01", t: "Professional Online Identity", d: "A credible, premium brand presentation for a category that sells on visual trust." },
  { n: "02", t: "E-Commerce Infrastructure & Checkout", d: "A real path from product page to a fulfilled order." },
  { n: "03", t: "Product Discovery & Category Architecture", d: "A structure that helps shoppers find the right scent fast." },
  { n: "04", t: "Trust Signals & Conversion Paths", d: "Reviews, FAQs, shipping clarity and clear calls to action." },
  { n: "05", t: "Nationwide + Local Search Visibility", d: "Findable by online shoppers across the U.S. and by Garland/Dallas customers." },
  { n: "06", t: "Content, Social & Creative Ecosystem", d: "A system for producing on-brand content at scale." },
];

const LAYERS = [
  { n: "01", t: "Foundation", d: "WordPress + WooCommerce + website architecture" },
  { n: "02", t: "Commerce", d: "Products + categories + pricing + offers + checkout" },
  { n: "03", t: "Experience", d: "UX + navigation + product pages + mobile optimization" },
  { n: "04", t: "Visual Identity", d: "AI product photography + social creative" },
  { n: "05", t: "Content", d: "Product content + category content + blogs + social content" },
  { n: "06", t: "Discovery", d: "Keyword research + technical SEO + semantic SEO" },
  { n: "07", t: "Local Presence", d: "Google Business Profile + local SEO" },
  { n: "08", t: "Authority", d: "Guest blogging + 1000+ backlinks + link building" },
];

const MOCKUP_AREAS = [
  { id: "home", label: "Homepage", note: "Hero, best-seller carousel, category grid and trust modules — built to move a first-time visitor toward checkout." },
  { id: "shop", label: "Shop & Category Pages", note: "Filterable catalog with brand and price filters; sale and offer badges surfaced on the cards." },
  { id: "product", label: "Product Pages", note: "Imagery, descriptions, FAQs, reviews, shipping details and related products on one decision surface." },
  { id: "trust", label: "Trust & Review Sections", note: "Store-visit prompts, reviews and brand-authenticity content woven through the pages." },
  { id: "faq", label: "FAQs & Shipping Info", note: "Clear answers up front, so questions don't become abandoned carts." },
];

const ARCH_CATEGORIES = [
  "Men's", "Women's", "Arabian Oud", "Designer", "Best Sellers", "Gift Sets",
];
const ARCH_UTILITY = ["Blog", "About", "Track Order", "Contact"];
const ARCH_AXES = ["Gender", "Fragrance type", "Brand", "Shopping intent", "Product demand"];

const ECOM_ELEMENTS = [
  { t: "Catalog", d: "Product uploads, categories, variations, inventory." },
  { t: "Pricing & Offers", d: "Sale pricing, coupons, bundle deals." },
  { t: "Checkout", d: "Cart, checkout, payment gateway, shipping." },
  { t: "Post-Purchase", d: "Order management, customer accounts, tracking." },
  { t: "Merchandising", d: "Related products, cross-sells, best-seller tagging." },
  { t: "Trust", d: "Product reviews, FAQs, return policy." },
];

const RESEARCH_ROWS = [
  { area: "Pricing", pattern: "Wide variance in discount depth across competitors", response: "Transparent, sale-forward pricing with % badges at the product-card level" },
  { area: "Catalog", pattern: "Category listings often shallow or generic", response: "Gender × type × brand × intent structure across 25+ dedicated pages" },
  { area: "Product imagery", pattern: "Inconsistent backgrounds & quality across listings", response: "AI-generated, studio-consistent product photography" },
  { area: "Local presence", pattern: "Limited or unclaimed local business profiles", response: "Google Business Profile optimization for Garland/Dallas" },
  { area: "Content", pattern: "Thin or absent blog / content strategy", response: "Blog strategy + guest blogging program" },
];

const LISTING_FIELDS = [
  "Titles", "Descriptions", "Categorization", "Pricing", "Variations",
  "Inventory", "Tags", "FAQs", "Shipping info", "Metadata", "Alt text", "Related products",
];

const PHOTO_STEPS = [
  "Original product reference",
  "AI visual generation",
  "Bottle & packaging accuracy",
  "Background cleanup",
  "Detail correction",
  "Quality enhancement",
  "Consistent composition",
  "WebP + alt text + upload",
];

const PHOTO_DIR = "/images/case-studies/sb-fragrances/photo";

const PHOTO_WORK = [
  { name: "Invictus 3-Piece Set", brand: "Paco Rabanne", a: "paco-rabanne-1.webp", b: "paco-rabanne-2.webp", scene: "Gift box, bottle, deodorant and travel spray lined up so the whole set reads at a glance." },
  { name: "Polo Red", brand: "Ralph Lauren", a: "polo-red-1.webp", b: "polo-red-2.webp", scene: "Box and bottle together, then the bottle alone, with the red label kept sharp and accurate." },
  { name: "Sauvage Parfum Set", brand: "Dior", a: "dior-sauvage-1.webp", b: "dior-sauvage-2.webp", scene: "The detailed limited-edition box stays crisp next to the dark Sauvage bottle." },
  { name: "Dylan Turquoise Set", brand: "Versace", a: "versace-dylan-1.webp", b: "versace-dylan-2.webp", scene: "Every piece of the 3-piece set shown on the same soft reflective surface." },
  { name: "Polo Green", brand: "Ralph Lauren", a: "polo-green-1.webp", b: "polo-green-2.webp", scene: "Deep green glass and gold cap lit evenly so the colour matches the real bottle." },
  { name: "Tommy Bahama Maritime", brand: "4-Piece Set", a: "tommy-bahama-1.webp", b: "tommy-bahama-2.webp", scene: "All four scents styled together, then lined up on their own, so shoppers see exactly what is inside." },
];

const CATALOG_IMGS = ["p1.webp", "p3.webp", "p5.webp", "p7.webp", "p9.webp", "p11.webp", "p13.webp", "p14.webp", "p15.webp", "p16.webp", "p17.webp", "p18.webp"];

const CREATIVES = [
  { src: "c1.webp", alt: "Oud and amber perfume still life" },
  { src: "c2.webp", alt: "Givenchy Gentleman on oud wood" },
  { src: "c3.webp", alt: "Floral perfume collection with flowers" },
  { src: "c4.webp", alt: "Paco Rabanne gift set with gold ribbon" },
  { src: "c5.webp", alt: "Amber Oud Gold Edition close-up" },
  { src: "c6.webp", alt: "Golden rose hero background" },
];

const SOCIAL_PLATFORMS = ["Instagram", "Facebook", "Google Business Profile", "Pinterest"];
const SOCIAL_FLOW = ["Idea", "AI concept", "Editing", "Type + CTA", "Export"];
const SOCIAL_TOOLS = ["Flow Lab", "Gemini", "GPT", "Claude", "Canva"];

const SEO_LAYERS = [
  "Technical SEO", "On-page SEO", "Product SEO", "Category SEO",
  "Semantic SEO", "Local SEO", "Content", "Authority",
];
const SEO_FUNNEL = [
  { t: "Broad search demand", d: "Category-level and fragrance-type search volume" },
  { t: "Commercial intent", d: '"Buy", "shop", brand + product terms' },
  { t: "Product / category intent", d: "Specific fragrance and collection searches" },
  { t: "Local intent", d: '"Near me", Garland / Dallas perfume searches' },
  { t: "Content opportunities", d: "Blog topics, guest posts, supporting pages" },
];
const SEMANTIC_NODES = [
  "Brands", "Fragrances", "Gender", "Oud", "Designer", "Gift Sets",
  "Best Sellers", "Shopping Intent", "Local Search",
];

const AUTHORITY_POINTS = [
  "Quality & relevance over volume",
  "Spam-score control — target under 5",
  "Follow / no-follow diversity",
  "Guest blogging placements",
  "Targeted, relevant landing pages",
  "Best-possible domain authority opportunities",
];

const ECOSYSTEM_NODES = [
  "Website", "Products", "AI Photography", "Social Media", "AI Video",
  "Content", "SEO", "Google Business Profile", "Backlinks",
];

const BEFORE = [
  "No website",
  "No e-commerce infrastructure",
  "Inconsistent product photography",
  "Basic product promotion",
  "Limited digital structure",
  "No connected digital ecosystem",
];
const AFTER = [
  "Complete WordPress / WooCommerce website",
  "Structured e-commerce catalog",
  "40+ optimized product listings",
  "40+ premium AI product visuals",
  "100+ social creative assets",
  "AI video / UGC creative capability",
  "Technical, semantic & local SEO",
  "Google Business Profile optimization",
  "25+ category / blog / template pages",
  "1000+ backlinks",
  "Nationwide + local search strategy",
];

const MILESTONES = [
  "Built the website from zero",
  "40+ product listings developed & optimized",
  "40+ professional AI product visuals",
  "100+ social creative assets",
  "13+ competitors researched",
  "25+ category / blog / template pages",
  "1000+ backlinks built",
  "Nationwide + local SEO strategy",
  "Complete WooCommerce infrastructure",
  "Website speed optimization implemented",
  "Strategic urgency & offer presentation",
];

const DIFFERENTIATORS = [
  { n: "01", t: "Built From Zero", d: "The project started without a website of any kind." },
  { n: "02", t: "Research-Led Merchandising", d: "Product decisions informed by competitor research and physical-store demand." },
  { n: "03", t: "AI + Human Direction", d: "AI for scalable production; human editing and art direction for quality." },
  { n: "04", t: "Product Accuracy", d: "Original bottles and packaging preserved accurately in every AI visual." },
  { n: "05", t: "SEO Built In", d: "SEO treated as a structural layer, not a final add-on." },
  { n: "06", t: "Dual Market Strategy", d: "Nationwide e-commerce paired with Garland/Dallas local presence." },
  { n: "07", t: "Conversion-Aware Design", d: "Urgency, offers, trust and CTAs intentionally integrated into the experience." },
];

const MEASURE_VERIFIED = [
  "Product count", "Competitor research", "Creative production", "Pages built",
  "Backlinks built", "SEO implementation", "E-commerce infrastructure", "Website speed optimization",
  "Organic search: 1.05K clicks & 33.6K impressions in 3 months (Search Console)",
  "Page-1 Google rankings for target oud keywords (screenshots)",
];
const MEASURE_NOT = [
  "Revenue or sales figures", "Conversion rate", "Before-vs-after traffic comparison",
  "Follower growth", "ROI / customer acquisition cost",
];

const FINAL_POINTS = [
  "A scalable digital storefront",
  "A structured product catalog",
  "A consistent premium visual identity",
  "A content and creative engine",
  "A nationwide and local search strategy",
  "A long-term SEO and authority foundation",
];

/* ------------------------------------------------------------- helpers --- */

function Section({ id, kicker, title, lead, children, tone = "" }) {
  return (
    <section className={`sbcs-section ${tone}`} id={id}>
      <div className="sbcs-wrap">
        {kicker && <p className="sbcs-kicker animate">{kicker}</p>}
        {title && <h2 className="sbcs-h2 animate">{title}</h2>}
        {lead && <p className="sbcs-lead animate">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);
  return reduced;
}

/* ---------------------------------------------------------------- hero --- */

function Hero() {
  const reduced = useReducedMotion();
  const wrapRef = useRef(null);
  const artRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const art = artRef.current;
    if (!wrap || !art || reduced) return undefined;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      art.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.2) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 14;
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 12;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    wrap.addEventListener("mousemove", onMove);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <header className="sbcs-hero" ref={wrapRef}>
      <div className="sbcs-wrap sbcs-hero__grid">
        <div className="sbcs-hero__copy">
          <p className="sbcs-eyebrow animate">Geeks Bot · Client Case Study</p>
          <h1 className="sbcs-hero__title animate">
            SB Fragrances <span>&amp; Oud</span>
          </h1>
          <p className="sbcs-hero__sub animate">
            Complete Digital Presence &amp; E-Commerce Transformation
          </p>
          <p className="sbcs-hero__lead animate">
            From a business with no website or e-commerce infrastructure to a
            connected fragrance commerce ecosystem — spanning e-commerce,
            product merchandising, AI-powered creative production, social media,
            SEO, local search and authority building.
          </p>
          <ul className="sbcs-hero__tags animate">
            {SERVICE_TAGS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="sbcs-hero__actions animate">
            <Link href="/contact" className="btn btn--primary header-btn">
              Start a Project
            </Link>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sbcs-textlink"
            >
              Visit sbfragrances.com
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="sbcs-hero__art" ref={artRef} aria-hidden="true">
          <div className="sbcs-browser sbcs-browser--hero">
            <div className="sbcs-browser__bar">
              <span></span><span></span><span></span>
              <em>sbfragrances.com</em>
            </div>
            <Image
              src="/images/case-studies/sb-fragrances/home-hero.webp"
              alt="SB Fragrances homepage hero"
              width={1296}
              height={513}
              priority
              sizes="(max-width: 980px) 100vw, 520px"
              className="sbcs-browser__shot"
            />
          </div>
          <div className="sbcs-float sbcs-float--a">
            <span className="sbcs-float__tag">Best seller</span>
            <span className="sbcs-float__img">
              <Image src="/images/case-studies/sb-fragrances/catalog/p3.webp" alt="" width={600} height={800} sizes="104px" />
            </span>
          </div>
          <div className="sbcs-float sbcs-float--b">
            <span className="sbcs-dot" /> Local search · Garland, TX
          </div>
          <div className="sbcs-float sbcs-float--c">1000+ backlinks</div>
          <svg className="sbcs-hero__lines" viewBox="0 0 400 300" preserveAspectRatio="none">
            <path d="M60 240 C 160 200 200 120 340 90" />
            <path d="M70 90 C 150 120 220 180 330 220" />
          </svg>
        </div>
      </div>

      <div className="sbcs-wrap">
        <ul className="sbcs-stats">
          {STATS.map((s) => (
            <li key={s.label} className="sbcs-stat animate">
              <span className="sbcs-stat__num">
                <CaseStudyCounter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </span>
              <span className="sbcs-stat__label">{s.label}</span>
              <span className="sbcs-stat__sub">{s.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------- challenge --- */

function Challenge() {
  return (
    <Section
      id="challenge"
      tone="sbcs-section--tint"
      kicker="The Challenge"
      title="Starting From a Blank Page — Literally"
    >
      <blockquote className="sbcs-quote animate">
        &ldquo;There was no website before the project.&rdquo;
      </blockquote>
      <p className="sbcs-body animate">
        SB Fragrances &amp; Oud had built a loyal in-store following in Garland,
        Texas, but no equivalent digital infrastructure — no product pages, no
        checkout, no way for a nationwide customer to discover or buy a single
        bottle. This was not a redesign. Everything below was built from zero.
      </p>
      <div className="sbcs-challenge-grid">
        {CHALLENGES.map((c) => (
          <div className="sbcs-card sbcs-card--hover animate" key={c.n}>
            <span className="sbcs-card__index">{c.n}</span>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
          </div>
        ))}
      </div>
      <div className="sbcs-blankbuilt animate" aria-hidden="true">
        <span className="sbcs-blankbuilt__from">Blank</span>
        <span className="sbcs-blankbuilt__arrow" />
        <span className="sbcs-blankbuilt__to">Built</span>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- framework --- */

function Framework() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setActive(LAYERS.length - 1);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.index);
            setActive((cur) => (i > cur ? i : cur));
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -30% 0px" }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section
      id="strategy"
      kicker="Strategic Approach"
      title="A Layered Transformation Framework"
      lead="Every workstream was designed as a layer supporting the next — creating one connected ecosystem rather than a checklist of services."
    >
      <div className="sbcs-framework">
        <div
          className="sbcs-framework__rail"
          style={{ "--progress": `${(active / (LAYERS.length - 1)) * 100}%` }}
          aria-hidden="true"
        />
        <ol className="sbcs-framework__list">
          {LAYERS.map((l, i) => (
            <li
              key={l.n}
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className={`sbcs-layer ${i <= active ? "is-active" : ""}`}
            >
              <span className="sbcs-layer__node" />
              <span className="sbcs-layer__n">{l.n}</span>
              <div className="sbcs-layer__text">
                <h3>{l.t}</h3>
                <p>{l.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------- website mockup --- */

function WebsiteBuild() {
  const [hot, setHot] = useState("home");
  const area = MOCKUP_AREAS.find((a) => a.id === hot) || MOCKUP_AREAS[0];

  return (
    <Section
      id="website"
      tone="sbcs-section--tint"
      kicker="Website Design & Development"
      title="Building the Digital Storefront From Zero"
      lead="Designed and built from scratch on WordPress with WooCommerce — the brand's gold-and-cream identity, category-first navigation, and a homepage built to move visitors from discovery toward checkout."
    >
      <div className="sbcs-buildgrid">
        <div className="sbcs-browser animate">
          <div className="sbcs-browser__bar">
            <span></span><span></span><span></span>
            <em>sbfragrances.com</em>
          </div>
          <div className="sbcs-browser__body sbcs-browser__body--map">
            {MOCKUP_AREAS.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`sbcs-hotspot sbcs-hotspot--${a.id} ${hot === a.id ? "is-active" : ""}`}
                onMouseEnter={() => setHot(a.id)}
                onFocus={() => setHot(a.id)}
                onClick={() => setHot(a.id)}
              >
                <span>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="sbcs-buildnote animate" aria-live="polite">
          <h3>{area.label}</h3>
          <p>{area.note}</p>
          <ul className="sbcs-buildnote__list">
            {MOCKUP_AREAS.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  className={hot === a.id ? "is-active" : ""}
                  onClick={() => setHot(a.id)}
                >
                  {a.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- live store --- */

const SB_IMG = "/images/case-studies/sb-fragrances";

const LIVE_PAGES = [
  { label: "Shop", path: "/product-category/men/", src: `${SB_IMG}/shop.webp`, w: 1008, h: 630, alt: "SB Fragrances men's shop page", note: "Price, category, sale and brand filters beside a grid of product cards with discount badges, crossed-out prices and one-click Add to Cart." },
  { label: "Product Page", path: "/product/amber-oud-gold-edition-al-haramain-100ml/", src: `${SB_IMG}/product.webp`, w: 1008, h: 630, alt: "SB Fragrances product page", note: "Sale price, star rating, in-stock status and a \"sold in the last 24 hours\" urgency badge sit right above Add to Cart and Buy Now." },
  { label: "Oud Collection", path: "/product-category/arabic-ouds/", src: `${SB_IMG}/category-oud.webp`, w: 1008, h: 630, alt: "SB Fragrances Arabic oud category", note: "A dedicated Arabic oud category, one of the 25+ category pages built around fragrance type and shopping intent." },
  { label: "Blog", path: "/blog/oud-perfume-fragrance-guide/", src: `${SB_IMG}/blog.webp`, w: 1008, h: 630, alt: "SB Fragrances blog article", note: "Long-form fragrance guides with AI-directed hero imagery, part of the content and semantic SEO strategy." },
  { label: "About", path: "/about/", src: `${SB_IMG}/about.webp`, w: 1008, h: 630, alt: "SB Fragrances about page", note: "The owner's story and an intro video build trust in authenticity, which matters in a category full of counterfeits." },
];

function LiveStore() {
  return (
    <Section
      id="live-store"
      kicker="The Live Store"
      title="Screenshots From sbfragrances.com"
      lead="The finished storefront as customers see it today: homepage, catalog, product pages, content and mobile."
    >
      <div className="cskit-split">
        <div className="animate">
          <ScrollShot
            src={`${SB_IMG}/home-full.webp`}
            width={720}
            height={6416}
            alt="Full SB Fragrances homepage"
            domain="sbfragrances.com"
          />
        </div>
        <ul className="cskit-points">
          <li className="animate"><strong>Hero with instant trust</strong><span>A local promise for Garland, premium product imagery and a 4.8★ Google rating badge (49 reviews) in the first screen.</span></li>
          <li className="animate"><strong>Merchandised rows</strong><span>Customer favorites, occasions, women&apos;s, men&apos;s, oud and designer collections, each with its own heading and View All.</span></li>
          <li className="animate"><strong>Store visit + reviews</strong><span>Real customer reviews and a &ldquo;Visit Our Cologne Store in Garland&rdquo; block connect the website to the physical shop.</span></li>
          <li className="animate"><strong>Brands, blogs and FAQs</strong><span>A designer brand strip, the latest guides and an FAQ section close the page for both shoppers and search engines.</span></li>
        </ul>
      </div>

      <ShotTabs shots={LIVE_PAGES} domain="sbfragrances.com" />

      <div className="cskit-phones">
        <div className="animate">
          <PhoneShot src={`${SB_IMG}/mobile-home.webp`} width={780} height={1688} alt="SB Fragrances homepage on a phone" />
        </div>
        <div className="animate">
          <PhoneShot src={`${SB_IMG}/mobile-full.webp`} width={312} height={15791} alt="Full SB Fragrances homepage on a phone" scroll />
        </div>
        <div className="cskit-phones__note animate">
          <h3>Built for shoppers on their phones</h3>
          <p>
            The hero, rating badge and product cards stack into a single
            column, with Add to Cart and Buy buttons sized for thumbs. Hover
            the second phone to scroll the whole mobile homepage.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------- architecture --- */

function Architecture() {
  return (
    <Section
      id="architecture"
      kicker="Website Architecture"
      title="A Structure Built for Discovery and Conversion"
      lead="Six primary pages — Home, Shop, Blog, About, Track Order, Contact — supported by 25+ category, blog and template pages organised by gender, fragrance type, brand and shopping intent."
    >
      <div className="sbcs-arch animate">
        <div className="sbcs-arch__node sbcs-arch__node--root">Home</div>
        <div className="sbcs-arch__stem" />
        <div className="sbcs-arch__node sbcs-arch__node--mid">Shop</div>
        <div className="sbcs-arch__fan">
          {ARCH_CATEGORIES.map((c) => (
            <span key={c} className="sbcs-arch__leaf">{c}</span>
          ))}
        </div>
        <div className="sbcs-arch__stem" />
        <div className="sbcs-arch__node sbcs-arch__node--mid">Product Pages</div>
        <ul className="sbcs-arch__utility">
          {ARCH_UTILITY.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </div>
      <p className="sbcs-caption animate">
        Discovery axes: {ARCH_AXES.join(" · ")}
      </p>
    </Section>
  );
}

/* ----------------------------------------------------------- ecommerce --- */

function Ecommerce() {
  return (
    <Section
      id="ecommerce"
      tone="sbcs-section--tint"
      kicker="E-Commerce & Product Experience"
      title="From Product Catalog to Purchase Experience"
      lead="WooCommerce was implemented as the operational backbone — the full path from product upload to fulfilled order — with urgency and offers surfaced before a shopper ever clicks into a product."
    >
      <div className="sbcs-splitgrid">
        <div className="sbcs-productcard animate">
          <span className="sbcs-productcard__badge">34% OFF</span>
          <span className="sbcs-productcard__img">
            <Image src="/images/case-studies/sb-fragrances/catalog/p3.webp" alt="Amber Oud Gold Edition by Al Haramain" width={600} height={800} sizes="300px" />
          </span>
          <span className="sbcs-productcard__brand">Best seller</span>
          <span className="sbcs-productcard__name">Amber Oud Gold Edition</span>
          <span className="sbcs-productcard__price">
            <s>$79.00</s> $63.20
          </span>
          <span className="sbcs-productcard__cta">Add to Cart</span>
          <span className="sbcs-productcard__cta sbcs-productcard__cta--ghost">Buy Now</span>
        </div>
        <div className="sbcs-ecom-list">
          {ECOM_ELEMENTS.map((e) => (
            <div className="sbcs-ecom-item animate" key={e.t}>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ research --- */

function Research() {
  return (
    <Section
      id="research"
      kicker="Product Research & Competitor Intelligence"
      title="Research Before Merchandising"
      lead="Digital competitor intelligence across 13+ competitors met real-world demand from the Garland store — which fragrances customers actually asked for, tried and bought in person."
    >
      <div className="sbcs-research animate">
        <div className="sbcs-research__head">
          <span>Area</span>
          <span>Competitor pattern</span>
          <span>SB Fragrances response</span>
        </div>
        {RESEARCH_ROWS.map((r) => (
          <div className="sbcs-research__row" key={r.area}>
            <span className="sbcs-research__area">{r.area}</span>
            <span>{r.pattern}</span>
            <span className="sbcs-research__resp">{r.response}</span>
          </div>
        ))}
      </div>
      <p className="sbcs-caption animate">
        Competitor identities are drawn from confidential project research and
        represented at the pattern level rather than by name.
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------- catalog --- */

function Catalog() {
  return (
    <Section
      id="catalog"
      tone="sbcs-section--tint"
      kicker="Product Catalog Development"
      title="40+ Products. Structured for Search and Shopping."
      lead="Each listing was treated as both a conversion surface and a search-engine entry point."
    >
      <ul className="sbcs-chips animate">
        {LISTING_FIELDS.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="sbcs-catalog-visual sbcs-catalog-visual--real animate">
        {CATALOG_IMGS.map((f, i) => (
          <span key={f} style={{ "--i": i }}>
            <Image src={`/images/case-studies/sb-fragrances/catalog/${f}`} alt="SB Fragrances product listing photo" width={600} height={800} sizes="(max-width: 620px) 33vw, 180px" />
          </span>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- photography --- */

function AIPhotography() {
  return (
    <Section
      id="photography"
      kicker="AI Product Photography"
      title="AI-Powered Product Photography"
      lead="40+ product images rebuilt through one consistent pipeline — studio-grade presentation while the original bottle, labels and packaging stay accurate."
    >
      <ol className="sbcs-pipeline animate">
        {PHOTO_STEPS.map((s, i) => (
          <li key={s}>
            <span className="sbcs-pipeline__n">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
      </ol>

      <div className="sbcs-photo-grid">
        {PHOTO_WORK.map((p) => (
          <figure className="sbcs-photo animate" key={p.name} tabIndex={0}>
            <div className="sbcs-photo__frame">
              <span className="sbcs-photo__before sbcs-photo__real">
                <Image src={`${PHOTO_DIR}/${p.a}`} alt={`${p.brand} ${p.name} product photo`} fill sizes="(max-width: 620px) 100vw, 360px" />
                <em>Main product shot</em>
              </span>
              <span className="sbcs-photo__after sbcs-photo__real">
                <Image src={`${PHOTO_DIR}/${p.b}`} alt={`${p.brand} ${p.name} alternate photo`} fill sizes="(max-width: 620px) 100vw, 360px" />
                <em>Alternate angle</em>
              </span>
            </div>
            <figcaption>
              <strong>{p.name}</strong> <span>{p.brand}</span>
              <p>{p.scene}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="sbcs-caption animate">
        Real product photography from sbfragrances.com. Hover or tap a card
        to see a second angle. Labels, logos and packaging stay accurate in
        every shot.
      </p>
    </Section>
  );
}

/* -------------------------------------------------------------- social --- */

function SocialCreative() {
  return (
    <Section
      id="social"
      tone="sbcs-section--tint"
      kicker="Social Media Transformation"
      title="From Product Assets to a Content Engine"
      lead="100+ social creative assets across Instagram, Facebook, Google Business Profile and Pinterest — built to read like premium fragrance advertising."
    >
      <div className="sbcs-social-grid sbcs-social-grid--real animate">
        {CREATIVES.map((c) => (
          <span key={c.src} className="sbcs-social-tile sbcs-social-tile--real">
            <Image src={`/images/case-studies/sb-fragrances/creative/${c.src}`} alt={c.alt} fill sizes="(max-width: 620px) 100vw, 360px" />
          </span>
        ))}
      </div>
      <p className="sbcs-caption animate">
        A sample of the AI-directed creative now used across the store&apos;s
        hero, banners and blog.
      </p>
      <div className="sbcs-social-meta">
        <div className="animate">
          <h4>Workflow</h4>
          <p>{SOCIAL_FLOW.join("  →  ")}</p>
        </div>
        <div className="animate">
          <h4>Platforms</h4>
          <p>{SOCIAL_PLATFORMS.join(" · ")}</p>
        </div>
        <div className="animate">
          <h4>Tools</h4>
          <p>{SOCIAL_TOOLS.join(" · ")}</p>
        </div>
      </div>
      <p className="sbcs-note animate">
        Transparency note: the project transformed the quality, consistency and
        positioning of the creative. Social performance data reviewed for the
        period showed a <strong>downward engagement trend</strong> — reported
        here as-is, and separate from the creative-quality work.
      </p>
    </Section>
  );
}

/* --------------------------------------------------------------- video --- */

function AIVideo() {
  return (
    <Section
      id="video"
      kicker="AI Video & UGC"
      title="From Static Product Images to AI Video & UGC"
      lead="A production capability was developed alongside the photography — UGC-style ads, in-store video concepts and product-focused motion."
    >
      <div className="sbcs-ugc">
        <figure className="sbcs-ugc__phone animate">
          <video
            className="sbcs-ugc__video"
            src="/videos/sb-fragrances/ugc-polo-blue-fathers-day.mp4"
            poster="/videos/sb-fragrances/ugc-polo-blue-poster.webp"
            controls
            playsInline
            preload="metadata"
            aria-label="UGC video ad: Father's Day gift guide featuring Ralph Lauren Polo Blue"
          />
        </figure>
        <div className="sbcs-ugc__info">
          <span className="sbcs-ugc__tag animate">UGC Video Ad · 34s · 9:16</span>
          <h3 className="animate">Father&apos;s Day Gift Guide: Polo Blue</h3>
          <p className="animate">
            A creator-style ad built for Reels, TikTok and Shorts. It opens on
            the question every last-minute shopper is asking, &ldquo;Still
            don&apos;t have a Father&apos;s Day gift?&rdquo;, and answers it with
            Ralph Lauren Polo Blue, held clearly in frame from the first second.
          </p>
          <ul className="sbcs-ugc__points">
            <li className="animate"><strong>Hook in the first line</strong><span>A seasonal question that stops the scroll and matches gift-buying intent.</span></li>
            <li className="animate"><strong>Product always visible</strong><span>The bottle stays in hand and on screen, so the ad works even at a glance.</span></li>
            <li className="animate"><strong>Captions burned in</strong><span>Readable with the sound off, the way most social video is watched.</span></li>
            <li className="animate"><strong>Vertical, social-first</strong><span>Shot 9:16 for Instagram, Facebook and TikTok placements.</span></li>
          </ul>
          <ul className="sbcs-ugc__caps animate">
            <li>UGC-style advertising</li>
            <li>Seasonal campaigns</li>
            <li>Product-focused video</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- seo --- */

function SEO() {
  return (
    <Section
      id="seo"
      tone="sbcs-section--tint"
      kicker="SEO Transformation"
      title="SEO Built Into the Structure"
      lead="Technical, on-page, product, category, semantic, local and content SEO — implemented as a structural layer, backed by an authority-building program."
    >
      <ul className="sbcs-chips sbcs-chips--seo animate">
        {SEO_LAYERS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="sbcs-seo-grid">
        <ol className="sbcs-funnel animate">
          {SEO_FUNNEL.map((f) => (
            <li key={f.t}>
              <strong>{f.t}</strong>
              <span>{f.d}</span>
            </li>
          ))}
        </ol>
        <div className="sbcs-semantic animate">
          <span className="sbcs-semantic__label">Semantic relationships</span>
          <div className="sbcs-semantic__cloud">
            {SEMANTIC_NODES.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- seo results --- */

function SEOResultsSection() {
  return (
    <Section
      id="seo-results"
      kicker="SEO Results"
      title="Ranking on Page 1 of Google"
      lead="The SEO work shows up where it matters: SB Fragrances now appears on the first page of Google for high-intent oud searches, next to Wikipedia and national retailers, with rich product listings."
    >
      <SeoResults />
    </Section>
  );
}

/* --------------------------------------------------- local + nationwide --- */

function LocalNationwide() {
  return (
    <Section
      id="markets"
      kicker="Local + Nationwide Strategy"
      title="Two Markets. One Connected Strategy."
    >
      <div className="sbcs-markets">
        <div className="sbcs-market animate">
          <h3>Nationwide USA</h3>
          <ul>
            <li>E-commerce discovery</li>
            <li>Category &amp; product search</li>
            <li>Semantic SEO &amp; content</li>
          </ul>
        </div>
        <div className="sbcs-market sbcs-market--local animate">
          <h3>Garland / Dallas, TX</h3>
          <ul>
            <li>Google Business Profile optimization</li>
            <li>Local SEO &amp; reviews management</li>
            <li>Local-relevance content</li>
          </ul>
          <address>2121 Northwest Hwy, Garland, TX 75041</address>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- authority --- */

function LinkBuilding() {
  return (
    <Section id="authority" tone="sbcs-section--dark" kicker="Link Building & Authority" title="Building Off-Page Authority">
      <div className="sbcs-bignum animate">
        <CaseStudyCounter value={1000} suffix="+" className="sbcs-bignum__value" />
        <span className="sbcs-bignum__label">Backlinks built</span>
      </div>
      <ul className="sbcs-authority-list">
        {AUTHORITY_POINTS.map((p) => (
          <li key={p} className="animate">{p}</li>
        ))}
      </ul>
      <p className="sbcs-note sbcs-note--dark animate">
        Reported strictly as completed authority-building work — not as a
        guarantee or proxy for rankings, traffic or revenue.
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------- ecosystem --- */

function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      kicker="The Digital Ecosystem"
      title="One Connected System, Not Disconnected Tasks"
    >
      <div className="sbcs-ecosystem">
        <ul className="sbcs-ecosystem__nodes">
          {ECOSYSTEM_NODES.map((n, i) => (
            <li key={n} className="animate" style={{ "--i": i }}>
              {n}
            </li>
          ))}
        </ul>
        <div className="sbcs-ecosystem__arrow animate" aria-hidden="true" />
        <div className="sbcs-ecosystem__customer animate">The Customer</div>
      </div>
      <p className="sbcs-body sbcs-body--center animate">
        Every workstream converges on the same outcome: a customer finding SB
        Fragrances &amp; Oud, trusting what they see, and completing a purchase —
        online or in Garland.
      </p>
    </Section>
  );
}

/* ---------------------------------------------------------- before/after --- */

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <Section
      id="before-after"
      tone="sbcs-section--tint"
      kicker="Before → After"
      title="The Transformation, at a Glance"
    >
      <div className="sbcs-ba animate">
        <div className="sbcs-ba__panel sbcs-ba__panel--before">
          <span className="sbcs-ba__tag">Before</span>
          <ul>
            {BEFORE.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div
          className="sbcs-ba__panel sbcs-ba__panel--after"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <span className="sbcs-ba__tag">After</span>
          <ul>
            {AFTER.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="sbcs-ba__range"
          aria-label="Drag to compare before and after"
        />
        <span className="sbcs-ba__handle" style={{ left: `${pos}%` }} aria-hidden="true" />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- milestones --- */

function KeyAchievements() {
  return (
    <Section
      id="milestones"
      kicker="Key Achievements"
      title="Eleven Milestones of the Build"
    >
      <ol className="sbcs-milestones">
        {MILESTONES.map((m, i) => (
          <li key={m} className="sbcs-milestone animate">
            <span className="sbcs-milestone__n">{String(i + 1).padStart(2, "0")}</span>
            <span>{m}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* -------------------------------------------------------- differentiators --- */

function Differentiators() {
  return (
    <Section
      id="differentiators"
      tone="sbcs-section--tint"
      kicker="What Made the Project Different"
      title="Seven Differentiators"
    >
      <div className="sbcs-diff-grid">
        {DIFFERENTIATORS.map((d) => (
          <div className="sbcs-card sbcs-card--hover animate" key={d.n}>
            <span className="sbcs-card__index">{d.n}</span>
            <h3>{d.t}</h3>
            <p>{d.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- tools --- */

function ToolsTech() {
  return (
    <Section id="tools" kicker="Tools & Technology" title="Tools & Technology">
      <div className="sbcs-tools">
        <div className="animate">
          <h4>Website</h4>
          <ul>
            <li>WordPress</li>
            <li>WooCommerce</li>
          </ul>
        </div>
        <div className="animate">
          <h4>AI / Creative</h4>
          <ul>
            <li>GPT</li>
            <li>Claude</li>
            <li>Gemini</li>
            <li>Flow Lab</li>
            <li>Canva</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- measurement --- */

function Measurement() {
  return (
    <Section
      id="measurement"
      tone="sbcs-section--tint"
      kicker="Evidence & Measurement"
      title="What We Can Measure"
      lead="This case study separates completed project work from commercial performance outcomes — on purpose."
    >
      <div className="sbcs-measure">
        <div className="sbcs-measure__col sbcs-measure__col--yes animate">
          <h3>Verified project work</h3>
          <ul>
            {MEASURE_VERIFIED.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div className="sbcs-measure__col sbcs-measure__col--no animate">
          <h3>Not claimed here</h3>
          <ul>
            {MEASURE_NOT.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="sbcs-caption animate">
        Figures such as product count, creative volume and backlinks were
        supplied by the project team as verified project facts, not measured
        performance. Where social data was available, the trend was downward and
        is reported as such.
      </p>
    </Section>
  );
}

/* -------------------------------------------------------- final + cta --- */

function FinalImpact() {
  return (
    <Section
      id="impact"
      tone="sbcs-section--dark"
      kicker="Final Impact"
      title="From Digital Absence to a Complete Fragrance Commerce Ecosystem"
    >
      <p className="sbcs-body sbcs-body--dark animate">
        The strongest outcome to communicate is the foundation and system that
        was built:
      </p>
      <ul className="sbcs-final">
        {FINAL_POINTS.map((p) => (
          <li key={p} className="animate">{p}</li>
        ))}
      </ul>
    </Section>
  );
}

function CaseStudyCTA() {
  return (
    <section className="sbcs-cta">
      <div className="sbcs-wrap">
        <h2 className="animate">Have a Business That Needs More Than Just a Website?</h2>
        <p className="animate">Let&apos;s build the digital system around it.</p>
        <div className="sbcs-cta__actions animate">
          <Link href="/contact" className="btn btn--primary header-btn">
            Start a Project
          </Link>
          <Link href="/portfolio" className="btn btn--white">
            View More Work
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- page --- */

export default function SbFragrancesCaseStudy() {
  return (
    <article className="sbcs">
      <Hero />
      <Challenge />
      <Framework />
      <WebsiteBuild />
      <LiveStore />
      <Architecture />
      <Ecommerce />
      <Research />
      <Catalog />
      <AIPhotography />
      <SocialCreative />
      <AIVideo />
      <SEO />
      <SEOResultsSection />
      <LocalNationwide />
      <LinkBuilding />
      <Ecosystem />
      <BeforeAfter />
      <KeyAchievements />
      <Differentiators />
      <ToolsTech />
      <Measurement />
      <FinalImpact />
      <MoreWork current="sb-fragrances" />
      <CaseStudyCTA />
    </article>
  );
}
