"use client";

import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, GOOGLE_REVIEWS_URL } from "@/lib/site";

export default function HomePage() {
  const { t } = useLanguage();
  const showcase = t.showcase;
  const faqPreview = t.faqPage.items.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden rounded-b-[2.5rem] bg-green-main text-white shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
        <Image
          src="/images/hero.jpg.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-green-main/75" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-dark via-green-main/50 to-green-main/10" />

        <Container className="relative z-10 w-full pb-12 pt-24 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:text-sm">
              RENIA SERVICES
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em]">
              {t.HeroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white sm:text-lg">
              {t.HeroText}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact#quote" className="btn btn-gold">
                {t.HeroButtonPrimary}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* You are */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow">RENIA SERVICES</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            {t.YouAre}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: t.Individual,
              href: "/renia-home",
              discover: t.HomeButton,
              number: "01",
            },
            {
              title: t.Professional,
              href: "/renia-pro",
              discover: t.ProButton,
              number: "02",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="card-soft card-lift flex flex-col justify-between bg-green-light p-8 sm:p-10"
            >
              <div className="flex items-start gap-5">
                <span className="text-2xl font-extrabold text-green-main sm:text-3xl">
                  {item.number}
                </span>
                <p className="text-xl font-bold leading-snug text-ink sm:text-2xl">
                  {item.title}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={item.href} className="btn btn-dark">
                  {item.discover}
                </Link>
                <Link href="/contact#quote" className="btn btn-primary">
                  {t.QuoteCard}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Two services, one standard */}
      <Section id="showcase" tone="green" className="scroll-mt-24">
        <SectionHeading
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          intro={showcase.intro}
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          <article className="card-soft card-lift overflow-hidden">
            <div className="photo-frame aspect-[4/3]">
              <Image
                src="/images/home-cleaning.jpg.png"
                alt={showcase.homeImageAlt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="eyebrow">{showcase.homeSubtitle}</p>
              <h3 className="mt-3 text-3xl font-extrabold">{showcase.homeTitle}</h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {t.HomeText}
              </p>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-green-main">
                {showcase.homeServicesTitle}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {showcase.homeServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-base font-semibold text-ink">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/renia-home" className="btn btn-dark">
                  {showcase.homeCta}
                </Link>
                <Link href="/contact#quote" className="btn btn-primary">
                  {t.QuoteCard}
                </Link>
              </div>
            </div>
          </article>

          <article className="card-soft card-lift overflow-hidden">
            <div className="photo-frame aspect-[4/3]">
              <Image
                src="/images/pro-cleaning.jpg.png"
                alt={showcase.proImageAlt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="eyebrow">{showcase.proSubtitle}</p>
              <h3 className="mt-3 text-3xl font-extrabold">{showcase.proTitle}</h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {t.ProText}
              </p>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-green-main">
                {showcase.proSectorsTitle}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {showcase.proSectors.map((sector) => (
                  <li key={sector} className="flex items-start gap-3 text-base font-semibold text-ink">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-main" />
                    {sector}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/renia-pro" className="btn btn-dark">
                  {showcase.proCta}
                </Link>
                <Link href="/contact#quote" className="btn btn-primary">
                  {t.QuoteCard}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* Why Renia */}
      <Section id="why" tone="white" className="scroll-mt-24">
        <SectionHeading
          eyebrow={showcase.centerEyebrow}
          title={showcase.centerTitle}
          intro={showcase.centerText}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.whyPillars.map((pillar, index) => (
            <div key={pillar.title} className="card-soft card-lift p-7">
              <span className="tag">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl font-extrabold">{pillar.title}</h3>
              <p className="mt-2 text-base font-semibold leading-relaxed text-ink">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="green">
        <SectionHeading
          eyebrow={t.homeHow.eyebrow}
          title={t.homeHow.title}
          intro={t.homeHow.intro}
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.homeHow.steps.map((step, index) => (
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

      {/* Reviews */}
      <Section tone="white">
        <SectionHeading
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          intro={t.reviews.intro}
        />

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <span aria-hidden="true" className="text-gold">★</span>
            {t.reviews.googleLabel} · {t.reviews.googleValue}
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.reviews.items.map((review) => (
            <figure key={review.name} className="card-soft card-lift flex flex-col p-8">
              <Stars />
              <blockquote className="mt-6 flex-1 text-lg font-semibold leading-relaxed text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-main text-lg font-extrabold text-white">
                  {review.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-bold leading-tight">{review.name}</span>
                  <span className="mt-1 block text-xs font-extrabold uppercase tracking-[0.16em] text-green-main">
                    {review.meta}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-semibold leading-relaxed text-ink">
          {t.reviews.googleNote}
        </p>
      </Section>

      {/* FAQ preview */}
      <Section tone="green">
        <SectionHeading
          eyebrow={t.faqPage.eyebrow}
          title={t.faqPage.title}
          intro={t.faqPage.intro}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqPreview} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/faq" className="btn btn-dark">
            {t.faqPage.seeAll}
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="quote" tone="white" className="scroll-mt-24">
        <div className="flex flex-col gap-10 rounded-[32px] bg-green-main p-8 text-white shadow-[0_24px_70px_rgba(15,58,32,0.28)] sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              RENIA SERVICES
            </p>
            <h2 className="mt-6 max-w-2xl text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {t.slogan}
            </h2>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-5 lg:items-end">
            <Link href="/contact#quote" className="btn btn-gold">
              {t.nav.quote}
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="pill-link-dark">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}