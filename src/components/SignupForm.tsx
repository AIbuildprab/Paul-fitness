"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { offers } from "@/lib/content";
import { site } from "@/lib/site";

type Mode = "signup" | "login";

export function SignupForm() {
  const params = useSearchParams();
  const [chosenMode, setChosenMode] = useState<Mode | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  const mode: Mode =
    chosenMode ?? (params.get("mode") === "login" ? "login" : "signup");
  const planFromUrl = params.get("plan") ?? "";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, mode }),
      });
      const json = (await res.json()) as { ok?: boolean; whatsapp?: string };
      if (!res.ok || !json.whatsapp) throw new Error("failed");

      setStatus("ok");
      setMessage(
        mode === "signup"
          ? "Request received. Paul will confirm your plan and set up your account."
          : "Client dashboard logins aren’t live yet. Paul will send your access details.",
      );
      form.reset();
      window.open(json.whatsapp, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Email ${site.email} or message Paul on WhatsApp.`);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-2 p-6 sm:p-8">
      <div
        role="tablist"
        aria-label="Account"
        className="mb-6 grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-ink p-1"
      >
        {(["signup", "login"] as Mode[]).map((value) => (
          <button
            key={value}
            role="tab"
            type="button"
            aria-selected={mode === value}
            onClick={() => {
              setChosenMode(value);
              setStatus("idle");
              setMessage("");
            }}
            className={`rounded-full py-2.5 text-sm font-semibold transition ${
              mode === value
                ? "bg-bronze text-ink"
                : "text-paper/70 hover:text-bronze"
            }`}
          >
            {value === "signup" ? "Create account" : "Sign in"}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {mode === "signup" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-muted">First name</span>
              <input
                name="firstName"
                required
                autoComplete="given-name"
                className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Last name</span>
              <input
                name="lastName"
                autoComplete="family-name"
                className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
              />
            </label>
          </div>
        ) : null}

        <label className="block">
          <span className="mb-2 block text-sm text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
          />
        </label>

        {mode === "signup" ? (
          <>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Mobile</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Plan you want</span>
              <select
                name="plan"
                defaultValue={planFromUrl || "Not sure yet"}
                className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
              >
                <option>Not sure yet</option>
                {offers.map((offer) => (
                  <option key={offer.id} value={offer.name}>
                    {offer.name} — from {offer.fromPrice}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">
                Main goal <span className="text-muted/60">(optional)</span>
              </span>
              <input
                name="goal"
                placeholder="Fat loss, strength, routine"
                className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
              />
            </label>
          </>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-bronze py-3 font-semibold text-ink transition hover:bg-bronze-2 disabled:opacity-60"
        >
          {status === "sending"
            ? "Sending…"
            : mode === "signup"
              ? "Create my account"
              : "Request access"}
        </button>

        {message ? (
          <p
            className={`text-sm ${status === "error" ? "text-red-300" : "text-bronze"}`}
          >
            {message}
          </p>
        ) : null}

        <p className="text-xs leading-relaxed text-muted">
          The client dashboard is launching soon. For now your details go
          straight to Paul, who confirms your plan and sets you up in the MFF
          app. Read our{" "}
          <Link href="/privacy" className="text-bronze hover:text-bronze-2">
            privacy notice
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
