"use client";

import Image from "next/image";
import Link from "next/link";

import HomeForm from "@/components/forms/HomeForm";
import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
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
      <section id="included" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container">
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
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-extrabold sm:text-2xl">{room.title}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-stone">
                    {room.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep clean & ironing — image-led */}
      <section className="bg-brand-soft/50 py-20 lg:py-28">
        <div className="container">
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
                <p className="mt-4 text-base font-medium leading-relaxed text-stone">
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
                <p className="mt-4 text-base font-medium leading-relaxed text-stone">
                  {page.ironBody}
                </p>
                <p className="mt-5 text-base font-medium leading-relaxed text-stone">
                  {page.extrasBody}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{page.faqEyebrow}</p>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {page.faqTitle}
            </h2>
            <Link href="#request-form" className="btn btn-dark mt-8">
              {page.heroPrimary}
            </Link>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={page.faqs} />
          </div>
        </div>
      </section>

      {/* Request form */}
      <section
        id="request-form"
        className="relative z-50 scroll-mt-24 bg-brand-soft/50 py-20 lg:py-28"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.mainQuote}</p>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-stone">
              {page.ctaText}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="card-soft pointer-events-auto relative z-50 p-7 sm:p-10">
              <HomeForm />
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
