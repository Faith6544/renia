"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import type { User } from "@supabase/supabase-js";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  fetchProfile,
  isValidUsername,
  readUsername,
  suggestUsername,
} from "@/lib/profile";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type PageState = "checking" | "ready" | "signed-out" | "saved";

export default function ChooseUsernameForm() {
  const { t } = useLanguage();
  const auth = t.auth;
  const router = useRouter();

  const [pageState, setPageState] = useState<PageState>(() =>
    isSupabaseConfigured() ? "checking" : "signed-out",
  );
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      return;
    }

    let active = true;

    async function load() {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        const currentUser = data.session?.user ?? null;
        if (!active) return;

        if (!currentUser) {
          setPageState("signed-out");
          return;
        }

        setUser(currentUser);
        setUsername(suggestUsername(currentUser));

        const { profile, failed, error: profileError } = await fetchProfile(
          supabase,
          currentUser.id,
        );
        if (!active) return;

        if (failed) {
          console.error("Could not load profile:", profileError);
        }

        // Already has a username → nothing to do here.
        if (!failed && readUsername(profile)) {
          router.replace(isAdminUser(currentUser) ? "/admin" : "/");
          return;
        }

        setPageState("ready");
      } catch (loadError) {
        console.error("Username step failed:", loadError);
        if (active) {
          setPageState("signed-out");
        }
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const value = username.trim();

    if (!user) {
      setError(auth.usernameNoSession);
      return;
    }

    if (!isValidUsername(value)) {
      setError(auth.usernameInvalid);
      return;
    }

    setSaving(true);

    try {
      const supabase = getSupabaseBrowserClient();

      // Availability check via a security-definer RPC so we never expose
      // other users' rows. If the helper is missing we fall back to the
      // database unique index below.
      const { data: taken, error: rpcError } = await supabase.rpc(
        "username_taken",
        { candidate: value },
      );

      if (rpcError) {
        console.warn("username_taken RPC unavailable:", rpcError.message);
      } else if (taken === true) {
        setError(auth.usernameTaken);
        return;
      }

      const { error: saveError } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          email: user.email,
          username: value,
        },
        { onConflict: "id" },
      );

      if (saveError) {
        if (saveError.code === "23505") {
          setError(auth.usernameTaken);
          return;
        }
        throw saveError;
      }

      setPageState("saved");
      router.refresh();
      window.location.replace(isAdminUser(user) ? "/admin" : "/");
    } catch (saveFailure) {
      console.error("Supabase Error:", saveFailure);
      setError(auth.usernameError);
    } finally {
      setSaving(false);
    }
  }

  const homeHref = user && isAdminUser(user) ? "/admin" : "/";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forest/5 blur-3xl"
      />

      <div className="relative w-full max-w-md">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(8,35,20,0.12)] backdrop-blur-sm sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold"
          />

          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-lg text-gold">
            R
          </span>

          <p className="eyebrow mt-6 text-center text-gold">
            {auth.chooseUsernameEyebrow}
          </p>
          <h1 className="mt-3 text-balance text-center font-serif text-3xl leading-[1.08] tracking-[-0.02em]">
            {auth.chooseUsernameTitle}
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed text-stone">
            {auth.chooseUsernameIntro}
          </p>

          {pageState === "checking" ? (
            <p className="mt-8 text-center text-sm text-stone">{auth.loading}</p>
          ) : null}

          {pageState === "signed-out" ? (
            <div className="mt-8 rounded-2xl bg-cream p-5 text-center">
              <p className="text-sm leading-relaxed text-stone">
                {auth.usernameNoSession}
              </p>
              <Link href="/login" className="btn btn-dark mt-6">
                {auth.goSignIn} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}

          {pageState === "ready" || pageState === "saved" ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="username" className="field-label">
                  {auth.usernameLabel}
                </label>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-stone/70"
                  >
                    @
                  </span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    minLength={3}
                    maxLength={20}
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="field-input pl-9"
                    placeholder={auth.usernamePlaceholder}
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone/80">
                  {auth.usernameHint}
                </p>
              </div>

              <div aria-live="polite">
                {error ? (
                  <p
                    role="alert"
                    className="rounded-xl bg-[#8a2f2a]/10 px-4 py-3 text-sm leading-relaxed text-[#8a2f2a]"
                  >
                    {error}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={saving || pageState === "saved"}
                className="btn btn-dark w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {saving || pageState === "saved"
                  ? auth.usernameSaving
                  : auth.usernameCta}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          ) : null}

          <p className="mt-7 text-center text-sm text-stone">
            <Link
              href={homeHref}
              className="font-medium text-forest underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
            >
              {auth.usernameSkip}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
