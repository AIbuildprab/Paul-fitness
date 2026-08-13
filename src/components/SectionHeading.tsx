import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Container";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display mt-3 text-3xl uppercase leading-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-muted ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {intro}
        </p>
      ) : null}
      {children}
    </div>
  );
}
