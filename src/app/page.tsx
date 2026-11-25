"use client";

import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import Stars from "@/components/ui/Stars";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, GOOGLE_REVIEWS_URL } from "@/lib/site";

export default function HomePage() {
  const { t } = useLanguage();
  const showcase = t.showcase;
  const faqPreview = t.faqPage.items.slice(0, 3);

  return (
    <main>
      {/* Hero — write-up vertically centred */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-brand text-white lg:min-h-[720px]">
        <Image
          src="/images/hero.jpg.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/95 via-brand/85 to-[#051b63]/90" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-aqua/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-coral/25 blur-3xl" />

        <div className="container relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="animate-rise text-sm font-extrabold uppercase tracking-[0.28em] text-aqua-soft sm:text-base">
              RENIA SERVICES
            </p>
            <h1 className="animate-rise mt-6 text-balance text-[clamp(2.25rem,5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] [animation-delay:100ms]">
              {t.HeroTitle}
            </h1>
            <p className="animate-rise mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/85 [animation-delay:180ms] sm:text-xl">
              {t.HeroText}
            </p>
            <div className="animate-rise mt-10 flex flex-col gap-4 [animation-delay:260ms] sm:flex-row sm:items-center">
              <Link href="/contact#quote" className="btn btn-gold">
                {t.HeroButtonPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* You are */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <p className="text-5xl font-extrabold tracking-tight text-brand sm:text-6xl lg:text-7xl">
            {t.YouAre}
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: t.Individual,
                href: "/renia-home",
                discover: t.HomeButton,
                number: "01",
                color: "bg-brand-soft",
              },
              {
                title: t.Professional,
                href: "/renia-pro",
                discover: t.ProButton,
                number: "02",
                color: "bg-aqua-soft",
              },
            ].map((item) => (
              <article
                key={item.number}
                className={`card-soft card-lift flex flex-col justify-between p-8 sm:p-10 ${item.color}`}
              >
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-extrabold text-brand sm:text-3xl">
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
        </div>
      </section>

      {/* Two services, one standard */}
      <section id="showcase" className="scroll-mt-24 bg-brand-soft/60 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">{showcase.eyebrow}</p>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {showcase.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-stone lg:col-span-4">
              {showcase.intro}
            </p>
          </div>

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
                <p className="mt-4 text-base font-medium leading-relaxed text-stone">
                  {t.HomeText}
                </p>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-brand">
                  {showcase.homeServicesTitle}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {showcase.homeServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-base text-ink/85">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral" />
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
                <p className="mt-4 text-base font-medium leading-relaxed text-stone">
                  {t.ProText}
                </p>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-brand">
                  {showcase.proSectorsTitle}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {showcase.proSectors.map((sector) => (
                    <li key={sector} className="flex items-start gap-3 text-base text-ink/85">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-aqua" />
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
        </div>
      </section>

      {/* Why Renia — text-focused, no team images */}
      <section id="why" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">{showcase.centerEyebrow}</p>
              <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {showcase.centerTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-stone">
                {showcase.centerText}
              </p>
              <p className="mt-4 max-w-xl text-lg font-bold leading-relaxed text-brand">
                {showcase.centerPromise}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {t.whyPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`card-soft card-lift p-7 ${index === t.whyPillars.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <span className="tag">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-xl font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-stone">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-aqua-soft/50 py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">{t.homeHow.eyebrow}</p>
              <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {t.homeHow.title}
              </h2>
              <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-stone">
                {t.homeHow.intro}
              </p>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {t.homeHow.steps.map((step, index) => (
                <li key={step.title} className="card-soft card-lift p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-white">
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
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.reviews.eyebrow}</p>
              <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {t.reviews.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-stone">
                {t.reviews.intro}
              </p>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary shrink-0"
            >
              <span aria-hidden="true" className="text-coral">★</span>
              {t.reviews.googleLabel} · {t.reviews.googleValue}
            </a>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.reviews.items.map((review) => (
              <figure key={review.name} className="card-soft card-lift flex flex-col p-8">
                <Stars />
                <blockquote className="mt-6 flex-1 text-lg font-semibold leading-relaxed text-ink/85">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white">
                    {review.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold leading-tight">{review.name}</span>
                    <span className="mt-1 block text-xs font-extrabold uppercase tracking-[0.16em] text-brand">
                      {review.meta}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-stone">
            {t.reviews.googleNote}
          </p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-brand-soft/50 py-20 lg:py-28">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.faqPage.eyebrow}</p>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {t.faqPage.title}
            </h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-stone">
              {t.faqPage.intro}
            </p>
            <Link href="/faq" className="btn btn-dark mt-8">
              {t.faqPage.seeAll}
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqPreview} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="quote" className="scroll-mt-24 bg-white pb-20 lg:pb-28">
        <div className="container">
          <div className="flex flex-col gap-10 rounded-[32px] bg-brand p-8 text-white shadow-[0_24px_70px_rgba(15,58,32,0.28)] sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-aqua-soft">
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
        </div>
      </section>
    </main>
  );
}
