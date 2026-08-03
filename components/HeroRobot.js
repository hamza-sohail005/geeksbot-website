"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function HeroRobot() {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = wrapperRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relX * 24, y: relY * 18 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      className="hero-robot"
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-robot__glow" />
      <div className="hero-robot__float">
        <div
          className="hero-robot__parallax"
          style={{ transform: `translate(${tilt.x}px, ${tilt.y}px) rotate(${tilt.x * 0.12}deg)` }}
        >
          <Image
            src="/images/hero-robot.png"
            alt="GeeksBot AI assistant robot"
            width={780}
            height={520}
            priority
            className="hero-robot__img"
          />
          <div className="hero-robot__bubble">
            Welcome to <span>GeeksBot</span> 👋
          </div>
        </div>
      </div>
    </div>
  );
}
