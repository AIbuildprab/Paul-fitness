import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TransformationRail } from "@/components/TransformationRail";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results & Reviews",
  description:
    "Real Mindfull Food Fitness client transformations and verified Google reviews for coach Paul McGann.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <Eyebrow>Results</Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl uppercase leading-[0.95] sm:text-6xl">
            Real people. Real results.
            <span className="block text-bronze">You’re next.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            These aren’t models — they’re everyday people who committed, followed
            the plan, and changed their lives. Rated Excellent on Google from{" "}
            {site.reviewsCount} reviews.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <TransformationRail />
        </Container>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Verified Google reviews"
            title="What clients say"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-ink p-6"
              >
                <p aria-label="5 out of 5 stars" className="text-bronze">
                  ★★★★★
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-paper/85">
                  “{review.quote}”
                </p>
                <footer className="mt-5 border-t border-white/10 pt-4 text-sm">
                  <span className="text-paper">{review.name}</span>
                  <span className="block text-xs text-muted">{review.meta}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/coaching">View coaching plans</ButtonLink>
            <ButtonLink href="/signup" variant="secondary">
              Start your transformation
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
