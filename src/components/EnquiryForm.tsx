"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { offers } from "@/lib/content";
import { site } from "@/lib/site";

type Delivery = "online" | "in-person";

const NOT_SURE = "Not sure yet";

const deliveryCopy: Record<Delivery, { badge: string; helper: string }> = {
  online: {
    badge: "Online",
    helper: "Coached anywhere in the world through the MFF app.",
  },
  "in-person": {
    badge: "In person",
    helper: "Face-to-face sessions in Leicester, with online support included.",
  },
};

export function EnquiryForm() {
  const params = useSearchParams();
  const [choice, setChoice] = useState<{
    delivery: Delivery | null;
    pkg: string;
  } | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  const preselected = offers.find((offer) => offer.name === params.get("plan"));
  const delivery = choice ? choice.delivery : (preselected?.delivery ?? null);
  const pkg = choice ? choice.pkg : (preselected?.name ?? "");

  const packages = useMemo(
    () => (delivery ? offers.filter((offer) => offer.delivery === delivery) : []),
    [delivery],
  );

  const setDelivery = (next: Delivery) => setChoice({ delivery: next, pkg: "" });
  const setPkg = (next: string) => setChoice({ delivery, pkg: next });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          delivery: delivery ? deliveryCopy[delivery].badge : "",
          interest: pkg || NOT_SURE,
        }),
      });
      const json = (await res.json()) as { ok?: boolean; whatsapp?: string };
      if (!res.ok || !json.whatsapp) throw new Error("failed");

      setStatus("ok");
      setMessage(
        "Enquiry ready — WhatsApp should open with your details. Paul replies to most enquiries within 24 hours.",
      );
      form.reset();
      setChoice({ delivery: null, pkg: "" });
      window.open(json.whatsapp, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Email ${site.email} or message Paul on WhatsApp.`);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 placeholder:text-muted/60 focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {/* Step 1: delivery */}
      <fieldset>
        <legend className="text-sm font-semibold text-paper">
          Which coaching package?{" "}
          <span aria-hidden className="text-bronze">
            *
          </span>
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {(Object.keys(deliveryCopy) as Delivery[]).map((key) => {
            const isActive = delivery === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setDelivery(key)}
                className={`rounded-xl border px-5 py-4 text-left transition ${
                  isActive
                    ? "border-bronze bg-bronze/10 ring-1 ring-bronze"
                    : "border-white/12 bg-ink hover:border-bronze/40"
                }`}
              >
                <span className="block text-sm font-semibold text-paper">
                  {key === "online" ? "Online coaching" : "In-person coaching"}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {key === "online" ? "Anywhere, via the app" : "Leicester only"}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 2: package */}
      {delivery ? (
        <div className="rounded-2xl border border-white/10 bg-ink/60 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-bronze/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-bronze">
              {deliveryCopy[delivery].badge}
            </span>
            <span className="text-xs text-muted">
              {deliveryCopy[delivery].helper}
            </span>
          </div>

          <p className="mt-5 text-sm font-semibold text-paper">
            Which {delivery === "online" ? "online" : "in-person"} package?
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {packages.map((offer) => {
              const isActive = pkg === offer.name;
              return (
                <button
                  key={offer.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setPkg(offer.name)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-bronze bg-bronze/10 ring-1 ring-bronze"
                      : "border-white/10 bg-ink hover:border-bronze/40"
                  }`}
                >
                  <span className="block text-sm font-semibold text-paper">
                    {offer.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    From {offer.fromPrice}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              aria-pressed={pkg === NOT_SURE}
              onClick={() => setPkg(NOT_SURE)}
              className={`rounded-xl border px-4 py-3 text-left transition sm:col-span-2 ${
                pkg === NOT_SURE
                  ? "border-bronze bg-bronze/10 ring-1 ring-bronze"
                  : "border-white/10 bg-ink hover:border-bronze/40"
              }`}
            >
              <span className="block text-sm font-semibold text-paper">
                {NOT_SURE}
              </span>
              <span className="mt-0.5 block text-xs text-muted">
                Help me choose
              </span>
            </button>
          </div>

          {delivery === "in-person" ? (
            <label className="mt-5 block">
              <span className="mb-2 block text-sm text-muted">
                Preferred days or times
              </span>
              <input
                name="availability"
                placeholder="e.g. weekday mornings, Saturday AM"
                className={fieldClass}
              />
            </label>
          ) : null}
        </div>
      ) : null}

      {/* Step 3: details */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Best contact number"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Main goal</span>
          <input
            name="goal"
            placeholder="Fat loss, strength, routine"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">Training setup</span>
        <input
          name="setup"
          placeholder="Home gym, commercial gym, or no gym yet"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">
          Anything else Paul should know
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Injuries, dietary needs, previous experience, timescales."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-bronze py-3.5 font-semibold text-ink transition hover:bg-bronze-2 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-300" : "text-bronze"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
