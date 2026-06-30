import { navItems, profile } from "@/lib/data";
import { Container } from "@/components/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between gap-4"
        >
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-3 text-sm font-medium text-white"
            aria-label="Go to homepage"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-xs text-emerald-300 transition-colors group-hover:border-emerald-300/40">
              MAS
            </span>
            <span className="hidden truncate text-zinc-300 sm:block">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
