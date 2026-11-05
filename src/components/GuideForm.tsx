"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function GuideForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "guide", email }),
      });
      const json = (await res.json()) as { ok?: boolean; whatsapp?: string };
      if (!res.ok || !json.ok) throw new Error("failed");
      setStatus("ok");
      setMessage("Request received. Paul will send the guide, and you’ll also get his emails. Unsubscribe any time.");
      form.reset();
      if (json.whatsapp) window.open(json.whatsapp, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Email ${site.email} and Paul will send the guide.`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl flex-col flex-wrap gap-3 sm:flex-row">
      <label className="min-w-0 flex-1">
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email Address"
          className="h-12 w-full rounded-lg border border-black/10 px-4 text-base outline-none focus:border-gold"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-5 text-sm font-semibold text-white hover:bg-gold-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send me the guide"}
      </button>
      {message ? (
        <p className={`basis-full text-sm ${status === "error" ? "text-red-700" : "text-neutral-600"}`}>
          {message}
        </p>
      ) : (
        <p className="basis-full text-sm text-neutral-500">You’ll also get my emails. Unsubscribe any time.</p>
      )}
    </form>
  );
}
