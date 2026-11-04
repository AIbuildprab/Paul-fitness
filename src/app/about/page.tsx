import type { Metadata } from "next";
import { RedirectHash } from "@/components/RedirectHash";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <RedirectHash hash="about" />;
}
