import Image from "next/image";
import Link from "next/link";

type HeroLink = {
  label: string;
  href: string;
};

type PageHeroProps = {
  image: string;
  eyebrow: string;
  title: string;
  intro: string;
  primary?: HeroLink;
  secondary?: HeroLink;
};

export default function PageHero({
  image,
  eyebrow,
  title,
  intro,
  primary,
  secondary,
}: PageHeroProps) {
  return (
    <section className="hero-grain relative flex min-h-[82vh] items-end overflow-hidden rounded-b-[2.5rem] bg-forest text-cream shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-forest/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/10" />

      <div className="shell relative z-10 w-full pb-28 pt-40 sm:pb-32 lg:pb-36">
        <p className="animate-rise text-xs uppercase tracking-[0.3em] text-gold sm:text-sm">
          {eyebrow}
        </p>

        <h1 className="animate-rise mt-8 max-w-5xl text-balance font-serif text-[clamp(2.4rem,5.2vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.02em] [animation-delay:100ms]">
          {title}
        </h1>

        <p className="animate-rise mt-8 max-w-2xl text-base leading-relaxed text-cream/75 [animation-delay:180ms] sm:text-lg">
          {intro}
        </p>

        {primary || secondary ? (
          <div className="animate-rise mt-10 flex flex-col gap-4 [animation-delay:260ms] sm:flex-row sm:items-center sm:gap-5">
            {primary ? (
              <Link href={primary.href} className="btn btn-gold">
                {primary.label}
              </Link>
            ) : null}

            {secondary ? (
              <Link href={secondary.href} className="btn btn-outline">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-forest/30 backdrop-blur-sm">
        <div className="shell flex items-center justify-between py-4 text-xs uppercase tracking-[0.22em] text-cream/60 sm:text-sm">
          <span>RENIA HOME — Yvelines</span>
          <span className="hidden sm:inline">RENIA PRO — Yvelines</span>
          <span>Yvelines (78)</span>
        </div>
      </div>
    </section>
  );
}
