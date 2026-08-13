import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { gallery, reviews } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results & Reviews",
  description:
    "Real people. Real results. Google reviews and training photos from Mindfull Food Fitness clients working with Paul McGann.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow>Results</Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl uppercase sm:text-6xl">
            Real people. Real results. You’re next.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            These aren’t models — they’re everyday people who committed,
            followed the plan, and changed their lives. Excellent on Google,
            based on {site.reviewsCount} reviews.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((item) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
                className="mb-4 w-full break-inside-avoid rounded-2xl object-cover"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-20">
        <Container>
          <Eyebrow>Google reviews</Eyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            What clients say
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl border border-white/10 bg-ink p-6"
              >
                <p className="text-sm leading-relaxed text-paper/85">
                  “{review.quote}”
                </p>
                <footer className="mt-4 text-sm text-bronze">
                  {review.name} · Google
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href={site.whatsapp} external>
              Start your transformation
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
