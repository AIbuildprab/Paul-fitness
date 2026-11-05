import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const privacyEmail = site.email;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mindfull Food Fitness collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-black">Privacy Policy</h1>
        <p className="mt-3 text-sm text-neutral-500">Last updated: 19 September 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">
          <p>
            Mindfull Food Fitness respects your privacy and is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use and protect your information when you visit our website,
            contact us or use our coaching services.
          </p>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">1. Who We Are</h2>
            <p className="mt-2">
              Mindfull Food Fitness provides online and in-person fitness, nutrition and lifestyle coaching.
            </p>
            <p className="mt-2">
              For questions about this Privacy Policy or how your personal information is handled, contact:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href={`mailto:${privacyEmail}`} className="text-gold underline">
                {privacyEmail}
              </a>
            </p>
            <p className="mt-2">
              For the purposes of UK data protection law, Mindfull Food Fitness is the data controller for the personal
              information covered by this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">2. Information We Collect</h2>
            <p className="mt-2">Depending on how you interact with us, we may collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your name, email address and telephone number.</li>
              <li>Information submitted through enquiry, application or booking forms.</li>
              <li>Information about the coaching programme you are interested in.</li>
              <li>Communications between you and Mindfull Food Fitness.</li>
              <li>
                Information required to provide coaching services, including information about your goals, training,
                nutrition, lifestyle and progress.
              </li>
              <li>
                Health-related information you choose to provide where it is relevant to delivering coaching safely and
                appropriately.
              </li>
              <li>
                Technical information such as browser, device, IP address and website usage information where collected
                through cookies or similar technologies.
              </li>
              <li>Marketing preferences.</li>
            </ul>
            <p className="mt-2">We only collect information that is reasonably necessary for the relevant purpose.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">3. How We Use Your Information</h2>
            <p className="mt-2">We may use your information to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Respond to enquiries and applications.</li>
              <li>Arrange strategy calls and consultations.</li>
              <li>Provide and manage coaching services.</li>
              <li>Personalise your training, nutrition and lifestyle coaching.</li>
              <li>Process payments and maintain appropriate business records.</li>
              <li>Provide requested resources, such as guides.</li>
              <li>Send marketing emails where we have the appropriate permission to do so.</li>
              <li>Operate, protect and improve our website and services.</li>
              <li>Meet legal, regulatory or accounting obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">4. Our Lawful Basis for Processing</h2>
            <p className="mt-2">Under UK GDPR, we process personal information where:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Contract:</strong> processing is necessary to provide services you have requested or to take
                steps before entering into a contract.
              </li>
              <li>
                <strong>Legitimate interests:</strong> processing is necessary for the reasonable operation,
                administration and protection of our business, where your rights do not override those interests.
              </li>
              <li>
                <strong>Consent:</strong> you have given permission, for example for certain marketing communications
                or uses of optional information.
              </li>
              <li>
                <strong>Legal obligation:</strong> processing is required to comply with applicable law.
              </li>
            </ul>
            <p className="mt-2">
              Where health information or other special category personal data is required for coaching, we will only
              process it where an appropriate legal condition applies, which may include your explicit consent.
            </p>
            <p className="mt-2">You may withdraw consent at any time where we rely on consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">5. Marketing Communications</h2>
            <p className="mt-2">
              If you choose to receive our guides, updates or marketing emails, we may use your email address to send
              relevant content and information about Mindfull Food Fitness.
            </p>
            <p className="mt-2">
              You can unsubscribe at any time using the unsubscribe option provided in our emails or by contacting us
              at{" "}
              <a href={`mailto:${privacyEmail}`} className="text-gold underline">
                {privacyEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">6. Sharing Your Information</h2>
            <p className="mt-2">We do not sell your personal information.</p>
            <p className="mt-2">
              We may share information with trusted service providers where necessary to operate our business, such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Website and hosting providers.</li>
              <li>Email and communication platforms.</li>
              <li>Booking and scheduling services such as Calendly.</li>
              <li>Coaching or client-management software.</li>
              <li>Payment providers.</li>
              <li>Analytics and website service providers.</li>
              <li>Professional advisers or authorities where legally required.</li>
            </ul>
            <p className="mt-2">These providers are only given access to information necessary for their services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">7. International Data Transfers</h2>
            <p className="mt-2">
              Some technology providers we use may process information outside the United Kingdom.
            </p>
            <p className="mt-2">
              Where personal data is transferred internationally, we take appropriate steps to ensure that the
              information receives a level of protection required by UK data protection law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">8. How Long We Keep Your Information</h2>
            <p className="mt-2">
              We retain personal information only for as long as reasonably necessary for the purpose for which it was
              collected, including providing services and meeting legal, tax, accounting or regulatory requirements.
            </p>
            <p className="mt-2">
              Marketing information may be retained until you unsubscribe or withdraw your consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">9. Cookies</h2>
            <p className="mt-2">
              Our website may use essential cookies required for the website to operate and may also use analytics or
              third-party technologies.
            </p>
            <p className="mt-2">
              Where consent is required for non-essential cookies, these will only be used after you have been given
              the appropriate choice.
            </p>
            <p className="mt-2">You can also control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">10. Your Data Protection Rights</h2>
            <p className="mt-2">Depending on the circumstances, UK data protection law may give you the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Request access to your personal information.</li>
              <li>Ask us to correct inaccurate information.</li>
              <li>Ask us to delete your information.</li>
              <li>Request restriction of processing.</li>
              <li>Object to certain processing.</li>
              <li>Request transfer of your information where applicable.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact{" "}
              <a href={`mailto:${privacyEmail}`} className="text-gold underline">
                {privacyEmail}
              </a>
              .
            </p>
            <p className="mt-2">
              You also have the right to raise a concern with the Information Commissioner’s Office (ICO) at{" "}
              <a href="https://ico.org.uk" className="text-gold underline" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">11. Security</h2>
            <p className="mt-2">
              We take reasonable technical and organisational measures to protect personal information against
              unauthorised access, loss, misuse, alteration or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-neutral-900">12. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time to reflect changes to our services, website or legal
              requirements. The latest version will always be published on this website.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
