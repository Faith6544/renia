"use client";

import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/ui/Accordion";
import Stars from "@/components/ui/Stars";
import { useLanguage } from "@/context/LanguageContext";
import { GOOGLE_REVIEWS_URL, CONTACT_EMAIL } from "@/lib/site";

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

function EngagementIcon({ index }: { index: number }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
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
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.5a3 3 0 0 1 0 5.8M18 14.5a5.5 5.5 0 0 1 3.5 5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

function EngagementBadge({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="flex max-w-[6.5rem] flex-col items-center text-center sm:max-w-[7.5rem]">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/30">
        <EngagementIcon index={index} />
      </span>
      <span className="mt-2 block text-[10px] font-medium uppercase leading-tight tracking-[0.1em] text-cream/90 sm:text-[11px] sm:tracking-[0.12em]">
        {title}
      </span>
      <span className="mt-1 hidden text-[10px] leading-snug text-cream/50 sm:block">
        {body}
      </span>
    </div>
  );
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
    <article className="card-soft card-lift group overflow-hidden rounded-3xl bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={href}
        aria-label={title}
        className="relative z-20 block aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-forest shadow-[0_10px_30px_rgba(15,58,32,0.12)]"
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
        <div className="pointer-events-none absolute inset-0 bg-forest/10 transition-colors duration-500 group-hover:bg-forest/0" />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-forest/35 text-cream shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-forest">
          <span aria-hidden="true">→</span>
        </span>
      </Link>
      <div className="relative z-10 px-4 pb-5 pt-6 sm:px-5">
        <h3 className="font-serif text-xl leading-tight tracking-[-0.01em] sm:text-3xl">{title}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-stone">{text}</p>
        <Link href={href} className="pill-link mt-6">{button}</Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const showcase = t.showcase;

  const faqPreview = t.faqPage?.items?.slice(0, 3) || [
    { question: "What is SAP?", answer: "Personal services at home." },
    { question: "How to get a quote?", answer: "Fill the contact form." },
    { question: "Do you bring products?", answer: "Yes, eco-friendly options." }
  ];

  const reviews = t.reviews || {
    eyebrow: "Reviews",
    title: "Customer Reviews",
    intro: "See what our clients say.",
    googleLabel: "Google",
    googleValue: "5.0",
    googleNote: "Based on real reviews.",
    items: [
      { name: "Sarah M.", meta: "Yvelines", quote: "Amazing service!" },
      { name: "John D.", meta: "Paris", quote: "Very professional." },
      { name: "Emily R.", meta: "Versailles", quote: "My house is spotless." }
    ]
  };

  const homeHow = t.homeHow || {
    eyebrow: "Process", title: "How it works", intro: "Simple steps.", cta: "Learn more",
    steps: [
      { title: "Request", body: "Describe your need." },
      { title: "Assessment", body: "We review it." },
      { title: "Proposal", body: "Receive a quote." },
      { title: "Service", body: "We come to you." }
    ]
  };

  const whyPillars = t.whyPillars || [
    { title: "Professional Team", body: "Organized teams." },
    { title: "Transparent Pricing", body: "No hidden fees." },
    { title: "Reliable Service", body: "Always on time." },
    { title: "Customer Satisfaction", body: "We care." },
    { title: "Eco-conscious", body: "Green products." }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero-grain relative flex min-h-screen items-end overflow-hidden rounded-b-[2.5rem] bg-forest text-cream shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
        <Image src="/images/hero.jpg.png" alt="" fill priority unoptimized sizes="100vw" className="object-cover object-center" />
        <div className="pointer-events-none absolute inset-0 bg-forest/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-forest/10" />
        <div className="shell relative z-20 pb-16 pt-32 sm:pb-32 lg:pb-36">
          <p className="animate-rise text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">RENIA · YVELINES 78</p>
          <h1 className="animate-rise mt-5 max-w-5xl text-balance font-serif text-[clamp(2rem,5.2vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.02em] [animation-delay:100ms]">
            {t.HeroTitle || "Your trusted partner."}
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-base leading-relaxed text-cream/75 [animation-delay:180ms] sm:text-lg">
            {t.HeroText || "Professional cleaning services."}
          </p>
          <div className="animate-rise mt-8 flex flex-col gap-4 [animation-delay:260ms] sm:flex-row sm:items-center sm:gap-5">
            <Link href="/contact" className="btn btn-gold z-30 relative">{t.HeroButtonPrimary || "Get a free quote"}</Link>
            <Link href="/book" className="btn btn-outline z-30 relative">{t.HeroButtonSecondary || "Book a service"}</Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 bg-forest/30 backdrop-blur-sm">
          <div className="shell flex items-center justify-between py-4 text-xs uppercase tracking-[0.22em] text-cream/60 sm:text-sm">
            <span>RENIA HOME — Yvelines</span>
            <span className="hidden sm:inline">RENIA PRO — Yvelines</span>
            <span>{t.footer?.area || "Yvelines 78"}</span>
          </div>
        </div>
      </section>

      {/* You are */}
      <section className="bg-white py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-3">
              <p className="font-serif text-2xl italic leading-tight text-forest sm:text-4xl">{t.YouAre || "You are:"}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
              <Link href="/renia-home" className="group relative z-20 flex min-h-[112px] items-center justify-between gap-6 rounded-2xl bg-white px-7 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream hover:shadow-xl sm:px-8">
                <span className="flex items-start gap-5">
                  <span className="font-serif text-2xl leading-none text-gold">01</span>
                  <span className="text-base leading-relaxed">{t.Individual || "Individual"}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-lg text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/renia-pro" className="group relative z-20 flex min-h-[112px] items-center justify-between gap-6 rounded-2xl bg-white px-7 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream hover:shadow-xl sm:px-8">
                <span className="flex items-start gap-5">
                  <span className="font-serif text-2xl leading-none text-gold">02</span>
                  <span className="text-base leading-relaxed">{t.Professional || "Professional"}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-lg text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two areas */}
      <section id="areas" className="scroll-mt-20 bg-cream py-16 lg:py-32">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="max-w-3xl text-balance font-serif text-[clamp(2rem,4.6vw,4.2rem)] font-normal leading-[1.03] tracking-[-0.02em]">{t.AreasTitle || "Our Expertise"}</h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="max-w-md text-base leading-relaxed text-stone sm:text-base">{t.AreasSubtitle || "Choose the right service."}</p>
            </div>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-14">
            <ServiceArea href="/renia-home" image="/images/home-cleaning.jpg.png" title={t.HomeTitle || "RENIA HOME"} text={t.HomeText || "Home cleaning"} button={t.HomeButton || "Discover"} />
            <ServiceArea href="/renia-pro" image="/images/pro-cleaning.jpg.png" title={t.ProTitle || "RENIA PRO"} text={t.ProText || "Commercial cleaning"} button={t.ProButton || "Discover"} />
          </div>
        </div>
      </section>

      {/* Flyer 1 — RENIA HOME / team / RENIA PRO */}
      <section id="showcase" className="scroll-mt-20 bg-white py-16 lg:py-32">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow">{showcase.eyebrow}</p>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">
                {showcase.title}
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-stone lg:col-span-5">
              {showcase.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:items-stretch lg:gap-8">
            {/* Left — RENIA HOME */}
            <article className="flex h-full flex-col rounded-3xl bg-cream p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-gold">
                {showcase.homeSubtitle}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.01em]">
                {showcase.homeTitle}
              </h3>

              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-forest">
                <Image
                  src="/images/home-cleaning.jpg.png"
                  alt={showcase.homeImageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-forest/10" />
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.22em] text-stone">
                {showcase.homeServicesTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {showcase.homeServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-base leading-relaxed text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-[10px] text-gold"
                    >
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <Link href="/renia-home" className="pill-link mt-8 self-start">
                {showcase.homeCta} →
              </Link>
            </article>

            {/* Center — team & engagements */}
            <article className="flex h-full flex-col items-center justify-between rounded-3xl bg-forest p-6 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-8">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.26em] text-gold">
                  {showcase.centerEyebrow}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.01em]">
                  {showcase.centerTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-cream/70">
                  {showcase.centerText}
                </p>
              </div>

              <div className="my-8 grid w-full max-w-sm grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
                <div className="justify-self-start">
                  <EngagementBadge index={0} {...showcase.engagements[0]} />
                </div>
                <div aria-hidden="true" />
                <div className="justify-self-end">
                  <EngagementBadge index={1} {...showcase.engagements[1]} />
                </div>

                <div aria-hidden="true" />
                <div className="relative aspect-square w-32 overflow-hidden rounded-full border-4 border-gold/30 shadow-[0_16px_45px_rgba(0,0,0,0.28)] sm:w-40 lg:w-36 xl:w-44">
                  <Image
                    src="/images/hero.jpg.png"
                    alt={showcase.centerImageAlt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div aria-hidden="true" />

                <div className="justify-self-start">
                  <EngagementBadge index={2} {...showcase.engagements[2]} />
                </div>
                <div aria-hidden="true" />
                <div className="justify-self-end">
                  <EngagementBadge index={3} {...showcase.engagements[3]} />
                </div>
              </div>

              <Link href="/about" className="pill-link-dark self-center">
                {showcase.centerCta} →
              </Link>
            </article>

            {/* Right — RENIA PRO */}
            <article className="flex h-full flex-col rounded-3xl bg-cream p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-gold">
                {showcase.proSubtitle}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.01em]">
                {showcase.proTitle}
              </h3>

              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-forest">
                <Image
                  src="/images/pro-cleaning.jpg.png"
                  alt={showcase.proImageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-forest/10" />
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.22em] text-stone">
                {showcase.proSectorsTitle}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {showcase.proSectors.map((sector) => (
                  <li
                    key={sector}
                    className="flex items-center gap-2 text-sm leading-relaxed text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {sector}
                  </li>
                ))}
              </ul>

              <Link href="/renia-pro" className="pill-link mt-8 self-start">
                {showcase.proCta} →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* SAP */}
      <section id="sap" className="bg-cream pb-16 lg:pb-32">
        <div className="shell">
          <div className="grid gap-10 rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-4">
              <p className="font-serif text-[clamp(5rem,9vw,8rem)] leading-[0.85] tracking-[-0.05em] text-forest">50<span className="align-top text-[0.3em] tracking-normal text-gold">%</span></p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone">SAP</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-2xl text-balance font-serif text-2xl leading-[1.08] tracking-[-0.01em] sm:text-4xl lg:text-[2.8rem]">{t.SAPTitle || "Tax Credit"}</h2>
              <ul className="mt-7 space-y-4 rounded-2xl bg-white/70 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                <li className="flex items-start gap-3 text-base leading-relaxed text-ink/80 sm:text-base"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-xs text-gold">✓</span>{t.SAPBullet1 || "50% tax credit"}</li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-ink/80 sm:text-base"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-xs text-gold">✓</span>{t.SAPBullet2 || "Immediate advance"}</li>
              </ul>
              <Link href="/renia-home#tax-credit" className="pill-link mt-8">{t.SAPLink || "Learn more"}</Link>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-stone">{t.SAPNote || "Subject to conditions."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-16 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">RENIA</p>
              <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">{t.WhyTitle || "Why choose us"}</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyPillars.map((pillar, index) => (
                  <div key={pillar.title} className={`flex gap-5 rounded-2xl bg-cream p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${index === 4 ? "sm:col-span-2" : ""}`}>
                    <span className="mt-0.5 shrink-0 text-gold"><WhyIcon index={index} /></span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight tracking-[-0.01em]">{pillar.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-stone">{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">{homeHow.eyebrow}</p>
              <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">{homeHow.title}</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-base">{homeHow.intro}</p>
              <Link href="/how-it-works" className="pill-link mt-8">{homeHow.cta} →</Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="grid gap-4 sm:grid-cols-2">
                {homeHow.steps.map((step, index) => (
                  <li key={step.title} className="group rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-serif text-lg leading-none text-forest transition-colors duration-300 group-hover:bg-gold group-hover:text-forest">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-stone/50">{String(index + 1).padStart(2, "0")} / 04</span>
                    </div>
                    <h3 className="mt-6 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-stone">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16 lg:py-32">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{reviews.eyebrow}</p>
              <h2 className="mt-5 text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">{reviews.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone sm:text-base">{reviews.intro}</p>
            </div>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="pill-link shrink-0">
              <span aria-hidden="true" className="text-gold">★</span>{reviews.googleLabel} · {reviews.googleValue}
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.items.map((review) => (
              <figure key={review.name} className="flex flex-col rounded-3xl bg-cream p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Stars />
                <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed tracking-[-0.01em] text-ink/85">“{review.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-lg text-cream">{review.name.charAt(0)}</span>
                  <span className="min-w-0">
                    <span className="block text-base leading-tight">{review.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-stone">{review.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-stone">{reviews.googleNote}</p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.faqPage?.eyebrow || "FAQ"}</p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.03] tracking-[-0.02em]">{t.faqPage?.title || "Questions"}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-base">{t.faqPage?.intro || "Find answers."}</p>
            <Link href="/faq" className="pill-link mt-8">{t.faqPage?.seeAll || "See all"} →</Link>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqPreview} />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="quote" className="scroll-mt-20 bg-cream pb-16 lg:pb-32">
        <div className="shell">
          <div className="flex flex-col gap-12 rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 md:flex-row md:items-end md:justify-between lg:p-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">RENIA · YVELINES 78</p>
              <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2rem,4.6vw,4rem)] font-normal leading-[1.03] tracking-[-0.02em]">{t.footer?.tagline || "Let's work together."}</h2>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
              <Link href="/contact" className="btn btn-gold z-20 relative">{t.nav?.quote || "Get a quote"}</Link>
              {/* Updated to use your actual CONTACT_EMAIL variable */}
              <a href={`mailto:${CONTACT_EMAIL}`} className="pill-link-dark relative z-20">{CONTACT_EMAIL}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}