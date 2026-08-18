"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HOVER_SELECTOR = "a, button, .btn, .s-cards, .portfolio__image, .about-reason, .faq__item, .case-study, .hero-robot__orbit-item";

// Content cards that get a hover-style highlight on desktop pointer hover.
// Also used below to trigger that same highlight for whichever of these is
// scrolled through the middle of the viewport - so the effect isn't limited
// to pointer users.
const IN_VIEW_FOCUS_SELECTOR =
  ".hero-robot__orbit-item, .about-reason, .faq__item, .services-orbit__card, .s-cards, .testimonial__card, .stats__card, .small-features__item, .portfolio__item, .about-mission__card, .team__card, .contact__info-card, .service-detail__image, .process__card, .case-study";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById("header");
    const scrollTop = document.getElementById("scrollTop");

    function handleScroll() {
      if (window.scrollY > 20) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }

      if (window.scrollY > 300) {
        scrollTop?.classList.add("visible");
      } else {
        scrollTop?.classList.remove("visible");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Mirrors :hover for scrolling: only the single card closest to the
  // cursor's actual screen position gets the highlight (not the viewport's
  // center - that ignored where the pointer really was). Wheel-scrolling
  // without moving the mouse keeps the pointer fixed on screen, so as cards
  // scroll past that same fixed point, whichever one is now nearest it takes
  // over the highlight - exactly like a real hover would if the page moved
  // under a stationary cursor.
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
