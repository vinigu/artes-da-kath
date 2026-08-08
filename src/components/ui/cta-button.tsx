type CtaButtonProps = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export function CtaButton({ href, label, ariaLabel }: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-rose)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(201,111,111,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand-rose-strong)]"
    >
      {label}
    </a>
  );
}
