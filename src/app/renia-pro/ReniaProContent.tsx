"use client";

import Image from "next/image";
import Link from "next/link";

import ProForm from "@/components/forms/ProForm";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function ReniaProContent() {
  const { t } = useLanguage();
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

      {/* Professional services */}
      <section id="sectors" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container">
          <SectionHeading
            eyebrow={page.sectorsEyebrow}
            title={page.sectorsTitle}
            intro={page.sectorsIntro}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.sectors.map((sector, index) => (
              <article key={sector.title} className="card-soft card-lift p-8">
                <span className="tag">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-extrabold sm:text-2xl">
                  {sector.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-stone">
                  {sector.body}
                </p>
              </article>
            ))}
          </div>

          {/* A team that understands your environment — imagery */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {page.teamImages.map((image, index) => (
              <div key={`${image}-${index}`} className="photo-frame aspect-[4/3]">
                <Image
                  src={image}
                  alt={page.sectorsTitle}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailor-made solution */}
      <section className="bg-brand-soft/50 py-20 lg:py-28">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{page.tailorEyebrow}</p>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {page.tailorTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-stone">
              {page.tailorBody}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-4">
              {[
                page.tailorBullet1,
                page.tailorBullet2,
                page.tailorBullet3,
                page.tailorBullet4,
              ].map((bullet, index) => (
                <li
                  key={bullet}
                  className="card-soft card-lift flex items-start gap-5 p-6 sm:p-7"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-semibold leading-relaxed text-ink/85">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>

            <Link href="#request-form" className="btn btn-dark mt-8">
              {page.heroPrimary}
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow={page.methodEyebrow} title={page.methodTitle} />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.methodSteps.map((step, index) => (
              <li key={step.title} className="card-soft card-lift p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua text-lg font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-stone">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Airbnb and short-term rentals */}
      <section className="bg-aqua-soft/50 py-20 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-deep via-brand to-aqua p-8 text-white shadow-[0_24px_70px_rgba(15,58,32,0.28)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-coral/25 blur-3xl" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-aqua-soft">
                  {page.airbnbEyebrow}
                </p>
                <h2 className="mt-6 max-w-2xl text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                  {page.airbnbTitle}
                </h2>
                <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/85">
                  {page.airbnbBody}
                </p>

                <Link href="#request-form" className="btn btn-gold mt-9">
                  {page.airbnbCta}
                </Link>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-xl font-extrabold">{page.airbnbServicesTitle}</h3>
                <ul className="mt-5 space-y-3">
                  {page.airbnbServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-base text-white/90">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                      {service}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xl font-extrabold">{page.airbnbHowTitle}</h3>
                <ol className="mt-5 space-y-3">
                  {page.airbnbHow.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-base text-white/90">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-extrabold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="mt-8 space-y-3 rounded-2xl bg-white/10 p-6">
                  {[
                    page.airbnbBullet1,
                    page.airbnbBullet2,
                    page.airbnbBullet3,
                  ].map((bullet) => (
                    <p key={bullet} className="text-base font-medium leading-relaxed text-white/90">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section
        id="request-form"
        className="relative z-50 scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.mainQuote}</p>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-stone">
              {t.forms.note}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="card-soft pointer-events-auto relative z-50 p-7 sm:p-10">
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
