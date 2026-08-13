# Mindfull Food Fitness

Professional marketing site for coach **Paul McGann** — personal training in Leicester and online coaching.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Content lives in typed files, no CMS
- WhatsApp-first enquiries and sign-ups

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Pages

- `/` Home
- `/coaching` Interactive plan explorer with full pricing
- `/results` Client transformations and Google reviews
- `/about` Paul’s story
- `/contact` Enquiry form with package selector
- `/signup` Account creation (placeholder for the client dashboard)
- `/privacy`

## Content

All copy, pricing, reviews, and transformations are in `src/lib/content.ts`;
site-wide details (contact, socials, nav) are in `src/lib/site.ts`. Editing
those two files updates every page.

## Images

- `public/paul/` — photos of Paul (portraits, training, PCA stage)
- `public/transformations/` — branded client before/after graphics
- `public/app/` — MFF app mockups
- `public/brand/` — logos and stamps

The old WordPress media library was removed: alongside genuine photos it also
contained stock images of other people that shipped with the previous theme.
Only use images of Paul from `public/paul/`.

## Mobile

- `viewport-fit=cover` plus `env(safe-area-inset-bottom)` keeps the sticky CTA
  bar clear of the iOS home indicator (see the `.pb-cta` / `.safe-bottom`
  helpers in `globals.css`).
- Use `dvh` rather than `vh` for viewport-relative sizing so Safari's
  collapsing toolbar doesn't mis-size sections.
- Keep form inputs at 16px or larger, otherwise iOS zooms in on focus.
- Interactive elements should be at least 44px tall; links inline in a sentence
  are exempt.

## Adding Stripe

Each pricing option in `src/lib/content.ts` has an optional `stripePriceId`.
Fill those in, then swap the "Start <plan>" link in
`src/components/PlanExplorer.tsx` for a call to a checkout route that creates a
Stripe Checkout session from `active.stripePriceId`.

## Deploy

Push `Main` to GitHub. No hosting is configured yet.
