import type { User } from "@supabase/supabase-js";

const ADMIN_ROLES = new Set(["admin", "owner", "administrator"]);

/**
 * Reads the comma-separated list of admin emails from the public env.
 *
 * A public variable is fine here: it only decides which signed-in accounts
 * see the dashboard. Actual data access must still be protected by Supabase
 * row-level security policies.
 */
function readAdminEmails(): string[] {
  return (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function readRole(metadata: Record<string, unknown> | undefined): string {
  const role = metadata?.role;
  return typeof role === "string" ? role.trim().toLowerCase() : "";
}

/**
 * Returns true when the given email is on the admin allowlist.
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  const normalized = email?.trim().toLowerCase();
  if (!normalized) {
    return false;
  }

  return readAdminEmails().includes(normalized);
}

/**
 * Returns true for admin accounts: either the Supabase user carries an admin
 * role in their metadata or their email is on the admin allowlist.
 */
export function isAdminUser(user: User | null | undefined): boolean {
  if (!user) {
    return false;
  }

  const hasAdminRole =
    ADMIN_ROLES.has(readRole(user.app_metadata)) ||
    ADMIN_ROLES.has(readRole(user.user_metadata)) ||
    user.user_metadata?.is_admin === true;

  if (hasAdminRole) {
    return true;
  }

  return isAdminEmail(user.email);
}
