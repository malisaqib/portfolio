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
    <div className={`max-w-3xl ${className}`}>
      <p className="text-sm font-medium text-emerald-300">{eyebrow}</p>
      <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
