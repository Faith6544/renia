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

export const FALLBACK_MEDIA: MediaItem[] = [
  {
    name: "hero",
    path: "/images/hero.jpg.png",
    url: "/images/hero.jpg.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "home-cleaning",
    path: "/images/home-cleaning.jpg.png",
    url: "/images/home-cleaning.jpg.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "pro-cleaning",
    path: "/images/pro-cleaning.jpg.png",
    url: "/images/pro-cleaning.jpg.png",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/png",
  },
  {
    name: "flyer-1",
    path: "/images/flyer-1-layout.jpg.jpg",
    url: "/images/flyer-1-layout.jpg.jpg",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/jpeg",
  },
  {
    name: "flyer-2",
    path: "/images/flyer-2-layout.jpg.jpg",
    url: "/images/flyer-2-layout.jpg.jpg",
    kind: "image",
    createdAt: null,
    size: null,
    mimeType: "image/jpeg",
  },
];