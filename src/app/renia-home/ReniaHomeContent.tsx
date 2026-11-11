"use client";

import Link from "next/link";

import HomeForm from "@/components/forms/HomeForm";
import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

function RoomIcon({ index }: { index: number }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
          <path d="M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M8 13h8M9 20v2M15 20v2" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7M8 19v3M16 19v3" />
          <path d="M9 6h6" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M7 18v3M17 18v3" />
          <path d="M8 6h3" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <path d="M4 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z" />
          <path d="M4 13h16M7 19v2M17 19v2M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case 4:
      return (
        <svg {...common}>
          <path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M16 11h3a1 1 0 0 1 1 1v9M3 21h19" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 7h16M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13M9 7V4h6v3M10 11v6M14 11v6" />
        </svg>
      );
  }
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

function IronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="M4 16h16v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2ZM6 16v-4a6 6 0 0 1 6-6h5a3 3 0 0 1 3 3v7M6 16h12" />
      <path d="M14 6V4h4v2" />
    </svg>
  );
}

export default function ReniaHomeContent() {
  const { t, language } = useLanguage();
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

      {/* Room by room */}
      <section id="included" className="scroll-mt-20 bg-cream py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.includedEyebrow}
            title={page.includedTitle}
            intro={page.includedIntro}
          />

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {page.rooms.map((room, index) => (
              <article
                key={room.title}
                className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-gold">
                    <RoomIcon index={index} />
                  </span>
                  <span className="font-serif text-base leading-none text-stone/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl leading-tight tracking-[-0.01em]">
                  {room.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-stone">
                  {room.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep clean & ironing */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.extrasEyebrow}
            title={page.extrasTitle}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col justify-between rounded-3xl bg-forest p-8 text-cream shadow-[0_16px_45px_rgba(15,58,32,0.18)] sm:p-12">
              <div>
                <span className="text-gold">
                  <SparkleIcon />
                </span>
                <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
                  {page.deepTitle}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 sm:text-base">
                  {page.deepBody}
                </p>
              </div>

              <Link href="#request-form" className="pill-link-dark mt-10 self-start">
                {page.heroPrimary} →
              </Link>
            </article>

            <article className="flex flex-col justify-between rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
              <div>
                <span className="text-forest">
                  <IronIcon />
                </span>
                <h3 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.01em] text-forest sm:text-4xl">
                  {page.ironTitle}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-stone sm:text-base">
                  {page.ironBody}
                </p>
              </div>

              <p className="mt-10 rounded-xl bg-white/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-stone">
                {page.ironNote}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Tax credit */}
      <section id="tax-credit" className="scroll-mt-20 bg-cream py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-10 rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-4">
              <p className="font-serif text-[clamp(5rem,9vw,8rem)] leading-[0.85] tracking-[-0.05em] text-forest">
                50
                <span className="align-top text-[0.3em] tracking-normal text-gold">
                  %
                </span>
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone">
                {page.taxEyebrow}
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-2xl text-balance font-serif text-3xl leading-[1.08] tracking-[-0.01em] sm:text-4xl lg:text-[2.8rem]">
                {page.taxTitle}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-base">
                {page.taxBody}
              </p>

              <ul className="mt-8 space-y-4 rounded-2xl bg-white/70 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                {[page.taxBullet1, page.taxBullet2, page.taxBullet3].map(
                  (bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-base leading-relaxed text-ink/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-xs text-gold"
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ),
                )}
              </ul>

              <Link href="#request-form" className="pill-link mt-8">
                {page.taxCta} →
              </Link>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-stone">
                {page.taxNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{page.faqEyebrow}</p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {page.faqTitle}
            </h2>
            <Link href="#request-form" className="pill-link mt-8">
              {page.heroPrimary} →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={page.faqs} />
          </div>
        </div>
      </section>

      {/* Dedicated home cleaning request form */}
      <section
        id="request-form"
        className="relative z-10 scroll-mt-20 bg-cream py-24 lg:py-32"
      >
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">
              {language === "fr" ? "Demander un devis" : "Request a quote"}
            </p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {language === "fr"
                ? "Demandez votre ménage à domicile."
                : "Request your home clean."}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-stone">
              {language === "fr"
                ? "Indiquez la prestation et la fréquence souhaitées. Votre demande est enregistrée, puis WhatsApp s'ouvre avec votre message prêt à envoyer."
                : "Choose the service and frequency you need. Your request is saved, then WhatsApp opens with your message ready to send."}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-bone p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
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
