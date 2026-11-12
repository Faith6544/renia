"use client";

import { useCallback, useEffect, useState } from "react";

import {
  FALLBACK_MEDIA,
  listRecentMedia,
  type MediaItem,
} from "@/lib/media";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type GalleryMediaState = {
  media: MediaItem[];
  loading: boolean;
  usingFallback: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

export function useGalleryMedia(limit = 24): GalleryMediaState {
  const [media, setMedia] = useState<MediaItem[]>(() =>
    FALLBACK_MEDIA.slice(0, limit),
  );
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    let nextMedia: MediaItem[] = FALLBACK_MEDIA.slice(0, limit);
    let nextUsingFallback = true;
    let nextError: string | null = null;

    if (isSupabaseConfigured()) {
      try {
        const supabase = getSupabaseBrowserClient();
        const items = await listRecentMedia(supabase, limit);

        if (items.length > 0) {
          nextMedia = items;
          nextUsingFallback = false;
        }
      } catch (loadError) {
        console.error("Gallery media load failed:", loadError);
        nextError = "Unable to load gallery media.";
      }
    }

    setMedia(nextMedia);
    setUsingFallback(nextUsingFallback);
    setError(nextError);
    setLoading(false);
  }, [limit]);

  useEffect(() => {
    // Fetching published media on mount is the intended behaviour here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  return { media, loading, usingFallback, error, refresh };
}
