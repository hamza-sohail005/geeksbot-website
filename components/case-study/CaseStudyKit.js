"use client";

/*
 * Shared building blocks for the screenshot-led case studies (Intake24, Logyn).
 * Layout + typography come from case-study.css (the `sbcs-*` system built for
 * SB Fragrances); per-project colour themes and the screenshot / results
 * widgets live in case-study-kit.css.
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CaseStudyCounter from "./CaseStudyCounter";
import "./case-study.css";
import "./case-study-kit.css";

/* ------------------------------------------------------------- helpers --- */

export function Section({ id, kicker, title, lead, children, tone = "" }) {
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

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

/* ---------------------------------------------------- screenshot frames --- */

// Hover-scroll duration from how far the capture travels, so short and long
// pages pan at the same steady pace instead of all taking a fixed time.
function panSeconds(frameWidth, viewHeight, ratio, pxPerSecond) {
  return Math.max(6, (frameWidth * ratio - viewHeight) / pxPerSecond).toFixed(1) + "s";
}

/** A browser-chrome frame around a real screenshot. */
export function BrowserShot({ src, width, height, alt, domain, priority = false, className = "" }) {
  return (
    <figure className={`cskit-browser ${className}`}>
      <div className="sbcs-browser__bar">
        <span></span><span></span><span></span>
        <em>{domain}</em>
      </div>
      <Image src={src} width={width} height={height} alt={alt} priority={priority} sizes="(max-width: 980px) 100vw, 640px" />
    </figure>
  );
}

/** Browser frame with a fixed viewport; the full-page capture scrolls through on hover / focus. */
export function ScrollShot({ src, width, height, alt, domain, hint = "Hover or tap to scroll the full page" }) {
  return (
    <figure
      className="cskit-scroll"
      tabIndex={0}
      style={{ "--shot-ratio": height / width, "--pan-time": panSeconds(600, 560, height / width, 350) }}
    >
      <div className="sbcs-browser__bar">
        <span></span><span></span><span></span>
        <em>{domain}</em>
      </div>
      <div className="cskit-scroll__view">
        <Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 980px) 100vw, 560px" />
      </div>
      <figcaption>{hint}</figcaption>
    </figure>
  );
}

/** Phone frame. With `scroll`, a tall capture pans through on hover. */
export function PhoneShot({ src, width, height, alt, scroll = false }) {
  return (
    <figure
      className={`cskit-phone ${scroll ? "cskit-phone--scroll" : ""}`}
      tabIndex={scroll ? 0 : undefined}
      style={{ "--shot-ratio": height / width, "--pan-time": panSeconds(250, 541, height / width, 300) }}
    >
      <div className="cskit-phone__screen">
        <Image src={src} width={width} height={height} alt={alt} sizes="280px" />
      </div>
    </figure>
  );
}

/** Tabbed gallery of page screenshots. */
export function ShotTabs({ shots, domain }) {
  const [i, setI] = useState(0);
  const shot = shots[i];
  return (
    <div className="cskit-tabs animate">
      <div className="cskit-tabs__list" role="tablist" aria-label="Pages">
        {shots.map((s, n) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={i === n}
            className={i === n ? "is-active" : ""}
            onClick={() => setI(n)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="cskit-tabs__panel" role="tabpanel">
        <BrowserShot key={shot.src} src={shot.src} width={shot.w} height={shot.h} alt={shot.alt} domain={`${domain}${shot.path || ""}`} />
        <div className="cskit-tabs__note" aria-live="polite">
          <h3>{shot.label}</h3>
          <p>{shot.note}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ hero --- */

export function CaseHero({ eyebrow, title, accent, sub, lead, tags, live, shot, floats = [], stats }) {
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
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 12;
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 10;
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
          <p className="sbcs-eyebrow animate">{eyebrow}</p>
          <h1 className="sbcs-hero__title animate">
            {title} {accent && <span>{accent}</span>}
          </h1>
          <p className="sbcs-hero__sub animate">{sub}</p>
          <p className="sbcs-hero__lead animate">{lead}</p>
          <ul className="sbcs-hero__tags animate">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="sbcs-hero__actions animate">
            <Link href="/contact" className="btn btn--primary header-btn">
              Start a Project
            </Link>
            {live && (
              <a href={live.href} target="_blank" rel="noopener noreferrer" className="sbcs-textlink">
                {live.label}
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <div className="cskit-hero__art" ref={artRef}>
          <BrowserShot src={shot.src} width={shot.w} height={shot.h} alt={shot.alt} domain={shot.domain} priority />
          {floats.map((f, n) => (
            <div key={f} className={`sbcs-float cskit-float--${n}`} aria-hidden="true">
              {n === 0 && <span className="sbcs-dot" />}
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="sbcs-wrap">
        <ul className="sbcs-stats">
          {stats.map((s) => (
            <li key={s.label} className="sbcs-stat animate">
              <span className="sbcs-stat__num">
                {s.text ?? <CaseStudyCounter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />}
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

/* ----------------------------------------------------------- framework --- */

export function Framework({ id, kicker, title, lead, layers, tone }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setActive(layers.length - 1);
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
  }, [layers.length]);

  return (
    <Section id={id} tone={tone} kicker={kicker} title={title} lead={lead}>
      <div className="sbcs-framework">
        <div
          className="sbcs-framework__rail"
          style={{ "--progress": `${(active / (layers.length - 1)) * 100}%` }}
          aria-hidden="true"
        />
        <ol className="sbcs-framework__list">
          {layers.map((l, i) => (
            <li
              key={l.t}
              data-index={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className={`sbcs-layer ${i <= active ? "is-active" : ""}`}
            >
              <span className="sbcs-layer__node" />
              <span className="sbcs-layer__n">{String(i + 1).padStart(2, "0")}</span>
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

/* --------------------------------------------------------------- cards --- */

export function CardGrid({ items }) {
  return (
    <div className="sbcs-challenge-grid">
      {items.map((c, i) => (
        <div className="sbcs-card sbcs-card--hover animate" key={c.t}>
          <span className="sbcs-card__index">{String(i + 1).padStart(2, "0")}</span>
          <h3>{c.t}</h3>
          <p>{c.d}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- results --- */

function ScoreRing({ score, label }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const band = score >= 90 ? "good" : score >= 50 ? "ok" : "low";
  return (
    <div className={`cskit-ring cskit-ring--${band} animate`}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={r} className="cskit-ring__track" />
        <circle
          cx="50"
          cy="50"
          r={r}
          className="cskit-ring__arc"
          style={{ strokeDasharray: c, "--ring-offset": c * (1 - score / 100) }}
        />
      </svg>
      <CaseStudyCounter value={score} className="cskit-ring__num" />
      <span className="cskit-ring__label">{label}</span>
    </div>
  );
}

export function ScoreRings({ scores, caption }) {
  return (
    <>
      <div className="cskit-rings">
        {scores.map((s) => (
          <ScoreRing key={s.label} {...s} />
        ))}
      </div>
      {caption && <p className="sbcs-caption cskit-caption--dark animate">{caption}</p>}
    </>
  );
}

export function Vitals({ items }) {
  return (
    <ul className="cskit-vitals">
      {items.map((v) => (
        <li key={v.label} className="animate">
          <strong>{v.value}</strong>
          <span>{v.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Before → after payload bars, scaled to the largest "before" value. */
export function WeightBars({ rows }) {
  const max = Math.max(...rows.map((r) => r.before));
  return (
    <div className="cskit-bars">
      {rows.map((r) => {
        const saved = Math.round((1 - r.after / r.before) * 100);
        return (
          <div className="cskit-bar animate" key={r.label}>
            <div className="cskit-bar__head">
              <span>{r.label}</span>
              <strong>−{saved}%</strong>
            </div>
            <div className="cskit-bar__track">
              <span className="cskit-bar__before" style={{ width: `${(r.before / max) * 100}%` }}>
                <em>{r.beforeLabel}</em>
              </span>
            </div>
            <div className="cskit-bar__track">
              <span className="cskit-bar__after" style={{ width: `${(r.after / max) * 100}%` }}>
                <em>{r.afterLabel}</em>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Milestones({ items }) {
  return (
    <ol className="sbcs-milestones">
      {items.map((m, i) => (
        <li key={m} className="sbcs-milestone animate">
          <span className="sbcs-milestone__n">{String(i + 1).padStart(2, "0")}</span>
          <span>{m}</span>
        </li>
      ))}
    </ol>
  );
}

export function Tools({ groups }) {
  return (
    <div className="sbcs-tools">
      {groups.map((g) => (
        <div className="animate" key={g.t}>
          <h4>{g.t}</h4>
          <ul>
            {g.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Measure({ verified, notClaimed }) {
  return (
    <div className="sbcs-measure">
      <div className="sbcs-measure__col sbcs-measure__col--yes animate">
        <h3>Verified &amp; measured</h3>
        <ul>
          {verified.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <div className="sbcs-measure__col sbcs-measure__col--no animate">
        <h3>Not claimed here</h3>
        <ul>
          {notClaimed.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FinalList({ items }) {
  return (
    <ul className="sbcs-final">
      {items.map((p) => (
        <li key={p} className="animate">{p}</li>
      ))}
    </ul>
  );
}

/** Links to the other case studies, so a reader can keep going. */
export function MoreWork({ current }) {
  const all = [
    { slug: "sb-fragrances", title: "SB Fragrances & Oud", tag: "E-Commerce · SEO · AI Creative" },
    { slug: "intake24", title: "Intake24", tag: "Research Platform Website" },
    { slug: "logyn", title: "Logyn", tag: "Product Launch Landing Page" },
  ].filter((c) => c.slug !== current);
  return (
    <Section id="more-work" kicker="More Case Studies" title="Keep Reading">
      <div className="cskit-more">
        {all.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="cskit-more__card animate">
            <span>{c.tag}</span>
            <strong>{c.title}</strong>
            <em>Read the case study →</em>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function CaseCTA({ title, text }) {
  return (
    <section className="sbcs-cta">
      <div className="sbcs-wrap">
        <h2 className="animate">{title}</h2>
        <p className="animate">{text}</p>
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
