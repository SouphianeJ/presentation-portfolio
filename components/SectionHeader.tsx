import Link from "next/link";

export function SectionHeader({
  kicker,
  title,
  subtitle,
  section,
}: { kicker?: string; title: string; subtitle?: string; section?: string }) {
  return (
    <header className="mb-6">
      {section && (
        <nav className="mb-1 text-sm" aria-label="Fil d'Ariane">
          <Link href="/" className="text-[color:var(--acc)] hover:underline">
            Accueil
          </Link>
          <span className="hidden md:inline"> / {section}</span>
        </nav>
      )}
      {kicker && <div className="uppercase tracking-widest text-[color:var(--acc)] text-xs">{kicker}</div>}
      <h1 className="text-3xl md:text-4xl font-extrabold text-text drop-shadow-[0_0_.6rem_var(--pri)]">{title}</h1>
      {subtitle && <p className="text-muted mt-2 max-w-prose">{subtitle}</p>}
    </header>
  );
}

