import Link from "next/link";
import PageHero from "@/components/PageHero";
import LegalSection, { legalStyles } from "@/components/LegalSection";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how GeeksBot collects, uses, and protects your personal data. Read our privacy policy covering cookies, data retention, and your rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" text="Your privacy matters to us. Learn how we collect, use, and protect your data." />

      <section>
        <div style={legalStyles.wrapper}>
          <p style={legalStyles.updated}>Last updated: March 2026</p>

          <LegalSection title="1. Information We Collect">
            <p style={legalStyles.paragraph}>
              At GeeksBot, we collect information that you voluntarily provide
              to us when you interact with our website and services. This
              includes personal information submitted through our contact
              forms, project inquiry forms, and newsletter sign-up fields.
            </p>
            <p style={legalStyles.paragraph}>
              The types of personal information we may collect include:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>Full name</li>
              <li style={legalStyles.listItem}>Email address</li>
              <li style={legalStyles.listItem}>Phone number</li>
              <li style={legalStyles.listItem}>Company name and job title</li>
              <li style={legalStyles.listItem}>
                Project details and requirements shared through inquiry forms
              </li>
            </ul>
            <p style={legalStyles.paragraph}>
              We also automatically collect certain usage data when you visit
              our website, including your IP address, browser type, operating
              system, referring URLs, pages viewed, time spent on pages, and
              other diagnostic data. This information is gathered through
              cookies and similar tracking technologies to help us understand
              how visitors use our site.
            </p>
          </LegalSection>

          <LegalSection title="2. How We Use Your Information">
            <p style={legalStyles.paragraph}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                To provide, operate, and maintain our IT services and digital
                solutions
              </li>
              <li style={legalStyles.listItem}>
                To communicate with you about project inquiries, proposals,
                and ongoing work
              </li>
              <li style={legalStyles.listItem}>
                To send you updates, newsletters, and marketing communications
                (with your consent)
              </li>
              <li style={legalStyles.listItem}>
                To improve our website experience, content, and service
                offerings
              </li>
              <li style={legalStyles.listItem}>
                To analyze website traffic and user behavior for optimization
                purposes
              </li>
              <li style={legalStyles.listItem}>
                To respond to your questions, comments, and support requests
              </li>
              <li style={legalStyles.listItem}>
                To detect, prevent, and address technical issues or security
                threats
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Data Protection">
            <p style={legalStyles.paragraph}>
              We take the security of your personal data seriously and
              implement industry-standard security measures to protect it
              from unauthorized access, alteration, disclosure, or
              destruction. Our website uses SSL (Secure Sockets Layer)
              encryption to ensure that all data transmitted between your
              browser and our servers remains private and secure.
            </p>
            <p style={legalStyles.paragraph}>
              Your data is stored on secure servers with restricted access
              controls. We regularly review and update our security practices
              to align with current industry standards. While no method of
              electronic transmission or storage is completely secure, we
              strive to use commercially acceptable means to protect your
              personal information.
            </p>
          </LegalSection>

          <LegalSection title="4. Cookies">
            <p style={legalStyles.paragraph}>
              Our website uses cookies — small text files stored on your
              device — to enhance your browsing experience and help us
              analyze site traffic. Cookies allow us to remember your
              preferences, understand how you navigate our site, and improve
              our content and functionality accordingly.
            </p>
            <p style={legalStyles.paragraph}>We use the following types of cookies:</p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Essential Cookies:</strong>{" "}
                Required for basic site functionality, such as page navigation
                and secure access.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Analytics Cookies:</strong>{" "}
                Third-party cookies from Google Analytics that help us
                understand visitor behavior, page views, and traffic sources.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Preference Cookies:</strong>{" "}
                Used to remember your settings and preferences for a more
                personalized experience.
              </li>
            </ul>
            <p style={legalStyles.paragraph}>
              You can control or disable cookies through your browser
              settings. Please note that disabling certain cookies may affect
              the functionality of our website.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-Party Services">
            <p style={legalStyles.paragraph}>
              We may use third-party service providers to assist us in
              operating our website and delivering our services. These
              providers include, but are not limited to:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Google Analytics:</strong>{" "}
                For tracking and analyzing website traffic and user behavior.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Hosting Providers:</strong>{" "}
                For securely hosting our website and storing data.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>
                  Email Service Providers:
                </strong>{" "}
                For managing communications and newsletters.
              </li>
            </ul>
            <p style={legalStyles.paragraph}>
              These third-party services have their own privacy policies and
              may collect information as part of their operations. We
              encourage you to review their respective policies. We want to
              make it clear that we do not sell, trade, or rent your personal
              information to any third party under any circumstances.
            </p>
          </LegalSection>

          <LegalSection title="6. Your Rights">
            <p style={legalStyles.paragraph}>
              You have certain rights regarding the personal data we hold
              about you. These include the right to:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                Request access to the personal data we have collected about
                you
              </li>
              <li style={legalStyles.listItem}>
                Request correction of any inaccurate or incomplete personal
                data
              </li>
              <li style={legalStyles.listItem}>
                Request deletion of your personal data from our systems
              </li>
              <li style={legalStyles.listItem}>
                Withdraw consent for marketing communications at any time
              </li>
              <li style={legalStyles.listItem}>
                Object to the processing of your personal data in certain
                circumstances
              </li>
            </ul>
            <p style={legalStyles.paragraph}>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@geeksbot.com" style={legalStyles.link}>
                info@geeksbot.com
              </a>
              . We will respond to your request within a reasonable timeframe
              and in accordance with applicable data protection laws.
            </p>
          </LegalSection>

          <LegalSection title="7. Data Retention">
            <p style={legalStyles.paragraph}>
              We retain your personal data only for as long as is necessary
              to fulfill the purposes for which it was collected, including
              satisfying any legal, accounting, or reporting requirements.
              The retention period may vary depending on the context of the
              data and our obligations.
            </p>
            <p style={legalStyles.paragraph}>
              When personal data is no longer required for business purposes,
              we will securely delete or anonymize it. If you request the
              deletion of your data, we will process your request promptly,
              subject to any legal obligations that may require us to retain
              certain information.
            </p>
          </LegalSection>

          <LegalSection title="8. Children's Privacy">
            <p style={legalStyles.paragraph}>
              Our services are not directed to individuals under the age of
              18. We do not knowingly collect personal information from
              children. If we become aware that we have inadvertently
              gathered personal data from a child under 18, we will take
              immediate steps to delete that information from our records.
              If you are a parent or guardian and believe your child has
              provided us with personal data, please contact us at{" "}
              <a href="mailto:info@geeksbot.com" style={legalStyles.link}>
                info@geeksbot.com
              </a>{" "}
              so we can take appropriate action.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to This Policy">
            <p style={legalStyles.paragraph}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technologies, legal requirements, or
              other factors. When we make changes, we will revise the
              &quot;Last updated&quot; date at the top of this page. We
              encourage you to review this policy periodically to stay
              informed about how we are protecting your information.
            </p>
            <p style={legalStyles.paragraph}>
              Your continued use of our website and services after any
              modifications to this Privacy Policy constitutes your
              acceptance of the updated terms.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact Us">
            <p style={legalStyles.paragraph}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please do not hesitate to
              reach out to us:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                Email:{" "}
                <a href="mailto:info@geeksbot.com" style={legalStyles.link}>
                  info@geeksbot.com
                </a>
              </li>
              <li style={legalStyles.listItem}>
                Visit our{" "}
                <Link href="/contact" style={legalStyles.link}>
                  Contact page
                </Link>{" "}
                for additional ways to get in touch
              </li>
            </ul>
            <p style={legalStyles.paragraph}>
              We are committed to resolving any privacy-related issues
              promptly and transparently.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
