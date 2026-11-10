"use client";

import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import Stars from "@/components/ui/Stars";
import { useLanguage } from "@/context/LanguageContext";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

function WhyIcon({ index }: { index: number }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M20 10c0 4.99-5.54 9.19-7.4 10.4a1 1 0 0 1-1.2 0C9.54 19.19 4 14.99 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
  }
}

function ServiceArea({
  href,
  image,
  title,
  text,
  button,
  priority = false,
}: {
  href: string;
  image: string;
  title: string;
  text: string;
  button: string;
  priority?: boolean;
}) {
  return (
    <article className="card-soft card-lift group overflow-hidden p-3">
      <Link
        href={href}
        aria-label={title}
        className="relative block aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-forest shadow-[0_10px_30px_rgba(15,58,32,0.12)]"
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          unoptimized
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-forest/10 transition-colors duration-500 group-hover:bg-forest/0" />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-forest/35 text-cream shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-forest">
          <span aria-hidden="true">→</span>
        </span>
      </Link>

      <div className="px-4 pb-5 pt-6 sm:px-5">
        <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
          {text}
        </p>
        <Link href={href} className="pill-link mt-6">
          {button}
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  const faqPreview = t.faqPage.items.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="hero-grain relative flex min-h-screen items-end overflow-hidden rounded-b-[2.5rem] bg-forest text-cream shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
        <Image
          src="/images/hero.jpg.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-forest/10" />

        <div className="shell relative z-10 pb-28 pt-40 sm:pb-32 lg:pb-36">
          <p className="animate-rise text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
            RENIA · YVELINES 78
          </p>

          <h1 className="animate-rise mt-8 max-w-5xl text-balance font-serif text-[clamp(2.4rem,5.2vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.02em] [animation-delay:100ms]">
            {t.HeroTitle}
          </h1>

          <p className="animate-rise mt-8 max-w-2xl text-base leading-relaxed text-cream/75 [animation-delay:180ms] sm:text-lg">
            {t.HeroText}
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-4 [animation-delay:260ms] sm:flex-row sm:items-center sm:gap-5">
            <Link href="/contact" className="btn btn-gold">
              {t.HeroButtonPrimary}
            </Link>
            <Link href="/book" className="btn btn-outline">
              {t.HeroButtonSecondary}
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-forest/30 backdrop-blur-sm">
          <div className="shell flex items-center justify-between py-4 text-[9px] uppercase tracking-[0.22em] text-cream/60 sm:text-[10px]">
            <span>RENIA HOME — Yvelines</span>
            <span className="hidden sm:inline">RENIA PRO — Yvelines</span>
            <span>{t.footer.area}</span>
          </div>
        </div>
      </section>

      {/* You are */}
      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-3">
              <p className="font-serif text-3xl italic leading-tight text-forest sm:text-4xl">
                {t.YouAre}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
              <Link
                href="/renia-home"
                className="group flex min-h-[112px] items-center justify-between gap-6 rounded-2xl bg-white px-7 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream hover:shadow-xl sm:px-8"
              >
                <span className="flex items-start gap-5">
                  <span className="font-serif text-2xl leading-none text-gold">
                    01
                  </span>
                  <span className="text-sm leading-relaxed">
                    {t.Individual}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-gold transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/renia-pro"
                className="group flex min-h-[112px] items-center justify-between gap-6 rounded-2xl bg-white px-7 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream hover:shadow-xl sm:px-8"
              >
                <span className="flex items-start gap-5">
                  <span className="font-serif text-2xl leading-none text-gold">
                    02
                  </span>
                  <span className="text-sm leading-relaxed">
                    {t.Professional}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-gold transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two areas of expertise */}
      <section
        id="areas"
        className="scroll-mt-20 bg-cream py-24 lg:py-32"
      >
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="max-w-3xl text-balance font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {t.AreasTitle}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="max-w-md text-sm leading-relaxed text-stone sm:text-base">
                {t.AreasSubtitle}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-14">
            <ServiceArea
              href="/renia-home"
              image="/images/home-cleaning.jpg.png"
              title={t.HomeTitle}
              text={t.HomeText}
              button={t.HomeButton}
            />
            <ServiceArea
              href="/renia-pro"
              image="/images/pro-cleaning.jpg.png"
              title={t.ProTitle}
              text={t.ProText}
              button={t.ProButton}
            />
          </div>
        </div>
      </section>

      {/* Personal services / tax credit */}
      <section id="sap" className="bg-cream pb-24 lg:pb-32">
        <div className="shell">
          <div className="grid gap-10 rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-4">
              <p className="font-serif text-[clamp(5rem,9vw,8rem)] leading-[0.85] tracking-[-0.05em] text-forest">
                50
                <span className="align-top text-[0.3em] tracking-normal text-gold">
                  %
                </span>
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-stone">
                SAP
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-2xl text-balance font-serif text-3xl leading-[1.08] tracking-[-0.01em] sm:text-4xl lg:text-[2.8rem]">
                {t.SAPTitle}
              </h2>

              <ul className="mt-7 space-y-4 rounded-2xl bg-white/70 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                {[t.SAPBullet1, t.SAPBullet2].map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink/80 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-[10px] text-gold"
                    >
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link href="/renia-home#tax-credit" className="pill-link mt-8">
                {t.SAPLink}
              </Link>

              <p className="mt-8 max-w-xl text-xs leading-relaxed text-stone">
                {t.SAPNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose RENIA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">RENIA</p>
              <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2.4rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {t.WhyTitle}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {t.whyPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className={`flex gap-5 rounded-2xl bg-cream p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 text-gold">
                      <WhyIcon index={index} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight tracking-[-0.01em]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">{t.homeHow.eyebrow}</p>
              <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2.4rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {t.homeHow.title}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-stone sm:text-base">
                {t.homeHow.intro}
              </p>
              <Link href="/how-it-works" className="pill-link mt-8">
                {t.homeHow.cta} →
              </Link>
            </div>

            <div className="lg:col-span-8">
              <ol className="grid gap-4 sm:grid-cols-2">
                {t.homeHow.steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="group rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-serif text-lg leading-none text-forest transition-colors duration-300 group-hover:bg-gold group-hover:text-forest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-stone/50">
                        {String(index + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif text-2xl leading-tight tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Customer reviews */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.reviews.eyebrow}</p>
              <h2 className="mt-5 text-balance font-serif text-[clamp(2.4rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {t.reviews.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                {t.reviews.intro}
              </p>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="pill-link shrink-0"
            >
              <span aria-hidden="true" className="text-gold">
                ★
              </span>
              {t.reviews.googleLabel} · {t.reviews.googleValue}
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.reviews.items.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-3xl bg-cream p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Stars />
                <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed tracking-[-0.01em] text-ink/85">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-lg text-cream">
                    {review.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm leading-tight">
                      {review.name}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-stone">
                      {review.meta}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-xs leading-relaxed text-stone">
            {t.reviews.googleNote}
          </p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.faqPage.eyebrow}</p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2.4rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
              {t.faqPage.title}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone sm:text-base">
              {t.faqPage.intro}
            </p>
            <Link href="/faq" className="pill-link mt-8">
              {t.faqPage.seeAll} →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={faqPreview} />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="quote" className="scroll-mt-20 bg-cream pb-24 lg:pb-32">
        <div className="shell">
          <div className="flex flex-col gap-12 rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 md:flex-row md:items-end md:justify-between lg:p-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
                RENIA · YVELINES 78
              </p>
              <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2.5rem,4.6vw,4rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {t.footer.tagline}
              </h2>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
              <Link href="/contact" className="btn btn-gold">
                {t.nav.quote}
              </Link>
              <a href="mailto:hello@renia.co" className="pill-link-dark">
                hello@renia.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
