"use client";

import Link from "next/link";

import BookingForm from "@/components/forms/BookingForm";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import {
  buildWhatsAppUrl,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/site";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.08 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function BookContent() {
  const { t } = useLanguage();
  const page = t.booking;
  const whatsappHref = buildWhatsAppUrl(page.whatsappButton);

  return (
    <main>
      <PageHero
        image="/images/hero.jpg.png"
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        primary={{ label: t.nav.quote, href: "/contact" }}
        secondary={{ label: t.homeHow.cta, href: "/how-it-works" }}
      />

      {/* Booking form */}
      <section className="relative z-10 bg-cream py-16 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{page.formEyebrow}</p>
            <h2 className="mt-5 max-w-sm text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.02em]">
              {page.formTitle}
            </h2>

            <div className="mt-10 rounded-3xl bg-forest p-7 text-cream shadow-[0_16px_45px_rgba(15,58,32,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-gold">
                {page.asideTitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/70">
                {page.asideText}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold mt-6 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {page.whatsappButton}
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="mt-4 inline-flex items-center gap-2 text-base text-cream/70 transition-colors duration-300 hover:text-gold"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-stone">
              {page.note}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-bone p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* What happens after */}
      <section className="bg-white py-16 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.stepsTitle}
            intro={page.intro}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {page.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl bg-cream p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-serif text-lg leading-none text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-xl leading-tight tracking-[-0.01em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/how-it-works" className="pill-link">
              {t.homeHow.cta} →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={page.eyebrow}
        title={page.asideTitle}
        text={page.asideText}
        primaryLabel={t.nav.quote}
        primaryHref="/contact"
        secondaryLabel={t.homeHow.cta}
        secondaryHref="/how-it-works"
      />
    </main>
  );
}
