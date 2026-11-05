"use client";

import { useEffect, useRef, type ReactNode } from "react";

type From = "up" | "left" | "right" | "pop";

export function Reveal({
  children,
  className = "",
  from = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: From;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("rise", `rise-${from}`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add("rise", `rise-${from}`);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from]);

  return (
    <div ref={ref} className={`rise-wait ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
