"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type AuthMode = "signin" | "signup";
type OAuthProvider = "google";

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.58v2.98h3.86c2.26-2.09 3.56-5.17 3.56-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.93l-3.86-2.98c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.08A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.63H1.29A12 12 0 0 0 0 12c0 1.94.46 3.77 1.29 5.37l3.98-3.08Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.63l3.98 3.08C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const { t } = useLanguage();
  const router = useRouter();
  const auth = t.auth;
  const isSignIn = mode === "signin";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<OAuthProvider | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const busy = submitting || oauthLoading !== null;

  const clearMessages = () => {
    setError(null);
    setNotice(null);
  };

  const redirectAfterAuth = (isAdmin: boolean) => {
    router.push(isAdmin ? "/admin" : "/");
    router.refresh();
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearMessages();

    if (!isSupabaseConfigured()) {
      setError(auth.setup);
      return;
    }

    if (!email.trim() || !password) {
      setError(auth.errorGeneric);
      return;
    }

    if (!isSignIn && password.length < 8) {
      setError(auth.errorPassword);
      return;
    }

    setSubmitting(true);

    try {
      const supabase = getSupabaseBrowserClient();

      if (isSignIn) {
        const { data, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: email.trim().toLowerCase(),
            password,
          });

        if (signInError) {
          throw signInError;
        }

        redirectAfterAuth(isAdminUser(data.user));
        return;
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: { full_name: name.trim() },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      if (data.session) {
        redirectAfterAuth(isAdminUser(data.user));
        return;
      }

      setNotice(auth.checkEmail);
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : String(submitError);

      if (/invalid login credentials/i.test(message)) {
        setError(auth.errorCredentials);
      } else if (/password/i.test(message)) {
        setError(auth.errorPassword);
      } else {
        setError(auth.errorGeneric);
      }

      console.error("Authentication failed:", submitError);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleOAuth() {
    clearMessages();

    if (!isSupabaseConfigured()) {
      setError(auth.setup);
      return;
    }

    setOauthLoading("google");

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (oauthError) {
        throw oauthError;
      }
    } catch (oauthFailure) {
      console.error("OAuth sign-in failed:", oauthFailure);
      setError(auth.errorGeneric);
      setOauthLoading(null);
    }
  }

  async function handlePasswordReset() {
    clearMessages();

    if (!isSupabaseConfigured()) {
      setError(auth.setup);
      return;
    }

    if (!email.trim()) {
      setError(auth.emailPlaceholder);
      return;
    }

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        email.trim().toLowerCase(),
        { redirectTo: `${window.location.origin}/reset-password` },
      );

      if (resetError) {
        throw resetError;
      }

      setNotice(auth.resetSent);
    } catch (resetFailure) {
      console.error("Password reset failed:", resetFailure);
      setError(auth.errorGeneric);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forest/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative w-full max-w-md">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(8,35,20,0.12)] backdrop-blur-sm sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold"
          />

          <Link
            href="/"
            className="inline-flex items-center gap-3 text-forest transition-opacity hover:opacity-75"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-sm text-gold">
              R
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone">
              Renia
            </span>
          </Link>

          <p className="eyebrow mt-8 text-gold">
            {isSignIn ? auth.signInEyebrow : auth.signUpEyebrow}
          </p>
          <h1 className="mt-4 text-balance font-serif text-3xl leading-[1.08] tracking-[-0.02em] sm:text-4xl">
            {isSignIn ? auth.signInTitle : auth.signUpTitle}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-stone">
            {isSignIn ? auth.signInIntro : auth.signUpIntro}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {!isSignIn ? (
              <div>
                <label htmlFor="auth-name" className="field-label">
                  {auth.nameLabel}
                </label>
                <input
                  id="auth-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="field-input"
                  placeholder={auth.namePlaceholder}
                />
              </div>
            ) : null}

            <div>
              <label htmlFor="auth-email" className="field-label">
                {auth.emailLabel}
              </label>
              <input
                id="auth-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="field-input"
                placeholder={auth.emailPlaceholder}
              />
            </div>

            <div>
              <div className="mb-2.5 flex items-center justify-between gap-4">
                <label
                  htmlFor="auth-password"
                  className="text-xs uppercase tracking-[0.22em] text-stone sm:text-sm"
                >
                  {auth.passwordLabel}
                </label>
                {isSignIn ? (
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="text-xs font-medium text-forest underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {auth.forgot}
                  </button>
                ) : null}
              </div>
              <input
                id="auth-password"
                name="password"
                type="password"
                autoComplete={isSignIn ? "current-password" : "new-password"}
                minLength={8}
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
              {notice ? (
                <p
                  role="status"
                  className="rounded-xl bg-gold/10 px-4 py-3 text-sm leading-relaxed text-stone"
                >
                  {notice}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={busy}
              className="btn btn-dark w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting
                ? auth.loading
                : isSignIn
                  ? auth.signInCta
                  : auth.signUpCta}
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="my-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-stone">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="whitespace-nowrap">{auth.or}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleOAuth()}
              disabled={busy}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-line bg-white px-5 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              <GoogleIcon />
              <span>
                {oauthLoading === "google" ? auth.loading : auth.google}
              </span>
            </button>
          </div>

          <p className="mt-7 text-center text-sm text-stone">
            {isSignIn ? auth.noAccount : auth.haveAccount}{" "}
            <Link
              href={isSignIn ? "/signup" : "/login"}
              className="font-medium text-forest underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
            >
              {isSignIn ? auth.goSignUp : auth.goSignIn}
            </Link>
          </p>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-stone/70">
            {auth.legal}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.18em] text-stone transition-colors hover:text-forest"
          >
            ← {auth.backHome}
          </Link>
          <span className="text-[10px] uppercase tracking-[0.16em] text-stone/60">
            {auth.secure}
          </span>
        </div>
      </div>
    </main>
  );
}
