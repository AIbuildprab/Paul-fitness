import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Eyebrow } from "@/components/Container";
import { offers, planGuide } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching & Pricing",
  description:
    "Online, Elite, Ultimate, Hybrid, and in-person personal training with Paul McGann. Clear pricing. Real support.",
};

export default function CoachingPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow>Coaching</Eyebrow>
          <h1 className="font-display mt-3 max-w-3xl text-4xl uppercase sm:text-6xl">
            Real coaching. Real structure. Real support.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Built around your life, not someone else’s template. Online
            worldwide, in person in Leicester.
          </p>
        </Container>
      </section>

      {offers.map((offer, index) => (
        <section
          key={offer.id}
          id={offer.id}
          className={`scroll-mt-24 py-16 ${index % 2 === 0 ? "bg-ink-2" : "bg-ink"}`}
        >
          <Container>
            <Eyebrow>{offer.eyebrow}</Eyebrow>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl uppercase sm:text-5xl">
                {offer.name}
              </h2>
              <p className="font-display text-2xl text-bronze">
                From {offer.fromPrice}
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-muted">{offer.summary}</p>
            {offer.commitment ? (
              <p className="mt-2 text-sm text-paper/70">{offer.commitment}</p>
            ) : null}
            {offer.locationNote ? (
              <p className="mt-2 text-sm text-bronze">{offer.locationNote}</p>
            ) : null}

            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-paper/70">
              {offer.extrasTitle ?? "You get"}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {offer.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/10 bg-ink/40 px-4 py-3 text-sm text-paper/85"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offer.pricing.map((plan) => (
                <article
                  key={plan.label}
                  className={`rounded-2xl border p-5 ${
                    plan.recommended
                      ? "border-bronze bg-bronze/10"
                      : "border-white/10 bg-ink"
                  }`}
                >
                  {plan.recommended ? (
                    <p className="mb-2 text-xs uppercase tracking-widest text-bronze">
                      Recommended
                    </p>
                  ) : null}
                  <h3 className="font-semibold">{plan.label}</h3>
                  <p className="mt-2 font-display text-2xl text-bronze">
                    {plan.price}
                  </p>
                  {plan.detail ? (
                    <p className="mt-1 text-sm text-muted">{plan.detail}</p>
                  ) : null}
                  {plan.save ? (
                    <p className="mt-1 text-sm text-paper/80">{plan.save}</p>
                  ) : null}
                </article>
              ))}
            </div>
            {offer.recommendedNote ? (
              <p className="mt-4 text-sm text-muted">{offer.recommendedNote}</p>
            ) : null}
            <div className="mt-8">
              <ButtonLink href={site.whatsapp} external>
                Book a strategy call
              </ButtonLink>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-20">
        <Container>
          <Eyebrow>Which plan?</Eyebrow>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Let this quick guide help
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {planGuide.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-white/10 bg-ink-2 p-6"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">Best for: {item.bestFor}</p>
                <ul className="mt-4 space-y-1 text-sm text-paper/80">
                  {item.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
