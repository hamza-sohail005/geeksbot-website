import Image from "next/image";
import "./seo-results.css";

const IMG = "/images/case-studies/brightcore";
const SITE = "https://brightcorebuildingservices.com/";

// Verified on the live site: LocalBusiness schema with 14 Service entries
// and 11 areaServed cities; Charlotte-focused <title> and meta description.
const BEHIND_IT = [
  { t: "Local business structured data", d: "Schema covering 14 services and 11 service-area cities, from Charlotte to Concord, Matthews and Mooresville." },
  { t: "Charlotte-focused on-page SEO", d: "Titles, meta descriptions and service content written around how local buyers search." },
  { t: "Clear entity signals", d: "Consistent business details, so Google and its AI understand who BrightCore is and where they work." },
];

export default function BrightCoreResults() {
  return (
    <div className="seo-client">
      <div className="seo-client__head animate">
        <span className="seo-client__label">Client · SEO only</span>
        <h3>BrightCore Building Services: Google&apos;s AI Recommends Them By Name</h3>
        <p>
          Commercial cleaning in Charlotte, NC. We handled the SEO; the
          website itself was built by the client&apos;s team.
        </p>
      </div>

      <div className="seo-client__grid">
        <figure className="seo-client__ai animate">
          <div className="seo-client__ai-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l2.2 6.3L20.5 10.5l-6.3 2.2L12 19l-2.2-6.3L3.5 10.5l6.3-2.2z" fill="url(#seoAiGrad)" />
              <defs>
                <linearGradient id="seoAiGrad" x1="3" y1="2" x2="21" y2="19">
                  <stop stopColor="#4285f4" />
                  <stop offset="0.5" stopColor="#9b72cb" />
                  <stop offset="1" stopColor="#d96570" />
                </linearGradient>
              </defs>
            </svg>
            Google AI answer
          </div>
          <div className="seo-client__ai-shot">
            <Image
              src={`${IMG}/google-ai-answer.png`}
              alt="Google AI answer describing BrightCore Building Services in Charlotte: 24/7 commercial cleaning, services offered and service area"
              width={690}
              height={656}
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </figure>

        <div className="seo-client__body">
          <p className="seo-client__lead animate">
            Ask Google about BrightCore and its AI answer reads like their own
            sales pitch: a locally operated, highly rated company serving
            Charlotte, available <strong>24/7</strong>, with every core
            service and the full service area listed.
          </p>
          <ul className="seo-client__list">
            {BEHIND_IT.map((b) => (
              <li key={b.t} className="animate">
                <strong>{b.t}</strong>
                <span>{b.d}</span>
              </li>
            ))}
          </ul>
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="seo-client__site animate">
            <span className="seo-client__site-shot">
              <Image src={`${IMG}/home-hero.webp`} alt="BrightCore Building Services homepage" width={1152} height={720} sizes="160px" />
            </span>
            <span className="seo-client__site-text">
              <em>Live website</em>
              <strong>brightcorebuildingservices.com ↗</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
