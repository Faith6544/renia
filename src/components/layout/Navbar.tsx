"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center gap-2 rounded-full bg-cream/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em]"
      role="group"
      aria-label="Language / Langue"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`transition-colors duration-300 ${
          language === "en" ? "text-gold" : "text-cream/55 hover:text-cream"
        }`}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-cream/25">
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`transition-colors duration-300 ${
          language === "fr" ? "text-gold" : "text-cream/55 hover:text-cream"
        }`}
      >
        FR
      </button>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || menuOpen;

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.reniaHome, href: "/renia-home" },
    { label: t.nav.reniaPro, href: "/renia-pro" },
    { label: t.nav.howItWorks, href: "/how-it-works" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-500 ${
        solid
          ? "bg-forest/95 shadow-[0_10px_40px_rgba(8,35,20,0.22)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-75"
          aria-label="Renia — home"
        >
          <Image
            src="/images/logo.png.png"
            alt="Renia"
            width={900}
            height={300}
            priority
            unoptimized
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav
          className="hidden items-center gap-3 xl:flex 2xl:gap-7"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group relative whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 2xl:text-[10px] 2xl:tracking-[0.18em] ${
                isActive(link.href)
                  ? "text-gold"
                  : "text-cream/80 hover:text-cream"
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

        <div className="flex items-center gap-4 xl:gap-5">
          <LanguageToggle />

          <Link
            href="/contact"
            className="btn btn-outline hidden px-4 py-2.5 text-[9px] lg:inline-flex 2xl:px-5 2xl:text-[10px]"
          >
            {t.nav.quote}
          </Link>

          <Link
            href="/book"
            className="btn btn-gold hidden px-4 py-2.5 text-[9px] lg:inline-flex 2xl:px-5 2xl:text-[10px]"
          >
            {t.nav.book}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden rounded-b-[2rem] bg-forest shadow-2xl transition-[max-height,opacity] duration-500 xl:hidden ${
          menuOpen ? "max-h-[48rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-4 pb-8 pt-2 sm:px-6"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-xl px-4 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                isActive(link.href)
                  ? "bg-cream/5 text-gold"
                  : "text-cream/85 hover:bg-cream/5 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-outline w-full"
            >
              {t.nav.quote}
            </Link>
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="btn btn-gold w-full"
            >
              {t.nav.book}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
