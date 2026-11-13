import type { SupabaseClient, User } from "@supabase/supabase-js";

export type Profile = {
  id: string;
  username: string | null;
};

export type ProfileResult = {
  profile: Profile | null;
  /** True when the lookup itself failed (missing table, RLS, network…). */
  failed: boolean;
  error: unknown;
};

/**
 * Fetches the public profile row for a signed-in user.
 *
 * The lookup is intentionally forgiving: a missing `profiles` table or an RLS
 * policy that hides the row must never block the sign-in flow. Callers can use
 * `failed` to decide whether "no username" really means "new account".
 */
export async function fetchProfile(
  supabase: SupabaseClient,
  userId: string,
): Promise<ProfileResult> {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    return { profile: null, failed: true, error };
  }

  return {
    profile: (data as Profile | null) ?? null,
    failed: false,
    error: null,
  };
}

/** Returns the username stored for a user, or null when it is not set yet. */
export function readUsername(profile: Profile | null): string | null {
  const username = profile?.username?.trim();
  return username ? username : null;
}

const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,20}$/;

/** Validates a username: 3–20 letters, numbers or underscores. */
export function isValidUsername(value: string): boolean {
  return USERNAME_PATTERN.test(value.trim());
}

/** Builds a friendly default username suggestion from the auth user. */
export function suggestUsername(user: User): string {
  const metadata = user.user_metadata as Record<string, unknown> | undefined;
  const fullName =
    typeof metadata?.full_name === "string" ? metadata.full_name : "";
  const emailName = user.email?.split("@")[0] ?? "";

  return (fullName || emailName)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9_]+/g, "")
    .slice(0, 20);
}

/** Only allow same-site absolute paths as post-auth destinations. */
export function isSafeNextPath(value: string | null): value is string {
  return Boolean(value && value.startsWith("/") && !value.startsWith("//"));
}
