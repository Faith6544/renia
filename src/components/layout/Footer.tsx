"use client";
import Container from "@/components/ui/Container";

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
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-main">
          <Link href="/" className="footer-logo" aria-label="Renia Services — Accueil">
            {/* Replace /public/images/logo.png to change the logo everywhere. */}
            <Image src="/images/logo.png" alt="Renia Services" fill sizes="128px" />
          </Link>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer-links" aria-label={t.footer.companyTitle}>
          <Link href="/renia-home">{t.footer.home}</Link>
          <Link href="/renia-pro">{t.footer.pro}</Link>
          <Link href="/about">{t.footer.about}</Link>
          <Link href="/contact">{t.footer.contact}</Link>
        </nav>

        <div className="footer-contact">
          <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </Container>

      <Container className="footer-bottom">
        <p>
          © {year} Renia Services. {t.footer.rights}
        </p>
        <nav aria-label={t.footer.legalTitle} className="footer-legal">
          <Link href="/mentions-legales">{t.footer.legalNotice}</Link>
          <Link href="/politique-de-confidentialite">{t.footer.privacy}</Link>
          <Link href="/cgv">{t.footer.terms}</Link>
        </nav>
      </Container>
    </footer>
  );
}
