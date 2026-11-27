"use client";

import Image from "next/image";
import Link from "next/link";

import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <main>
      {/* Replace /public/images/hero-home.png to change this hero photo. */}
      <PageHero
        image="/images/hero-home.png"
        imageAlt="Espace professionnel propre et lumineux entretenu par Renia Services"
        eyebrow={about.eyebrow}
        title={about.title}
        intro={about.intro}
        primary={{ label: about.cta, href: "/contact" }}
        secondary={{
          label: t.nav.whyRenia,
          href: "/#why",
        }}
      />

      {/* Mission */}
      <Section tone="cream">
        <div className="text-center">
          <p className="eyebrow">{about.missionEyebrow}</p>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" aria-hidden="true" />
          <p className="mt-8 text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            {about.mission}
          </p>
          <p className="mt-6 text-base font-semibold leading-relaxed text-ink">
            {about.intro}
          </p>
        </div>
      </Section>

      {/* Vision — dark green background with bold, full-opacity white text. */}
      <Section tone="cream" spacing="compact">
        <div className="relative overflow-hidden rounded-3xl bg-green-main p-8 text-white shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 lg:p-16">
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold sm:text-sm">
                {about.visionEyebrow}
              </p>
              <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl">
                {about.visionTitle}
              </h2>
            </div>
            <p className="max-w-3xl text-base font-bold leading-relaxed text-white sm:text-lg lg:col-span-7">
              {about.visionBody}
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="white">
        <SectionHeading
          eyebrow={about.valuesEyebrow}
          title={about.valuesTitle}
          intro={about.valuesIntro}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value, index) => (
            <article
              key={value.title}
              className="flex flex-col rounded-2xl bg-cream p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-lg sm:p-8"
            >
              <span className="font-serif text-2xl font-bold leading-none text-green-main">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                {value.title}
              </h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Our story */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{about.storyEyebrow}</p>
            <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
              {about.storyTitle}
            </h2>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl bg-green-light shadow-[0_16px_45px_rgba(15,58,32,0.16)]">
              {/* Replace /public/images/about.png to change this photo. */}
              <Image
                src="/images/about.png"
                alt="Intérieur de maison entretenu par Renia Services"
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-main">
                  {about.storyNote}
                </p>
                <p className="mt-8 max-w-2xl font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                  {about.storyBody}
                </p>
              </div>

              <Link href="/contact" className="pill-link mt-12 self-start">
                {about.cta} →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow={about.ctaEyebrow}
        title={about.ctaTitle}
        text={about.ctaText}
        primaryLabel={about.cta}
        primaryHref="/contact"
        secondaryLabel={t.nav.whyRenia}
        secondaryHref="/#why"
      />
    </main>
  );
}