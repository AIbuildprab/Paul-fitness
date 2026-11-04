"use client";

import { useState } from "react";
import { phases } from "@/lib/content";

export function PhaseTabs() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <div>
      <div role="tablist" aria-label="Programme phases" className="flex flex-wrap gap-2">
        {phases.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${item.id}-tab`}
              aria-selected={selected}
              aria-controls={`${item.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${
                selected ? "bg-gold text-white" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${phase.id}-panel`}
        aria-labelledby={`${phase.id}-tab`}
        className="mt-6"
      >
        <h3 className="text-xl font-extrabold text-white">{phase.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">{phase.summary}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {phase.columns.map((column) => (
            <ul key={column[0]} className="space-y-2">
              {column.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/90">
                  <span aria-hidden className="mt-0.5 text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
