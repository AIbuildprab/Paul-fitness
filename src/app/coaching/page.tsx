import type { Metadata } from "next";
import { RedirectHash } from "@/components/RedirectHash";

export const metadata: Metadata = { title: "Pricing" };

export default function CoachingPage() {
  return <RedirectHash hash="pricing" />;
}
