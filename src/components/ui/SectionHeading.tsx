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
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-balance text-[clamp(2.2rem,4.6vw,4rem)] font-extrabold leading-[1.05]">
        {title}
      </h2>
      {intro ? (
        <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-ink">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
