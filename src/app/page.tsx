import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/SectionHeading";
import { TransformationRail } from "@/components/TransformationRail";
import {
  appFeatures,
  offers,
  pillars,
  problems,
  reviews,
  story,
} from "@/lib/content";
import { site } from "@/lib/site";

const stats = [
  { value: "26", label: "5-star Google reviews" },
  { value: "2018", label: "Coaching since" },
  { value: "17 yrs", label: "As a professional chef" },
  { value: "Leicester", label: "In person + online worldwide" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(65% 70% at 78% 38%, rgba(196,163,106,0.16), transparent 70%)",
          }}
        />

        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-ink/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-bronze">
                {site.coach} · {site.location}
              </span>
              <h1 className="font-display mt-5 text-[2.6rem] uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
                Transform your
                <span className="block text-bronze">body &amp; life</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85">
                {site.hero} Training, nutrition, and mindset built around your
                life — not someone else’s template.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/coaching">View coaching plans</ButtonLink>
                <ButtonLink href="/signup" variant="secondary">
                  Sign up now
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-bronze/20 via-transparent to-transparent blur-2xl"
              />
              <Image
                src="/paul/paul-gym.jpg"
                alt="Paul McGann, personal trainer in Leicester"
                width={1706}
                height={2560}
                priority
                className="relative max-h-[48dvh] w-full rounded-3xl object-cover object-top sm:max-h-[60dvh] lg:max-h-[72dvh]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-bronze/25" />
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl text-bronze sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Problem */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sound familiar?"
            title="That’s the reality with most programs"
            intro="Surface-level plans, minimal support, and then you’re left to figure it out alone."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink p-6"
              >
                <span className="font-display text-sm text-bronze/60">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg text-paper/85">
            At Mindfull Food Fitness you get real coaching, real structure, and
            real support — and you learn the “why” behind all of it.
          </p>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <Image
              src="/paul/paul-stage-abs.webp"
              alt="Paul McGann competing on the PCA stage"
              width={900}
              height={620}
              className="rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-bronze/25" />
          </div>
          <div>
            <SectionHeading
              eyebrow="The method"
              title="Three things change everything"
              intro="Fix these together and the results hold. Fix one in isolation and you end up back where you started."
            />
            <div className="mt-10 space-y-4">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-ink-2 p-6"
                >
                  <h3 className="font-display text-xl uppercase text-bronze">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Coaching"
              title="Choose your path"
              intro="Five ways to work together, online and in Leicester. Full pricing on every plan — no hidden costs."
            />
            <Link
              href="/coaching"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-bronze hover:text-bronze-2"
            >
              Compare all plans →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <Link
                key={offer.id}
                href={`/coaching#${offer.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink transition hover:border-bronze/50"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    className="object-cover object-top opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <span className="absolute bottom-3 left-5 right-5 text-xs uppercase tracking-[0.18em] text-bronze">
                    {offer.eyebrow}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{offer.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {offer.summary}
                  </p>
                  <div className="mt-6 flex items-baseline justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="font-display text-xl text-bronze">
                      From {offer.fromPrice}
                    </span>
                    <span className="text-sm text-paper/70 group-hover:text-bronze">
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Transformations */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Real people. Real results."
            title="You’re next"
            intro="These aren’t models — they’re everyday people who committed, followed the plan, and changed their lives."
          />
          <div className="mt-12">
            <TransformationRail limit={6} />
          </div>
          <Link
            href="/results"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-bronze hover:text-bronze-2"
          >
            See every transformation and review →
          </Link>
        </Container>
      </section>

      {/* App */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The MFF app"
              title="Your whole plan in one place"
              intro="Training, nutrition, check-ins, and progress tracking — plus a direct line to Paul between sessions."
            />
            <ul className="mt-8 space-y-3">
              {appFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-paper/85">
                  <span aria-hidden className="mt-1 text-bronze">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href="/signup" className="mt-9">
              Get set up in the app
            </ButtonLink>
          </div>
          <div className="flex items-end justify-center gap-5">
            <Image
              src="/app/app-notification.webp"
              alt="A message from Coach Paul on a phone lock screen"
              width={300}
              height={600}
              className="w-2/5 max-w-[190px]"
              sizes="40vw"
            />
            <Image
              src="/app/app-programs.webp"
              alt="Training programs in the MFF app"
              width={340}
              height={680}
              className="w-1/2 max-w-[230px]"
              sizes="50vw"
            />
          </div>
        </Container>
      </section>

      {/* Coach */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/paul/paul-coach-square.webp"
              alt="Paul McGann, founder of Mindfull Food Fitness"
              width={1080}
              height={1080}
              className="w-full rounded-2xl bg-ink-2 object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-bronze/25" />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Meet your coach</Eyebrow>
            <h2 className="font-display mt-3 text-4xl uppercase sm:text-5xl">
              {site.coach}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{story.short}</p>
            <ul className="mt-8 space-y-2 text-sm text-paper/85">
              {story.credentials.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-0.5 text-bronze">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/about" variant="secondary" className="mt-9">
              Read Paul’s story
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={`Excellent · ${site.reviewsCount} Google reviews`}
            title="What clients say"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <blockquote
                key={review.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-ink p-6"
              >
                <p aria-label="5 out of 5 stars" className="text-bronze">
                  ★★★★★
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-paper/85">
                  “{review.quote.slice(0, 260)}
                  {review.quote.length > 260 ? "…" : ""}”
                </p>
                <footer className="mt-5 border-t border-white/10 pt-4 text-sm">
                  <span className="text-paper">{review.name}</span>
                  <span className="block text-xs text-muted">{review.meta}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <Link
            href="/results"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-bronze hover:text-bronze-2"
          >
            Read all reviews →
          </Link>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Clear answers. No guesswork."
            title="Common questions"
          />
          <div className="mt-10">
            <FaqList limit={5} />
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-bronze hover:text-bronze-2"
          >
            Still not sure? Ask Paul directly →
          </Link>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/paul/paul-training.webp"
            alt=""
            aria-hidden
            fill
            className="object-cover object-top opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />
        </div>
        <Container className="text-center">
          <Eyebrow>Ready to transform your life?</Eyebrow>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl uppercase leading-tight sm:text-5xl">
            You don’t need another quick fix
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            You need a plan, real support, and a coach who’s with you. Choose
            your path and let’s get started.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/coaching">View coaching plans</ButtonLink>
            <ButtonLink href="/signup" variant="secondary">
              Sign up now
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
