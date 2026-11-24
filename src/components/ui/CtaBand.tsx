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
    <section className="bg-white pb-16 lg:pb-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-deep via-brand to-aqua p-8 text-white shadow-[0_24px_60px_rgba(22,82,240,0.24)] sm:p-12 lg:p-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-aqua-soft">
                {eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl text-balance text-[clamp(2rem,4.6vw,3.8rem)] font-extrabold leading-[1.04]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
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
      </div>
    </section>
  );
}
