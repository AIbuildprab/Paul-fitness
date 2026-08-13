"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The signup page is its own conversion step; a duplicate bar just covers the form.
  if (pathname === "/signup") return null;

  return (
    <div
      aria-hidden={!visible}
      className={`safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md gap-2">
        <Link
          href="/coaching"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 items-center justify-center rounded-full bg-bronze px-4 py-3.5 text-sm font-semibold text-ink"
        >
          View plans
        </Link>
        <Link
          href="/signup"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 items-center justify-center rounded-full border border-bronze/70 px-4 py-3.5 text-sm font-semibold text-bronze"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
