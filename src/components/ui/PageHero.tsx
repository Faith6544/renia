import Container from "@/components/ui/Container";
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
    <section className="relative flex min-h-[82vh] items-end overflow-hidden rounded-b-[2.5rem] bg-green-main text-white shadow-[0_24px_70px_rgba(8,35,20,0.18)]">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-green-main/75" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-dark via-green-main/50 to-green-main/10" />

      <Container className="relative z-10 w-full pb-12 pt-24 sm:pb-20 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:text-sm">
          {eyebrow}
        </p>

        <h1 className="mt-5 max-w-3xl text-balance font-serif text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white sm:text-lg">
          {intro}
        </p>

        {primary || secondary ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
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
      </Container>
    </section>
  );
}
