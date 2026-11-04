import type { Metadata } from "next";
import { RedirectHash } from "@/components/RedirectHash";

export const metadata: Metadata = { title: "Gallery" };

export default function ResultsPage() {
  return <RedirectHash hash="gallery" />;
}
