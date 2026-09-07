"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToAndHighlight } from "@/lib/scrollToAndHighlight";

const HOVER_SELECTOR = "a, button, .btn, .s-cards, .portfolio__image, .about-reason, .faq__item, .case-study, .hero-robot__orbit-item";

// Content cards that get a hover-style highlight on desktop pointer hover.
// Also used below to trigger that same highlight for whichever of these is
// scrolled through the middle of the viewport - so the effect isn't limited
// to pointer users.
const IN_VIEW_FOCUS_SELECTOR =
  ".hero-robot__orbit-item, .about-reason, .faq__item, .services-orbit__card, .s-cards, .testimonial__card, .stats__card, .small-features__item, .portfolio__item, .about-mission__card, .team__card, .contact__info-card, .process__card, .case-study";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById("header");
    const scrollTop = document.getElementById("scrollTop");
    // Sections the transparent navbar can't be read against (any theme).
    const DARK_BEHIND = ".cta, .footer, .sbcs-section--dark";
    // Dark theme only: the white surfaces of the alternating dark-mode
    // system - over these the nav text has to flip to dark ink.
    const LIGHT_BEHIND_DARK = ".dm-light";
    let ticking = false;

    function apply() {
      ticking = false;
      if (window.scrollY > 20) header?.classList.add("sticky");
      else header?.classList.remove("sticky");

      if (window.scrollY > 300) scrollTop?.classList.add("visible");
      else scrollTop?.classList.remove("visible");

      // What's directly behind the middle of the navbar? Flip the nav
      // text so it stays legible over whatever scrolls under it.
      if (header) {
        const isDark =
          document.documentElement.getAttribute("data-theme") === "dark";
        const y = Math.max(8, header.offsetHeight * 0.5);
        const stack = document.elementsFromPoint(window.innerWidth / 2, y);
        const behind = stack.find((el) => !el.closest("#header"));
        const onDark = !!behind?.closest?.(DARK_BEHIND);
        const onLight = isDark && !!behind?.closest?.(LIGHT_BEHIND_DARK);
        header.classList.toggle("header--on-dark", onDark);
        header.classList.toggle("header--on-light", onLight);
      }
    }

    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }

    apply();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    // Re-evaluate the moment the theme is toggled.
    const themeObserver = new MutationObserver(apply);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      themeObserver.disconnect();
    };
  }, [pathname]);

  // Jump to and highlight a specific element on landing at a #hash target -
  // covers direct links and hardcoded anchors (e.g. Header's portfolio links).
  // Keyed on pathname only, so it fires on page-changing navigation; a
  // same-page hash jump (pathname unchanged) is handled by whichever caller
  // triggered it directly - see GeekAssistant.js's navigateTo handler.
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => scrollToAndHighlight(id), 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Re-run on every route change: client-side navigation swaps in a new
  // page's .animate elements without remounting this component, so the
  // observer has to be rebuilt each time or new pages stay invisible.
  useEffect(() => {
    const animatedEls = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  // Mirrors :hover for scrolling: a card gets the highlight only while the
  // pointer is actually over it - there's no "nearest card from far away"
  // fallback (that lit a card up even with the cursor across the page).
  // Wheel-scrolling without moving the mouse keeps the pointer fixed on
  // screen, so as cards scroll past that same fixed point, whichever one is
  // now under it takes over the highlight - exactly like a real hover would
  // if the page moved under a stationary cursor.
  useEffect(() => {
    const focusEls = Array.from(document.querySelectorAll(IN_VIEW_FOCUS_SELECTOR));
    if (focusEls.length === 0) return;

    let current = null;
    let ticking = false;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let hasPointer = false;

    function update() {
      ticking = false;
      let closest = null;
      let closestDist = Infinity;

      for (const el of focusEls) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        // Pointer must be inside this card's box - otherwise it isn't a hover.
        const inside =
          pointerX >= rect.left &&
          pointerX <= rect.right &&
          pointerY >= rect.top &&
          pointerY <= rect.bottom;
        if (!inside) continue;
        // When cards overlap the pointer (nested selectors), pick the one
        // whose center is closest so only a single element highlights.
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(cx - pointerX, cy - pointerY);
        if (dist < closestDist) {
          closestDist = dist;
          closest = el;
        }
      }

      if (closest !== current) {
        current?.classList.remove("in-view-focus");
        closest?.classList.add("in-view-focus");
        current = closest;
      }
    }

    function schedule() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    function onMouseMove(e) {
      pointerX = e.clientX;
      pointerY = e.clientY;
      hasPointer = true;
      schedule();
    }

    // Before the pointer has ever moved (fresh load, or a touch/scroll-only
    // session) there's no real position to anchor to - fall back to the
    // viewport center rather than a stale (0,0) corner.
    function onScroll() {
      if (!hasPointer) {
        pointerX = window.innerWidth / 2;
        pointerY = window.innerHeight / 2;
      }
      schedule();
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      current?.classList.remove("in-view-focus");
    };
  }, [pathname]);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursorFollower");
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    }
    window.addEventListener("mousemove", handleMouseMove);

    let rafId;
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      rafId = requestAnimationFrame(animateFollower);
    }
    rafId = requestAnimationFrame(animateFollower);

    // Delegated on document (not bound to individual elements) so it keeps
    // working after client-side navigation swaps in new links/buttons.
    function handleMouseOver(e) {
      if (e.target.closest(HOVER_SELECTOR)) {
        cursor.classList.add("hover");
        follower.classList.add("hover");
      }
    }
    function handleMouseOut(e) {
      if (e.target.closest(HOVER_SELECTOR)) {
        cursor.classList.remove("hover");
        follower.classList.remove("hover");
      }
    }
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return null;
}
