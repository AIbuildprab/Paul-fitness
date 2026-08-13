import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="pb-cta border-t border-white/5 bg-ink-2">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Image
            src="/brand/Logo_Inverted.png"
            alt="Mindfull Food Fitness"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Real coaching for real life. Training, nutrition, and mindset with
            Paul McGann — in Leicester and online worldwide.
          </p>
          <Image
            src="/brand/Stamp_ProteinBronze.png"
            alt={`MFF established ${site.established}`}
            width={88}
            height={88}
            className="mt-6 h-16 w-16"
          />
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-bronze">
            Explore
          </p>
          <ul className="mt-2 text-sm text-paper/80">
            {[
              { href: "/", label: "Home" },
              ...nav,
              { href: "/signup", label: "Sign up" },
              { href: "/privacy", label: "Privacy" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center hover:text-bronze"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-bronze">
            Contact
          </p>
          <ul className="mt-2 text-sm text-paper/80">
            <li className="flex min-h-10 items-center">{site.location}</li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-10 items-center hover:text-bronze"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-10 items-center break-all hover:text-bronze"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center hover:text-bronze"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center hover:text-bronze"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
