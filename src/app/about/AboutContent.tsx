"use client";

import Image from "next/image";
import Link from "next/link";

import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={about.eyebrow}
        title={about.title}
        intro={about.intro}
        primary={{ label: about.cta, href: "/contact" }}
        secondary={{
          label: t.nav.commitments,
          href: "/commitments",
        }}
      />

      {/* Mission */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{about.missionEyebrow}</p>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-balance font-serif text-[clamp(2rem,3.8vw,3.4rem)] font-normal leading-[1.12] tracking-[-0.02em]">
              {about.mission}
            </p>
            <p className="mt-8 max-w-xl rounded-2xl bg-white/60 p-6 text-base leading-relaxed text-stone shadow-[0_4px_20px_rgb(0,0,0,0.03)] sm:p-7 sm:text-base">
              {about.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-cream pb-16 lg:pb-32">
        <div className="shell">
          <div className="relative overflow-hidden rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(197,160,89,0.18),transparent_55%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
                  {about.visionEyebrow}
                </p>
                <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em]">
                  {about.visionTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg lg:col-span-8">
                {about.visionBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={about.valuesEyebrow}
            title={about.valuesTitle}
            intro={about.valuesIntro}
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {about.values.map((value, index) => (
              <article
                key={value.title}
                className="flex flex-col rounded-2xl bg-cream p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 sm:last:col-span-2 xl:last:col-span-1"
              >
                <span className="font-serif text-2xl leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{about.storyEyebrow}</p>
            <h2 className="mt-5 max-w-md text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {about.storyTitle}
            </h2>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl bg-forest shadow-[0_16px_45px_rgba(15,58,32,0.16)]">
              <Image
                src="/images/home-cleaning.jpg.png"
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-forest/15" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:flex lg:items-stretch">
            <div className="flex w-full flex-col justify-between rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  {about.storyNote}
                </p>
                <p className="mt-8 max-w-xl font-serif text-2xl leading-relaxed tracking-[-0.01em] sm:text-[1.75rem]">
                  {about.storyBody}
                </p>
              </div>

              <Link href="/contact" className="pill-link mt-12 self-start">
                {about.cta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={about.ctaEyebrow}
        title={about.ctaTitle}
        text={about.ctaText}
        primaryLabel={about.cta}
        primaryHref="/contact"
        secondaryLabel={t.nav.commitments}
        secondaryHref="/commitments"
      />
    </main>
  );
}
