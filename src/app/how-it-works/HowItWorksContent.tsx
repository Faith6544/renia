"use client";

import Link from "next/link";

import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksContent() {
  const { t } = useLanguage();
  const page = t.howItWorksPage;

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: page.cta, href: "/contact" }}
        secondary={{ label: page.ctaSecondary, href: "/book" }}
      />

      {/* Step by step */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.processEyebrow}
            title={page.processTitle}
          />

          <ol className="mt-14 grid gap-5 lg:grid-cols-2">
            {page.steps.map((step, index) => (
              <li
                key={step.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-2 font-serif text-[clamp(5rem,9vw,8rem)] leading-none text-gold/15"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-forest font-serif text-lg leading-none text-cream shadow-[0_8px_20px_rgba(15,58,32,0.18)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative mt-7 font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="relative mt-4 max-w-lg text-sm leading-relaxed text-stone sm:text-[15px]">
                  {step.body}
                </p>
                <p className="relative mt-6 inline-flex rounded-full bg-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-forest">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.includedEyebrow}
            title={page.includedTitle}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {page.included.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-cream p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-serif text-3xl leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-tight tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn btn-gold">
              {page.ctaSecondary}
            </Link>
            <Link href="/faq" className="pill-link">
              {t.faqPage.seeAll} →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={page.ctaEyebrow}
        title={page.ctaTitle}
        text={page.ctaText}
        primaryLabel={page.cta}
        primaryHref="/contact"
        secondaryLabel={page.ctaSecondary}
        secondaryHref="/book"
      />
    </main>
  );
}
