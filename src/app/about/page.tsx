import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { paulGallery, pillars, story } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Paul McGann",
  description:
    "Meet Paul McGann, founder of Mindfull Food Fitness. From Michelin-starred kitchens to coaching in Leicester and online.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <Eyebrow>Meet your coach</Eyebrow>
            <h1 className="font-display mt-3 text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              Paul
              <span className="block text-bronze">McGann</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/85">
              {story.short}
            </p>
            <ul className="mt-9 grid gap-2 sm:grid-cols-2">
              {story.credentials.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 rounded-xl border border-white/10 bg-ink-2 px-4 py-3 text-sm text-paper/85"
                >
                  <span aria-hidden className="text-bronze">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-bronze/25 via-transparent to-transparent blur-2xl"
            />
            <Image
              src="/paul/paul-coach-portrait.webp"
              alt="Paul McGann, founder of Mindfull Food Fitness"
              width={864}
              height={1080}
              priority
              className="w-full rounded-2xl bg-ink-2 object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-bronze/30" />
            <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
              {site.coach} · Founder, {site.name}
            </figcaption>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="My story … your challenge"
              title="Break free. Rebuild stronger. Live aligned."
            />
            <div className="mt-8 space-y-5 leading-relaxed text-paper/80">
              {story.long.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Image
              src="/paul/paul-wall.webp"
              alt="Paul McGann in the gym"
              width={800}
              height={900}
              className="rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            <Image
              src="/paul/paul-own-transformation.webp"
              alt="Paul McGann's own transformation, June 2023 to June 2025"
              width={800}
              height={800}
              className="rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How I coach"
            title="Here’s how I’ll help you get unstuck"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink-2 p-6"
              >
                <span className="font-display text-sm text-bronze/60">
                  0{index + 1}
                </span>
                <h3 className="font-display mt-3 text-2xl uppercase text-bronze">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-paper/85">
            {story.closer}
          </p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-y border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Leads by example"
            title="On the stage and in the gym"
            intro="Paul competes with the PCA and trains the way he coaches — he lives what he teaches."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {paulGallery.map((item) => (
              <li
                key={item.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-ink"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <Container className="text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl uppercase sm:text-4xl">
            Let’s rebuild you from the inside out
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
