import Image from "next/image";
import { Kicker } from "@/components/Brand";
import { site } from "@/lib/site";

export function HeroMotion() {
  return (
    <section
      id="home"
      className="relative isolate -mt-[88px] min-h-[calc(100dvh-2.25rem)] overflow-hidden bg-black pt-36 text-white lg:-mt-[79px] lg:min-h-[calc(100dvh-2.25rem)] lg:pt-[144px]"
    >
      <Image
        src="/mff/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 opacity-[0.88]"
        style={{ backgroundImage: "linear-gradient(135deg, #000000 55%, #00000070 100%)" }}
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-4 pb-16 lg:grid-cols-[3fr_2fr] lg:pb-16">
          <div className="hero-pop">
            <Kicker
              className="!text-white"
              iconClassName="h-8 w-8"
              style={{ fontSize: "1.5rem", lineHeight: "2rem", gap: "0.75rem" }}
            >
              Mindfull Food Fitness
            </Kicker>
            <h1 className="hero-gold-in mt-4 text-[38px] leading-[50px] font-black sm:text-[42px] lg:text-[56px] lg:leading-[64px]">
              The Last Coach <span className="text-gold">You&apos;ll Ever Need</span>
            </h1>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-[family-name:var(--font-open-sans)] text-[16px] leading-6 font-normal text-white">
              {["Mindset", "Nutrition", "Training"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg viewBox="0 0 512 512" className="h-4 w-4 shrink-0" aria-hidden fill="#A68D41">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="hero-pop-up mt-5 max-w-[612px] space-y-3 font-[family-name:var(--font-open-sans)] text-[17px] leading-[26px] font-normal text-white">
              <p>Stop chasing quick fixes. Start building a body you understand.</p>
              <p>
                No gimmicks. No guesswork. Just expert coaching, real food, smart training and the knowledge to own
                your results for life.
              </p>
              <p>I’ll help you transform your body — then teach you how to keep it.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-gold bg-gold px-6 py-2.5 font-[family-name:var(--font-open-sans)] text-[15px] font-medium text-white transition hover:bg-transparent hover:text-gold"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#whats-included"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 font-[family-name:var(--font-open-sans)] text-[15px] font-medium text-black transition hover:bg-paper"
              >
                See What’s Included
              </a>
            </div>
          </div>
          <div>
            <div className="hero-phone-in relative mx-auto h-[420px] w-[206px] shrink-0 sm:h-[480px] sm:w-[236px]">
            <div className="absolute overflow-hidden bg-black" style={{ left: "6%", right: "6%", top: "5%", bottom: "2.5%" }}>
              <video
                className="absolute inset-x-0 top-1/2 aspect-[9/16] w-full -translate-y-1/2 bg-black object-cover"
                src="/mff/Hero.mp4"
                poster="/mff/fallback.webp"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <img
              src="/mff/iphone-13-e1742838277438.png"
              alt=""
              width={332}
              height={675}
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />
            </div>
          </div>
        </div>
    </section>
  );
}
