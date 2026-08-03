import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GeeksBot for web development, UI/UX design, digital marketing, and IT solutions. Book a free consultation today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us - GeeksBot",
    description:
      "Get in touch with GeeksBot for web development, UI/UX design, digital marketing, and IT solutions.",
    url: "https://geeksbot.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Have a question or want to work together? We'd love to hear from you. Get in touch with us and let's start building something great."
      />

      <section className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__info-cards">
              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4>Our Address</h4>
                <p>123 Business Avenue, Suite 400<br />New York, NY 10001, USA</p>
              </div>

              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>

              <div className="contact__info-card animate">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h4>Email Address</h4>
                <p>geeksbotdev@gmail.com</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map" style={{ padding: "0 0 100px" }}>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GeeksBot Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}
