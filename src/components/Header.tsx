"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { nav, site } from "@/lib/site";

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full bg-white p-1.5 text-black transition hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || open || pathname === "/privacy" || pathname === "/terms";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const ids = ["home", ...nav.map((item) => item.id)];

    const update = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      let currentTop = -Infinity;
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        const top = node.getBoundingClientRect().top + window.scrollY;
        if (top <= probe && top >= currentTop) {
          current = id;
          currentTop = top;
        }
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        const last = [...ids].reverse().find((id) => document.getElementById(id));
        if (last) current = last;
      }
      setActive(current);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div className="bg-gold text-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-8 items-center gap-2 font-[family-name:var(--font-open-sans)] text-sm"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M3 6.5h18v11H3v-11Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {site.email}
          </a>
          <div className="flex items-center gap-2">
            <Social href={site.facebook} label="Facebook">
              <svg viewBox="0 0 512 512" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </Social>
            <Social href={site.instagram} label="Instagram">
              <svg viewBox="0 0 448 512" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Social>
            <Social href={site.youtube} label="YouTube">
              <svg viewBox="0 0 576 512" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </Social>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-white/5 text-white transition-colors duration-1000 ${
          solid ? "bg-black" : "bg-black/[0.07]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-4 py-5 lg:py-4">
          <Link href="/#home" onClick={close} aria-label="Mindfull Food Fitness — home" className="shrink-0">
            <Image
              src="/brand/Logo_Inverted.png"
              alt="Mindfull Food Fitness"
              width={248}
              height={60}
              className="h-12 w-auto lg:h-[46px]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-x-2 font-[family-name:var(--font-open-sans)] text-[14px] font-medium lg:flex"
            aria-label="Menu"
          >
            {nav.map((item) => {
              const current = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={current ? "true" : undefined}
                  className={`border-b-2 px-0.5 py-1.5 whitespace-nowrap transition ${
                    current ? "border-gold text-gold" : "border-transparent text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full border-2 border-gold bg-gold px-5 py-2.5 font-[family-name:var(--font-open-sans)] text-[15px] font-medium text-white transition hover:bg-transparent hover:text-gold lg:inline-flex"
          >
            Book a Free Strategy Call
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>

        {open ? (
          <div id="mobile-menu" className="safe-bottom max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-black px-5 py-3 lg:hidden">
            <nav className="flex flex-col" aria-label="Menu">
              {nav.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={close}
                  className="flex min-h-12 items-center border-b border-white/10 text-base"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-gold font-semibold text-white"
              >
                Book a Free Strategy Call
              </a>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
