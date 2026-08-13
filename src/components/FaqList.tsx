import { faqs } from "@/lib/content";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center py-4 font-medium text-paper marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex w-full items-start justify-between gap-4">
              {item.q}
              <span className="mt-0.5 text-bronze transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
