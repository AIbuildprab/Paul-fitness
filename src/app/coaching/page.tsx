import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { PlanExplorer } from "@/components/PlanExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { offers, planGuide } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coaching & Pricing",
  description:
    "Online, Elite, Ultimate, Hybrid, and in-person personal training with Paul McGann. Clear pricing on every plan.",
};

export default function CoachingPage() {
  return (
    <>
      <section className="border-b border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <Eyebrow>Coaching</Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl uppercase leading-[0.95] sm:text-6xl">
            Real coaching. <span className="text-bronze">Clear pricing.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Five ways to work with Paul — fully online anywhere, or face to face
            in Leicester. Pick a plan, choose the option that suits you, and get
            started.
          </p>
          {/* On mobile the filter tabs below cover this, and two pill rows read as duplicates. */}
          <nav
            aria-label="Jump to a plan"
            className="mt-8 hidden flex-wrap gap-2 text-sm sm:flex"
          >
            {offers.map((offer) => (
              <a
                key={offer.id}
                href={`#${offer.id}`}
                className="inline-flex min-h-10 items-center rounded-full border border-white/15 px-4 text-paper/75 transition hover:border-bronze/50 hover:text-bronze"
              >
                {offer.name}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <PlanExplorer />
        </Container>
      </section>

      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="Which plan fits you"
            intro="A quick guide to the right coaching path for your goals and budget."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {planGuide.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-ink p-6 transition hover:border-bronze/50"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">
                  Best for: {item.bestFor}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="text-bronze">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Before you commit" title="Common questions" />
          <div className="mt-10">
            <FaqList />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/signup">Sign up now</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send an enquiry
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
