"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <Image
                src="/images/GeeksBot-Full.png"
                alt="Logo"
                width={190}
                height={36}
                className="footer__brand-logo"
              />
              <p className="footer__brand-text">
                GeeksBot is an agency based in the U.S. We help businesses
                grow with AI powered tools, thoughtful design, and marketing
                that is built to deliver real results.
              </p>
              <ul className="footer__social">
                <li>
                  <a href="https://x.com/Geeks_Bot" target="_blank" rel="noopener noreferrer" aria-label="GeeksBot on X (Twitter)">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/geeks-bot/" target="_blank" rel="noopener noreferrer" aria-label="GeeksBot on LinkedIn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.78353 2.16665C3.78331 2.60867 3.6075 3.03251 3.29478 3.34491C2.98207 3.65732 2.55806 3.8327 2.11603 3.83248C1.674 3.83226 1.25017 3.65645 0.937761 3.34373C0.625357 3.03102 0.449975 2.60701 0.450196 2.16498C0.450417 1.72295 0.626223 1.29912 0.93894 0.986712C1.25166 0.674307 1.67567 0.498925 2.1177 0.499146C2.55972 0.499367 2.98356 0.675173 3.29596 0.98789C3.60837 1.30061 3.78375 1.72462 3.78353 2.16665ZM3.83353 5.06665H0.500195V15.5H3.83353V5.06665ZM9.1002 5.06665H5.78353V15.5H9.06686V10.025C9.06686 6.97498 13.0419 6.69165 13.0419 10.025V15.5H16.3335V8.89165C16.3335 3.74998 10.4502 3.94165 9.06686 6.46665L9.1002 5.06665Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__columns">
              <div className="footer__links">
                <h4 className="footer__links-title">Quick Links</h4>
                <ul className="footer__links-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/web-development">Services</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer__links">
                <h4 className="footer__links-title">Our Services</h4>
                <ul className="footer__links-list">
                  <li><Link href="/ai-chatbot-development">AI Chatbot Development</Link></li>
                  <li><Link href="/ai-automation-services">Automation Service</Link></li>
                  <li><Link href="/web-development">Web Application Development</Link></li>
                  <li><Link href="/app-development">Mobile App Development</Link></li>
                <li><Link href="/seo-optimization">SEO Optimization</Link></li>
                </ul>
              </div>

              <div className="footer__links">
                <h4 className="footer__links-title">Resources</h4>
                <ul className="footer__links-list">
                  <li><Link href="/help-center">Support</Link></li>
                  <li><Link href="/faqs">FAQs</Link></li>
                </ul>
              </div>

              <div className="footer__links">
                <h4 className="footer__links-title">Legal</h4>
                <ul className="footer__links-list">
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                  <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} GeeksBot. All rights reserved.</p>
            <div className="footer-bottom-right">
              <p><Link href="/terms" className="right-border">Terms & Condition</Link></p>
              <p><Link href="/privacy-policy">Privacy Policy</Link></p>
            </div>
          </div>
        </div>
      </footer>

      <button
        className="scroll-top"
        id="scrollTop"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12H9V20H15V12H20L12 4Z" />
        </svg>
      </button>
    </>
  );
}
