"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// GeekAssistant pulls in the AI SDK (@ai-sdk/react + ai), which is heavy.
// Loading it eagerly on every route inflates the shared bundle and slows
// navigation. Split it into its own chunk and mount it only once the page is
// interactive - on first user interaction, when the browser goes idle, or
// after a short fallback delay, whichever comes first.
const GeekAssistant = dynamic(() => import("./GeekAssistant"), { ssr: false });

export default function GeekAssistantLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let done = false;
    let idleId;
    let timerId;

    const mount = () => {
      if (done) return;
      done = true;
      window.removeEventListener("pointerdown", mount);
      window.removeEventListener("keydown", mount);
      window.removeEventListener("scroll", mount);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      clearTimeout(timerId);
      setShow(true);
    };

    window.addEventListener("pointerdown", mount, { passive: true });
    window.addEventListener("keydown", mount);
    window.addEventListener("scroll", mount, { passive: true });
    idleId = window.requestIdleCallback
      ? window.requestIdleCallback(mount, { timeout: 3000 })
      : undefined;
    timerId = setTimeout(mount, 2500);

    return () => {
      window.removeEventListener("pointerdown", mount);
      window.removeEventListener("keydown", mount);
      window.removeEventListener("scroll", mount);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      clearTimeout(timerId);
    };
  }, []);

  return show ? <GeekAssistant /> : null;
}
