"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const services = [
  { href: "/ai-chatbot-development", label: "AI Chatbot Development" },
  { href: "/ai-automation-services", label: "Automation Service" },
  { href: "/web-development", label: "Web Application Development" },
  { href: "/app-development", label: "Mobile App Development" },
];

const portfolioLinks = [
  { href: "/portfolio#our-work", label: "Our Work" },
  { href: "/portfolio#case-studies", label: "Case Studies" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header" id="header">
      <div className="container">
        <Link href="/" className="header__logo">
          <Image
            src="/images/GeeksBot-Full.png"
            alt="Logo"
            width={190}
            height={36}
            priority
          />
        </Link>

        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header__nav ${menuOpen ? "open" : ""}`} id="nav">
          <nav>
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`header__nav-link ${pathname === link.href ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="header__dropdown">
                <button type="button" className="header__nav-link header__dropdown-toggle">
                  Services
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className="header__dropdown-menu">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href}>{service.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="header__dropdown">
                <Link
                  href="/portfolio"
                  className={`header__nav-link header__dropdown-toggle ${pathname === "/portfolio" ? "active" : ""}`}
                >
                  Portfolio
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <ul className="header__dropdown-menu">
                  {portfolioLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`header__nav-link ${pathname === "/contact" ? "active" : ""}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <Link href="/contact" className="btn btn--primary header-btn">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
