"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lenisRef.current = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: "vertical",
    });

    const lenis = lenisRef.current;

    const loop = (time: number) => {
      lenis?.raf(time);
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
