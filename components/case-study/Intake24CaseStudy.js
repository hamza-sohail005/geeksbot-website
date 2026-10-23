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
  ScoreRings,
  Vitals,
  WeightBars,
  Milestones,
  Tools,
  Measure,
  FinalList,
  MoreWork,
  CaseCTA,
} from "./CaseStudyKit";

const IMG = "/images/case-studies/intake24";
const DOMAIN = "intake24.org";

/* ---------------------------------------------------------------- data --- */

const STATS = [
  { value: 9, label: "Routed pages", sub: "Home, features, science, resources…" },
  { value: 31, label: "Vue components", sub: "Reusable, typed (TypeScript)" },
  { value: 95, label: "Lighthouse performance", sub: "Desktop, production build" },
  { text: "1.2s", label: "Largest Contentful Paint", sub: "Desktop lab test" },
  { value: 67, suffix: "%", label: "Lighter images", sub: "2.34 MB → 0.78 MB" },
  { value: 88, suffix: "%", label: "Smaller CSS", sub: "352 KB → 41 KB over the wire" },
  { text: "0ms", label: "Total Blocking Time", sub: "Desktop lab test" },
  { value: 10, label: "Country databases", sub: "6 live · 4 in development" },
];

const CHALLENGES = [
  { t: "Explain a Scientific Tool Simply", d: "A multiple-pass 24-hour dietary recall is a research method. The site had to make it click for a first-time visitor in seconds." },
  { t: "Two Very Different Audiences", d: "Researchers and survey teams evaluating the tool, and participants who just need to know it's quick and easy." },
  { t: "Prove Scientific Credibility", d: "Validation studies, publications, national-survey usage and university partners had to be visible, not buried." },
  { t: "Show the Product Without a Login", d: "Visitors needed to see what completing a recall actually looks like before trying the demo." },
  { t: "A Multi-Country Story", d: "Localised food databases across the UK, New Zealand, Australia, Portugal, Denmark, the UAE and more." },
  { t: "Fast & Accessible Everywhere", d: "Participants use phones, tablets and computers — the website had to match the product's accessibility promise." },
];

const LAYERS = [
  { t: "Information Architecture", d: "9 routes grouped around three questions: what is it, does it work, how do I use it." },
  { t: "Visual System", d: "Brand orange #EE672D, Rubik type, and a friendly illustration style that softens a scientific subject." },
  { t: "Component Library", d: "31 Vue 3 + Vuetify components — cards, carousels, timelines, feature rows — reused across every page." },
  { t: "Product Storytelling", d: "A 5-step walk-through built from real product UI, so visitors see the recall flow before they try it." },
  { t: "Credibility Layer", d: "Impact logos, topics & populations, country databases, publications and the science behind the method." },
  { t: "Conversion Paths", d: "'Try a Demo' and 'Contact Us' repeated at the natural decision points down every page." },
  { t: "Performance Pipeline", d: "Vite build with image minification and gzip pre-compression baked in." },
];

const BUILD_POINTS = [
  { t: "Hero that answers 'what is this?'", d: "One clear promise — \"Easy way to measure what people eat\" — plus a one-line definition and a demo button." },
  { t: "Why use Intake24?", d: "Four alternating feature rows: accuracy, convenience, portion estimation, and the smart search under the hood." },
  { t: "Here's how it works", d: "Five numbered steps, each paired with a screenshot of the real survey interface." },
  { t: "Impact & reach", d: "Organisations, research topics, populations and country databases — credibility in one scroll." },
];

const ARCH_PRIMARY = ["About", "Science Behind", "Features", "Resources", "Contact Us"];
const ARCH_SUB = ["Behind Intake24", "Publications", "Emailing Research", "Downloading Data"];

const RECALL_STEPS = [
  "Choose the time of the meal",
  "Add the foods & drinks consumed",
  "Estimate portions with photo prompts",
  "Answer custom questions",
  "Review & personalised feedback",
];

const PAGES = [
  { label: "Features", path: "/features", src: `${IMG}/page-features.webp`, w: 1008, h: 630, alt: "Intake24 features page", note: "A dedicated page for feature depth — nutrient output, localisation, open-source licensing — with downloadable sample CSV output for researchers." },
  { label: "Science Behind", path: "/science-behind", src: `${IMG}/page-science.webp`, w: 1008, h: 630, alt: "Intake24 science behind page", note: "Validation evidence presented plainly, linking straight through to the publications list for anyone who needs the citations." },
  { label: "About", path: "/about", src: `${IMG}/page-about.webp`, w: 1008, h: 630, alt: "Intake24 about page", note: "The origin story — Newcastle University and Food Standards Scotland — told as a responsive timeline with separate large- and small-screen layouts." },
  { label: "Resources", path: "/resources", src: `${IMG}/page-resources.webp`, w: 1008, h: 630, alt: "Intake24 resources page", note: "How-to guides for survey teams, including a step-by-step guide to downloading data." },
  { label: "Contact", path: "/contact-us", src: `${IMG}/page-contact.webp`, w: 1008, h: 630, alt: "Intake24 contact page", note: "A contact form that checks every required field and posts to the API, with clear success and error notifications." },
];

const TOPICS = ["Gestational diabetes", "Food insecurity", "Sarcopenia", "Mindful eating", "Type II diabetes", "School food standards", "Weight-loss maintenance"];
const POPULATIONS = ["Children", "Older adults", "Pregnant & post-partum women", "Athletes", "Patient groups", "General population"];
const COUNTRIES = ["United Kingdom", "New Zealand", "Australia", "Portugal", "Denmark", "UAE", "Japan*", "Indonesia*", "Malaysia*", "South Asia*"];

const MILESTONES = [
  "9-page marketing website designed and built",
  "31 reusable Vue 3 + Vuetify components",
  "5-step product walk-through from real UI",
  "Responsive timeline with separate desktop & mobile layouts",
  "Contact form with field checks & notifications",
  "Publications & science pages for researchers",
  "10 country food databases presented",
  "Image pipeline: 2.34 MB → 0.78 MB (−67%)",
  "Gzip pre-compression: JS −66%, CSS −88%",
  "Lighthouse desktop: 95 performance, 96 best practices",
];

const TOOLS = [
  { t: "Front-end", items: ["Vue 3", "Vuetify 3", "TypeScript", "Vue Router", "Pinia", "Sass"] },
  { t: "Build & quality", items: ["Vite", "vite-plugin-imagemin", "vite-plugin-compression", "ESLint", "Prettier", "vue-tsc"] },
  { t: "Forms & data", items: ["Axios", "vue3-notification"] },
  { t: "Design", items: ["Rubik", "Material Design Icons", "Custom illustration set"] },
];

const VERIFIED = [
  "Page & component count (from the codebase)",
  "Lighthouse lab scores of the production build",
  "Image savings — 34 assets, source vs. built",
  "Bundle sizes — raw vs. gzip",
  "Responsive layouts (screenshots in this page)",
  "Content: topics, populations, country databases",
];
const NOT_CLAIMED = [
  "Visitor or traffic growth",
  "Demo sign-ups or enquiries",
  "New research partnerships",
  "Search ranking changes",
  "Field (real-user) Core Web Vitals",
];

const FINAL_POINTS = [
  "A clear, friendly front door to a scientific tool",
  "Credibility made visible: studies, partners, publications",
  "The product shown, not just described",
  "A reusable Vue component system for future pages",
  "A build pipeline that ships 67% lighter imagery",
  "Desktop performance in the 90s",
];

/* ---------------------------------------------------------------- page --- */

export default function Intake24CaseStudy() {
  return (
    <article className="sbcs sbcs--intake">
      <CaseHero
        eyebrow="Geeks Bot · Client Case Study"
        title="Intake24"
        accent="Website"
        sub="Website Design & Front-End Development for an Open-Source Research Platform"
        lead="Intake24 is an open-source, self-completed dietary recall system used in studies from undergraduate projects to government national surveys. We designed and built its public website — turning a research method into a clear, credible, fast experience for researchers and participants alike."
        tags={["Website", "UI / UX", "Vue 3", "Vuetify", "Responsive", "Performance", "Content Structure"]}
        live={{ href: "https://intake24.org/", label: "Visit intake24.org" }}
        shot={{ src: `${IMG}/home-hero.webp`, w: 1296, h: 504, alt: "Intake24 homepage hero", domain: DOMAIN }}
        floats={["Lighthouse 95 · desktop", "Try a Demo →", "10 country databases"]}
        stats={STATS}
      />

      <Section id="challenge" tone="sbcs-section--tint" kicker="The Challenge" title="Making a Research Method Feel Easy">
        <blockquote className="sbcs-quote animate">
          &ldquo;Easy way to measure what people eat.&rdquo;
        </blockquote>
        <p className="sbcs-body animate">
          That headline is where the site ended up — but the starting point was
          a tool explained mostly in academic language. Intake24 is accurate,
          free for research where feasible, and used internationally. The
          website&apos;s job was to make all of that obvious to someone who has
          never heard of a 24-hour recall.
        </p>
        <CardGrid items={CHALLENGES} />
      </Section>

      <Framework
        id="strategy"
        kicker="Strategic Approach"
        title="Seven Layers, One Clear Story"
        lead="Each layer answers a question a visitor has — from 'what is this?' to 'can I trust it?' to 'how do I start?'."
        layers={LAYERS}
      />

      <Section
        id="website"
        tone="sbcs-section--tint"
        kicker="Homepage Design & Build"
        title="One Scroll From Curious to Convinced"
        lead="The homepage moves through definition, benefits, a product walk-through, social proof and a call to action — in that order, on purpose."
      >
        <div className="cskit-split">
          <div className="animate">
            <ScrollShot src={`${IMG}/home-full.webp`} width={720} height={4574} alt="Full Intake24 homepage" domain={DOMAIN} />
          </div>
          <ul className="cskit-points">
            {BUILD_POINTS.map((p) => (
              <li key={p.t} className="animate">
                <strong>{p.t}</strong>
                <span>{p.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="architecture"
        kicker="Website Architecture"
        title="Nine Routes, Built Around Three Questions"
        lead="What is Intake24? Does it work? How do I use it? Every page sits under one of those, so researchers can go deep while participants never get lost."
      >
        <div className="sbcs-arch animate">
          <div className="sbcs-arch__node sbcs-arch__node--root">Home</div>
          <div className="sbcs-arch__stem" />
          <div className="sbcs-arch__fan">
            {ARCH_PRIMARY.map((c) => (
              <span key={c} className="sbcs-arch__leaf">{c}</span>
            ))}
          </div>
          <div className="sbcs-arch__stem" />
          <ul className="sbcs-arch__utility">
            {ARCH_SUB.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
        <p className="sbcs-caption animate">
          Built with Vue Router, using a shared default layout (app bar + footer)
          and a catch-all route back to the homepage.
        </p>
      </Section>

      <Section
        id="walkthrough"
        tone="sbcs-section--tint"
        kicker="Product Storytelling"
        title="Showing the Recall, Step by Step"
        lead="Instead of describing the survey, the homepage shows it — five steps, each paired with real interface screens, alternating left and right as the visitor scrolls."
      >
        <ol className="sbcs-pipeline animate">
          {RECALL_STEPS.map((s, i) => (
            <li key={s}>
              <span className="sbcs-pipeline__n">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </li>
          ))}
        </ol>
        <div className="cskit-split cskit-split--flip">
          <div className="animate">
            <BrowserShot src={`${IMG}/how-it-works.webp`} width={864} height={1774} alt="Intake24 'Here's how it works' section" domain={DOMAIN} />
          </div>
          <ul className="cskit-points">
            <li className="animate">
              <strong>Real UI, not stock mockups</strong>
              <span>Meal times, food search, photo-based portion sizes, custom questions and the final review — the actual survey screens.</span>
            </li>
            <li className="animate">
              <strong>Zig-zag rhythm</strong>
              <span>Image and text swap sides on every step, so a long section still reads quickly. On mobile it collapses to a single column.</span>
            </li>
            <li className="animate">
              <strong>Data-driven section</strong>
              <span>Steps live in one typed array — adding or reordering a step is a one-line change.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section
        id="features"
        kicker="Feature Messaging"
        title="Why Use Intake24? — Four Reasons, Four Rows"
        lead="Accuracy comparable to face-to-face interviews, 15–20 minutes to complete, validated food photographs, and smart search with AI-powered prompts — each with its own illustration."
      >
        <div className="cskit-split">
          <div className="animate">
            <BrowserShot src={`${IMG}/features.webp`} width={864} height={995} alt="Intake24 'Why use Intake24' section" domain={DOMAIN} />
          </div>
          <ul className="cskit-points">
            <li className="animate"><strong>As accurate as face-to-face recall</strong><span>The scientific claim first — it&apos;s what researchers care about most.</span></li>
            <li className="animate"><strong>Online, convenient &amp; accessible</strong><span>No travel, 15–20 minutes, any device, WCAG 2.0 AA compliant product.</span></li>
            <li className="animate"><strong>Estimation made easy</strong><span>Validated portion photographs instead of guesswork.</span></li>
            <li className="animate"><strong>Built with brains</strong><span>Synonym search, AI-powered &ldquo;commonly eaten together&rdquo; prompts, automatic coding to national databases.</span></li>
          </ul>
        </div>
      </Section>

      <Section
        id="pages"
        tone="sbcs-section--tint"
        kicker="Inner Pages"
        title="Depth for Researchers, Without Clutter"
        lead="Each inner page goes one level deeper for the people who need it. Pick a page to see it."
      >
        <ShotTabs shots={PAGES} domain={DOMAIN} />
      </Section>

      <Section
        id="impact"
        kicker="Credibility & Reach"
        title="Proof, Presented Up Front"
        lead="Intake24 is used from undergraduate studies to government national surveys. The impact section makes that reach scannable: organisations, topics, populations, countries."
      >
        <div className="cskit-split">
          <div className="animate">
            <BrowserShot src={`${IMG}/impact.webp`} width={864} height={1023} alt="Intake24 impact section" domain={DOMAIN} />
          </div>
          <div>
            <p className="sbcs-kicker animate">Research topics</p>
            <ul className="sbcs-chips animate">
              {TOPICS.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="sbcs-kicker animate" style={{ marginTop: 28 }}>Populations</p>
            <ul className="sbcs-chips animate">
              {POPULATIONS.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="sbcs-kicker animate" style={{ marginTop: 28 }}>Localised food databases</p>
            <ul className="sbcs-chips sbcs-chips--seo animate">
              {COUNTRIES.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="sbcs-caption animate">* in development at the time of the build.</p>
          </div>
        </div>
      </Section>

      <Section
        id="responsive"
        tone="sbcs-section--tint"
        kicker="Responsive Design"
        title="Built for the Phones Participants Actually Use"
        lead="Recalls are often completed on a phone, so the website was designed to read just as well there — stacked layouts, a collapsing app bar, and full-width calls to action."
      >
        <div className="cskit-phones">
          <div className="animate">
            <PhoneShot src={`${IMG}/mobile-home.webp`} width={780} height={1688} alt="Intake24 homepage on a phone" />
          </div>
          <div className="animate">
            <PhoneShot src={`${IMG}/mobile-full.webp`} width={312} height={6891} alt="Full Intake24 homepage on a phone" scroll />
          </div>
          <div className="cskit-phones__note animate">
            <h3>Same story, one column</h3>
            <p>
              The hero centres and stacks, the zig-zag walkthrough becomes a
              single readable column, and the About timeline swaps to a
              purpose-built small-screen component rather than squeezing the
              desktop version. Hover or tap the second phone to scroll the full page.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="results"
        tone="sbcs-section--dark"
        kicker="Results · Performance"
        title="Fast Where It Counts"
        lead="Lighthouse 12 lab test of the production build (desktop preset), served with the build's own gzip files."
      >
        <ScoreRings
          scores={[
            { score: 95, label: "Performance" },
            { score: 96, label: "Best Practices" },
            { score: 88, label: "Accessibility" },
            { score: 83, label: "SEO" },
          ]}
        />
        <Vitals
          items={[
            { value: "1.1s", label: "First Contentful Paint" },
            { value: "1.2s", label: "Largest Contentful Paint" },
            { value: "0ms", label: "Total Blocking Time" },
            { value: "0.024", label: "Cumulative Layout Shift" },
          ]}
        />
        <p className="sbcs-note sbcs-note--dark animate">
          Transparency note: on Lighthouse&apos;s throttled <strong>mobile</strong> profile
          the same build scores 60 for performance (LCP 4.2s). Prioritising the
          hero image, trimming the Vuetify bundle and replacing a third-party
          polyfill script are the clear next steps — reported here as-is.
        </p>
      </Section>

      <Section
        id="payload"
        kicker="Results · Payload"
        title="Shipping Less to Every Visitor"
        lead="Image minification and gzip pre-compression were built into the Vite pipeline, so every deploy is optimised automatically — no manual export step to forget."
      >
        <WeightBars
          rows={[
            { label: "Images (34 assets)", before: 2345, after: 777, beforeLabel: "2.34 MB source", afterLabel: "0.78 MB shipped" },
            { label: "JavaScript bundle", before: 405, after: 138, beforeLabel: "405 KB", afterLabel: "138 KB gzip" },
            { label: "CSS bundle", before: 352, after: 41, beforeLabel: "352 KB", afterLabel: "41 KB gzip" },
          ]}
        />
        <p className="sbcs-caption animate">
          Measured from the project&apos;s source assets and its production build
          output. Bars share one scale per row group.
        </p>
      </Section>

      <Section id="milestones" tone="sbcs-section--tint" kicker="Key Achievements" title="Ten Milestones of the Build">
        <Milestones items={MILESTONES} />
      </Section>

      <Section id="tools" kicker="Tools & Technology" title="Tools & Technology">
        <Tools groups={TOOLS} />
      </Section>

      <Section
        id="measurement"
        tone="sbcs-section--tint"
        kicker="Evidence & Measurement"
        title="What We Can Measure"
        lead="Like all our case studies, this one separates what we measured from what we can't show."
      >
        <Measure verified={VERIFIED} notClaimed={NOT_CLAIMED} />
        <p className="sbcs-caption animate">
          Screenshots on this page are captures of the delivered build. Scientific
          claims about Intake24 (accuracy, usage, localisation) are the
          platform&apos;s own, as published on the site.
        </p>
      </Section>

      <Section id="final" tone="sbcs-section--dark" kicker="Final Impact" title="From Research Method to a Website People Understand">
        <p className="sbcs-body sbcs-body--dark animate">What the project delivered:</p>
        <FinalList items={FINAL_POINTS} />
      </Section>

      <MoreWork current="intake24" />

      <CaseCTA title="Got a Complex Product That Needs a Simple Story?" text="We design and build websites that make hard things easy to understand." />
    </article>
  );
}
