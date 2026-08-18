import Link from "next/link";
import PageHero from "@/components/PageHero";
import LegalSection, { legalStyles } from "@/components/LegalSection";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read GeeksBot's Terms and Conditions covering project agreements, payment terms, intellectual property, revisions, and liability for our IT services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <>
      <PageHero title="Terms & Conditions" text="Please read these terms carefully before using our services." />

      <section>
        <div style={legalStyles.wrapper}>
          <p style={legalStyles.updated}>Last updated: March 2026</p>

          <LegalSection title="1. Introduction">
            <p style={legalStyles.paragraph}>
              Welcome to GeeksBot. GeeksBot operates as a professional digital
              solutions agency providing a range of information technology
              and creative services. These Terms and Conditions govern your
              use of our website, platforms, and all services offered by
              GeeksBot. By engaging our services or accessing our website,
              you acknowledge that you have read, understood, and agree to be
              bound by these terms in their entirety.
            </p>
            <p style={legalStyles.paragraph}>
              If you do not agree with any part of these terms, you must not
              use our services. We reserve the right to update or modify
              these terms at any time without prior notice. Continued use of
              our services following any changes constitutes your acceptance
              of the revised terms.
            </p>
          </LegalSection>

          <LegalSection title="2. Services">
            <p style={legalStyles.paragraph}>
              GeeksBot provides a comprehensive range of digital and AI
              services, including but not limited to: AI chatbot
              development, automation services, custom web application
              development, mobile application development, and ongoing
              application maintenance and support.
            </p>
            <p style={legalStyles.paragraph}>
              The specific scope, deliverables, timelines, and pricing for
              each engagement are defined in individual project proposals or
              service agreements provided to the client prior to the
              commencement of work. Any services not explicitly outlined in
              the agreed-upon proposal are considered outside the scope of
              the engagement and may be subject to additional fees.
            </p>
          </LegalSection>

          <LegalSection title="3. Project Agreements">
            <p style={legalStyles.paragraph}>
              Each project undertaken by GeeksBot is governed by a separate
              project proposal or service agreement. This document outlines
              the detailed scope of work, project timelines, key milestones,
              deliverables, and the associated costs. A project is considered
              formally initiated only upon the client&apos;s written
              acceptance of the proposal and receipt of any required upfront
              payment.
            </p>
            <p style={legalStyles.paragraph}>
              Both parties agree to adhere to the timelines and milestones
              established in the project agreement. Delays caused by the
              client, including but not limited to late provision of
              content, assets, feedback, or approvals, may result in adjusted
              timelines and, where applicable, additional charges. GeeksBot
              will make reasonable efforts to communicate any anticipated
              delays and work collaboratively with the client to keep the
              project on track.
            </p>
          </LegalSection>

          <LegalSection title="4. Payment Terms">
            <p style={legalStyles.paragraph}>
              Unless otherwise specified in the project agreement, the
              standard payment structure requires 50% of the total project
              fee to be paid upfront before work commences, with the
              remaining 50% due upon project completion and final delivery.
              For larger or long-term projects, a milestone-based payment
              schedule may be arranged and documented in the project
              agreement.
            </p>
            <p style={legalStyles.paragraph}>
              All invoices issued by GeeksBot are due within 15 days of the
              invoice date. Payments not received within this period are
              considered overdue and may be subject to a late payment penalty
              of 2% per month on the outstanding balance. GeeksBot reserves
              the right to suspend or halt work on any project with
              outstanding overdue payments until the balance is settled in
              full.
            </p>
          </LegalSection>

          <LegalSection title="5. Intellectual Property">
            <p style={legalStyles.paragraph}>
              Upon receipt of full and final payment for a project, the
              client is granted full ownership of the final deliverables as
              specified in the project agreement. This includes source
              files, design assets, and code developed specifically for the
              client&apos;s project. Any pre-existing frameworks, libraries,
              templates, or tools owned by GeeksBot or third parties that are
              incorporated into the deliverables remain the property of their
              respective owners, and the client is granted a non-exclusive
              license to use them as part of the delivered project.
            </p>
            <p style={legalStyles.paragraph}>
              GeeksBot retains the right to showcase completed work in its
              portfolio, case studies, and marketing materials unless a
              separate non-disclosure agreement is in place. Any concepts,
              designs, or materials created during the project that are not
              included in the final approved deliverables remain the
              intellectual property of GeeksBot.
            </p>
          </LegalSection>

          <LegalSection title="6. Confidentiality">
            <p style={legalStyles.paragraph}>
              Both GeeksBot and the client agree to treat all confidential
              information shared during the course of the engagement with the
              utmost discretion. Confidential information includes, but is
              not limited to, business strategies, proprietary data, trade
              secrets, technical specifications, client lists, financial
              information, and any materials marked as confidential.
            </p>
            <p style={legalStyles.paragraph}>
              Neither party shall disclose, share, or use confidential
              information for any purpose other than the fulfilment of the
              project obligations without the prior written consent of the
              disclosing party. This obligation of confidentiality survives
              the termination or completion of the project and remains in
              effect indefinitely unless the information becomes publicly
              available through no fault of the receiving party.
            </p>
          </LegalSection>

          <LegalSection title="7. Revisions & Changes">
            <p style={legalStyles.paragraph}>
              Each project includes up to three (3) rounds of revisions at no
              additional cost, unless otherwise stated in the project
              agreement. A revision is defined as a set of minor
              modifications or adjustments to the existing approved design or
              development work that do not alter the fundamental scope or
              direction of the project.
            </p>
            <p style={legalStyles.paragraph}>
              Any revisions requested beyond the included rounds will be
              billed separately at GeeksBot&apos;s standard hourly rate,
              which will be communicated to the client in advance. Requests
              that involve significant changes to the project scope,
              functionality, or direction are considered scope changes and
              will require a new quotation or an amendment to the existing
              project agreement before work proceeds.
            </p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability">
            <p style={legalStyles.paragraph}>
              To the maximum extent permitted by applicable law, GeeksBot
              shall not be held liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              the use of our services, deliverables, or website. This
              includes, but is not limited to, loss of revenue, loss of
              profits, loss of data, business interruption, or any other
              commercial damages or losses.
            </p>
            <p style={legalStyles.paragraph}>
              In any event, GeeksBot&apos;s total aggregate liability for any
              claims arising from or related to a project shall not exceed
              the total fees paid by the client for that specific project.
              GeeksBot does not guarantee specific business outcomes, search
              engine rankings, or revenue increases as a result of its
              services, and any projections or estimates provided are based
              on professional experience and are not binding commitments.
            </p>
          </LegalSection>

          <LegalSection title="9. Termination">
            <p style={legalStyles.paragraph}>
              Either party may terminate a project engagement by providing
              fifteen (15) days written notice to the other party via email
              or registered mail. Upon termination, the client is required to
              pay for all work completed up to the date of termination,
              including any approved expenses incurred by GeeksBot on behalf
              of the project.
            </p>
            <p style={legalStyles.paragraph}>
              In the event of termination by the client, any upfront payments
              made are non-refundable to the extent that they cover work
              already performed. If the client terminates the project before
              any work has commenced, GeeksBot will refund the upfront
              payment minus a 10% administrative fee. GeeksBot reserves the
              right to terminate a project immediately and without notice if
              the client engages in conduct that is abusive, unlawful, or in
              material breach of these terms.
            </p>
          </LegalSection>

          <LegalSection title="10. Governing Law">
            <p style={legalStyles.paragraph}>
              These Terms and Conditions shall be governed by and construed
              in accordance with the laws of Pakistan. Any disputes arising
              out of or in connection with these terms, or any project
              engagement between GeeksBot and the client, shall be subject to
              the exclusive jurisdiction of the courts located in Pakistan.
            </p>
            <p style={legalStyles.paragraph}>
              Both parties agree to attempt to resolve any disputes amicably
              through good-faith negotiation before pursuing formal legal
              proceedings. If a resolution cannot be reached through
              negotiation, either party may seek mediation or pursue legal
              remedies as permitted under applicable law.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact">
            <p style={legalStyles.paragraph}>
              If you have any questions, concerns, or requests regarding
              these Terms and Conditions, please do not hesitate to reach out
              to us. You can contact our team at{" "}
              <a href="mailto:info@geeksbot.com" style={legalStyles.link}>
                info@geeksbot.com
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" style={legalStyles.link}>
                Contact page
              </Link>{" "}
              for additional ways to get in touch.
            </p>
            <p style={legalStyles.paragraph}>
              We are committed to addressing your inquiries promptly and
              ensuring that our terms are clear and transparent for all
              clients and partners.
            </p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
