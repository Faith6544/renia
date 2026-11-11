"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="relative z-[60] flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em]">
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
              onClick={() => setMenuOpen(!menuOpen)}
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
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 z-[60] h-[calc(100dvh-5rem)] overflow-y-auto bg-forest xl:hidden"
        >
          <nav className="flex min-h-full flex-col gap-2 px-6 pb-20 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-4 text-base uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "bg-cream/10 text-gold"
                    : "text-cream/90 hover:bg-cream/5 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 grid gap-4 border-t border-cream/10 pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-outline w-full py-4 text-center"
              >
                {t.nav?.quote || "Get a quote"}
              </Link>
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="btn btn-gold w-full py-4 text-center"
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