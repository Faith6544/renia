"use client";

import Image from "next/image";
import Link from "next/link";

import ProForm from "@/components/forms/ProForm";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function ReniaProContent() {
  const { t } = useLanguage();
  const page = t.reniaPro;

  return (
    <main>
      {/* Replace /public/images/hero-pro.png to change this hero photo. */}
      <PageHero
        image="/images/hero-pro.png"
        imageAlt="Bureau professionnel propre et lumineux entretenu par Renia Services"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: page.heroPrimary, href: "#request-form" }}
        secondary={{ label: page.heroSecondary, href: "#sectors" }}
      />

      {/* Professional services */}
      <Section id="sectors" tone="white" className="scroll-mt-24">
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
              <p className="mt-3 text-base font-semibold leading-relaxed text-ink">
                {sector.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {page.sectorImages.map((image, index) => (
            <div key={`${image}-${index}`} className="photo-frame aspect-[4/3]">
              {/* Replace /public/images/pro-card.png or /public/images/hero-pro.png to change these photos. */}
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
      </Section>

      {/* Tailor-made solution */}
      <Section tone="green">
        <SectionHeading
          eyebrow={page.tailorEyebrow}
          title={page.tailorTitle}
          intro={page.tailorBody}
        />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
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
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-main text-sm font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-semibold leading-relaxed text-ink">
                {bullet}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link href="#request-form" className="btn btn-dark">
            {page.heroPrimary}
          </Link>
        </div>
      </Section>

      {/* Method */}
      <Section tone="white">
        <SectionHeading eyebrow={page.methodEyebrow} title={page.methodTitle} />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {page.methodSteps.map((step, index) => (
            <li key={step.title} className="card-soft card-lift p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-main text-lg font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-3 text-base font-semibold leading-relaxed text-ink">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Airbnb and short-term rentals */}
      <Section tone="green">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-green-light via-green-main to-green-light p-8 text-white shadow-[0_24px_70px_rgba(15,58,32,0.28)] sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
                {page.airbnbEyebrow}
              </p>
              <h2 className="mt-6 max-w-2xl text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {page.airbnbTitle}
              </h2>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-white">
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
                  <li key={service} className="flex items-start gap-3 text-base font-semibold text-white">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {service}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xl font-extrabold">{page.airbnbHowTitle}</h3>
              <ol className="mt-5 space-y-3">
                {page.airbnbHow.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-base font-semibold text-white">
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
                  <p key={bullet} className="text-base font-semibold leading-relaxed text-white">
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Request form */}
      <Section id="request-form" tone="white" className="relative z-50 scroll-mt-24">
        <SectionHeading
          eyebrow={t.mainQuote}
          title={page.ctaTitle}
          intro={page.ctaText}
        />

        <div className="card-soft pointer-events-auto relative z-50 mx-auto mt-12 max-w-4xl p-7 sm:p-10">
          <ProForm />
        </div>
      </Section>

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