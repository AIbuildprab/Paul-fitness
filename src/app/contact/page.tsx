import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/Container";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send an enquiry to Paul McGann. Pick the coaching package you're interested in and get a specific reply within 24 hours.",
};

const steps = [
  "Tell Paul your main goal, training setup, and current challenges.",
  "He reviews which package fits best, including which option suits you.",
  "If there’s availability, you book a consultation and map the first phase.",
];

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
  { label: "WhatsApp", value: "Message Paul directly", href: site.whatsapp },
  { label: "Instagram", value: "@paulmcgann_mff", href: site.instagram },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="font-display mt-3 text-4xl uppercase leading-[0.95] sm:text-5xl">
              Send an enquiry
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              A few details help make the first reply useful and specific to your
              goals.
            </p>
            <div className="mt-10">
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-white/10 bg-ink-2 p-8 text-sm text-muted">
                    Loading form…
                  </div>
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h2 className="font-display text-xl uppercase tracking-wide">
                What happens next
              </h2>
              <ol className="mt-5 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bronze/50 font-display text-xs text-bronze">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-paper/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="font-display text-xl uppercase tracking-wide">
                Coaching details
              </h2>
              <dl className="mt-5 space-y-4">
                {details.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="text-sm">
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex min-h-11 items-center break-all text-paper transition hover:text-bronze"
                      >
                        {item.value}
                      </a>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                    Response time
                  </dt>
                  <dd className="mt-1 text-sm text-paper/85">
                    {site.responseTime}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                    Based in
                  </dt>
                  <dd className="mt-1 text-sm text-paper/85">
                    {site.location} · Online worldwide
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-ink-2 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Clear answers. No guesswork."
          />
          <div className="mt-10">
            <FaqList />
          </div>
        </Container>
      </section>
    </>
  );
}
