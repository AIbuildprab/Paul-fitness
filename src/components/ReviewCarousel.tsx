"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function Stars({ verified = false }: { verified?: boolean }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-[#fbbc04]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2.6 14.7 8.8l6.7.6-5.1 4.4 1.6 6.5L12 17.8 6.1 20.3l1.6-6.5L2.6 9.4l6.7-.6L12 2.6Z"
          />
        </svg>
      ))}
      {verified ? (
        <span tabIndex={0} className="group/check relative ml-1 inline-flex rounded-full outline-none">
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#4285f4] text-[8px] text-white">
            ✓
          </span>
          <span
            role="tooltip"
            className="pointer-events-none absolute top-1/2 left-full z-30 ml-2 hidden w-44 -translate-y-1/2 rounded-md bg-white px-3 py-2 text-left text-[13px] leading-snug font-normal text-neutral-800 shadow-lg group-hover/check:block group-focus-within/check:block"
          >
            Trustindex verifies that the original source of the review is Google.
            <span className="absolute top-1/2 right-full -translate-y-1/2 border-y-[6px] border-r-[6px] border-y-transparent border-r-white" />
          </span>
        </span>
      ) : null}
    </span>
  );
}

function ReviewAvatar({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9aa0a6]" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white">
          <path
            fill="currentColor"
            d="M12 12.2a3.6 3.6 0 1 0-3.6-3.6 3.6 3.6 0 0 0 3.6 3.6Zm0 1.8c-3.4 0-7.2 1.7-7.2 3.8v.7h14.4v-.7c0-2.1-3.8-3.8-7.2-3.8Z"
          />
        </svg>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-label="Google">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.7l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z" />
    </svg>
  );
}

const AUTOPLAY_MS = 5000;
const SLIDE_MS = 1300;

export function ReviewCarousel() {
  const visibleCount = useVisibleCount();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [sliding, setSliding] = useState(true);
  const [open, setOpen] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const track = [...reviews, ...reviews.slice(0, visibleCount)];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const gap = 16;
      const card = (viewport.clientWidth - gap * (visibleCount - 1)) / visibleCount;
      setStep(card + gap);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [visibleCount]);

  useEffect(() => {
    if (paused || open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setSliding(true);
      setIndex((value) => (value >= reviews.length ? value : value + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, open]);

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = (delta: number) => {
    setSliding(!reduceMotion);
    setIndex((value) => {
      const next = value + delta;
      if (next < 0) return 0;
      if (next > reviews.length) return value;
      return next;
    });
  };

  return (
    <div
      className="mt-10 flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <a
        href={site.googleReviews}
        target="_blank"
        rel="noopener noreferrer"
        className="w-40 shrink-0 self-center text-center text-white"
      >
        <p className="text-lg font-extrabold tracking-wide">EXCELLENT</p>
        <span className="mt-2 inline-flex justify-center">
          <Stars />
        </span>
        <p className="mt-2 text-xs text-white/80">
          Based on <strong className="text-white">{site.reviewsCount} reviews</strong>
        </p>
        <p className="mt-2 text-2xl font-medium tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </p>
      </a>

      <div className="relative w-full min-w-0 lg:w-auto lg:flex-1">
        {index > 0 ? (
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="absolute top-1/2 -left-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white shadow md:inline-flex"
          >
            ‹
          </button>
        ) : null}
        <div ref={viewportRef} className="overflow-hidden [container-type:inline-size]">
          <div
            className="flex items-stretch"
            style={{
              gap: 16,
              transform: `translate3d(${-index * step}px, 0, 0)`,
              transition: sliding && !reduceMotion ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
            }}
            onTransitionEnd={(event) => {
              if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
              if (index < reviews.length) return;
              setSliding(false);
              setIndex(0);
            }}
          >
          {track.map((review, position) => {
            const expanded = open === review.name;
            return (
              <article
                key={`${review.name}-${position}`}
                className="rounded-xl bg-[#1a1a1a] p-4 text-left text-white shadow-sm"
                style={{ flex: `0 0 calc((100cqw - ${(visibleCount - 1) * 16}px) / ${visibleCount})` }}
              >
                <div className="flex items-start gap-3">
                  <ReviewAvatar src={review.avatar} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-white/55">{review.when}</p>
                  </div>
                  <span tabIndex={0} className="group/google relative rounded-sm outline-none">
                    <GoogleMark />
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute top-1/2 right-full z-30 mr-2 hidden -translate-y-1/2 rounded-md bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap text-neutral-800 shadow-lg group-hover/google:block group-focus-within/google:block"
                    >
                      Posted on Google
                      <span className="absolute top-1/2 left-full -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-white" />
                    </span>
                  </span>
                </div>
                <div className="mt-2">
                  <Stars verified />
                </div>
                <p className={`mt-2 text-sm leading-relaxed text-white/90 ${expanded ? "" : "line-clamp-4"}`}>
                  {review.quote}
                </p>
                <button
                  type="button"
                  className="mt-2 text-sm text-white/55 hover:text-white"
                  onClick={() => setOpen(expanded ? null : review.name)}
                >
                  {expanded ? "Hide" : "Read more"}
                </button>
              </article>
            );
          })}
          </div>
        </div>
        {reviews.length > visibleCount ? (
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="absolute top-1/2 -right-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white shadow md:inline-flex"
          >
            ›
          </button>
        ) : null}
        <div className="mt-4 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Previous review"
            disabled={index === 0}
            onClick={() => go(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white disabled:opacity-30"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next review"
            disabled={reviews.length <= visibleCount}
            onClick={() => go(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
