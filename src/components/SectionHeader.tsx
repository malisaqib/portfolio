type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`divider-reveal pt-7 ${className}`}>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
