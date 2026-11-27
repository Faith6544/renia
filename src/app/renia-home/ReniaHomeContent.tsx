"use client";

import Image from "next/image";
import Link from "next/link";

import HomeForm from "@/components/forms/HomeForm";
import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function ReniaHomeContent() {
  const { t } = useLanguage();
  const page = t.reniaHome;

  return (
    <main>
      <PageHero
        image="/images/home-cleaning.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: page.heroPrimary, href: "#request-form" }}
        secondary={{ label: page.heroSecondary, href: "#included" }}
      />

      {/* Room by room — image-led cards */}
      <Section id="included" tone="white" className="scroll-mt-24">
        <SectionHeading
          eyebrow={page.includedEyebrow}
          title={page.includedTitle}
          intro={page.includedIntro}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {page.rooms.map((room, index) => (
            <article key={room.title} className="card-soft card-lift overflow-hidden">
              <div className="photo-frame aspect-[16/10]">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-green-main shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-extrabold sm:text-2xl">{room.title}</h3>
                <p className="mt-3 text-base font-semibold leading-relaxed text-ink">
                  {room.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Deep clean & ironing — image-led */}
      <Section tone="green">
        <SectionHeading eyebrow={page.extrasEyebrow} title={page.extrasTitle} />

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          <article className="card-soft card-lift overflow-hidden">
            <div className="photo-frame aspect-[16/9]">
              <Image
                src={page.deepImage}
                alt={page.deepTitle}
                fill
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <span className="tag">{page.extrasTitle}</span>
              <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                {page.deepTitle}
              </h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {page.deepBody}
              </p>
              <Link href="#request-form" className="btn btn-dark mt-7">
                {page.heroPrimary}
              </Link>
            </div>
          </article>

          <article className="card-soft card-lift overflow-hidden">
            <div className="photo-frame aspect-[16/9]">
              <Image
                src={page.ironImage}
                alt={page.ironTitle}
                fill
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <span className="tag">{page.extrasTitleAddition}</span>
              <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                {page.ironTitle}
              </h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {page.ironBody}
              </p>
              <p className="mt-5 text-base font-semibold leading-relaxed text-ink">
                {page.extrasBody}
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeading eyebrow={page.faqEyebrow} title={page.faqTitle} />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={page.faqs} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#request-form" className="btn btn-dark">
            {page.heroPrimary}
          </Link>
        </div>
      </Section>

      {/* Request form */}
      <Section id="request-form" tone="green" className="relative z-50 scroll-mt-24">
        <SectionHeading
          eyebrow={t.mainQuote}
          title={page.ctaTitle}
          intro={page.ctaText}
        />

        <div className="card-soft pointer-events-auto relative z-50 mx-auto mt-12 max-w-4xl p-7 sm:p-10">
          <HomeForm />
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