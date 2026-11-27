"use client";
import Container from "@/components/ui/Container";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function NavLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
}) {
  const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? "nav-link-active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const current = language;
  const links = t.nav;

  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <Link href="/" className="brand" aria-label="Renia Services — Accueil">
          <span className="brand-mark">
            <Image src="/images/logo.png.png" alt="Renia Services" fill sizes="48px" priority />
          </span>
          <span className="brand-name">
            RENIA<span>SERVICES</span>
          </span>
        </Link>

        <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`} aria-label="Navigation principale">
          <NavLink href="/" label={links.home} pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/renia-home" label={links.reniaHome} pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/renia-pro" label={links.reniaPro} pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/about" label={links.about} pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/contact" label={links.contact} pathname={pathname} onClick={() => setMenuOpen(false)} />
          <Link href="/contact#quote" className="btn btn-primary btn-sm nav-quote" onClick={() => setMenuOpen(false)}>
            {links.quote}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Langue">
            <button
              type="button"
              className={current === "fr" ? "active" : ""}
              onClick={() => setLanguage("fr")}
              aria-pressed={current === "fr"}
            >
              FR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={current === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={current === "en"}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
}
