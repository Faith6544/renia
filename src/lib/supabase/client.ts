import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_SETUP_MESSAGE =
  "Supabase is not configured. Replace the placeholder values in .env.local with your project's URL and public anon key, then restart the dev server.";

type SupabaseConfig = {
  url: string;
  anonKey: string;
};

let browserClient: SupabaseClient | null = null;

/**
 * Reads and validates the public Supabase environment variables.
 *
 * Placeholder values are rejected on purpose: passing something like
 * "your_supabase_url_here" to createClient throws an "Invalid supabaseUrl"
 * error, which is far less helpful than a clear setup message.
 */
function readSupabaseConfig(): SupabaseConfig | null {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!rawUrl || !anonKey) {
    return null;
  }

  const placeholderPattern = /your[-_ ]|placeholder|changeme|example\.com/i;
  if (placeholderPattern.test(rawUrl) || placeholderPattern.test(anonKey)) {
    return null;
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawUrl);
  } catch {
    return null;
  }

  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    return null;
  }

  return {
    url: parsedUrl.toString().replace(/\/$/, ""),
    anonKey,
  };
}

/**
 * Returns true when both public Supabase variables contain real values.
 * Useful for rendering a helpful setup message instead of crashing.
 */
export function isSupabaseConfigured(): boolean {
  return readSupabaseConfig() !== null;
}

/**
 * Lazily creates a single Supabase browser client.
 *
 * Creating the client lazily (instead of at module scope) keeps `next build`
 * working before `.env.local` has been configured.
 */
export function getSupabaseBrowserClient(): SupabaseClient {
  if (browserClient) {
    return browserClient;
  }

  const config = readSupabaseConfig();

  if (!config) {
    throw new Error(SUPABASE_SETUP_MESSAGE);
  }

  try {
    browserClient = createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: "renia-auth",
      },
    });
  } catch (error) {
    throw new Error(SUPABASE_SETUP_MESSAGE, { cause: error });
  }

  return browserClient;
}
