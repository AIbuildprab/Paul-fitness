import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}#business`,
        name: site.name,
        url: site.url,
        image: `${site.url}/paul/paul-gym.jpg`,
        telephone: site.phoneHref.replace("tel:", ""),
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Leicester",
          addressCountry: "GB",
        },
        priceRange: "££",
        sameAs: [site.instagram],
      },
      {
        "@type": "Person",
        name: site.coach,
        jobTitle: "Personal Trainer & Online Coach",
        worksFor: { "@id": `${site.url}#business` },
        url: site.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
