"use client";

import Link from "next/link";

import ProForm from "@/components/forms/ProForm";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

function SectorIcon({ index }: { index: number }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4M8 19h4" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path d="M9 3h6v4H9zM12 7v4M6 11h12v10H6zM9 15h6M9 18h4" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M5 8h14l1 13H4L5 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 11h.01M15 11h.01" />
        </svg>
      );
    case 4:
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="4" />
          <path d="m11 11 9 9M17 17l2-2M15 15l2-2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
  }
}

export default function ReniaProContent() {
  const { t, language } = useLanguage();
  const page = t.reniaPro;

  return (
    <main>
      <PageHero
        image="/images/pro-cleaning.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: page.heroPrimary, href: "#request-form" }}
        secondary={{ label: page.heroSecondary, href: "#sectors" }}
      />

      {/* Sectors */}
      <section id="sectors" className="scroll-mt-20 bg-cream py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={page.sectorsEyebrow}
            title={page.sectorsTitle}
            intro={page.sectorsIntro}
          />

          <div className="mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.sectors.map((sector, index) => (
              <article
                key={sector.title}
                className="group flex flex-col rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-bone hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-gold">
                    <SectorIcon index={index} />
                  </span>
                  <span className="font-serif text-base leading-none text-stone/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                  {sector.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone">
                  {sector.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor-made solution */}
      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-6 md:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{page.tailorEyebrow}</p>
            <h2 className="mt-5 max-w-lg text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {page.tailorTitle}
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-stone sm:text-base">
              {page.tailorBody}
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <ul className="space-y-3">
              {[page.tailorBullet1, page.tailorBullet2, page.tailorBullet3].map(
                (bullet, index) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-5 rounded-2xl bg-cream p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  >
                    <span className="font-serif text-2xl leading-none text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
                      {bullet}
                    </p>
                  </li>
                ),
              )}
            </ul>

            <Link href="#request-form" className="pill-link mt-9">
              {page.heroPrimary} →
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-cream py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={page.methodEyebrow}
            title={page.methodTitle}
          />

          <ol className="mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {page.methodSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-serif text-4xl leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Airbnb */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(197,160,89,0.18),transparent_55%)]"
            />

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
                  {page.airbnbEyebrow}
                </p>
                <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2rem,4.4vw,4rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                  {page.airbnbTitle}
                </h2>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-base">
                  {page.airbnbBody}
                </p>

                <Link href="#request-form" className="btn btn-gold mt-9">
                  {page.airbnbCta}
                </Link>
              </div>

              <div className="lg:col-span-5 lg:flex lg:items-center">
                <ul className="w-full space-y-3">
                  {[
                    page.airbnbBullet1,
                    page.airbnbBullet2,
                    page.airbnbBullet3,
                  ].map((bullet, index) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-4 rounded-2xl bg-cream/5 p-6"
                    >
                      <span className="font-serif text-2xl leading-none text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base leading-relaxed text-cream/80">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated pro quote request form */}
      <section
        id="request-form"
        className="relative z-50 scroll-mt-20 bg-white py-16 md:py-24"
      >
        <div className="shell grid gap-6 md:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">
              {language === "fr" ? "Demander un devis" : "Request a quote"}
            </p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {language === "fr"
                ? "Demandez votre devis professionnel."
                : "Request your pro quote."}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-stone">
              {language === "fr"
                ? "Indiquez votre secteur et la surface de vos locaux. Votre demande est enregistrée, puis WhatsApp s'ouvre avec votre message prêt à envoyer."
                : "Tell us your sector and the size of your premises. Your request is saved, then WhatsApp opens with your message ready to send."}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative z-50 rounded-3xl bg-bone p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto sm:p-10">
              <ProForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={page.ctaEyebrow}
        title={page.ctaTitle}
        text={page.ctaText}
        primaryLabel={page.cta}
        primaryHref="#request-form"
        secondaryLabel={t.footer.contact}
        secondaryHref="/contact"
      />
    </main>
  );
}
