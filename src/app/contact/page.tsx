import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, Eyebrow } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call with Paul McGann. WhatsApp, email, or send a message — Leicester and online.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="font-display mt-3 text-4xl uppercase sm:text-6xl">
              Book a strategy call
            </h1>
            <p className="mt-5 text-muted">
              Free, no-pressure conversation about your goals and the right
              plan. You’ll speak with Paul directly.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-paper/85">
              <li>
                WhatsApp:{" "}
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-bronze-2"
                >
                  Message Paul
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={site.phoneHref} className="text-bronze hover:text-bronze-2">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-bronze hover:text-bronze-2"
                >
                  {site.email}
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-bronze-2"
                >
                  @paulmcgann_mff
                </a>
              </li>
              <li>Based in {site.location} · Online worldwide</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink-2 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              This opens WhatsApp with your details filled in so Paul can reply
              quickly.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 py-20">
        <Container>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="font-display mt-3 mb-8 text-3xl uppercase">
            Clear answers. No guesswork.
          </h2>
          <FaqList />
        </Container>
      </section>
    </>
  );
}
