"use client";

import { useEffect } from "react";

export function RedirectHash({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return (
    <p className="px-6 py-20 text-center">
      <a href={`/#${hash}`} className="text-gold underline">
        Continue
      </a>
    </p>
  );
}
