"use client";

import { useCallback, useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { useGalleryMedia } from "@/hooks/useGalleryMedia";

export default function GalleryGrid() {
  const { t } = useLanguage();
  const { media, loading, error } = useGalleryMedia(60);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex === null ? null : (media[activeIndex] ?? null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + media.length) % media.length,
    );
  }, [media.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % media.length,
    );
  }, [media.length]);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, close, showNext, showPrevious]);

  return (
    <>
      <div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-busy={loading}
      >
        {media.map((item, index) => (
          <button
            key={item.path}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${item.kind === "video" ? t.gallery.videoLabel : t.gallery.imageLabel} — ${item.name}`}
            className="group overflow-hidden rounded-2xl bg-white text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-line/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-forest">
              {item.kind === "video" ? (
                <video
                  src={item.url}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.url}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

              {item.kind === "video" ? (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/70 text-cream shadow-lg backdrop-blur-sm">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="ml-1 h-5 w-5 fill-current"
                    >
                      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                    </svg>
                  </span>
                </span>
              ) : null}
            </span>

            <span className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="truncate text-[11px] uppercase tracking-[0.18em] text-stone">
                {item.kind === "video"
                  ? t.gallery.videoLabel
                  : t.gallery.imageLabel}
              </span>
              <span
                aria-hidden="true"
                className="text-sm text-gold transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </span>
          </button>
        ))}
      </div>

      {error ? (
        <p className="mt-8 rounded-xl bg-gold/10 px-4 py-3 text-base leading-relaxed text-stone">
          {t.gallery.setup}
        </p>
      ) : null}

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.name}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label={t.gallery.close}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 bg-forest/70 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {media.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label={t.gallery.previous}
              className="absolute left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 bg-forest/70 text-cream transition-colors hover:border-gold hover:text-gold sm:left-6"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 stroke-current"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
          ) : null}

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
          >
            {activeItem.kind === "video" ? (
              <video
                key={activeItem.path}
                src={activeItem.url}
                controls
                autoPlay
                muted
                playsInline
                className="max-h-[78vh] w-full bg-black object-contain"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={activeItem.url}
                alt={activeItem.name}
                className="max-h-[78vh] w-full object-contain"
              />
            )}

            <div className="flex items-center justify-between gap-4 px-5 py-4 text-cream/70">
              <span className="truncate text-xs uppercase tracking-[0.2em]">
                {activeItem.name}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                {(activeIndex ?? 0) + 1} / {media.length}
              </span>
            </div>
          </div>

          {media.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label={t.gallery.next}
              className="absolute right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 bg-forest/70 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 stroke-current"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
