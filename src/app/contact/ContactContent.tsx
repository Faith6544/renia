"use client";

import Link from "next/link";
import { useState } from "react";

import HomeForm from "@/components/forms/HomeForm";
import ProForm from "@/components/forms/ProForm";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import {
  buildWhatsAppUrl,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  SOCIAL_LINKS,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
} from "@/lib/site";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.4 4.6 5.5V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9V9Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M13.5 21v-7.5H16l.4-2.9h-2.9V8.7c0-.8.2-1.4 1.5-1.4h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.5V21h3Z" />
    </svg>
  );
}

function MapPinIcon() {
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
      <path d="M20 10c0 4.99-5.54 9.19-7.4 10.4a1 1 0 0 1-1.2 0C9.54 19.19 4 14.99 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function QrPlaceholder({ label, note }: { label: string; note: string }) {
  const modules: Array<[number, number]> = [
    [36, 10], [44, 10], [52, 10], [60, 10],
    [36, 18], [52, 18], [44, 26], [60, 26],
    [36, 34], [52, 34], [68, 36], [76, 36], [84, 36],
    [68, 44], [84, 44], [68, 52], [76, 52], [84, 52],
    [10, 36], [18, 36], [26, 36], [10, 44], [26, 44],
    [10, 52], [18, 52], [26, 52], [36, 60], [44, 60],
    [52, 60], [68, 60], [76, 60], [84, 60], [36, 68],
    [52, 68], [36, 76], [44, 76], [60, 76], [68, 76],
    [76, 76], [84, 76], [68, 84], [84, 84], [52, 84], [36, 84],
  ];

  return (
    <div className="inline-flex flex-col items-center rounded-2xl bg-cream p-4 text-center shadow-[0_16px_45px_rgba(0,0,0,0.22)]">
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label={note}
        className="h-28 w-28 sm:h-32 sm:w-32"
      >
        <rect width="100" height="100" rx="8" fill="#ffffff" />
        {[
          [8, 8],
          [72, 8],
          [8, 72],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="20" height="20" rx="3" fill="#0f3a20" />
            <rect x={x + 4} y={y + 4} width="12" height="12" rx="2" fill="#ffffff" />
            <rect x={x + 7} y={y + 7} width="6" height="6" rx="1" fill="#0f3a20" />
          </g>
        ))}
        {modules.map(([x, y]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="6"
            height="6"
            rx="1"
            fill="#0f3a20"
          />
        ))}
      </svg>
      <p className="mt-3 max-w-[11rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink">
        {note}
      </p>
      <p className="mt-1 max-w-[11rem] text-[10px] leading-snug font-semibold text-ink">
        {label}
      </p>
    </div>
  );
}

export default function ContactContent() {
  const { t } = useLanguage();
  const page = t.contact;
  const card = t.contactCard;
  const whatsappHref = buildWhatsAppUrl(page.whatsappPrefill);
  const [audience, setAudience] = useState<"home" | "pro">("home");

  return (
    <main className="relative">
      {/* Replace /public/images/hero-home.png to change this hero photo. */}
      <PageHero
        image="/images/hero-home.png"
        imageAlt="Espace propre et lumineux entretenu par Renia Services"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{
          label: page.formEyebrow,
          href: "#quote",
        }}
      />

      {/* Contact details */}
      <Section id="whatsapp" tone="cream" className="scroll-mt-20">
        <SectionHeading eyebrow={page.detailsEyebrow} title={page.detailsTitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink">
                {page.whatsappTitle}
              </p>
              <p className="mt-4 text-base font-semibold leading-relaxed text-ink">
                {page.whatsappText}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark relative z-10 mt-6 inline-flex items-center gap-2 pointer-events-auto"
              >
                <WhatsAppIcon />
                {page.whatsappButton}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                  {page.areaLabel}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  {page.areaValue}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                  {page.phoneLabel}
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-3 block font-serif text-2xl leading-tight transition-colors hover:text-green-main"
                >
                  {page.phoneValue}
                </a>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                  {page.emailLabel}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 block break-all font-serif text-2xl leading-tight transition-colors hover:text-green-main"
                >
                  {page.emailValue}
                </a>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                  {page.hoursLabel}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  {page.hoursValue}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white px-6 py-5 text-base font-semibold text-ink shadow-[0_4px_20px_rgb(0,0,0,0.03)] sm:flex-row sm:items-center sm:justify-between">
              <p>{t.footer.areaLabel} — {t.footer.area}</p>
              <Link href="/contact#quote" className="pill-link">
                {page.formEyebrow} →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Flyer 2 — Let's stay in touch */}
      <Section tone="cream" spacing="compact">
        <div className="relative overflow-hidden rounded-3xl bg-green-dark p-8 text-white shadow-[0_24px_70px_rgba(8,35,20,0.28)] sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(197,160,89,0.16),transparent_55%)]"
          />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
                {card.eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,4.4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.02em]">
                {card.title}
              </h2>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white font-semibold">
                    {card.phoneLabel}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="inline-flex items-center gap-3 font-serif text-2xl leading-tight text-cream transition-colors hover:text-gold sm:text-3xl"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white font-semibold">
                    {card.emailLabel}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center gap-3 break-all font-serif text-2xl leading-tight text-cream transition-colors hover:text-gold sm:text-3xl"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white font-semibold">
                    {card.websiteLabel}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={WEBSITE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 font-serif text-2xl leading-tight text-cream transition-colors hover:text-gold sm:text-3xl"
                    >
                      {WEBSITE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="mt-10 text-xs uppercase tracking-[0.24em] text-white font-semibold">
                {card.signature}
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 lg:col-span-5 lg:items-end">
              <QrPlaceholder label={card.qrLabel} note={card.qrPlaceholder} />

              <p className="max-w-sm text-center font-serif text-2xl italic leading-snug text-white font-semibold lg:text-right">
                {card.tagline}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Map & social */}
      <Section tone="cream" spacing="compact">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:min-h-[420px] sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(15,58,32,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,58,32,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-main shadow-[0_10px_30px_rgba(15,58,32,0.12)]">
                  <MapPinIcon />
                </span>
                <p className="mt-6 font-serif text-2xl leading-tight sm:text-3xl">
                  {page.mapPlaceholder}
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed font-semibold text-ink">
                  {page.mapText}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="eyebrow">{page.mapEyebrow}</p>
              <h2 className="mt-4 font-serif text-2xl leading-tight">
                {page.mapTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed font-semibold text-ink">
                {page.mapText}
              </p>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="btn btn-dark mt-6 inline-flex items-center gap-2 relative z-10 pointer-events-auto"
              >
                {page.phoneValue}
              </a>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="eyebrow">{page.socialTitle}</p>
              <p className="mt-4 text-base leading-relaxed font-semibold text-ink">
                {page.socialText}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-green-main shadow-[0_6px_20px_rgb(0,0,0,0.05)] transition-colors duration-200 hover:bg-green-main hover:text-gold"
                  >
                    <SocialIcon name={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact form */}
      <Section id="quote" tone="white" className="relative z-50 scroll-mt-20">
        <SectionHeading
          eyebrow={page.formEyebrow}
          title={t.forms.formTitle}
          intro={t.forms.formIntro}
        />

        <div className="relative z-50 mx-auto mt-12 max-w-4xl pointer-events-auto">
            <div className="relative z-50 rounded-3xl bg-bone p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto sm:p-10">
              <div className="mb-10 relative z-50 pointer-events-auto">
                <p className="field-label">{t.forms.youAre}</p>
                <div
                  role="group"
                  aria-label={t.forms.youAre}
                  className="grid gap-3 relative z-50 pointer-events-auto sm:grid-cols-2"
                >
                  <button
                    type="button"
                    onClick={() => setAudience("home")}
                    aria-pressed={audience === "home"}
                    className={`min-h-[3.5rem] w-full rounded-2xl border px-5 py-3.5 text-sm font-extrabold transition-colors duration-200 relative z-50 pointer-events-auto sm:text-base ${audience === "home" ? "border-green-main bg-green-main text-white shadow-[0_12px_28px_rgba(15,58,32,0.28)]" : "border-green-main bg-white text-green-main hover:-translate-y-0.5 hover:border-green-main hover:bg-green-light"}`}
                  >
                    {t.forms.individual}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAudience("pro")}
                    aria-pressed={audience === "pro"}
                    className={`min-h-[3.5rem] w-full rounded-2xl border px-5 py-3.5 text-sm font-extrabold transition-colors duration-200 relative z-50 pointer-events-auto sm:text-base ${audience === "pro" ? "border-green-main bg-green-main text-white shadow-[0_12px_28px_rgba(15,58,32,0.28)]" : "border-green-main bg-white text-green-main hover:-translate-y-0.5 hover:border-green-main hover:bg-green-light"}`}
                  >
                    {t.forms.professional}
                  </button>
                </div>
              </div>

              {audience === "home" ? (
                <HomeForm key="home" />
              ) : (
                <ProForm key="pro" />
              )}
            </div>
        </div>
      </Section>
    </main>
  );
}