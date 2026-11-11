"use client";

import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function CommitmentsContent() {
  const { t } = useLanguage();
  const page = t.commitments;

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: t.about.cta, href: "/contact" }}
        secondary={{ label: t.nav.about, href: "/about" }}
      />

      {/* Commitments list */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.itemsEyebrow}
            title={page.itemsTitle}
          />

          <div className="mt-14 space-y-4">
            {page.items.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-12 sm:gap-8 sm:p-9"
              >
                <span className="font-serif text-3xl leading-none text-gold sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-serif text-xl leading-tight tracking-[-0.01em] sm:col-span-4 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl text-base leading-relaxed text-stone sm:col-span-7 sm:text-[17px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge */}
      <section className="bg-cream pb-16 lg:pb-32">
        <div className="shell">
          <div className="grid gap-10 rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
                {page.eyebrow}
              </p>
              <div
                className="mt-6 h-px w-16 bg-gold"
                aria-hidden="true"
              />
            </div>

            <div className="lg:col-span-8">
              <blockquote className="max-w-3xl text-balance font-serif text-[clamp(1.8rem,3.4vw,3rem)] font-normal italic leading-[1.2] tracking-[-0.01em] text-cream/90">
                “{page.pledge}”
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-[0.24em] text-gold">
                RENIA SERVICES · YVELINES 78
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={page.ctaEyebrow}
        title={page.ctaTitle}
        text={page.ctaText}
        primaryLabel={page.cta}
        primaryHref="/contact"
        secondaryLabel={t.nav.about}
        secondaryHref="/about"
      />
    </main>
  );
}
