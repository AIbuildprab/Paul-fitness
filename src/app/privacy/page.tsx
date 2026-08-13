import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the information you share through this website.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display mt-3 text-4xl uppercase sm:text-5xl">
          Privacy
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted">
          <p>
            {site.name} (“we”, “Paul”) uses this website to share coaching
            information and to let you get in touch. We do not sell your data.
          </p>
          <p>
            If you send an enquiry or create an account, the details you provide
            are used only to reply to you and set up your coaching — typically by
            opening WhatsApp or emailing {site.email}. We do not store form
            submissions on this website.
          </p>
          <p>
            This site may use basic hosting analytics from the platform that
            serves the pages (for example page views). We do not run advertising
            trackers.
          </p>
          <p>
            If you become a coaching client, training and nutrition details are
            handled separately through the MFF app and direct coaching channels,
            not through this marketing site.
          </p>
          <p>
            To ask a privacy question or request deletion of a message you sent,
            email {site.email} or WhatsApp Paul.
          </p>
        </div>
      </Container>
    </section>
  );
}
