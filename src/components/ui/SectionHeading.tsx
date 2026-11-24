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
        <h2 className="mt-4 max-w-3xl text-balance text-[clamp(2.2rem,4.6vw,4rem)] font-extrabold leading-[1.05]">
          {title}
        </h2>
      </div>

      {intro ? (
        <div className="lg:col-span-5 lg:flex lg:items-end">
          <p className="max-w-md text-lg leading-relaxed text-stone">{intro}</p>
        </div>
      ) : null}
    </div>
  );
}
