"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

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
          className={`hero-robot__parallax ${isHovering ? "is-hovering" : ""} ${isBouncing ? "is-bouncing" : ""}`}
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
