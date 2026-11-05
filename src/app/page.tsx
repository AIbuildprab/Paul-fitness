import Image from "next/image";
import { BeforeAfter } from "@/components/BeforeAfter";
import { btnGold, btnOutline, Kicker } from "@/components/Brand";
import { ContactForm } from "@/components/ContactForm";
import { GalleryVideos } from "@/components/GalleryVideos";
import { GuideForm } from "@/components/GuideForm";
import { HeroMotion } from "@/components/HeroMotion";
import { PhaseTabs } from "@/components/PhaseTabs";
import { PromiseCard } from "@/components/PromiseCard";
import { Reveal } from "@/components/Reveal";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import {
  gallery,
  galleryVideos,
  included,
  inPersonIncludes,
  nutritionPoints,
  packages,
  promisePoints,
  roadmap,
  spotlightQuotes,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroMotion />

      <section id="about" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal from="left" className="relative mx-auto w-full max-w-md">
            <Image
              src="/mff/download-4.webp"
              alt="Paul McGann coaching"
              width={800}
              height={1000}
              className="reveal-ltr absolute top-8 left-0 hidden w-36 rounded-2xl object-cover shadow-lg sm:block"
            />
            <Image
              src="/mff/download-3-2.webp"
              alt="Paul McGann, coach at Mindfull Food Fitness"
              width={1000}
              height={1500}
              className="ml-auto w-[78%] rounded-2xl object-cover"
            />
            <div className="rise-ltr absolute bottom-6 left-0 flex items-center gap-3 rounded-2xl bg-gold px-4 py-3 text-white shadow-lg">
              <Image src="/mff/muscle.png" alt="" width={40} height={40} className="h-10 w-10" />
              <p>
                <span className="block text-2xl font-black leading-none">17+</span>
                <span className="text-[10px] font-semibold tracking-wide uppercase">Years’ experience</span>
              </p>
            </div>
          </Reveal>
          <Reveal from="right">
            <Kicker
              className="rise-ttb"
              iconClassName="h-8 w-8"
              style={{ fontSize: "1.5rem", lineHeight: "2rem", gap: "0.75rem" }}
            >
              About Us
            </Kicker>
            <h2 className="rise-rtl mt-3 text-4xl font-black sm:text-5xl">
              The Story <span className="text-gold">Behind MFF</span>
            </h2>
            <div className="rise-bottom mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                For 17 years I worked in Michelin-star kitchens. Food, discipline and performance under pressure —
                every day.
              </p>
              <p>
                Then personal loss, and watching my own family struggle with their health, changed how I saw all of
                it. There had to be a better way. That’s what took me from the kitchen to coaching. Since 2018 I’ve
                helped clients rebuild their nutrition, energy and body through strategies that fit real life — not a
                diet you abandon in week six. I work in a set order: mindset first, then nutrition, then training. Get
                the first two right and the training finally sticks.
              </p>
              <p>
                <strong>My mission is simple:</strong> results that last, without extreme diets or routines you can’t
                keep.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                Book a Free Strategy Call
              </a>
              <a href="#pricing" className={btnGold}>
                See Pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="programme" className="bg-black py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal from="left">
            <Kicker
              className="!text-white"
              iconClassName="h-8 w-8"
              style={{ fontSize: "1.5rem", lineHeight: "2rem", gap: "0.75rem" }}
            >
              The Programme
            </Kicker>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              MFF 12-Month Body <span className="rise-ltr inline-block text-gold">& Lifestyle Transformation</span>
            </h2>
            <p className="rise-bottom mt-4 max-w-2xl text-white/75">
              This isn’t a programme. It’s a rebuild — the knowledge, structure and mindset to stay in control of your
              body for life.
            </p>
            <div className="mt-8">
              <PhaseTabs />
            </div>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={`${btnGold} mt-8`}>
              Book a Free Strategy Call
            </a>
          </Reveal>
          <Reveal from="right">
            <div className="rise-rtl relative pr-3.5 pb-3.5 sm:pr-4 sm:pb-4">
              <div
                aria-hidden
                className="absolute top-3.5 right-0 bottom-0 left-3.5 rounded-2xl bg-gold sm:top-4 sm:left-4"
              />
              <Image
                src="/mff/img.webp"
                alt="Mindfull Food Fitness coaching"
                width={919}
                height={1024}
                className="relative z-10 w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-16 pb-6 sm:pt-20 sm:pb-8">
        <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
          <Kicker
            className="justify-center"
            iconClassName="h-8 w-8"
            style={{ fontSize: "1.5rem", lineHeight: "2rem", gap: "0.75rem" }}
          >
            Real Results
          </Kicker>
          <h2 className="mt-3 text-center text-4xl font-black">
            The Results <span className="text-gold">Behind MFF</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {spotlightQuotes.map((quote) => (
              <blockquote key={quote.name} className="rounded-2xl border border-black/10 bg-[#fafafa] p-6">
                <p className="text-sm leading-relaxed text-neutral-700">{quote.quote}</p>
                <footer className="mt-4 text-sm font-semibold">{quote.name}</footer>
              </blockquote>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="mff-nutrition" className="bg-[#fafafa] pt-6 pb-16 sm:pt-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal from="left">
            <Image
              src="/mff/9954.jpg"
              alt="Food prepared for MFF nutrition coaching"
              width={819}
              height={1024}
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal from="up" delay={80}>
            <Kicker iconClassName="h-6 w-6" style={{ fontSize: "1.3125rem", lineHeight: "1.875rem", gap: "0.75rem" }}>
              MFF Nutrition
            </Kicker>
            <h2 className="mt-3 text-4xl font-black">
              The MFF <span className="text-gold">Nutrition System</span>
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Most coaches hand you a meal plan. I teach you how to build meals that fit your life and your goals —
              because I’ve lived both sides: the chef and the coach.
            </p>
            <p className="mt-4 font-semibold text-gold">You’ll learn how to:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {nutritionPoints.map((point) => (
                <article key={point.title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <Image src={point.icon} alt="" width={48} height={48} className="h-12 w-12" />
                  <h3 className="mt-3 text-base font-semibold">{point.title}</h3>
                </article>
              ))}
            </div>
            <p className="mt-5 text-neutral-700">
              By the end you can plan, cook and adjust your own food. That’s the part that means you never need a coach
              again.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="whats-included" className="bg-black py-8 text-white sm:py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal from="left">
            <Kicker>Included</Kicker>
            <h2 className="mt-3 text-4xl font-black">
              What&apos;s <span className="text-gold">Included</span>
            </h2>
            <p className="mt-3 text-white/70">Included in every package:</p>
            <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[included.slice(0, 4), included.slice(4)].map((column) => (
                <ul key={column[0]} className="space-y-3">
                  {column.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-gold text-[9px] leading-none text-gold"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGold} mt-6`}
            >
              Book a Free Strategy Call
            </a>
          </Reveal>
          <Reveal from="right" className="mx-auto w-full max-w-md">
            <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[400px]">
              <Image
                src="/mff/17019.webp"
                alt="MFF fitness and nutrition coaching support"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="gallery" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Kicker
            className="justify-center"
            iconClassName="h-12 w-12"
            style={{ fontSize: "1.875rem", lineHeight: "2.25rem", gap: "0.75rem" }}
          >
            Gallery
          </Kicker>
          <h2 className="mt-3 text-center text-4xl font-black">
            Transformations <span className="text-gold">Gallery</span>
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article key={item.before} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <Image src="/mff/1000065805-1.webp" alt="" width={1024} height={134} className="h-auto w-full" />
                <BeforeAfter before={item.before} after={item.after} alt="MFF client before and after transformation" />
                <Image src={item.banner} alt="" width={1024} height={260} className="h-auto w-full" />
              </article>
            ))}
          </div>
          <GalleryVideos sources={galleryVideos} />
        </div>
      </section>

      <section id="reviews" className="relative overflow-hidden bg-[#202020] py-16 text-white sm:py-[70px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage: "url(/mff/reviews-bg.svg)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "600px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-[40px] leading-[50px] font-bold">
            What <span className="text-gold">Clients Say</span>
          </h2>
          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-center text-sm text-white/80 hover:text-white"
          >
            {site.reviewsCount} five-star reviews on Google
          </a>
          <ReviewCarousel />
        </div>
      </section>

      <section id="pricing" className="bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Kicker
            className="justify-center"
            iconClassName="h-6 w-6"
            style={{ fontSize: "1.3125rem", lineHeight: "1.875rem", gap: "0.75rem" }}
          >
            Pricing
          </Kicker>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-black">
            Invest In The Result. <span className="text-gold">Not Another Quick Fix</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-700">
            Three ways in. Same coaching, same standards — the difference is how far we take it. Every package is paid
            in full up front.
          </p>
          <div className="mt-10 grid items-stretch gap-5 lg:h-[calc(100dvh-7rem)] lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal key={item.id} delay={index * 100} className="h-full min-h-0">
              <article
                className={`relative flex h-full min-h-0 flex-col rounded-3xl bg-white p-6 shadow-sm ${
                  "highlighted" in item && item.highlighted ? "ring-2 ring-gold" : "ring-1 ring-gold/55"
                }`}
              >
                {"badge" in item && item.badge ? (
                  <p className="absolute top-0 left-1/2 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-white uppercase">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden fill="currentColor">
                      <path d="M12 2.6 14.7 8.8l6.7.6-5.1 4.4 1.6 6.5L12 17.8 6.1 20.3l1.6-6.5L2.6 9.4l6.7-.6L12 2.6Z" />
                    </svg>
                    {item.badge}
                  </p>
                ) : null}
                <div className="shrink-0 text-center">
                  <Image src={item.icon} alt="" width={48} height={48} className="mx-auto h-12 w-12 brightness-0" />
                  <h3 className="mt-2 text-lg font-extrabold text-black">{item.kicker}</h3>
                  {"save" in item && item.save ? <p className="mt-1 text-sm font-semibold">{item.save}</p> : null}
                </div>
                <div className="plan-scroll mt-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pe-1">
                  {item.lead ? <p className="text-sm font-semibold">{item.lead}</p> : null}
                  {item.summary ? <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.summary}</p> : null}
                  {"note" in item && item.note ? (
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.note}</p>
                  ) : null}
                  <p className="mt-4 text-sm font-semibold">What’s included:</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
                        <span aria-hidden className="text-gold">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {"place" in item && item.place ? (
                    <p className="mt-4 text-sm font-medium text-neutral-800">{item.place}</p>
                  ) : null}
                  {"closer" in item && item.closer ? (
                    <p className="mt-4 text-sm font-semibold">{item.closer}</p>
                  ) : null}
                </div>
                <div className="mt-auto shrink-0 pt-6">
                  <p className="text-2xl font-black">{item.priceLabel}</p>
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnGold} mt-4 w-full`}
                  >
                    Book a Free Strategy Call
                  </a>
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-3xl bg-white p-6 text-center shadow-sm sm:p-10">
            <h3 className="text-xl font-black tracking-wide uppercase">Not sure which option is right for you?</h3>
            <p className="mx-auto mt-4 max-w-2xl">You don’t have to figure it out alone.</p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={`${btnGold} mt-5`}>
              Book a FREE Strategy Call
            </a>
            <p className="mx-auto mt-5 max-w-md">
              We’ll look at where you are now, where you want to go and whether MFF is the right fit for you.
            </p>
            <p className="mx-auto mt-4 max-w-2xl">No pressure. No hard sell. Just a straight conversation.</p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-[70px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/mff/roadmap-bg.webp)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center left",
            backgroundSize: "contain",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <div className="flex justify-center">
            <Kicker
              iconClassName="h-6 w-6"
              style={{ fontSize: "1.3125rem", lineHeight: "1.875rem", gap: "0.75rem" }}
            >
              The Complete Transformation
            </Kicker>
          </div>
          <h2 className="mt-3 text-4xl font-black sm:text-[40px] sm:leading-[50px]">
            Your 12-Month <span className="text-gold">Roadmap</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[33.6rem] text-[#303030]">
            A structured journey with clear phases, designed to help you build habits, make progress and achieve lasting
            results.
          </p>
          <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gold lg:block" />
            {roadmap.map((step) => (
              <article key={step.n} className="relative">
                <p className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-[22px] font-semibold text-white">
                  {step.n}
                </p>
                <h3 className="mt-4 text-sm font-semibold tracking-wide uppercase">{step.title}</h3>
                <div className="mx-auto mt-3 h-px w-10 bg-gold" />
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 text-white sm:py-[90px]">
        <Image src="/mff/gym.webp" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/[0.88]" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-11 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              1:1 In-Person <span className="text-gold">Personal Training</span>
            </h2>
            <p className="mt-4 max-w-xl text-white">
              One-to-one personal training in Leicester, tailored to your goals with expert guidance, real-time form
              correction and focused accountability.
            </p>
            <div
              className="mt-6 max-w-xl rounded-[15px] border border-white/55 border-l-4 px-4 py-4"
              style={{ backgroundColor: "#A68D412B" }}
            >
              <Kicker>Train With Purpose</Kicker>
              <h3 className="mt-2 text-[25px] leading-[35px] font-bold">
                Prefer training <span className="text-gold">face-to-face?</span>
              </h3>
              <p className="mt-1 font-[family-name:var(--font-open-sans)] text-base leading-relaxed text-white italic">
                Limited 1:1 spaces in Leicester for people who want coaching in the room — with real-time form
                correction, personalised training and expert guidance.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">In-person sessions include</h3>
            <ul className="mt-4 space-y-2.5">
              {inPersonIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <span aria-hidden className="h-3.5 w-3.5 shrink-0 rounded-full border border-white" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex max-w-md items-end gap-3 text-lg font-bold">
              <span>Per Session</span>
              <span aria-hidden className="mb-1.5 h-px flex-1 border-b border-dotted border-white/70" />
              <span className="text-gold">£40</span>
            </div>
            <p className="mt-1 text-sm text-white">10-session block — 20% discount.</p>
            <p className="mt-3 text-sm text-white/80 italic">Limited spaces available, subject to availability.</p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={`${btnGold} mt-6`}>
              Book a Free Strategy Call
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-16 grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
              <path d="M2.5 10h19" />
            </svg>
          </div>
          <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-gold uppercase">Coaching client perk</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Payment &amp; gym membership</h2>
          <p className="mt-3 max-w-xl text-white/85">
            One-to-one package clients get a reduced gym rate at Fitness Factory, on the same floor you train on.
          </p>
          <div className="mt-6 rounded-2xl border border-gold/70 px-5 py-6 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-[0.12em] text-white uppercase">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden fill="currentColor">
                  <path d="M12 2.6 14.7 8.8l6.7.6-5.1 4.4 1.6 6.5L12 17.8 6.1 20.3l1.6-6.5L2.6 9.4l6.7-.6L12 2.6Z" />
                </svg>
                Package discount
              </span>
              <span className="inline-flex rounded-full border border-gold px-3 py-1 text-xs font-bold tracking-[0.12em] text-gold uppercase">
                Save up to £15/mo
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-bold">Discounted gym membership</h3>
            <p className="mt-1 text-white/75">
              Standard walk-in rate <span className="line-through">£50/month</span>
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 px-4 py-6 text-center">
                <p className="text-xs tracking-[0.16em] text-white/70 uppercase">Cash</p>
                <p className="mt-2 text-4xl font-black">£35</p>
                <p className="mt-1 text-sm text-white/70">per month</p>
              </div>
              <div className="rounded-xl border border-white/20 px-4 py-6 text-center">
                <p className="text-xs tracking-[0.16em] text-white/70 uppercase">Card</p>
                <p className="mt-2 text-4xl font-black">£40</p>
                <p className="mt-1 text-sm text-white/70">per month</p>
              </div>
            </div>
            <p className="mx-auto mt-5 max-w-md text-center text-sm text-white/75">
              Membership is arranged directly with the gym. No long-term tie-in required.
            </p>
          </div>
        </div>
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.2" />
            </svg>
          </div>
          <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-gold uppercase">Training location</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Location</h2>
          <h3 className="mt-4 text-xl font-bold">Fitness Factory Leicester</h3>
          <p className="mt-2 leading-relaxed text-white/80">
            Tara House, Hilltop Rd
            <br />
            Leicester, LE5 1TT
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-black">
            <iframe
              title="Map of Fitness Factory Leicester"
              src="https://maps.google.com/maps?q=52.660714,-1.076883&z=16&hl=en&output=embed"
              className="h-56 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.google.com/maps?ll=52.660714,-1.076883&z=16&t=m&hl=en&gl=GB&mapclient=embed&cid=4673350107604756873"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gold px-5 py-3 text-sm font-bold tracking-[0.14em] text-gold uppercase transition hover:bg-gold hover:text-white"
          >
            Open in Google Maps
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 5h5v5M19 5l-9 9" />
              <path d="M17 13.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5.5" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-white/70">
            Tap Directions in Google Maps and choose your starting point.
          </p>
        </div>
        </div>
      </section>

      <section id="promise" className="bg-white px-4 py-16 sm:px-8 sm:py-[70px]">
        <PromiseCard>
          <div className="relative z-10 bg-black px-8 py-12 text-white sm:px-[60px] sm:py-[70px]">
            <h2 className="text-4xl leading-[50px] font-bold">
              The MFF <span className="text-gold">Promise</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed">
              This isn’t about quick fixes, trends, or six-week plans. It’s about teaching you how to fuel your body with
              precision, train with purpose, and live with balance — for life.
            </p>
            <p className="mt-5 font-bold">You’ll learn how to:</p>
            <ul className="mt-3 space-y-2">
              {promisePoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <svg viewBox="0 0 512 512" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden fill="#A68D41">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-xl text-sm leading-relaxed italic">
              At the end of this journey, you won’t just have a new body — you’ll have the knowledge and mindset to stay
              in control for life. That’s the promise: you won’t need me — or anyone else — again.
            </p>
          </div>
        </PromiseCard>
      </section>

      <section
        className="relative flex min-h-[400px] items-center py-[70px]"
        style={{
          backgroundImage: "url(/mff/guide-bg.webp)",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#FAFAFA]/65" />
        <div className="relative mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <Kicker className="!text-lg" iconClassName="h-6 w-6">
                Start with the free guide
              </Kicker>
            </div>
          </Reveal>
          <Reveal from="pop" delay={90}>
            <h2 className="mt-3 text-4xl font-black">
              High protein <span className="text-gold">Indian vegan</span> recipe book
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <GuideForm />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[20px] bg-gold text-white shadow-[0_0_40px_rgba(0,0,0,0.06)] lg:grid-cols-[minmax(280px,38%)_1fr]">
          <div className="relative h-full min-h-[420px] lg:min-h-0">
            <Image
              src="/mff/download-3.webp"
              alt="Paul McGann"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <h2 className="text-[26px] leading-[1.35] font-semibold">
                Ready To Rebuild Your
                <br />
                Body & Life?
              </h2>
              <div className="my-4 h-px w-full bg-white/30" />
              <a href={`mailto:${site.email}`} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center text-gold">
                  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path strokeLinejoin="round" d="M3.5 7.5h17v11h-17z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8 12 13.5 20.5 8" />
                  </svg>
                </span>
                <span>
                  <span className="block text-lg leading-none font-bold">Email Us</span>
                  <span className="mt-1 block text-sm">{site.email}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="px-5 py-8 sm:px-10 sm:py-12 lg:px-12">
            <h2 className="text-4xl leading-tight font-bold">
              Get in <span className="text-black">Touch</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/95 sm:text-base">
              Only a few spaces open each quarter, so every client gets my full attention. Apply below — or book a free
              call if you’d rather talk first.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
