"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const interests = [
  "Not sure — help me choose",
  "Online Coaching",
  "Elite Coaching",
  "Ultimate Experience",
  "Hybrid Coaching",
  "In-Person Personal Training",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; whatsapp?: string };
      if (!res.ok || !json.whatsapp) {
        throw new Error("Could not send");
      }
      setStatus("ok");
      form.reset();
      window.open(json.whatsapp, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
      setError(
        `Something went wrong. Message Paul on WhatsApp instead, or email ${site.email}.`,
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
        />
      </label>
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
      <label className="block">
        <span className="mb-2 block text-sm text-muted">I’m interested in</span>
        <select
          name="interest"
          className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
          defaultValue={interests[0]}
        >
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Your goals</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none ring-bronze/40 focus:ring-2"
          placeholder="Tell Paul where you are now and what you want to change."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-bronze py-3 font-semibold text-ink hover:bg-bronze-2 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-bronze">
          WhatsApp should open with your message. If it doesn’t, use the
          WhatsApp button on this page.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-300">{error}</p>
      ) : null}
    </form>
  );
}
