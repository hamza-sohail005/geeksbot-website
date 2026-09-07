import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Help Center",
  description:
    "Find answers to your questions about GeeksBot's services. Get help with projects, billing, technical support, and frequently asked questions.",
  alternates: { canonical: "/help-center" },
};

const categories = [
  {
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
    title: "Getting Started",
    text: "Everything you need to know to begin your project with us, from initial consultation to kickoff.",
    items: [
      "How to request a quote",
      "Our onboarding process",
      "Project timelines & milestones",
    ],
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    title: "Technical Support",
    text: "Get assistance with technical issues, bug reports, and post-launch modifications for your project.",
    items: [
      "Reporting bugs or issues",
      "Requesting changes after launch",
      "Server & hosting support",
    ],
  },
  {
    icon: (
      <>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </>
    ),
    title: "Billing & Payments",
    text: "Information about payment options, invoicing, billing inquiries, and our refund policy.",
    items: [
      "Payment methods we accept",
      "Invoice & billing inquiries",
      "Refund policy",
    ],
  },
];

const faqs = [
  {
    id: "help-timeline",
    q: "How long does it take to build a website?",
    a: "Depending on the complexity, a standard website takes 2-4 weeks. Larger projects like e-commerce platforms or custom web apps may take 6-12 weeks.",
  },
  {
    id: "help-maintenance",
    q: "Do you provide ongoing maintenance?",
    a: "Yes, we offer monthly maintenance plans that include security updates, bug fixes, performance monitoring, and content updates.",
  },
  {
    id: "help-revisions",
    q: "Can I request changes after the project is delivered?",
    a: "Absolutely. We offer a 30-day revision period after project delivery. Beyond that, changes can be made under our maintenance plans.",
  },
  {
    id: "help-tech",
    q: "What technologies do you work with?",
    a: "Our team works with React, Next.js, Vue.js, Node.js, Python, PHP, WordPress, Shopify, Flutter, and more.",
  },
  {
    id: "help-get-started",
    q: "How do I get started?",
    a: (
      <>
        Simply visit our{" "}
        <Link href="/contact" style={{ color: "#6c63ff", textDecoration: "underline" }}>
          Contact page
        </Link>{" "}
        or click &quot;Book a Call&quot; to schedule a free consultation. We
        will discuss your requirements and provide a detailed proposal.
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <PageHero title="Help Center" text="Find answers to your questions and get the support you need." />

      <section className="about-mission dm-light">
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">Support Topics</h4>
            </div>
            <h2 className="section-title__heading">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="section-title__text">
              Select a category below to find the information you need, or
              scroll down to browse our frequently asked questions.
            </p>
          </div>

          <div className="services-cards">
            {categories.map((category) => (
              <div className="s-cards animate" key={category.title}>
                <div className="services-icon">
                  <span className="services-icon-bg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {category.icon}
                    </svg>
                  </span>
                </div>
                <div className="services-card-content">
                  <h3 className="services-card-title">{category.title}</h3>
                  <p className="services-card-des">{category.text}</p>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {category.items.map((item) => (
                      <li key={item} style={{ color: "#b0b0b0", fontSize: "15px" }}>
                        -- {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title animate">
            <div className="about_sub-title-background">
              <h4 className="about__subtitle">FAQ</h4>
            </div>
            <h2 className="section-title__heading">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-title__text">
              Quick answers to the questions we hear most often. If you do
              not find what you are looking for, feel free to contact our
              support team.
            </p>
          </div>

          <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq) => (
              <details
                className="animate"
                id={faq.id}
                key={faq.q}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: 0, overflow: "hidden" }}
              >
                <summary style={{ padding: "20px 24px", cursor: "pointer", fontSize: "17px", fontWeight: 600, color: "#fff", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", userSelect: "none" }}>
                  {faq.q}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transition: "transform 0.3s ease" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div style={{ padding: "0 24px 20px 24px", color: "#b0b0b0", fontSize: "15px", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Still have questions? We&apos;re here to help.</h2>
            <p className="cta__text">
              Our support team is available Monday to Saturday, 9 AM - 6 PM
              (PKT). Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <div className="animate">
            <Link href="/contact" className="btn btn--white">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
