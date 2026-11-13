"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  fetchProfile,
  isSafeNextPath,
  readUsername,
} from "@/lib/profile";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

/**
 * OAuth / email-confirmation landing page.
 *
 * The Supabase browser client persists the session in localStorage, so the
 * code-for-session exchange has to happen on the client (a server route
 * handler could not share that session without the cookie-based SSR client).
 * After the exchange we decide whether the account still needs a username.
 */
export default function AuthCallbackPage() {
  const { t } = useLanguage();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function completeSignIn() {
      if (!isSupabaseConfigured()) {
        if (active) setMessage(t.auth.setup);
        return;
      }

      try {
        const supabase = getSupabaseBrowserClient();
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const nextParam = url.searchParams.get("next");
        const oauthError =
          url.searchParams.get("error_description") ??
          url.searchParams.get("error");

        if (oauthError) {
          throw new Error(oauthError);
        }

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            // `detectSessionInUrl` may have already exchanged the code, in
            // which case getSession() below still resolves a valid session.
            console.warn("Auth code exchange:", error.message);
          }
        }

        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        let session = data.session;

        // `detectSessionInUrl` may still be finishing its own PKCE exchange.
        // Give it a moment before concluding that there is no session.
        for (let attempt = 0; !session && attempt < 3; attempt += 1) {
          await new Promise((resolve) => setTimeout(resolve, 300));
          const retry = await supabase.auth.getSession();
          session = retry.data.session;
        }

        const user = session?.user ?? null;

        if (!user) {
          if (active) {
            setMessage("We could not complete the sign-in. Please try again.");
          }
          return;
        }

        const { profile, failed, error: profileError } = await fetchProfile(
          supabase,
          user.id,
        );

        if (failed) {
          // Do not trap the user in the username step when the profiles table
          // is unreachable; let them into the site instead.
          console.error("Could not load profile:", profileError);
          window.location.replace(isAdminUser(user) ? "/admin" : "/");
          return;
        }

        if (!readUsername(profile)) {
          window.location.replace("/choose-username");
          return;
        }

        if (isAdminUser(user)) {
          window.location.replace("/admin");
          return;
        }

        if (
          isSafeNextPath(nextParam) &&
          nextParam !== "/choose-username" &&
          nextParam !== "/login" &&
          nextParam !== "/signup"
        ) {
          window.location.replace(nextParam);
          return;
        }

        window.location.replace("/");
      } catch (error) {
        console.error("Auth callback failed:", error);
        if (active) {
          setMessage("We could not complete the sign-in. Please try again.");
        }
      }
    }

    void completeSignIn();

    return () => {
      active = false;
    };
  }, [t.auth.setup]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 pt-24">
      <div className="w-full max-w-sm rounded-3xl border border-line/70 bg-white/90 p-8 text-center shadow-[0_24px_60px_rgba(8,35,20,0.1)]">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-lg text-gold">
          R
        </span>
        <p className="mt-6 text-sm leading-relaxed text-stone">{message ?? t.auth.loading}</p>
      </div>
    </main>
  );
}
