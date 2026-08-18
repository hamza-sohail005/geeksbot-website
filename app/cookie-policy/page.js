import Link from "next/link";
import PageHero from "@/components/PageHero";
import LegalSection, { legalStyles } from "@/components/LegalSection";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Learn how GeeksBot uses cookies and similar technologies on our website, and how you can manage your cookie preferences.",
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return (
    <>
      <PageHero title="Cookie Policy" text="How we use cookies and similar technologies on this website." />

      <section>
        <div style={legalStyles.wrapper}>
          <p style={legalStyles.updated}>Last updated: March 2026</p>

          <LegalSection title="1. What Are Cookies">
            <p style={legalStyles.paragraph}>
              Cookies are small text files placed on your device when you
              visit a website. They help the site remember your preferences,
              understand how visitors use the site, and improve the overall
              experience on future visits.
            </p>
          </LegalSection>

          <LegalSection title="2. How We Use Cookies">
            <p style={legalStyles.paragraph}>
              GeeksBot uses cookies to keep the website running smoothly and
              to understand how our site is used. This includes:
            </p>
            <ul style={legalStyles.list}>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Essential cookies</strong>{" "}
                that allow core features of the site, such as navigation and
                theme preference, to work correctly.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Analytics cookies</strong>{" "}
                that help us understand which pages are most useful and how
                visitors move through the site, so we can keep improving it.
              </li>
              <li style={legalStyles.listItem}>
                <strong style={legalStyles.strong}>Preference cookies</strong>{" "}
                that remember choices you have made, like light or dark mode.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Third Party Cookies">
            <p style={legalStyles.paragraph}>
              Some cookies on our site may be set by trusted third party
              services we use for analytics or scheduling consultations.
              These providers have their own privacy and cookie policies
              governing how they use the information they collect.
            </p>
          </LegalSection>

          <LegalSection title="4. Managing Your Cookie Preferences">
            <p style={legalStyles.paragraph}>
              Most web browsers allow you to control cookies through their
              settings, including blocking or deleting cookies already
              stored on your device. Please note that disabling certain
              cookies may affect how parts of our website function.
            </p>
          </LegalSection>

          <LegalSection title="5. Changes To This Policy">
            <p style={legalStyles.paragraph}>
              We may update this Cookie Policy from time to time to reflect
              changes in the technology we use or for legal reasons. Any
              updates will be posted on this page with a revised date.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact">
            <p style={legalStyles.paragraph}>
              If you have any questions about how we use cookies, reach out
              to us at{" "}
              <a href="mailto:info@geeksbot.com" style={legalStyles.link}>
                info@geeksbot.com
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" style={legalStyles.link}>
                Contact page
              </Link>
              .
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
