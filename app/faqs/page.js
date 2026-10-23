import { BOOKING_URL } from "@/data/site";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about working with GeeksBot, from project timelines and pricing to support and the services we offer.",
  alternates: { canonical: "/faqs" },
};

const faqs = [
  {
    id: "faq-services",
    q: "What services does GeeksBot offer?",
    a: "We focus on five core services: AI chatbot development, AI automation services, web application development, mobile app development, and SEO optimization. We don't spread ourselves thin across unrelated services, so every project gets our full attention.",
  },
  {
    id: "faq-timeline",
    q: "How long does a typical project take?",
    a: "It depends on scope. A focused chatbot or automation build can take a few weeks, while a full web or mobile application usually takes longer. We share a realistic timeline during the discovery phase before any work begins.",
  },
  {
    id: "faq-pricing",
    q: "How does pricing work?",
    a: "Every project gets a custom quote based on scope, complexity, and timeline. Most engagements follow a 50% upfront, 50% on completion structure, with milestone based billing available for larger projects.",
  },
  {
    id: "faq-clients",
    q: "Do you work with startups or only established businesses?",
    a: "Both. We work with startups building their first product and established businesses looking to modernize, automate, or scale an existing one.",
  },
  {
    id: "faq-support",
    q: "What happens after my project launches?",
    a: "We don't disappear after launch. Our team provides ongoing support, monitoring, and updates so your chatbot, automation, website, or app keeps performing as your business grows.",
  },
  {
    id: "faq-get-started",
    q: "How do I get started?",
    a: "Book a free consultation through our Contact page. We'll talk through your goals, current setup, and what a realistic roadmap looks like before any commitment is made.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        text="Answers to the questions we hear most often from businesses considering GeeksBot."
      />

      <section className="faq dm-light">
        <div className="container">
          <div className="faq__list">
            {faqs.map((item, i) => (
              <div className="faq__item animate" id={item.id} key={item.q}>
                <span className="faq__index">{String(i + 1).padStart(2, "0")}</span>
                <div className="faq__body">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Still Have Questions?</h2>
            <p className="cta__text">
              Our team is happy to walk you through anything that is not
              covered here. Let&apos;s talk about your project.
            </p>
          </div>
          <div className="animate">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">
              Book a Call Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
