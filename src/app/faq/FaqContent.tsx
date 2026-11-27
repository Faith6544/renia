"use client";

import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqContent() {
  const { t } = useLanguage();
  const page = t.faqPage;

  return (
    <main>
      {/* Replace /public/images/hero-home.png to change this hero photo. */}
      <PageHero
        image="/images/hero-home.png"
        imageAlt="Espace propre et lumineux entretenu par Renia Services"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: t.nav.contact, href: "/contact" }}
      />

      <Section tone="green" className="scroll-mt-24">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          intro={page.intro}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-green-light p-8 text-ink shadow-[0_16px_45px_rgba(8,35,20,0.18)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                {page.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
                {page.stillTitle}
              </h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-ink">
                {page.stillText}
              </p>
              <Link href="/contact" className="btn btn-gold mt-8 w-full">
                {page.stillCta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={page.items} />
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow={page.eyebrow}
        title={page.stillTitle}
        text={page.stillText}
        primaryLabel={page.stillCta}
        primaryHref="/contact#quote"
      />
    </main>
  );
}