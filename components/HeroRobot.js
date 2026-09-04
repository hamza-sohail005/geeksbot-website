"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { speak } from "@/lib/speak";
import { GEEK_GREETING } from "@/lib/geekGreeting";

// The bubble's short "Welcome to GeeksBot" text and the arm-wave animation
// are plain CSS, so they play on every mount/reload unconditionally. The
// spoken greeting (the full GEEK_GREETING line, heard but never shown as
// text) only plays once per browser TAB - sessionStorage instead of
// localStorage, so it clears itself the moment the tab/browser closes
// instead of staying silent forever until someone manually clears site
// data. A plain reload (F5) in the same tab still only greets once, but a
// fresh tab always gets to hear it again.
// (v4: a live ElevenLabs fetch at click time - even a prefetched one that's
// only *awaited* at click time - can lose "user gesture" standing in strict
// browsers like Safari, which require play() to run synchronously inside
// the gesture handler. Since the greeting text never changes, it's
// pre-rendered once to a static file (public/audio/geek-greeting.mp3) so
// play() can fire with zero async gap after the gesture.)
const VOICE_GREETED_KEY = "geekVoiceGreetedV4";
const GREETING_AUDIO_SRC = "/audio/geek-greeting.mp3";

export default function HeroRobot() {
  const wrapperRef = useRef(null);
  const parallaxRef = useRef(null);
  const glowRef = useRef(null);
  const bubbleRef = useRef(null);
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isGreeting, setIsGreeting] = useState(false);
  const bounceTimeout = useRef(null);

  useEffect(() => {
    let frameId;

    function animate() {
      const t = targetTilt.current;
      const c = currentTilt.current;
      c.x += (t.x - c.x) * 0.1;
      c.y += (t.y - c.y) * 0.1;

      const translateX = c.x * 26;
      const translateY = c.y * 20;
      const rotateY = c.x * 18;
      const rotateX = -c.y * 14;
      const scale = hoverRef.current ? 1.045 : 1;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform =
          `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      }
      if (glowRef.current) {
        const glowX = 50 + c.x * 46;
        const glowY = 50 + c.y * 46;
        glowRef.current.style.background =
          `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(63, 157, 189, 0.4), rgba(45, 212, 191, 0.16) 55%, transparent 75%)`;
      }
      if (bubbleRef.current) {
        bubbleRef.current.style.setProperty("--tilt-x", `${-translateX * 0.4}px`);
        bubbleRef.current.style.setProperty("--tilt-y", `${-translateY * 0.4}px`);
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    return () => clearTimeout(bounceTimeout.current);
  }, []);

  // Speaks the full greeting as background audio - no visible text for it -
  // while keeping the robot's arm waving for as long as it's talking, so the
  // voice reads as coming from the robot greeting you, not a random sound.
  // Browsers block audio that isn't triggered by a user gesture, so playback
  // still waits for the visitor's first click/tap/key anywhere on the page -
  // but audio.play() is called synchronously inside that gesture handler
  // (no fetch, no await first) using the pre-rendered static file, which is
  // both instant and reliable across browsers with stricter gesture rules.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(VOICE_GREETED_KEY)) return;

    const audio = new Audio(GREETING_AUDIO_SRC);
    audio.preload = "auto";
    let cancelled = false;

    function cleanup() {
      window.removeEventListener("pointerdown", greet);
      window.removeEventListener("keydown", greet);
      window.removeEventListener("touchstart", greet);
    }

    function greet() {
      cleanup();
      window.sessionStorage.setItem(VOICE_GREETED_KEY, "1");
      setIsGreeting(true);
      audio.onended = () => {
        if (!cancelled) setIsGreeting(false);
      };
      audio.onerror = () => {
        if (!cancelled) setIsGreeting(false);
      };
      audio.play().catch(() => {
        // Static file couldn't play for some reason - fall back to live TTS
        // (which itself falls back to the browser's built-in voice).
        speak(GEEK_GREETING).finally(() => {
          if (!cancelled) setIsGreeting(false);
        });
      });
    }

    window.addEventListener("pointerdown", greet, { once: true });
    window.addEventListener("keydown", greet, { once: true });
    window.addEventListener("touchstart", greet, { once: true });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  function handleMouseMove(e) {
    const rect = wrapperRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    targetTilt.current = { x: relX, y: relY };
  }

  function handleMouseEnter() {
    hoverRef.current = true;
    setIsHovering(true);
  }

  function handleMouseLeave() {
    targetTilt.current = { x: 0, y: 0 };
    hoverRef.current = false;
    setIsHovering(false);
  }

  function handleClick() {
    if (isBouncing) return;
    setIsBouncing(true);
    bounceTimeout.current = setTimeout(() => setIsBouncing(false), 700);
  }

  return (
    <div
      className="hero-robot"
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="hero-robot__glow" ref={glowRef} />

      <div className="hero-robot__orbit">
        <div className="hero-robot__orbit-ring hero-robot__orbit-ring--outer" />
        <div className="hero-robot__orbit-ring hero-robot__orbit-ring--inner" />
        <div className="hero-robot__orbit-item hero-robot__orbit-item--1">
          <div className="hero-robot__orbit-icon">
            <Image src="/images/poster-web.png" alt="Web development" width={200} height={200} />
          </div>
          <span className="hero-robot__orbit-label">Web Development</span>
        </div>
        <div className="hero-robot__orbit-item hero-robot__orbit-item--2">
          <div className="hero-robot__orbit-icon">
            <Image src="/images/poster-chatbot.png" alt="AI chatbots" width={200} height={200} />
          </div>
          <span className="hero-robot__orbit-label">AI Chatbots</span>
        </div>
        <div className="hero-robot__orbit-item hero-robot__orbit-item--3">
          <div className="hero-robot__orbit-icon">
            <Image src="/images/poster-automation.png" alt="Automation" width={200} height={200} />
          </div>
          <span className="hero-robot__orbit-label">Automation</span>
        </div>
        <div className="hero-robot__orbit-item hero-robot__orbit-item--4">
          <div className="hero-robot__orbit-icon">
            <Image src="/images/poster-mobile.png" alt="Mobile apps" width={200} height={200} />
          </div>
          <span className="hero-robot__orbit-label">Mobile Apps</span>
        </div>
      </div>

      <div className="hero-robot__float">
        <div
          ref={parallaxRef}
          className={`hero-robot__parallax ${isHovering ? "is-hovering" : ""} ${isBouncing ? "is-bouncing" : ""} ${isGreeting ? "is-greeting" : ""}`}
        >
          <Image
            src="/images/hero-robot-body.png"
            alt="GeeksBot AI assistant robot"
            width={780}
            height={520}
            priority
            className="hero-robot__img hero-robot__img--body"
          />
          <Image
            src="/images/hero-robot-arm.png"
            alt=""
            aria-hidden="true"
            width={780}
            height={520}
            priority
            className="hero-robot__img hero-robot__img--arm"
          />
        </div>
        <div className="hero-robot__bubble" ref={bubbleRef}>
          Welcome to <span>GeeksBot</span> 👋
        </div>
      </div>
    </div>
  );
}
