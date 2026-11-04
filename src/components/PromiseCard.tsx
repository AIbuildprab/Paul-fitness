"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PromiseCard({ children }: { children: ReactNode }) {
  const frame = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameEl = frame.current;
    const photoEl = photo.current;
    if (!frameEl || !photoEl) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    let raf = 0;

    const update = () => {
      if (!desktop.matches) {
        photoEl.style.visibility = "hidden";
        return;
      }

      const frameRect = frameEl.getBoundingClientRect();
      const box = photoEl.getBoundingClientRect();
      const style = getComputedStyle(frameEl);
      const border = parseFloat(style.borderRightWidth) || 0;
      const radius = Math.max((parseFloat(style.borderTopRightRadius) || 0) - border, 0);
      const top = frameRect.top + border;
      const bottom = frameRect.bottom - border;
      const left = frameRect.left + frameRect.width / 2;
      const right = frameRect.right - border;
      const onScreen = bottom > box.top && top < box.bottom;

      photoEl.style.visibility = onScreen ? "visible" : "hidden";

      const x1 = Math.max(left - box.left, 0);
      const y1 = Math.max(top - box.top, 0);
      const x2 = Math.min(right - box.left, box.width);
      const y2 = Math.min(bottom - box.top, box.height);
      if (x2 <= x1 || y2 <= y1) return;

      const corner = Math.min(radius, x2 - x1, y2 - y1);
      const rightOnScreen = right <= box.right + 0.5;
      const rtr = rightOnScreen && top >= box.top - 0.5 ? corner : 0;
      const rbr = rightOnScreen && bottom <= box.bottom + 0.5 ? corner : 0;
      const n = (value: number) => Math.round(value * 100) / 100;
      let path = `M ${n(x1)} ${n(y1)} H ${n(x2 - rtr)}`;
      path += rtr ? ` A ${n(rtr)} ${n(rtr)} 0 0 1 ${n(x2)} ${n(y1 + rtr)}` : ` H ${n(x2)}`;
      path += ` V ${n(y2 - rbr)}`;
      if (rbr) path += ` A ${n(rbr)} ${n(rbr)} 0 0 1 ${n(x2 - rbr)} ${n(y2)}`;
      path += ` H ${n(x1)} Z`;
      photoEl.style.clipPath = `path('${path}')`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      ref={frame}
      className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[22px] border-[7px] border-gold shadow-[0_0_4px_rgba(0,0,0,0.34)] lg:grid-cols-2 lg:overflow-visible"
    >
      <div
        ref={photo}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 hidden bg-cover bg-top-right lg:block"
        style={{ backgroundImage: "url(/mff/promise-bg.webp)", visibility: "hidden" }}
      />
      {children}
      <div
        aria-hidden
        className="min-h-[420px] bg-[url('/mff/promise-bg.webp')] bg-cover bg-top lg:hidden"
      />
      <div aria-hidden className="hidden lg:block" />
    </div>
  );
}
