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

export function isAdminUser(user: User | null | undefined): boolean {
  if (!user) {
    return false;
  }

  if (
    ADMIN_ROLES.has(readRole(user.app_metadata)) ||
    ADMIN_ROLES.has(readRole(user.user_metadata))
  ) {
    return true;
  }

  if (user.user_metadata?.is_admin === true) {
    return true;
  }

  const email = user.email?.trim().toLowerCase();
  return Boolean(email && readAdminEmails().includes(email));
}
