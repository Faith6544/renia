"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || menuOpen;

  const navLinks = [
    { label: t.nav?.home || "Home", href: "/" },
    { label: t.nav?.about || "About", href: "/about" },
    { label: t.nav?.reniaHome || "Renia Home", href: "/renia-home" },
    { label: t.nav?.reniaPro || "Renia Pro", href: "/renia-pro" },
    { label: t.nav?.howItWorks || "How it works", href: "/how-it-works" },
    { label: t.nav?.faq || "FAQ", href: "/faq" },
    { label: t.nav?.contact || "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Close the menu when the layout switches to the desktop navigation.
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", handleChange);
    return () => desktopQuery.removeEventListener("change", handleChange);
  }, []);

  // Allow closing the mobile menu with the keyboard.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Keep the account menu in sync with Supabase Auth.
  useEffect(() => {
    if (!isSupabaseConfigured()) {
      return;
    }

    let active = true;
    let unsubscribe: (() => void) | undefined;

    try {
      const supabase = getSupabaseBrowserClient();

      supabase.auth.getSession().then(({ data }) => {
        if (active) setUser(data.session?.user ?? null);
      });

      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (active) setUser(session?.user ?? null);
        },
      );

      unsubscribe = () => listener.subscription.unsubscribe();
    } catch (error) {
      console.error("Auth session failed:", error);
    }

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  // Close the account dropdown when clicking outside of it.
  useEffect(() => {
    if (!accountOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [accountOpen]);

  // Allow closing the account dropdown with the keyboard.
  useEffect(() => {
    if (!accountOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAccountOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [accountOpen]);

  const handleSignOut = async () => {
    setAccountOpen(false);

    if (!isSupabaseConfigured()) {
      return;
    }

    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-cream">
        <div
          className={`pointer-events-none absolute inset-0 -z-10 transition-all duration-500 ${
            solid
              ? "bg-forest shadow-[0_10px_40px_rgba(8,35,20,0.22)]"
              : "bg-gradient-to-b from-black/60 to-transparent"
          }`}
        />

        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
          
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-[60] flex shrink-0 items-center transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/images/logo.png.png"
              alt="Renia"
              width={900}
              height={300}
              priority
              unoptimized
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-3 xl:flex 2xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300 2xl:text-sm 2xl:tracking-[0.18em] ${
                  isActive(link.href) ? "text-gold" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="relative z-[60] flex items-center gap-3 xl:gap-5">
            <div className="relative z-[60] hidden items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] sm:flex">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`inline-flex min-h-10 items-center justify-center px-2 py-2 transition-colors ${
                  language === "en" ? "text-gold" : "text-cream/70 hover:text-cream"
                }`}
              >
                EN
              </button>
              <span className="text-cream/25">|</span>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                aria-pressed={language === "fr"}
                className={`inline-flex min-h-10 items-center justify-center px-2 py-2 transition-colors ${
                  language === "fr" ? "text-gold" : "text-cream/70 hover:text-cream"
                }`}
              >
                FR
              </button>
            </div>

            <Link
              href="/contact"
              className="btn btn-outline hidden px-4 py-2.5 text-xs lg:inline-flex 2xl:px-5 2xl:text-sm"
            >
              {t.nav?.quote || "Get a quote"}
            </Link>

            <Link
              href="/book"
              className="btn btn-gold hidden px-4 py-2.5 text-xs lg:inline-flex 2xl:px-5 2xl:text-sm"
            >
              {t.nav?.book || "Book a service"}
            </Link>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setAccountOpen(false);
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="relative z-[60] flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-forest/50 p-2 xl:hidden"
            >
              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>

            <div ref={accountRef} className="relative z-[70]">
              <button
                type="button"
                onClick={() => {
                  setAccountOpen((open) => !open);
                  setMenuOpen(false);
                }}
                aria-label={t.nav?.account || "Account"}
                aria-haspopup="menu"
                aria-expanded={accountOpen}
                aria-controls="account-menu"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 bg-forest/45 text-cream shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                {user ? (
                  <span className="font-serif text-lg leading-none text-gold">
                    {(user.email?.charAt(0) || "R").toUpperCase()}
                  </span>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                )}
              </button>

              {accountOpen ? (
                <div
                  id="account-menu"
                  role="menu"
                  aria-label={t.nav?.account || "Account"}
                  className="absolute right-0 top-[calc(100%+0.75rem)] w-64 overflow-hidden rounded-2xl border border-line/70 bg-cream text-ink shadow-[0_24px_60px_rgba(8,35,20,0.28)]"
                >
                  {user ? (
                    <div className="border-b border-line/70 px-5 py-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone">
                        {t.admin?.welcome || "Signed in as"}
                      </p>
                      <p className="mt-1 truncate text-sm text-ink">
                        {user.email}
                      </p>
                    </div>
                  ) : null}

                  <div className="p-2">
                    {user ? (
                      <>
                        {isAdminUser(user) ? (
                          <Link
                            href="/admin"
                            role="menuitem"
                            onClick={() => setAccountOpen(false)}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream"
                          >
                            {t.nav?.admin || "Admin dashboard"}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : null}
                        <button
                          type="button"
                          role="menuitem"
                          onClick={handleSignOut}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream"
                        >
                          {t.nav?.signOut || "Sign out"}
                          <span aria-hidden="true">↗</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          role="menuitem"
                          onClick={() => setAccountOpen(false)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream"
                        >
                          {t.nav?.signIn || "Sign In"}
                          <span aria-hidden="true">→</span>
                        </Link>
                        <Link
                          href="/signup"
                          role="menuitem"
                          onClick={() => setAccountOpen(false)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream"
                        >
                          {t.nav?.signUp || "Sign Up"}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 z-[60] h-[calc(100dvh-5rem)] overflow-y-auto bg-forest xl:hidden"
        >
          <nav className="flex min-h-full flex-col gap-1 px-6 pb-12 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "bg-cream/10 text-gold"
                    : "text-cream/90 hover:bg-cream/5 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-cream/5 px-4 py-3">
              <span className="text-[10px] uppercase tracking-[0.22em] text-cream/50">
                {t.nav?.language || "Language"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                  className={`inline-flex min-h-10 items-center justify-center px-2 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                    language === "en" ? "text-gold" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  EN
                </button>
                <span className="text-cream/25">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  aria-pressed={language === "fr"}
                  className={`inline-flex min-h-10 items-center justify-center px-2 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                    language === "fr" ? "text-gold" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
            <div className="mt-4 grid gap-3 border-t border-cream/10 pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-outline w-full py-3 text-center"
              >
                {t.nav?.quote || "Get a quote"}
              </Link>
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="btn btn-gold w-full py-3 text-center"
              >
                {t.nav?.book || "Book a service"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}