"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Stop the page scrolling behind the open menu, and allow Escape to dismiss.
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

  const linkClass =
    "flex min-h-12 items-center rounded-lg px-3 text-base text-paper transition hover:bg-white/5 hover:text-bronze";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          onClick={close}
          aria-label="Mindfull Food Fitness — home"
          className="flex min-h-11 shrink-0 items-center"
        >
          <Image
            src="/brand/Logo_Inverted.png"
            alt="Mindfull Food Fitness"
            width={168}
            height={56}
            className="h-9 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-paper/80 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`tracking-wide transition hover:text-bronze ${
                  active ? "text-bronze" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/signup?mode=login"
            className="text-sm font-medium tracking-wide text-paper/80 transition hover:text-bronze"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-bronze-2"
          >
            Sign up now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
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
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="fixed inset-x-0 bottom-0 top-[3.75rem] -z-10 cursor-default bg-ink/60 lg:hidden"
          />
          <div
            id="mobile-menu"
            className="safe-bottom max-h-[calc(100dvh-3.75rem)] overflow-y-auto border-t border-white/5 bg-ink-2 px-5 pt-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`${linkClass} ${active ? "text-bronze" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/signup?mode=login" onClick={close} className={linkClass}>
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={close}
                className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-bronze px-4 font-semibold text-ink"
              >
                Sign up now
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
