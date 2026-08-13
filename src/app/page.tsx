import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import {
  offers,
  planGuide,
  problems,
  reviews,
  story,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/clients/1000037071.jpg"
            alt="Paul McGann, personal trainer"
            fill
            priority
            className="object-cover object-[center_20%] opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        </div>
        <Container className="relative grid min-h-[88vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Eyebrow>{site.coach} · {site.location}</Eyebrow>
            <h1 className="font-display mt-4 text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Transform Your
              <span className="block text-bronze">Body & Life</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper/80">
              {site.description.split(" Personal")[0]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.whatsapp} external>
                Book a strategy call
              </ButtonLink>
              <ButtonLink href="/coaching" variant="secondary">
                View coaching
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted">
              Excellent · Based on {site.reviewsCount} Google reviews
            </p>
          </div>
          <div className="relative mx-auto hidden max-w-md lg:block">
            <div className="absolute -inset-3 rounded-[2rem] border border-bronze/40" />
            <Image
              src="/paul/paul.png"
              alt="Paul McGann"
              width={720}
              height={900}
              className="relative rounded-[1.6rem] object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-ink-2 py-20">
        <Container>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="font-display mt-3 max-w-3xl text-3xl uppercase sm:text-4xl">
            That’s the reality with most programs.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/10 bg-ink p-6 text-lg leading-snug text-paper/90"
              >
                {item}
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-muted">
            They give you surface-level plans, minimal support, and leave you to
            figure it out alone. At Mindfull Food Fitness, we do things
            differently. You get real coaching, real structure, and real
            support, built around your life — not someone else’s template.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Coaching</Eyebrow>
              <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
                Choose your path
              </h2>
            </div>
            <Link href="/coaching" className="text-sm text-bronze hover:text-bronze-2">
              Compare all plans →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-ink-2 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                  {offer.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{offer.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {offer.summary}
                </p>
                <p className="mt-5 font-display text-2xl text-bronze">
                  From {offer.fromPrice}
                </p>
                <Link
                  href={`/coaching#${offer.id}`}
                  className="mt-5 text-sm font-semibold text-paper hover:text-bronze"
                >
                  View pricing →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-2 py-20">
        <Container>
          <Eyebrow>Not sure where to start?</Eyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            One focus. Peak performance.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {planGuide.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-ink p-6 hover:border-bronze/50"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">Best for: {item.bestFor}</p>
                <ul className="mt-4 space-y-1 text-sm text-paper/80">
                  {item.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="/clients/DSC02363.jpg"
                alt="Paul training"
                width={900}
                height={1100}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <Eyebrow>Meet your coach</Eyebrow>
              <h2 className="font-display mt-3 text-3xl uppercase sm:text-5xl">
                {site.coach}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {story.short}
              </p>
              <ButtonLink href="/about" variant="secondary" className="mt-8">
                Read the full story
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-ink-2 py-20">
        <Container>
          <Eyebrow>Real people. Real results.</Eyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            You’re next.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            These aren’t models — they’re everyday people who committed,
            followed the plan, and changed their lives.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl border border-white/10 bg-ink p-6"
              >
                <p className="text-sm leading-relaxed text-paper/85">
                  “{review.quote.slice(0, 280)}
                  {review.quote.length > 280 ? "…" : ""}”
                </p>
                <footer className="mt-4 text-sm text-bronze">{review.name}</footer>
              </blockquote>
            ))}
          </div>
          <Link
            href="/results"
            className="mt-8 inline-block text-sm text-bronze hover:text-bronze-2"
          >
            See more results and reviews →
          </Link>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Eyebrow>Clear answers. No guesswork.</Eyebrow>
          <h2 className="font-display mt-3 mb-8 text-3xl uppercase sm:text-4xl">
            FAQs
          </h2>
          <FaqList limit={5} />
          <Link
            href="/contact"
            className="mt-8 inline-block text-sm text-bronze hover:text-bronze-2"
          >
            Still not sure? Let’s chat.
          </Link>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-20">
        <Container className="text-center">
          <Eyebrow>Ready to transform your life?</Eyebrow>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl uppercase sm:text-5xl">
            You don’t need another quick fix
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            You need a plan, real support, and a coach who’s with you. Choose
            your path and let’s get started.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.whatsapp} external>
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send a message
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
