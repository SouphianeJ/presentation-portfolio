export function SectionHeader({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <header className="mb-6">
      {kicker && (
        <div className="uppercase tracking-widest text-[color:var(--acc)] text-xs">{kicker}</div>
      )}
      <h1 className="text-3xl md:text-4xl font-extrabold text-text drop-shadow-[0_0_.6rem_var(--pri)]">
        {title}
      </h1>
      {subtitle && <p className="text-muted mt-2 max-w-prose">{subtitle}</p>}
    </header>
  );
}
