type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-rose)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--brand-brown)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-zinc-600">{description}</p>
    </div>
  );
}
