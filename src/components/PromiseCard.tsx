"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PromiseCard({ children }: { children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panelEl = panel.current;
    const photoEl = panelEl?.querySelector<HTMLElement>(".promise-photo");
    if (!panelEl || !photoEl) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let running = false;

    const apply = () => {
      const rect = panelEl.getBoundingClientRect();
      panelEl.style.setProperty("--promise-left", `${rect.left}px`);
      panelEl.style.setProperty("--promise-vh", `${window.innerHeight}px`);
      if (!desktop.matches || reduced.matches) {
        photoEl.style.transform = "";
        return;
      }
      photoEl.style.transform = `translate3d(0, ${-rect.top}px, 0)`;
    };

    const loop = () => {
      apply();
      if (running) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || !desktop.matches || reduced.matches) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
        else stop();
      },
      { rootMargin: "120px" },
    );

    observer.observe(panelEl);
    window.addEventListener("resize", apply);
    desktop.addEventListener("change", start);
    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", apply);
      desktop.removeEventListener("change", start);
    };
  }, []);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="grid overflow-hidden rounded-[22px] lg:grid-cols-2">
        {children}
        <div ref={panel} className="promise-panel relative min-h-[420px] overflow-hidden bg-black lg:min-h-0">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/mff/promise-bg.webp')] bg-cover bg-top lg:hidden"
          />
          <div
            aria-hidden
            className="promise-photo pointer-events-none absolute hidden bg-black bg-[url('/mff/promise-bg.webp')] bg-cover bg-no-repeat lg:block"
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-[22px] border-[7px] border-gold shadow-[0_0_4px_rgba(0,0,0,0.34)] [transform:translateZ(0)]"
      />
    </div>
  );
}
