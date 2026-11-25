"use client";

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
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Z" />
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

        </div>
      </section>

      <CtaBand
        eyebrow={page.eyebrow}
        title={page.asideTitle}
        text={page.asideText}
        primaryLabel={t.nav.quote}
        primaryHref="/contact"
      />
    </main>
  );
}
