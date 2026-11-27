import { useState, useEffect } from "react";
import { FALLBACK_MEDIA, type MediaItem } from "@/lib/media";

export function useGalleryMedia(limit = 24) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use fallback media since Supabase is not configured
    setMedia(FALLBACK_MEDIA);
    setLoading(false);
  }, []);

  return { media, loading, error: null };
}