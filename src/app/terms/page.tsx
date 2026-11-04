import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for coaching enquiries and packages with ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-black">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-neutral-700">
          <p>
            {site.name} provides personal training and online coaching with {site.coach}. The packages on this site —
            3 months (£750), 6 months (£1,500) and 12 months (£2,750) — are paid in full up front unless Paul agrees a
            different arrangement with you in writing. In-person sessions in Leicester are £40 each, with 20% off a
            10-session block, subject to availability.
          </p>
          <p>
            Booking a free strategy call is a conversation about whether coaching is the right fit. It is not a
            purchase. Coaching starts only after you and Paul agree the package.
          </p>
          <p>
            Results depend on your starting point, health, and how consistently you follow the plan. Nothing on this
            site promises a specific weight change, physique, or medical outcome.
          </p>
          <p>
            The recipe-guide form collects your email so Paul can send the guide and occasional emails. You can
            unsubscribe at any time. How enquiry details are used is covered in the{" "}
            <Link href="/privacy" className="text-gold underline">
              privacy policy
            </Link>
            .
          </p>
          <p>
            Questions about these terms: email {site.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
