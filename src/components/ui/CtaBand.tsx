import Link from "next/link";

import Section from "@/components/ui/Section";

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
    <Section tone="cream" spacing="compact">
      <div className="flex flex-col gap-10 rounded-3xl bg-green-main p-8 text-white shadow-[0_20px_60px_rgba(8,35,20,0.18)] sm:p-12 md:flex-row md:items-end md:justify-between lg:p-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white">
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
    </Section>
  );
}
