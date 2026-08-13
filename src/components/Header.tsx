"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/Logo_Inverted.png"
            alt="Mindfull Food Fitness"
            width={168}
            height={56}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-paper/80 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tracking-wide hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-ink hover:bg-bronze-2"
          >
            {cta.primary.label}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
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
        <div className="border-t border-white/5 bg-ink-2 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base text-paper hover:bg-white/5 hover:text-bronze"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-bronze px-4 py-3 text-center font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Book a strategy call
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
