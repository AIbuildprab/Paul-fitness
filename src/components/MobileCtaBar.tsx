"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/signup") return null;

  return (
    <div
      aria-hidden={!visible}
      className={`safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white px-3 pt-3 shadow-lg transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? undefined : -1}
        className="mx-auto flex max-w-md items-center justify-center rounded-full bg-gold px-4 py-3.5 text-sm font-semibold text-white"
      >
        Book a Free Strategy Call
      </a>
    </div>
  );
}
