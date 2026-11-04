import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-gold text-white hover:bg-gold-2",
  secondary:
    "border border-bronze/70 text-bronze hover:bg-bronze/10 hover:border-bronze",
  ghost: "text-paper/90 hover:text-bronze",
} as const;

type Variant = keyof typeof styles;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
