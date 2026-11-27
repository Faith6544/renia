/**
 * Shared hero spacing. Every page header uses these values so the first
 * headline sits just below the sticky navbar instead of being vertically
 * centred in a tall hero.
 *
 * Mobile: pt-24 (96px) gives a clear gap under the ~72px fixed header.
 * Desktop: pt-28 / lg:pt-32 keeps the same generous but compact rhythm.
 */
export const HERO_SECTION_CLASSES =
  "relative overflow-hidden rounded-b-[2.5rem] bg-green-main text-white shadow-[0_24px_70px_rgba(8,35,20,0.18)]";

export const HERO_CONTENT_CLASSES =
  "relative z-10 w-full pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-32";
