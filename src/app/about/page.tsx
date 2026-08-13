import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { story } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Paul McGann",
  description:
    "Meet Paul McGann, founder of Mindfull Food Fitness. From Michelin-star kitchens to real coaching in Leicester and online.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Meet your coach</Eyebrow>
            <h1 className="font-display mt-3 text-4xl uppercase sm:text-6xl">
              {site.coach}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {story.short}
            </p>
          </div>
          <Image
            src="/paul/paul.png"
            alt="Paul McGann"
            width={800}
            height={1000}
            className="rounded-2xl object-cover"
            priority
          />
        </Container>
      </section>

      <section className="border-y border-white/5 bg-ink-2 py-20">
        <Container className="max-w-3xl">
          <Eyebrow>My story … your challenge</Eyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Break free. Rebuild stronger. Live aligned.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/80">
            {story.long.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Here’s how I’ll help you get unstuck
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {story.help.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink-2 p-6"
              >
                <h3 className="text-xl font-semibold text-bronze">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg text-paper/85">{story.closer}</p>
          <div className="mt-8">
            <ButtonLink href={site.whatsapp} external>
              Let’s rebuild you from the inside out
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <Image
            src="/clients/DSC02363.jpg"
            alt="Paul training"
            width={900}
            height={1100}
            className="rounded-2xl object-cover"
          />
          <Image
            src="/clients/1000037071.jpg"
            alt="Paul McGann in the gym"
            width={900}
            height={1100}
            className="rounded-2xl object-cover"
          />
        </Container>
      </section>
    </>
  );
}
