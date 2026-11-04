"use client";

import { useEffect, useRef } from "react";

export function GalleryVideos({ sources }: { sources: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const videos = [...root.querySelectorAll("video")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = true;
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.45 },
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-8 grid gap-4 md:grid-cols-3">
      {sources.map((src) => (
        <video
          key={src}
          src={src}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-[9/16] w-full rounded-2xl bg-black object-cover"
        />
      ))}
    </div>
  );
}
