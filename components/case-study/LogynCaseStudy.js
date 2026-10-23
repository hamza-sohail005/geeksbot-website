"use client";

import {
  Section,
  CaseHero,
  Framework,
  CardGrid,
  ScrollShot,
  BrowserShot,
  PhoneShot,
  ShotTabs,
  Milestones,
  Tools,
  Measure,
  FinalList,
  MoreWork,
  CaseCTA,
} from "./CaseStudyKit";

const IMG = "/images/case-studies/logyn";
const DOMAIN = "logyn-geeksbot.netlify.app";

/* ---------------------------------------------------------------- data --- */

const STATS = [
  { value: 7, label: "Page sections", sub: "One focused launch page" },
  { value: 5, label: "CTAs", sub: "Get started → Buy → Download" },
  { value: 5, label: "Breakpoints", sub: "Incl. a custom 860px step" },
  { value: 54, label: "Responsive rules", sub: "Tailwind utility variants" },
  { value: 11, label: "Inline SVG icons", sub: "Crisp at any size, zero requests" },
  { value: 3, label: "Typefaces", sub: "Sharp Grotesk · Satoshi · Poppins" },
  { value: 66, suffix: "%", label: "Launch discount", sub: "$44 → $15, shown on the page" },
  { value: 2, label: "App stores", sub: "App Store + Google Play" },
];

const CHALLENGES = [
  { t: "An Unfamiliar Idea", d: "Logyn keeps passwords on a physical card or key holder — not your phone, not the internet. Most people have never seen that before." },
  { t: "Earn Trust Instantly", d: "A security product lives or dies on credibility. The page had to feel calm, solid and trustworthy from the first screen." },
  { t: "Sell a Physical Device", d: "Price and offer had to be clear and tempting without turning the page into a hard sell." },
  { t: "Drive App Installs", d: "The device pairs with an app, so the journey ends at the App Store and Google Play." },
  { t: "Explain 'How It Works'", d: "Show that adding a password is genuinely simple — not just say it." },
  { t: "Mobile-First Audience", d: "People managing passwords on their phones had to get the full experience on a phone." },
];

const LAYERS = [
  { t: "The Promise", d: "\"Protect and find all your important passwords with one tap\" — with Get started and How it works side by side." },
  { t: "The Product & Offer", d: "The Logyn device, a plain-English explanation of offline storage, and a $15 price against a struck-through $44." },
  { t: "Value Pillars", d: "Affordable, Physical Security, Cross device — three icon cards for skimmers." },
  { t: "How It Works", d: "A recreated 'Add password details' screen: step 2 of 2, username, password, auto-generate." },
  { t: "Secure · Organized · At Your Fingertips", d: "A numbered three-point summary that reinforces the core benefits." },
  { t: "Download", d: "A dark, high-contrast panel of real app screens with App Store and Google Play buttons." },
  { t: "Footer & Social", d: "Copyright plus social links to keep the conversation going." },
];

const SECTIONS = [
  { label: "Hero", src: `${IMG}/hero.webp`, w: 1296, h: 810, alt: "Logyn hero section", note: "Floating app icons (chat, TikTok, Facebook, mail) frame the headline — instantly saying 'all your accounts' — with a phone mockup rising from below." },
  { label: "Product & Offer", src: `${IMG}/product.webp`, w: 1008, h: 478, alt: "Logyn product and pricing section", note: "The device sits on a soft blue panel next to the reason it exists: your passwords live offline. Price anchoring ($15 vs $44) and a single Buy now button close the section." },
  { label: "How It Works", src: `${IMG}/add-password.webp`, w: 1008, h: 451, alt: "Logyn add password section", note: "An interactive-looking form card — progress bar, fields, 'Auto-generate a strong password' — proves the flow is a piece of cake." },
  { label: "Download", src: `${IMG}/download.webp`, w: 1008, h: 435, alt: "Logyn download section", note: "A navy panel full of real app screens — onboarding, device PIN, categories, saved accounts — with both store badges in reach." },
];

const CTAS = [
  { t: "Get started", d: "Hero — primary entry for ready visitors" },
  { t: "How it works", d: "Hero — for the curious, equal visual weight" },
  { t: "Buy now", d: "Product section — next to the $15 price" },
  { t: "App Store", d: "Download section" },
  { t: "Google Play", d: "Download section" },
];

const SWATCHES = [
  { name: "Logyn Sky", hex: "#7BADCF", use: "Buttons, accents, panels" },
  { name: "Midnight", hex: "#1A202E", use: "Type, icons, download panel" },
  { name: "Action Blue", hex: "#1C64F2", use: "Highlighted words" },
  { name: "Slate", hex: "#475569", use: "Body copy" },
];

const BREAKPOINTS = ["sm · 640px", "md · 768px", "mdd · 860px (custom)", "lg · 1024px", "xl · 1280px"];

const MILESTONES = [
  "Launch landing page designed end to end",
  "7-section narrative from promise to download",
  "5 conversion points across the journey",
  "Price anchoring: $15 against $44",
  "Recreated app UI to explain the flow",
  "11 hand-placed inline SVG icons",
  "Custom brand font (Sharp Grotesk) loaded locally",
  "5 breakpoints incl. a custom 860px step",
  "Hover-inverting button system",
  "React Router structure ready for more pages",
];

const TOOLS = [
  { t: "Front-end", items: ["React 18", "React Router 6", "Create React App"] },
  { t: "Styling", items: ["Tailwind CSS", "Custom breakpoints", "Custom CSS backgrounds"] },
  { t: "Typography", items: ["Sharp Grotesk", "Satoshi", "Poppins"] },
  { t: "Assets", items: ["Inline SVG icons", "App & device mockups", "Store badges"] },
];

const VERIFIED = [
  "Sections, CTAs & breakpoints (from the codebase)",
  "Responsive behaviour (screenshots in this page)",
  "Brand palette & typography",
  "Offer presentation ($15 vs $44)",
  "Icon & asset system",
];
const NOT_CLAIMED = [
  "Device sales",
  "App downloads",
  "Conversion rate",
  "Traffic or ad performance",
  "Post-launch analytics (none shared with us)",
];

const FINAL_POINTS = [
  "A new product category explained in one scroll",
  "A calm, trustworthy security brand on screen",
  "A clear path: learn → buy → download",
  "A consistent visual system to grow from",
  "Fully responsive, phone to desktop",
  "A React codebase ready for more pages",
];

/* ---------------------------------------------------------------- page --- */

export default function LogynCaseStudy() {
  return (
    <article className="sbcs sbcs--logyn">
      <CaseHero
        eyebrow="Geeks Bot · Client Case Study"
        title="Logyn"
        accent="Launch Page"
        sub="Landing Page Design & React Development for a Hardware Password Manager"
        lead="Logyn stores your passwords on a physical card or key holder instead of your phone or the internet. We designed and built the launch landing page that explains the idea, sells the device and sends visitors to the app stores — all in one focused scroll."
        tags={["Landing Page", "UI Design", "React", "Tailwind CSS", "Responsive", "Conversion"]}
        live={{ href: "https://logyn-geeksbot.netlify.app/", label: "Visit the live site" }}
        shot={{ src: `${IMG}/hero.webp`, w: 1296, h: 810, alt: "Logyn landing page hero", domain: DOMAIN }}
        floats={["Offline password storage", "$15 · Buy now", "App Store + Google Play"]}
        stats={STATS}
      />

      <Section id="challenge" tone="sbcs-section--tint" kicker="The Challenge" title="Selling a New Kind of Security">
        <blockquote className="sbcs-quote animate">
          &ldquo;Protect and find all your important passwords with one tap.&rdquo;
        </blockquote>
        <p className="sbcs-body animate">
          That one line had to carry the whole idea. Logyn isn&apos;t another
          password app — it&apos;s a physical device that keeps your credentials
          away from the internet. The page needed to explain that, build trust,
          make an offer and get the app installed, without overwhelming anyone.
        </p>
        <CardGrid items={CHALLENGES} />
      </Section>

      <Framework
        id="strategy"
        kicker="Page Narrative"
        title="Seven Sections, One Decision"
        lead="Every section moves the visitor one step: understand → believe → want → act."
        layers={LAYERS}
      />

      <Section
        id="page"
        tone="sbcs-section--tint"
        kicker="Design & Build"
        title="The Whole Journey on One Page"
        lead="Light, airy sections in Logyn's sky blue, ending on a dark navy download panel that makes the final call to action impossible to miss."
      >
        <div className="cskit-split">
          <div className="animate">
            <ScrollShot src={`${IMG}/full.webp`} width={720} height={2222} alt="Full Logyn landing page" domain={DOMAIN} />
          </div>
          <ul className="cskit-points">
            <li className="animate"><strong>Social icons as storytelling</strong><span>The floating app icons around the hero say &ldquo;every account you have&rdquo; without a single extra word.</span></li>
            <li className="animate"><strong>Soft shadows, rounded cards</strong><span>Two custom shadow levels give the page depth while staying calm — fitting for a security brand.</span></li>
            <li className="animate"><strong>Contrast for the finale</strong><span>After light sections, the navy download panel pulls focus to the app stores.</span></li>
            <li className="animate"><strong>Real product imagery</strong><span>The device, a phone mockup and a wall of app screens — the product is always on show.</span></li>
          </ul>
        </div>
      </Section>

      <Section
        id="sections"
        kicker="Section by Section"
        title="A Closer Look at the Key Sections"
        lead="Pick a section to see how it was designed."
      >
        <ShotTabs shots={SECTIONS} domain={DOMAIN} />
      </Section>

      <Section
        id="conversion"
        tone="sbcs-section--tint"
        kicker="Conversion Design"
        title="Five Ways to Say Yes"
        lead="Calls to action appear exactly where a decision forms — never more than a scroll away, never competing with each other."
      >
        <div className="cskit-split">
          <ol className="sbcs-milestones" style={{ gridTemplateColumns: "1fr", marginTop: 0 }}>
            {CTAS.map((c, i) => (
              <li key={c.t} className="sbcs-milestone animate">
                <span className="sbcs-milestone__n">{String(i + 1).padStart(2, "0")}</span>
                <span><strong>{c.t}</strong> — {c.d}</span>
              </li>
            ))}
          </ol>
          <div className="cskit-offer animate">
            <span className="cskit-offer__badge">LAUNCH OFFER</span>
            <div className="cskit-offer__price">
              <b>$15</b>
              <s>$44</s>
            </div>
            <p>
              Price anchoring does the persuading: the original price stays
              visible, struck through, right beside the offer — and the only
              button in that section is <strong>Buy now</strong>. Buttons invert
              to white with a navy border on hover, so every CTA gives clear
              feedback.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="design-system"
        kicker="Visual Identity"
        title="A Calm, Trustworthy Design System"
        lead="Security products should feel steady. A soft sky blue carries the brand, deep navy carries authority, and one vivid blue highlights the words that matter."
      >
        <div className="cskit-swatches">
          {SWATCHES.map((s) => (
            <div className="cskit-swatch animate" key={s.hex}>
              <i style={{ background: s.hex }} />
              <div>
                <strong>{s.name}</strong>
                <span>{s.hex} · {s.use}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cskit-type">
          <div className="animate">
            <b style={{ fontWeight: 600 }}>Aa</b>
            <span><strong>Sharp Grotesk</strong> — headlines &amp; body; the brand font, self-hosted</span>
          </div>
          <div className="animate">
            <b style={{ fontWeight: 700 }}>Aa</b>
            <span><strong>Satoshi</strong> — form fields in the product mockups</span>
          </div>
          <div className="animate">
            <b style={{ fontWeight: 500 }}>Aa</b>
            <span><strong>Poppins</strong> — supporting UI labels</span>
          </div>
        </div>
      </Section>

      <Section
        id="responsive"
        tone="sbcs-section--tint"
        kicker="Responsive Design"
        title="Phone-First, Because Passwords Live on Phones"
        lead="Five breakpoints — including a custom 860px step for small laptops and large tablets — keep every section balanced at every width."
      >
        <ul className="sbcs-chips sbcs-chips--seo animate">
          {BREAKPOINTS.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="cskit-phones">
          <div className="animate">
            <PhoneShot src={`${IMG}/mobile-home.webp`} width={780} height={1688} alt="Logyn landing page on a phone" />
          </div>
          <div className="animate">
            <PhoneShot src={`${IMG}/mobile-full.webp`} width={312} height={4620} alt="Full Logyn landing page on a phone" scroll />
          </div>
          <div className="cskit-phones__note animate">
            <h3>Nothing lost on mobile</h3>
            <p>
              Headlines rescale across three type sizes, hard line breaks only
              appear on large screens, side-by-side sections stack, and the
              download panel reflows so both store buttons stay tappable. Hover
              the second phone to scroll the whole page.
            </p>
          </div>
        </div>
      </Section>

      <Section id="milestones" kicker="Key Achievements" title="Ten Milestones of the Build">
        <Milestones items={MILESTONES} />
      </Section>

      <Section id="tools" tone="sbcs-section--tint" kicker="Tools & Technology" title="Tools & Technology">
        <Tools groups={TOOLS} />
      </Section>

      <Section
        id="measurement"
        kicker="Evidence & Measurement"
        title="What We Can Measure"
        lead="Logyn was a pre-launch build. We report the work we delivered — not numbers we don't have."
      >
        <Measure verified={VERIFIED} notClaimed={NOT_CLAIMED} />
        <p className="sbcs-caption animate">
          Screenshots on this page are captures of the delivered build.
        </p>
      </Section>

      <Section id="final" tone="sbcs-section--dark" kicker="Final Impact" title="From a New Idea to a Page That Sells It">
        <p className="sbcs-body sbcs-body--dark animate">What the project delivered:</p>
        <FinalList items={FINAL_POINTS} />
      </Section>

      <MoreWork current="logyn" />

      <CaseCTA title="Launching a Product? Let's Build the Page That Sells It." text="From the first headline to the last button, designed to convert." />
    </article>
  );
}
