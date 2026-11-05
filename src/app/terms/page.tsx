import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const termsEmail = site.email;

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the Mindfull Food Fitness website and coaching services.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-black">Terms & Conditions</h1>
        <p className="mt-3 text-sm font-bold text-neutral-500">Last updated: 19 September 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">
          <p>
            These Terms & Conditions govern your use of the Mindfull Food Fitness website and, where applicable, the
            purchase and use of our coaching services.
          </p>
          <p>
            By purchasing or using our services, you agree to these Terms together with any programme-specific terms
            provided to you before purchase.
          </p>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">1. About Mindfull Food Fitness</h2>
            <p className="mt-2">
              Mindfull Food Fitness provides fitness, nutrition, mindset and lifestyle coaching online and, where
              available, in person.
            </p>
            <p className="mt-2">You can contact us at:</p>
            <p className="mt-2">
              Email:{" "}
              <a href={`mailto:${termsEmail}`} className="text-gold underline">
                {termsEmail}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">2. Coaching Services</h2>
            <p className="mt-2">
              The exact services included in your coaching programme will be explained before you purchase and may
              include personalised training, nutrition guidance, check-ins, educational resources, app access and
              coaching support.
            </p>
            <p className="mt-2">
              Programme features, availability and prices may change from time to time. The price and services confirmed
              when you purchase will apply to your agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">3. Health & Medical Disclaimer</h2>
            <p className="mt-2">
              Mindfull Food Fitness provides coaching and educational guidance. Our services are not a substitute for
              medical diagnosis, treatment or advice from an appropriately qualified healthcare professional.
            </p>
            <p className="mt-2">
              You are responsible for informing us of relevant injuries, medical conditions, medications or other
              circumstances that may affect your ability to participate safely.
            </p>
            <p className="mt-2">
              You should seek appropriate medical advice before beginning or significantly changing an exercise or
              nutrition programme where necessary.
            </p>
            <p className="mt-2">
              If you experience pain, illness or unusual symptoms while exercising, you should stop and seek appropriate
              professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">4. Results</h2>
            <p className="mt-2">
              We will provide coaching services with reasonable care and skill. However, individual results vary and
              depend on factors including participation, consistency, health, lifestyle and circumstances outside our
              control.
            </p>
            <p className="mt-2">
              Examples, testimonials, photographs or previous client results shown on the website do not guarantee that
              another client will achieve the same outcome.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">5. Payments</h2>
            <p className="mt-2">Prices will be clearly communicated before you purchase a programme.</p>
            <p className="mt-2">
              Unless otherwise agreed in writing, payment must be made in accordance with the payment arrangements
              provided when you join.
            </p>
            <p className="mt-2">You are responsible for providing accurate payment and contact information.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">6. Cancellation & Cooling-Off Rights</h2>
            <p className="mt-2">
              If you purchase coaching as a consumer online or at a distance, you will normally have a 14-day
              cancellation period from the date the contract is entered into, subject to applicable UK consumer law.
            </p>
            <p className="mt-2">
              If you ask us to begin providing services during the 14-day cancellation period and later cancel, you may
              be required to pay a proportionate amount for services already provided where permitted by law.
            </p>
            <p className="mt-2">
              Where the service has been fully performed during the cancellation period following your express request
              and appropriate acknowledgement, your statutory cancellation right may end.
            </p>
            <p className="mt-2">
              After any applicable statutory cancellation period, cancellation or refund requests will be handled
              according to the terms of your agreed programme and applicable consumer law.
            </p>
            <p className="mt-2">
              To request cancellation, contact{" "}
              <a href={`mailto:${termsEmail}`} className="text-gold underline">
                {termsEmail}
              </a>
              .
            </p>
            <p className="mt-2">Nothing in these Terms limits your statutory consumer rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">7. Client Responsibilities</h2>
            <p className="mt-2">To get the most from coaching, you agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide accurate and relevant information.</li>
              <li>Inform us of significant changes affecting your health or ability to participate.</li>
              <li>Use training and nutrition recommendations responsibly.</li>
              <li>Attend or participate in agreed coaching activities where reasonably possible.</li>
              <li>Communicate respectfully with the coach and other members of the community.</li>
            </ul>
            <p className="mt-2">
              We may pause or end services where continuing the coaching relationship would be inappropriate, unsafe or
              where there has been serious misuse of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">8. App, Community & Third-Party Services</h2>
            <p className="mt-2">
              Our services may use third-party platforms for booking, communication, payments, coaching, video calls or
              other functionality.
            </p>
            <p className="mt-2">
              These third-party services may have their own terms and privacy policies. We are not responsible for
              interruptions or changes to third-party platforms outside our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">9. Website Content</h2>
            <p className="mt-2">
              Unless otherwise stated, website content, programme materials, training resources, recipes, guides, videos
              and other materials provided by Mindfull Food Fitness are for your personal use only.
            </p>
            <p className="mt-2">
              You may not reproduce, sell, distribute or commercially exploit our materials without prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">10. Website Availability</h2>
            <p className="mt-2">
              We aim to keep the website and online services available and accurate but cannot guarantee uninterrupted
              or error-free access.
            </p>
            <p className="mt-2">
              We may update, modify or temporarily suspend parts of the website or service where reasonably necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">11. Liability</h2>
            <p className="mt-2">
              Nothing in these Terms excludes or limits liability where it would be unlawful to do so, including
              liability for death or personal injury caused by negligence, fraud, or rights that cannot legally be
              excluded under UK consumer law.
            </p>
            <p className="mt-2">
              To the extent permitted by law, Mindfull Food Fitness is not responsible for losses that were not
              reasonably foreseeable or for losses resulting from failure to follow appropriate coaching, safety or
              medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">12. Privacy</h2>
            <p className="mt-2">
              Personal information is handled in accordance with our{" "}
              <Link href="/privacy" className="text-gold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">13. Governing Law</h2>
            <p className="mt-2">These Terms are governed by the applicable laws of the United Kingdom.</p>
            <p className="mt-2">
              If you are a consumer, you retain any mandatory rights and protections available to you under the law that
              applies where you live.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">14. Changes to These Terms</h2>
            <p className="mt-2">
              We may update these Terms from time to time. The version applying to a coaching purchase will be the
              version provided or made available when the relevant agreement is entered into, unless changes are
              required by law.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
