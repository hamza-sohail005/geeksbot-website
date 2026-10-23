import { BOOKING_URL } from "@/data/site";
import PageHero from "@/components/PageHero";
import ServiceCoreVisual from "@/components/ServiceCoreVisual";

const whyGeeksbot = [
  { icon: "target", title: "Business Ready", text: "AI shaped around your real business needs." },
  { icon: "message", title: "Natural Interaction", text: "Conversations that feel human and on-brand." },
  { icon: "clock", title: "Always Available", text: "Steady support for customers, around the clock." },
  { icon: "spark", title: "Actionable Intelligence", text: "Turns chats into leads, insight and action." },
];

export const metadata = {
  title: "AI Chatbot Development Service | Custom AI Chatbots for Business",
  description:
    "Build intelligent AI chatbots for your website with Geeks Bot. We provide custom AI chatbot development, chatbot integration, and enterprise chatbot solutions for businesses.",
  alternates: { canonical: "/ai-chatbot-development" },
};

const features = [
  "Custom AI Chatbot Development",
  "AI Chatbot Integration",
  "Customer Support Chatbots",
  "Enterprise AI Chatbot Development",
  "AI Chatbots for Ecommerce",
];

const process = [
  {
    title: "Discovery",
    text: "We begin by understanding your business, customers, and goals. Our team identifies the right chatbot solution based on your industry, workflow, and customer needs.",
  },
  {
    title: "Design",
    text: "Next, we create conversation flows and chatbot experiences that feel natural, helpful, and aligned with your brand. Every chatbot is designed to provide clear and meaningful interactions.",
  },
  {
    title: "Development",
    text: "Our chatbot developers build secure and scalable AI chatbot solutions using modern artificial intelligence and generative AI technologies. We integrate your chatbot with websites, CRMs, ecommerce platforms, and other business tools.",
  },
  {
    title: "Launch",
    text: "Before deployment, every chatbot is carefully tested for accuracy, performance, and user experience. After launch, we continue monitoring and optimizing your chatbot to ensure it delivers the best results.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="AI Chatbot Development Service"
        text="Build intelligent AI chatbots that automate customer support, engage visitors, and help your business grow. At Geeks Bot, we create custom AI chatbot solutions for websites, ecommerce stores, and enterprises."
        parent={{ label: "Services", href: "/" }}
      />

      <section className="service-detail dm-light">
        <div className="container">
          <div className="service-detail__wrapper">
            <div className="service-detail__content animate">
              <h2>Build Intelligent AI Chatbot Solutions for Your Business</h2>
              <p>
                Our AI chatbot development services help businesses automate
                conversations while delivering fast and accurate responses to
                customers. Whether you need a business chatbot for lead
                generation, customer support, or internal operations, our
                experienced chatbot developers build solutions tailored to
                your goals.
              </p>
              <p>
                As a trusted chatbots development company, we design AI
                powered chatbots that understand customer intent, answer
                questions naturally, and connect with your existing business
                systems.
              </p>
              <ul className="service-detail__list">
                {features.map((feature) => (
                  <li key={feature}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22 4 12 14.01 9 11.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary header-btn">
                Book a Call Today
              </a>
            </div>
            <ServiceCoreVisual
              benefits={whyGeeksbot}
              flowLabel="Why choose GeeksBot for AI chatbot development"
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-title animate">
            <h2 className="section-title__heading">Our AI Chatbot Development Process</h2>
          </div>
          <div className="process__grid">
            {process.map((step) => (
              <div className="process__card animate" key={step.title}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__content animate">
            <h2 className="cta__title">Ready to Build Your AI Chatbot?</h2>
            <p className="cta__text">
              Transform your customer experience with a custom AI chatbot
              built specifically for your business. Let&apos;s build an
              intelligent chatbot that saves time, improves customer
              satisfaction, and helps your business grow.
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
