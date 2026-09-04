// Single source of truth for "Geek", the site's AI assistant (app/api/chat/route.js).
// Hand-trimmed from the actual page content so the assistant never answers from
// generic training knowledge for anything factual about GeeksBot.

export const SITE_ROUTES = [
  "/",
  "/about",
  "/ai-automation-services",
  "/ai-chatbot-development",
  "/app-development",
  "/web-development",
  "/contact",
  "/portfolio",
  "/portfolio#our-work",
  "/portfolio#case-studies",
  "/faqs",
  "/help-center",
  "/cookie-policy",
  "/privacy-policy",
  "/terms",
  // Item-level jump targets - land on the page (if needed) and highlight
  // the specific FAQ/project/case-study, instead of just the whole page.
  "/faqs#faq-services",
  "/faqs#faq-timeline",
  "/faqs#faq-pricing",
  "/faqs#faq-clients",
  "/faqs#faq-support",
  "/faqs#faq-get-started",
  "/help-center#help-timeline",
  "/help-center#help-maintenance",
  "/help-center#help-revisions",
  "/help-center#help-tech",
  "/help-center#help-get-started",
  "/portfolio#portfolio-retail-store",
  "/portfolio#portfolio-saas-dashboard",
  "/portfolio#portfolio-logistics-site",
  "/portfolio#portfolio-fintech-app",
  "/portfolio#case-retail-scaling",
  "/portfolio#case-fintech-relaunch",
  "/portfolio#case-chatbot-support",
];

const faqs = [
  {
    id: "faq-services",
    q: "What services does GeeksBot offer?",
    a: "Four core services: AI chatbot development, AI automation services, web application development, and mobile app development.",
  },
  {
    id: "faq-timeline",
    q: "How long does a typical project take?",
    a: "A focused chatbot or automation build can take a few weeks; a full web or mobile application usually takes longer. A realistic timeline is shared during the discovery phase before any work begins.",
  },
  {
    id: "faq-pricing",
    q: "How does pricing work?",
    a: "Every project gets a custom quote based on scope, complexity, and timeline. Most engagements follow a 50% upfront, 50% on completion structure, with milestone based billing available for larger projects.",
  },
  {
    id: "faq-clients",
    q: "Do you work with startups or only established businesses?",
    a: "Both — startups building their first product and established businesses looking to modernize, automate, or scale an existing one.",
  },
  {
    id: "faq-support",
    q: "What happens after my project launches?",
    a: "GeeksBot provides ongoing support, monitoring, and updates so the chatbot, automation, website, or app keeps performing as the business grows.",
  },
  {
    id: "faq-get-started",
    q: "How do I get started?",
    a: "Book a free consultation through the Contact page (/contact) to talk through goals, current setup, and a realistic roadmap before any commitment.",
  },
];

const about = {
  founded: "Founded by Arsalan Pervez and Ashar Shahbaz, both Top Rated professionals on Upwork.",
  team: [
    { name: "Arsalan Pervez", role: "Co-Founder" },
    { name: "Ashar Shahbaz", role: "Co-Founder" },
  ],
  differentiators: [
    "Why Businesses Choose GeeksBot: listens to goals, understands the industry, recommends solutions that create real value instead of just delivering projects.",
    "Experience You Can Trust: has delivered websites, business applications, AI chatbots, automation systems, and mobile apps that meet modern business requirements.",
    "Honest, Transparent Communication: clients always know what stage their project is at and why.",
    "Built To Grow With Your Business: every solution is built on a foundation that can scale.",
  ],
};

const services = [
  {
    title: "AI Chatbot Development",
    path: "/ai-chatbot-development",
    summary:
      "Custom AI chatbots for customer support, lead generation, and internal operations — integrated with websites, CRMs, and ecommerce platforms.",
    features: [
      "Custom AI Chatbot Development",
      "AI Chatbot Integration",
      "Customer Support Chatbots",
      "Enterprise AI Chatbot Development",
      "AI Chatbots for Ecommerce",
    ],
    process: ["Discovery", "Design", "Development", "Launch"],
  },
  {
    title: "AI Automation Services",
    path: "/ai-automation-services",
    summary:
      "Intelligent automation systems that streamline business processes, reduce manual effort, and integrate with existing software.",
    features: [
      "Custom AI Application Development",
      "AI Data Processing Solutions",
      "AI SaaS Development",
      "AI API Integration",
      "Workflow Automation Development",
    ],
    process: ["Discovery", "Strategy and Development", "Testing and Integration", "Launch and Continuous Improvement"],
  },
  {
    title: "Mobile App Development",
    path: "/app-development",
    summary:
      "Custom iOS, Android, and cross-platform mobile applications for startups, growing businesses, and enterprises.",
    features: [
      "Custom Mobile Application Development",
      "iOS App Development",
      "Android App Development",
      "Cross Platform App Development",
      "App Maintenance and Support",
    ],
    process: ["Discovery", "Design", "Development", "Launch"],
  },
  {
    title: "Web App Development",
    path: "/web-development",
    summary:
      "Secure, scalable web applications for startups, ecommerce, and enterprise businesses, including Progressive Web Apps and Shopify solutions.",
    features: [
      "Custom Web App Development Services",
      "Progressive Web App Development Services",
      "Enterprise Web App Development Services",
      "Shopify Web App Development Services",
      "Web Application Maintenance and Support",
    ],
    process: ["Discovery", "Design", "Development", "Launch"],
  },
];

const contact = {
  address: "C158, 1, Block 9 Gulshan-e-Iqbal, Karachi, KHI 75300, Pakistan",
  phone: "+92 (323) 201-3083",
  email: "geeksbotdev@gmail.com",
};

const portfolio = {
  projects: [
    { id: "portfolio-retail-store", title: "Online Store For A Retail Brand", category: "Web Apps", desc: "A fast, secure online store built to increase conversions." },
    { id: "portfolio-saas-dashboard", title: "Dashboard For A SaaS Company", category: "Web Apps", desc: "A live analytics dashboard so teams can see what's happening in real time." },
    { id: "portfolio-logistics-site", title: "Website For A Logistics Company", category: "Web Apps", desc: "A modern company website with a built-in blog and fast load times." },
    { id: "portfolio-fintech-app", title: "App Redesign For A Fintech Brand", category: "Mobile Apps", desc: "A full mobile app redesign that improved usability and retention." },
  ],
  caseStudies: [
    { id: "case-retail-scaling", title: "Scaling A Retail Platform For Peak Season", tag: "Web Apps", desc: "Rebuilt a growing retailer's checkout flow to handle heavy traffic without losing a sale." },
    { id: "case-fintech-relaunch", title: "Relaunching A Fintech App Customers Actually Trust", tag: "Mobile Apps", desc: "A ground-up redesign that improved onboarding completion and cut support tickets." },
    { id: "case-chatbot-support", title: "Automating Support Without Losing The Human Touch", tag: "Chatbots", desc: "An AI chatbot that resolves most incoming questions while handing off the tricky ones seamlessly." },
  ],
};

const helpCenter = {
  categories: [
    { title: "Getting Started", items: ["How to request a quote", "Our onboarding process", "Project timelines & milestones"] },
    { title: "Technical Support", items: ["Reporting bugs or issues", "Requesting changes after launch", "Server & hosting support"] },
    { title: "Billing & Payments", items: ["Payment methods we accept", "Invoice & billing inquiries", "Refund policy"] },
  ],
  faqs: [
    { id: "help-timeline", q: "How long does it take to build a website?", a: "A standard website takes 2-4 weeks; larger projects like e-commerce platforms or custom web apps may take 6-12 weeks." },
    { id: "help-maintenance", q: "Do you provide ongoing maintenance?", a: "Yes — monthly maintenance plans including security updates, bug fixes, performance monitoring, and content updates." },
    { id: "help-revisions", q: "Can I request changes after the project is delivered?", a: "Yes, there's a 30-day revision period after delivery. Beyond that, changes are handled under a maintenance plan." },
    { id: "help-tech", q: "What technologies do you work with?", a: "React, Next.js, Vue.js, Node.js, Python, PHP, WordPress, Shopify, Flutter, and more." },
    { id: "help-get-started", q: "How do I get started?", a: "Visit the Contact page (/contact) or click \"Book a Call\" to schedule a free consultation — GeeksBot will discuss requirements and provide a detailed proposal." },
  ],
  supportHours: "Support team is available Monday to Saturday, 9 AM - 6 PM (PKT), with a reply within 24 hours.",
};

export const KNOWLEDGE_BASE = { faqs, about, services, contact, portfolio, helpCenter };

export function formatKnowledgeBaseForPrompt() {
  const lines = [];

  lines.push("## Company");
  lines.push(about.founded);
  lines.push(`Team: ${about.team.map((t) => `${t.name} (${t.role})`).join(", ")}`);
  lines.push("Why choose GeeksBot:");
  for (const d of about.differentiators) lines.push(`- ${d}`);

  lines.push("\n## Services");
  for (const s of services) {
    lines.push(`### ${s.title} (${s.path})`);
    lines.push(s.summary);
    lines.push(`Includes: ${s.features.join(", ")}`);
    lines.push(`Process: ${s.process.join(" → ")}`);
  }

  lines.push("\n## FAQs");
  lines.push("(each can be jumped to and highlighted directly with navigateTo using the given path)");
  for (const f of faqs) lines.push(`Q: ${f.q}\nA: ${f.a}\n(jump: /faqs#${f.id})`);

  lines.push("\n## Contact");
  lines.push(`Address: ${contact.address}`);
  lines.push(`Phone: ${contact.phone}`);
  lines.push(`Email: ${contact.email}`);
  lines.push("Contact page: /contact");
  lines.push(`Support hours: ${helpCenter.supportHours}`);

  lines.push("\n## Portfolio (see /portfolio)");
  lines.push("(each can be jumped to and highlighted directly with navigateTo using the given path)");
  for (const p of portfolio.projects) lines.push(`- [${p.category}] ${p.title}: ${p.desc} (jump: /portfolio#${p.id})`);
  lines.push("Case studies:");
  for (const c of portfolio.caseStudies) lines.push(`- [${c.tag}] ${c.title}: ${c.desc} (jump: /portfolio#${c.id})`);

  lines.push("\n## Help Center (see /help-center)");
  for (const c of helpCenter.categories) lines.push(`- ${c.title}: ${c.items.join("; ")}`);
  lines.push("FAQs (each can be jumped to and highlighted directly with navigateTo using the given path):");
  for (const f of helpCenter.faqs) lines.push(`Q: ${f.q}\nA: ${f.a}\n(jump: /help-center#${f.id})`);

  return lines.join("\n");
}
