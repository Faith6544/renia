"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

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

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        }

        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const user = data.session?.user ?? null;

        if (!user) {
          if (active) {
            setMessage("We could not complete the sign-in. Please try again.");
          }
          return;
        }

        window.location.replace(isAdminUser(user) ? "/admin" : "/");
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
