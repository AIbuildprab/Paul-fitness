import type { CSSProperties, ReactNode } from "react";

export function Dumbbell({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="#A68D41">
      <path d="M32 15.467h-3.147v-6.4h-3.2v-2.667h-4.267v9.067h-10.667v-9.067h-4.267v2.667h-3.2v6.4h-3.253v1.067h3.253v6.4h3.2v2.667h4.267v-9.067h10.667v9.067h4.267v-2.667h3.2v-6.4h3.147v-1.067zM4.32 21.867v-11.733h2.133v11.733h-2.133zM9.653 24.533h-2.133v-17.067h2.133v17.067zM24.587 24.533h-2.133v-17.067h2.133v17.067zM27.787 21.867h-2.133v-11.733h2.133v11.733z" />
    </svg>
  );
}

export function Kicker({
  children,
  light = false,
  className = "",
  iconClassName = "h-4 w-4",
  style,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
  iconClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <p
      style={style}
      className={`flex items-center gap-2 text-sm font-semibold ${light ? "text-gold" : "text-gold"} ${className}`}
    >
      <Dumbbell className={iconClassName} />
      {children}
    </p>
  );
}

export const btnGold =
  "inline-flex min-h-12 items-center justify-center rounded-full border-2 border-gold bg-gold px-[30px] py-[15px] font-[family-name:var(--font-open-sans)] text-base font-medium text-white transition hover:bg-transparent hover:text-gold";

export const btnOutline =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-gold bg-transparent px-7 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white";

export const btnWhite =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-[30px] py-[15px] font-[family-name:var(--font-open-sans)] text-base font-medium text-black transition hover:bg-paper";
