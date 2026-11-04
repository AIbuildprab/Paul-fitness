"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { planOptions } from "@/lib/content";
import { site } from "@/lib/site";

const field =
  "h-12 w-full rounded-md border border-black/10 bg-white px-4 text-base text-black outline-none focus:border-black/30";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

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
        body: JSON.stringify({ ...data, kind: "apply" }),
      });
      const json = (await res.json()) as { ok?: boolean; whatsapp?: string };
      if (!res.ok || !json.ok) throw new Error("failed");
      setStatus("ok");
      setMessage("Application sent. Paul will come back to you within 24 hours.");
      form.reset();
      if (json.whatsapp) window.open(json.whatsapp, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Email ${site.email} instead.`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:grid-cols-2">
      <label>
        <span className="sr-only">Name</span>
        <input name="name" required autoComplete="name" placeholder="Your Name" className={field} />
      </label>
      <label>
        <span className="sr-only">Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="Email Address" className={field} />
      </label>
      <label>
        <span className="sr-only">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="Phone No." className={field} />
      </label>
      <label>
        <span className="sr-only">Select Plan</span>
        <select
          name="plan"
          required
          defaultValue=""
          className={`${field} appearance-none bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath fill='%23111' d='M1.4.6 6 5.2 10.6.6 12 2 6 8 0 2z'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select Plan
          </option>
          {planOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-base text-black outline-none focus:border-black/30"
        />
      </label>
      <p className="text-sm leading-relaxed text-white/90 sm:col-span-2">
        Apply now for the Mindfull Food Fitness 12-Month Transformation — or tell me which package you’re looking at
        and I’ll come back to you within 24 hours.
      </p>
      <label className="flex items-start gap-2 text-sm text-white sm:col-span-2">
        <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 accent-black" />
        <span>
          By sending this you agree to the{" "}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-black bg-black px-8 text-sm font-medium text-white hover:bg-transparent hover:text-black disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Apply Now"}
        </button>
        {message ? (
          <p className={`mt-3 text-sm ${status === "error" ? "text-red-100" : "text-white"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
