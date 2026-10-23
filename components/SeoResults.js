"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./seo-results.css";

const IMG = "/images/case-studies/sb-fragrances/seo";

// Tiles cropped from the Google Search Console Performance report
// (Apr 23 - Jul 22, 2025); the full chart is left out on purpose.
const GSC = [
  { text: "1.05K", label: "Organic clicks", tile: "gsc-clicks.png", w: 173, h: 104 },
  { text: "33.6K", label: "Impressions", tile: "gsc-impressions.png", w: 178, h: 103 },
];

// `focus` keeps the highlighted SB listing in frame on the cropped card.
// Positions read from the screenshots themselves (organic results, ads and
// shopping carousels excluded). Results vary by location and device.
const RANKINGS = [
  { keyword: "arabian oud fragrance", badge: "#2 organic", src: "serp-arabian-oud-fragrance.jpg", w: 1054, h: 508, focus: "left 82%", note: "Right below Wikipedia, with product images, price range and a nearby-store badge." },
  { keyword: "Arabic ouds for Men", badge: "#3 organic", src: "serp-arabic-ouds-men.jpg", w: 1004, h: 659, focus: "center 88%", note: "Above major retailers' category pages, with a rich product listing." },
  { keyword: "Arabic ouds for women", badge: "Page 1", src: "serp-arabic-ouds-women.jpg", w: 1047, h: 698, focus: "center 88%", note: "The same oud category page ranks for the women's search too." },
  { keyword: "women's oud perfumes in usa", badge: "Page 1", src: "serp-womens-oud-usa.jpg", w: 985, h: 752, focus: "center 45%", note: "A blog guide from the content strategy, ranking with its own image." },
];

const RICH_FEATURES = ["Product image thumbnails", "Price range ($43 to $74)", "\"Store nearby\" local badge", "Free delivery & 2-day returns"];

export default function SeoResults({ compact = false }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="seo-results">
      <div className="seo-results__grid">
        {RANKINGS.map((r) => (
          <figure className="seo-results__card animate" key={r.keyword}>
            <div className="seo-results__query">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span>{r.keyword}</span>
              <b>{r.badge}</b>
            </div>
            <button
              type="button"
              className="seo-results__shot"
              onClick={() => setOpen({ src: r.src, w: r.w, h: r.h, alt: `Google results for "${r.keyword}" showing SB Fragrances` })}
              aria-label={`Enlarge Google results for ${r.keyword}`}
            >
              <Image src={`${IMG}/${r.src}`} alt={`Google results for "${r.keyword}" showing SB Fragrances`} width={r.w} height={r.h} sizes="(max-width: 767px) 100vw, 540px" style={{ objectPosition: r.focus }} />
              <span className="seo-results__zoom">Click to enlarge</span>
            </button>
            <figcaption>{r.note}</figcaption>
          </figure>
        ))}
      </div>

      <div className="seo-results__rich animate">
        <span>Rich results earned in Google:</span>
        <ul>
          {RICH_FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="seo-results__traffic animate">
        <div className="seo-results__traffic-text">
          <strong>Organic traffic from Google</strong>
          <span>3 months · Google Search Console, sbfragrances.com</span>
        </div>
        <div className="seo-results__tiles">
          {GSC.map((s) => (
            <Image
              key={s.label}
              src={`${IMG}/${s.tile}`}
              alt={`Google Search Console: ${s.text} ${s.label.toLowerCase()}`}
              width={s.w}
              height={s.h}
              sizes="220px"
            />
          ))}
        </div>
      </div>

      <p className="seo-results__fine animate">
        Real screenshots from Google Search and Google Search Console for
        sbfragrances.com. Search positions vary by location, device and date.
        {compact && (
          <>
            {" "}
            <Link href="/case-studies/sb-fragrances">Read the full SB Fragrances case study →</Link>
          </>
        )}
      </p>

      {open && (
        <div className="seo-results__lightbox" role="dialog" aria-modal="true" aria-label={open.alt} onClick={() => setOpen(null)}>
          <button type="button" className="seo-results__close" onClick={() => setOpen(null)} aria-label="Close">
            ×
          </button>
          <Image src={`${IMG}/${open.src}`} alt={open.alt} width={open.w} height={open.h} sizes="95vw" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
