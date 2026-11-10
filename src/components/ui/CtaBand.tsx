import Link from "next/link";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBand({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="bg-cream pb-24 lg:pb-32">
      <div className="shell">
        <div className="flex flex-col gap-12 rounded-3xl bg-forest p-8 text-cream shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 md:flex-row md:items-end md:justify-between lg:p-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
              {eyebrow}
            </p>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2.5rem,4.6vw,4rem)] font-normal leading-[1.03] tracking-[-0.02em]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/65 sm:text-base">
              {text}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
            <Link href={primaryHref} className="btn btn-gold">
              {primaryLabel}
            </Link>

            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="pill-link-dark">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
