import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { nav, site } from "@/lib/site";

const quickLinks = [{ href: "/#home", label: "Home" }, ...nav];

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const left = quickLinks.slice(0, 5);
  const right = quickLinks.slice(5);

  return (
    <footer className="pb-cta bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.5fr)_auto_minmax(0,1fr)]">
        <div>
          <Link href="/#home">
            <Image
              src="/brand/Logo_Inverted.png"
              alt="Mindfull Food Fitness"
              width={180}
              height={44}
              className="h-11 w-auto"
              style={{ width: "auto" }}
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">{site.footerStory}</p>
        </div>

        <div>
          <h2 className="text-lg font-extrabold text-gold">Quick Links</h2>
          <div className="mt-3 h-px w-10 bg-gold" />
          <div className="mt-4 grid w-max grid-cols-2 gap-x-10">
            <ul className="space-y-0.5 text-sm text-white/85">
              {left.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-0.5 text-sm text-white/85">
              {right.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-extrabold text-gold">Contact Info</h2>
          <div className="mt-3 h-px w-10 bg-gold" />
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
                <path
                  d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>Online coaching — UK & Worldwide</span>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
                <path d="M3 6.5h18v11H3v-11Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Social href={site.facebook} label="Facebook">
              <svg viewBox="0 0 512 512" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </Social>
            <Social href={site.instagram} label="Instagram">
              <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Social>
            <Social href={site.youtube} label="YouTube">
              <svg viewBox="0 0 576 512" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </Social>
          </div>
        </div>
      </div>

      <div className="bg-ink-2">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-2 text-xs text-white/80 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Mindfull Food Fitness</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
