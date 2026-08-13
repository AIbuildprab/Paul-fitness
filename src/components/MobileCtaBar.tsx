import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-bronze py-3 text-center text-sm font-semibold text-ink"
        >
          Book a call
        </a>
        <a
          href="/contact"
          className="flex-1 rounded-full border border-bronze/70 py-3 text-center text-sm font-semibold text-bronze"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
