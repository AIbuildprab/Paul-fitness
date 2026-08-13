import Image from "next/image";
import { transformations } from "@/lib/content";

export function TransformationRail({ limit }: { limit?: number }) {
  const items = limit ? transformations.slice(0, limit) : transformations;

  return (
    <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.src}
          className="w-[80vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-ink-2 sm:w-auto sm:max-w-none"
        >
          <Image
            src={item.src}
            alt={`Client transformation: ${item.label}`}
            width={1080}
            height={1080}
            loading={index < 3 ? undefined : "lazy"}
            className="w-full"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="font-display text-lg text-bronze">{item.label}</p>
            <p className="text-xs uppercase tracking-widest text-muted">
              {item.note}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
