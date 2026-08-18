# GeeksBot — Next.js Conversion

This is the Next.js (App Router) scaffold for the GeeksBot website, converted
from the original static HTML/CSS project.

## What's done

- **Project structure**: every original page now has a matching route
  (`about.html` → `/about`, `contact.html` → `/contact`, etc.) — no `.htaccess`
  rewrite rules needed, Next.js handles clean URLs natively.
- **Shared layout**: `Header`, `Footer`, and the sticky-scroll behavior are
  built once as components (`components/Header.js`, `components/Footer.js`,
  `components/ScrollEffects.js`) and used across every page via
  `app/layout.js` — instead of being copy-pasted into 10+ HTML files.
- **Fully working pages**: Home (`app/page.js`) and About (`app/about/page.js`)
  are completely converted, including the animated stat counters
  (`components/CountUp.js`) and mission/vision/values sections.
- **Working email integration**: the Contact page (`app/contact/page.js` +
  `components/ContactForm.js`) now actually sends an email when submitted,
  via **EmailJS** (sent directly from the browser, no backend server needed).
  Previously the form had `action="#"` and did nothing.
- **SEO metadata migrated**: every page's `<meta>`, Open Graph, and Twitter
  tags now live in Next.js's `metadata` export, which is stronger than static
  HTML because it can generate metadata per-page (and later, per blog post)
  dynamically.
- **Remaining pages scaffolded**: `web-development`, `app-development`,
  `digital-marketing`, `seo-optimization`, `ui-ux-design`, `features`,
  `help-center`, `privacy-policy`, and `terms` all exist as real routes with
  correct titles/descriptions and the shared page hero — their detailed body
  content still needs to be ported over (see "Finishing the remaining pages"
  below).

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in real EmailJS credentials
npm run dev
```

Open http://localhost:3000

## Email setup (required for the contact form to work)

The contact form uses [EmailJS](https://www.emailjs.com/) to send email
straight from the browser — no server/API route or SMTP credentials needed.

Fill in `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

All four values come from the [EmailJS dashboard](https://dashboard.emailjs.com/admin):

1. **Email Services** → connect the `geeksbotdev@gmail.com` Gmail account →
   copy its Service ID into `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.
2. **Email Templates** → create the admin notification template (To Email:
   `geeksbotdev@gmail.com`, Reply To: `{{from_email}}`) → copy its Template ID
   into `NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID`.
3. **Email Templates** → create the auto-reply template (To Email:
   `{{from_email}}`) → copy its Template ID into
   `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID`.
4. **Account** → **General** → copy the Public Key into
   `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

These `NEXT_PUBLIC_*` variables are bundled into the client-side JS (that's
required for EmailJS to work from the browser) — this is expected and safe;
EmailJS's Public Key is designed to be exposed this way, and abuse is
mitigated by EmailJS's per-account request limits and domain restrictions
(configurable under Account → Security).

## Images

The original HTML referenced an `images/` folder (hero image, about photos,
icons, logo) that wasn't part of the upload. Drop those into
`public/images/` using the same filenames referenced in the code
(e.g. `GeeksBot-Full.png`, `hero-img.webp`, `about-01.png`) and they'll work
immediately — no code changes needed.

## Finishing the remaining pages

`app/page.js` (Home) and `app/about/page.js` are done end-to-end and are the
reference pattern. Every other page currently has its hero + correct SEO
metadata, with a `TODO` comment marking where to continue. To finish a page:

1. Open the matching original HTML file (e.g. `web-development.html`).
2. Copy each `<section>` block after the page hero into the corresponding
   `page.js` file.
3. Convert as you go:
   - `class="..."` → `className="..."`
   - `<a href="...">` → `<Link href="...">` (import from `"next/link"`)
   - `<img src="...">` → `<Image src="..." width={} height={} alt="..." />`
     (import from `"next/image"`)
   - Inline `<script>` blocks (animations, counters, toggles) become small
     client components like `components/CountUp.js` or
     `components/ScrollEffects.js` — mark them `"use client"` at the top.

## Content from your writer (captions, images, blog posts)

Right now content is hardcoded into JSX, same as it was hardcoded into HTML.
Once your content writer is sending ongoing updates, it's worth moving
page copy — especially blog posts — into markdown files or a lightweight
headless CMS (e.g. Sanity, Contentful) so new content doesn't require a code
change and redeploy every time. Happy to set that up as a next step once the
static conversion is complete.
