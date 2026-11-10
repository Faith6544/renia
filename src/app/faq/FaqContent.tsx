"use client";

import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqContent() {
  const { t } = useLanguage();
  const page = t.faqPage;

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: t.nav.contact, href: "/contact" }}
        secondary={{ label: t.nav.book, href: "/book" }}
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-forest p-8 text-cream shadow-[0_16px_45px_rgba(15,58,32,0.18)] sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.26em] text-gold">
                {page.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
                {page.stillTitle}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                {page.stillText}
              </p>
              <Link href="/contact" className="btn btn-gold mt-8 w-full">
                {page.stillCta}
              </Link>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="eyebrow">{t.nav.book}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone">
                {t.booking.intro}
              </p>
              <Link href="/book" className="pill-link mt-6">
                {t.nav.book} →
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Accordion items={page.items} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={page.eyebrow}
        title={page.stillTitle}
        text={page.stillText}
        primaryLabel={page.stillCta}
        primaryHref="/contact"
        secondaryLabel={t.nav.book}
        secondaryHref="/book"
      />
    </main>
  );
}
