"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
      <Image src={after} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <Image src={before} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-black shadow">
          ↔
        </span>
      </div>
      <span className="pointer-events-none absolute top-3 left-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
        After
      </span>
      <label className="absolute inset-0 z-10 cursor-ew-resize">
        <span className="sr-only">Compare before and after</span>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </label>
    </div>
  );
}
