type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
      <div className="lg:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-balance font-serif text-[clamp(2rem,4.4vw,4rem)] font-normal leading-[1.04] tracking-[-0.02em]">
          {title}
        </h2>
      </div>

      {intro ? (
        <div className="lg:col-span-5 lg:flex lg:items-end">
          <p className="max-w-md text-base leading-relaxed text-stone sm:text-base">
            {intro}
          </p>
        </div>
      ) : null}
    </div>
  );
}
