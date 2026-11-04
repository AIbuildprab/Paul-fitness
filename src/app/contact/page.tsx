import type { Metadata } from "next";
import { RedirectHash } from "@/components/RedirectHash";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <RedirectHash hash="contact" />;
}
