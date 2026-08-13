import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-2 pb-24 lg:pb-0">
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
            Paul McGann — in Leicester and online.
          </p>
          <Image
            src="/brand/Stamp_ProteinBronze.png"
            alt="MFF 2018"
            width={88}
            height={88}
            className="mt-6 h-16 w-16"
          />
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-bronze">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bronze">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-bronze">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-bronze">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>{site.location}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-bronze">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-bronze">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze"
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
