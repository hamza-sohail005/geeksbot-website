"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HOVER_SELECTOR = "a, button, .btn, .s-cards, .portfolio__image, .cards";

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
