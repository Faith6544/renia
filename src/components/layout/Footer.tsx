"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/lib/site";

const subscribeToNothing = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const { t } = useLanguage();
  const year = useSyncExternalStore(
    subscribeToNothing,
    getClientYear,
    getServerYear,
  );

  return (
    <footer className="rounded-t-[2.5rem] bg-forest-deep text-cream/75 shadow-[0_-20px_60px_rgba(8,35,20,0.12)]">
      <div className="shell py-10 lg:py-16">
        <div className="grid gap-8 md:gap-8 md:grid-cols-12">
          
          {/* Logo, Tagline & Contact (Always visible) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" aria-label="Renia — home" className="inline-flex">
              <Image
                src="/images/logo.png.png"
                alt="Renia"
                width={900}
                height={300}
                unoptimized
                className="h-16 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
              />
            </Link>

            <p className="mt-6 max-w-xs font-serif text-lg leading-relaxed text-cream/80">
              {t.footer.tagline}
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">
              {t.footer.areaLabel} — {t.footer.area}
            </p>

            {/* Contact info moved here so it's visible on mobile */}
            <div className="mt-6 space-y-2 text-base">
              <a href={`tel:${CONTACT_PHONE}`} className="block transition-colors hover:text-gold">
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block transition-colors hover:text-gold">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Services Links (HIDDEN ON MOBILE) */}
          <div className="hidden md:block md:col-span-3">
            <p className="text-xs uppercase tracking-[0.24em] text-cream/35">
              {t.footer.servicesTitle}
            </p>
            <ul className="mt-5 space-y-3 text-base">
              <li>
                <Link href="/renia-home" className="transition-colors hover:text-gold">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href="/renia-pro" className="transition-colors hover:text-gold">
                  {t.footer.pro}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-gold">
                  {t.footer.gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  {t.footer.quote}
                </Link>
              </li>
              <li>
                <Link href="/book" className="transition-colors hover:text-gold">
                  {t.footer.book}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links (HIDDEN ON MOBILE) */}
          <div className="hidden md:block md:col-span-3">
            <p className="text-xs uppercase tracking-[0.24em] text-cream/35">
              {t.footer.companyTitle}
            </p>
            <ul className="mt-5 space-y-3 text-base">
              <li>
                <Link href="/about" className="transition-colors hover:text-gold">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/commitments" className="transition-colors hover:text-gold">
                  {t.footer.commitments}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition-colors hover:text-gold">
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-gold">
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links (HIDDEN ON MOBILE - moved to top for mobile) */}
          <div className="hidden md:block md:col-span-2">
            <p className="text-xs uppercase tracking-[0.24em] text-cream/35">
              {t.footer.contactTitle}
            </p>
            <ul className="mt-5 space-y-3 text-base">
              <li className="text-cream/50">{t.footer.hours}</li>
              <li className="text-cream/50">{t.footer.area}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 rounded-2xl bg-cream/5 px-6 py-4 text-xs uppercase tracking-[0.18em] text-cream/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Renia. {t.footer.rights}
            </p>
            <p>{t.footer.signature}</p>
          </div>

          <nav
            aria-label={t.footer.legalTitle}
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/10 pt-4"
          >
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-gold"
            >
              {t.footer.legalNotice}
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-gold"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/cgv"
              className="transition-colors hover:text-gold"
            >
              {t.footer.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}