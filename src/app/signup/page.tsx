import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/Container";
import { SignupForm } from "@/components/SignupForm";
import { appFeatures } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Create your Mindfull Food Fitness account to start coaching with Paul McGann. Training, nutrition, and mindset in one app.",
};

const steps = [
  "Create your account and tell Paul your goal.",
  "Paul confirms the right plan and your starting point.",
  "Your training and nutrition go live in the MFF app.",
];

export default function SignupPage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow>Start today</Eyebrow>
            <h1 className="font-display mt-3 text-4xl uppercase leading-[0.95] sm:text-5xl">
              Create your <span className="text-bronze">MFF account</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted">
              One account for your training, nutrition, check-ins, and progress.
              Not sure which plan fits?{" "}
              <Link href="/coaching" className="text-bronze hover:text-bronze-2">
                Compare the plans first
              </Link>
              .
            </p>

            <ol className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze/50 font-display text-sm text-bronze">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm text-paper/85">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-white/10 bg-ink-2 p-6">
              <div className="flex items-start gap-5">
                <Image
                  src="/app/app-programs.webp"
                  alt="The MFF app programs screen"
                  width={150}
                  height={300}
                  className="hidden w-24 shrink-0 sm:block"
                />
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-bronze">
                    Inside the MFF app
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-paper/80">
                    {appFeatures.map((feature) => (
                      <li key={feature}>— {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Suspense
              fallback={
                <div className="rounded-2xl border border-white/10 bg-ink-2 p-8 text-sm text-muted">
                  Loading form…
                </div>
              }
            >
              <SignupForm />
            </Suspense>
            <p className="mt-5 text-sm text-muted">
              Prefer to talk first? Message Paul on{" "}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bronze hover:text-bronze-2"
              >
                WhatsApp
              </a>{" "}
              or use the{" "}
              <Link href="/contact" className="text-bronze hover:text-bronze-2">
                enquiry form
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
