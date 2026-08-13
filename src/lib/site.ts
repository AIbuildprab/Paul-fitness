export const site = {
  name: "Mindfull Food Fitness",
  short: "MFF",
  coach: "Paul McGann",
  tagline: "Transform Your Body & Life",
  hero: "No BS. No guesswork. Just real coaching, real results.",
  description:
    "No BS. No guesswork. Just real coaching, real results. Personal training in Leicester and online coaching with Paul McGann.",
  url: "https://mindfullfoodfitness.com",
  whatsapp: "https://wa.link/rb80kp",
  instagram: "https://www.instagram.com/paulmcgann_mff/",
  email: "paul@mindfullfoodfitness.com",
  phoneDisplay: "07516 336826",
  phoneHref: "tel:+447516336826",
  whatsappNumber: "447516336826",
  location: "Leicester, UK",
  reviewsCount: 26,
  established: 2018,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/coaching", label: "Coaching" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const cta = {
  primary: { href: site.whatsapp, label: "Book a strategy call", external: true },
  whatsapp: { href: site.whatsapp, label: "WhatsApp me", external: true },
} as const;
