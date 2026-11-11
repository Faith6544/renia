"use client";

import Link from "next/link";

import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import {
  buildWhatsAppUrl,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
} from "@/lib/site";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
        fill="currentColor"
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
      fill="currentColor"
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

export default function ContactContent() {
  const { t } = useLanguage();
  const page = t.contact;
  const whatsappHref = buildWhatsAppUrl(page.whatsappPrefill);

  return (
    <main className="relative">
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{
          label: page.formEyebrow,
          href: "#contact-form",
        }}
        secondary={{
          label: page.whatsappButton,
          href: "#whatsapp",
        }}
      />

      {/* Contact details */}
      <section id="whatsapp" className="scroll-mt-20 bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{page.detailsEyebrow}</p>
            <h2 className="mt-5 max-w-md text-balance font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {page.detailsTitle}
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-stone sm:text-base">
              {page.intro}
            </p>

            <div className="mt-10 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-9">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                {page.whatsappTitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone">
                {page.whatsappText}
              </p>
              {/* Fixed Button: Removed w-full, added inline-flex */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark mt-6 inline-flex items-center gap-2 relative z-10 pointer-events-auto"
              >
                <WhatsAppIcon />
                {page.whatsappButton}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-stone">
                  {page.areaLabel}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  {page.areaValue}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-stone">
                  {page.phoneLabel}
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-3 block font-serif text-2xl leading-tight transition-colors hover:text-forest"
                >
                  {page.phoneValue}
                </a>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-stone">
                  {page.emailLabel}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 block break-all font-serif text-2xl leading-tight transition-colors hover:text-forest"
                >
                  {page.emailValue}
                </a>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-stone">
                  {page.hoursLabel}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight">
                  {page.hoursValue}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white/70 px-6 py-5 text-base text-stone shadow-[0_4px_20px_rgb(0,0,0,0.03)] sm:flex-row sm:items-center sm:justify-between">
              <p>{t.footer.areaLabel} — {t.footer.area}</p>
              <Link href="/contact#contact-form" className="pill-link">
                {page.formEyebrow} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map & social */}
      <section className="bg-cream pb-16 lg:pb-32">
        <div className="shell grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-bone p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:min-h-[420px] sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(15,58,32,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,58,32,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-forest shadow-[0_10px_30px_rgba(15,58,32,0.12)]">
                  <MapPinIcon />
                </span>
                <p className="mt-6 font-serif text-2xl leading-tight sm:text-3xl">
                  {page.mapPlaceholder}
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-stone">
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
              <p className="mt-4 text-base leading-relaxed text-stone">
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
              <p className="mt-4 text-base leading-relaxed text-stone">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest shadow-[0_6px_20px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:text-gold hover:shadow-lg"
                  >
                    <SocialIcon name={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="relative z-10 scroll-mt-20 bg-white py-16 lg:py-32"
      >
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{page.formEyebrow}</p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {page.formTitle}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-stone">
              {page.formIntro}
            </p>

            <div className="mt-10 rounded-2xl bg-cream p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                {page.whatsappTitle}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-base text-forest transition-colors hover:text-gold relative z-10 pointer-events-auto"
              >
                <WhatsAppIcon />
                {page.whatsappButton}
              </a>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-8">
            <div className="rounded-3xl bg-bone p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Icon (Bottom Right) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={page.floatingWhatsapp || "WhatsApp"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-[0_16px_45px_rgba(15,58,32,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-forest hover:shadow-2xl"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}