export type MediaKind = "image" | "video";

export type MediaItem = {
  name: string;
  path: string;
  url: string;
  kind: MediaKind;
  createdAt: string | null;
  size: number | null;
  mimeType: string | null;
};

const IMAGE_EXTENSION = /\.(jpe?g|png|webp|avif|gif)$/i;
const VIDEO_EXTENSION = /\.(mp4|webm|mov|m4v|ogv)$/i;

export function getMediaKind(
  name: string,
  mimeType?: string | null,
): MediaKind | null {
  if (mimeType?.startsWith("video/") || VIDEO_EXTENSION.test(name)) {
    return "video";
  }

  if (mimeType?.startsWith("image/") || IMAGE_EXTENSION.test(name)) {
    return "image";
  }

  return null;
}

/**
 * Gallery photos all come from /public/images/. Replace these files to swap
 * the gallery without touching code:
 * hero-home.png, home-card.png, pro-card.png, flyer-1.jpg, flyer-2.jpg.
 */
export const FALLBACK_MEDIA: MediaItem[] = [
  {
    name: "hero-home",
    path: "/images/hero-home.png",
    url: "/images/hero-home.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "home-card",
    path: "/images/home-card.png",
    url: "/images/home-card.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "pro-card",
    path: "/images/pro-card.png",
    url: "/images/pro-card.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "flyer-1",
    path: "/images/flyer-1.jpg",
    url: "/images/flyer-1.jpg",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/jpeg",
  },
  {
    name: "flyer-2",
    path: "/images/flyer-2.jpg",
    url: "/images/flyer-2.jpg",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/jpeg",
  },
];