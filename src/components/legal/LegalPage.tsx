import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main>
      <section className="hero-grain relative overflow-hidden rounded-b-[2.5rem] bg-forest text-cream shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/95" />

        <div className="shell relative z-10 pb-16 pt-32 sm:pb-20 lg:pt-40">
          <p className="text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-[clamp(2rem,4.8vw,4.25rem)] font-normal leading-[1.05] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {intro}
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-cream/45">
            {updated}
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <nav aria-label={title} className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.24em] text-stone">
                {title}
              </p>
              <ul className="mt-5 space-y-3 text-base">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="inline-flex items-start gap-3 text-stone transition-colors hover:text-forest"
                    >
                      <span className="font-serif text-sm leading-6 text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-10 lg:col-span-8">
            {sections.map((section, index) => (
              <article
                key={section.title}
                id={`section-${index + 1}`}
                className="scroll-mt-28 rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-stone">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="flex flex-col gap-4 rounded-3xl bg-bone p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <p className="max-w-md text-base leading-relaxed text-stone">
                Une question sur ce document ? Écrivez-nous à{" "}
                <a
                  href="mailto:contact@reniaservices.fr"
                  className="font-medium text-forest underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                >
                  contact@reniaservices.fr
                </a>
                .
              </p>
              <Link href="/contact" className="pill-link shrink-0 self-start">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
