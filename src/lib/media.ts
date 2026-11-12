import type { SupabaseClient } from "@supabase/supabase-js";

export const GALLERY_BUCKET = "renia-gallery";

export const GALLERY_FOLDER = "gallery";
export const GALLERY_TEAM_FOLDER = "team";

export const MAX_MEDIA_BYTES = 50 * 1024 * 1024;

export const MEDIA_ACCEPT =
  "image/jpeg,image/png,image/webp,image/avif,image/gif,video/mp4,video/webm,video/quicktime";

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

export function sanitizeFileName(name: string): string {
  const cleaned = name
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  return cleaned || "media";
}

export function buildStoragePath(fileName: string, folder = GALLERY_FOLDER): string {
  const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return `${folder}/${unique}-${sanitizeFileName(fileName)}`;
}

export async function listRecentMedia(
  supabase: SupabaseClient,
  limit = 24,
): Promise<MediaItem[]> {
  const { data, error } = await supabase.storage
    .from(GALLERY_BUCKET)
    .list(GALLERY_FOLDER, {
      limit,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

  if (error) {
    throw error;
  }

  return (data ?? [])
    .filter((entry) => entry.name && !entry.name.startsWith("."))
    .map((entry) => {
      const mimeType =
        (entry.metadata as { mimetype?: string } | null)?.mimetype ?? null;
      const kind = getMediaKind(entry.name, mimeType);

      if (!kind) {
        return null;
      }

      const path = `${GALLERY_FOLDER}/${entry.name}`;
      const {
        data: { publicUrl },
      } = supabase.storage.from(GALLERY_BUCKET).getPublicUrl(path);

      return {
        name: entry.name,
        path,
        url: publicUrl,
        kind,
        createdAt: entry.created_at ?? null,
        size:
          typeof entry.metadata?.size === "number"
            ? entry.metadata.size
            : null,
        mimeType,
      } satisfies MediaItem;
    })
    .filter((item): item is MediaItem => item !== null);
}

/**
 * Curated local images used while the Storage gallery is empty or when
 * Supabase has not been configured yet. This keeps the footer and gallery
 * page looking intentional from day one.
 */
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
