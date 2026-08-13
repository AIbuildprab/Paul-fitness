"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { offers } from "@/lib/content";

type Filter = "all" | "online" | "in-person";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All plans" },
  { id: "online", label: "Online" },
  { id: "in-person", label: "In person (Leicester)" },
];

export function PlanExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      offers.map((offer) => [
        offer.id,
        (offer.pricing.find((p) => p.recommended) ?? offer.pricing[0]).id,
      ]),
    ),
  );
  const [openFeatures, setOpenFeatures] = useState<string | null>(null);

  const visible = offers.filter(
    (offer) => filter === "all" || offer.delivery === filter,
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter plans"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-5 text-sm font-semibold transition ${
              filter === item.id
                ? "border-bronze bg-bronze text-ink"
                : "border-white/15 text-paper/75 hover:border-bronze/50 hover:text-bronze"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-8">
        {visible.map((offer) => {
          const activeId = selected[offer.id];
          const active =
            offer.pricing.find((p) => p.id === activeId) ?? offer.pricing[0];
          const featuresOpen = openFeatures === offer.id;

          return (
            <article
              key={offer.id}
              id={offer.id}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-ink-2"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative h-44 sm:h-56 lg:h-auto lg:min-h-full">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink-2/20 lg:to-ink-2" />
                  <div className="absolute bottom-5 left-6 right-6 lg:top-6 lg:bottom-auto">
                    <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                      {offer.eyebrow}
                    </p>
                    {offer.locationNote ? (
                      <p className="mt-2 inline-flex rounded-full bg-ink/80 px-3 py-1 text-xs text-paper/80">
                        {offer.locationNote}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="font-display text-2xl uppercase sm:text-3xl lg:text-4xl">
                        {offer.name}
                      </h3>
                      {offer.commitment ? (
                        <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                          {offer.commitment}
                        </p>
                      ) : null}
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-display text-2xl text-bronze sm:text-3xl">
                        {active.price}
                      </p>
                      {active.detail ? (
                        <p className="text-xs text-muted">{active.detail}</p>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {offer.summary}
                  </p>

                  <fieldset className="mt-7">
                    <legend className="text-xs font-semibold uppercase tracking-widest text-paper/70">
                      Choose your option
                    </legend>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {offer.pricing.map((plan) => {
                        const isActive = plan.id === active.id;
                        return (
                          <label
                            key={plan.id}
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              isActive
                                ? "border-bronze bg-bronze/10"
                                : "border-white/10 bg-ink hover:border-bronze/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`plan-${offer.id}`}
                              value={plan.id}
                              checked={isActive}
                              onChange={() =>
                                setSelected((prev) => ({
                                  ...prev,
                                  [offer.id]: plan.id,
                                }))
                              }
                              className="sr-only"
                            />
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-sm font-semibold text-paper">
                                {plan.label}
                              </span>
                              {plan.recommended ? (
                                <span className="rounded-full bg-bronze px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                                  Best value
                                </span>
                              ) : null}
                            </span>
                            <span className="mt-1 block font-display text-lg text-bronze">
                              {plan.price}
                            </span>
                            <span className="mt-0.5 block text-xs text-muted">
                              {plan.save ?? plan.detail ?? "\u00A0"}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="mt-6">
                    <button
                      type="button"
                      aria-expanded={featuresOpen}
                      aria-controls={`features-${offer.id}`}
                      onClick={() =>
                        setOpenFeatures(featuresOpen ? null : offer.id)
                      }
                      className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink px-4 py-3 text-left text-sm font-semibold text-paper transition hover:border-bronze/40"
                    >
                      {offer.extrasTitle ?? "What’s included"}
                      <span
                        aria-hidden
                        className={`text-bronze transition ${featuresOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {featuresOpen ? (
                      <ul
                        id={`features-${offer.id}`}
                        className="mt-3 grid gap-2 sm:grid-cols-2"
                      >
                        {offer.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-2 rounded-lg bg-ink/60 px-3 py-2.5 text-sm text-paper/85"
                          >
                            <span aria-hidden className="text-bronze">
                              ✓
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {offer.recommendedNote ? (
                    <p className="mt-5 text-xs leading-relaxed text-muted">
                      {offer.recommendedNote}
                    </p>
                  ) : null}

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {/* Stripe Checkout will replace this link using active.stripePriceId */}
                    <Link
                      href={`/signup?plan=${encodeURIComponent(offer.name)}&option=${encodeURIComponent(active.label)}`}
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-bronze px-6 text-sm font-semibold text-ink transition hover:bg-bronze-2"
                    >
                      Start {offer.name}
                    </Link>
                    <Link
                      href={`/contact?plan=${encodeURIComponent(offer.name)}`}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-bronze/70 px-6 text-sm font-semibold text-bronze transition hover:bg-bronze/10"
                    >
                      Ask a question
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
