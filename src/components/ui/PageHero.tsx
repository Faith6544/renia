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
    <section className="relative flex min-h-[68vh] items-center overflow-hidden rounded-b-[2rem] bg-brand text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-brand/75" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand/60 to-aqua/20" />

      <div className="shell relative z-10 w-full py-24 sm:py-28">
        <p className="animate-rise text-sm font-extrabold uppercase tracking-[0.2em] text-aqua-soft">
          {eyebrow}
        </p>

        <h1 className="animate-rise mt-6 max-w-5xl text-balance text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[1.03] [animation-delay:100ms]">
          {title}
        </h1>

        <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/90 [animation-delay:180ms]">
          {intro}
        </p>

        {primary || secondary ? (
          <div className="animate-rise mt-9 flex flex-col gap-4 [animation-delay:260ms] sm:flex-row sm:items-center">
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
    </section>
  );
}
