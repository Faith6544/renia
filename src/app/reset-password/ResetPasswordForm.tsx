"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import { useLanguage } from "@/context/LanguageContext";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type SessionState = "checking" | "ready" | "expired";

export default function ResetPasswordForm() {
  const { t } = useLanguage();
  const auth = t.auth;

  const [sessionState, setSessionState] = useState<SessionState>(() =>
    isSupabaseConfigured() ? "checking" : "expired",
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      return;
    }

    let active = true;
    let unsubscribe: (() => void) | undefined;

    try {
      const supabase = getSupabaseBrowserClient();

      supabase.auth.getSession().then(({ data }) => {
        if (active) {
          setSessionState(data.session ? "ready" : "expired");
        }
      });

      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (active && session) {
            setSessionState("ready");
          }
        },
      );

      unsubscribe = () => listener.subscription.unsubscribe();
    } catch {
      // Leave the current session state untouched if initialisation fails.
    }

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError(auth.errorPassword);
      return;
    }

    if (password !== confirmPassword) {
      setError(auth.resetMismatch);
      return;
    }

    setUpdating(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        throw updateError;
      }

      await supabase.auth.signOut();
      setSuccess(true);
    } catch (submitError) {
      console.error("Password update failed:", submitError);
      setError(auth.errorGeneric);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.18),transparent_55%)]"
      />
      <div className="relative w-full max-w-md">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(8,35,20,0.12)] backdrop-blur-sm sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold"
          />

          {success ? (
            <div className="py-4 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-lg text-gold">
                R
              </span>
              <p className="mt-6 text-balance font-serif text-2xl leading-[1.08]">
                {auth.resetSuccess}
              </p>
              <Link href="/login" className="btn btn-dark mt-8">
                {auth.resetBackToLogin} →
              </Link>
            </div>
          ) : (
            <>
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-lg text-gold">
                R
              </span>
              <p className="eyebrow mt-6 text-center text-gold">
                {auth.resetTitle}
              </p>
              <p className="mt-4 text-center text-sm leading-relaxed text-stone">
                {auth.resetIntro}
              </p>

              {sessionState === "checking" ? (
                <p className="mt-8 text-center text-sm text-stone">
                  {auth.loading}
                </p>
              ) : null}

              {sessionState === "expired" ? (
                <div className="mt-8 rounded-2xl bg-cream p-5 text-center">
                  <p className="text-sm leading-relaxed text-stone">
                    {auth.resetExpired}
                  </p>
                  <Link
                    href="/login"
                    className="btn btn-dark mt-6"
                  >
                    {auth.resetBackToLogin} →
                  </Link>
                </div>
              ) : null}

              {sessionState === "ready" ? (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                  noValidate={false}
                >
                  <div>
                    <label htmlFor="reset-password" className="field-label">
                      {auth.newPasswordLabel}
                    </label>
                    <input
                      id="reset-password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="field-input"
                      placeholder={auth.passwordPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reset-password-confirm"
                      className="field-label"
                    >
                      {auth.confirmPasswordLabel}
                    </label>
                    <input
                      id="reset-password-confirm"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      minLength={8}
                      required
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      className="field-input"
                      placeholder={auth.passwordPlaceholder}
                    />
                  </div>

                  <div aria-live="polite" className="space-y-3">
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
                    disabled={updating}
                    className="btn btn-dark w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {updating ? auth.loading : auth.resetCta}
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              ) : null}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
