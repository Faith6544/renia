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
      <Container className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Renia Services — Accueil">
            <Image src="/images/logo.png.png" alt="Renia Services" fill sizes="180px" />
          </Link>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <div className="footer-contact">
            <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div className="footer-area">
            <span>{t.footer.areaLabel}</span>
            <strong>{t.footer.area}</strong>
          </div>
        </div>

        <div className="footer-column">
          <h3>{t.footer.servicesTitle}</h3>
          <Link href="/renia-home">{t.footer.home}</Link>
          <Link href="/renia-pro">{t.footer.pro}</Link>
          <Link href="/gallery">{t.footer.gallery}</Link>
          <Link href="/contact#quote">{t.footer.quote}</Link>
        </div>

        <div className="footer-column">
          <h3>{t.footer.companyTitle}</h3>
          <Link href="/about">{t.footer.about}</Link>
          <Link href="/#why">{t.footer.whyRenia}</Link>
          <Link href="/faq">{t.footer.faq}</Link>
          <Link href="/contact">{t.footer.contact}</Link>
        </div>

        <div className="footer-column">
          <h3>{t.footer.contactTitle}</h3>
          <p>{t.footer.hours}</p>
          <p>{t.footer.area}</p>
          <Link className="btn btn-primary btn-sm" href="/contact#quote">
            {t.footer.quote}
          </Link>
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
        <p className="footer-signature">{t.footer.signature}</p>
      </Container>
    </footer>
  );
}
