"use client";

import Link from "next/link";

import { useGalleryMedia } from "@/hooks/useGalleryMedia";

type RecentMediaStripProps = {
  limit?: number;
  className?: string;
};

export default function RecentMediaStrip({
  limit = 4,
  className = "",
}: RecentMediaStripProps) {
  const { media, loading } = useGalleryMedia(limit);

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}
      aria-busy={loading}
    >
      {media.map((item) => (
        <Link
          key={item.path}
          href="/gallery"
          aria-label={item.name}
          className="group relative z-10 aspect-[4/3] overflow-hidden rounded-xl bg-forest/40 ring-1 ring-cream/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-gold/50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.url}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

          {item.kind === "video" ? (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/70 text-cream shadow-lg backdrop-blur-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-4 w-4 fill-current"
                >
                  <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                </svg>
              </span>
            </span>
          ) : null}

          <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] uppercase tracking-[0.18em] text-cream/80">
            {item.kind === "video" ? "▶" : "◎"}
          </span>
        </Link>
      ))}
    </div>
  );
}
