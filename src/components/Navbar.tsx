import { navItems, profile } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#050505]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 text-sm font-medium text-white"
          aria-label="Go to homepage"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-md border border-zinc-700 bg-zinc-950 font-mono text-xs text-emerald-300 transition-colors group-hover:border-emerald-300/50">
            MAS
          </span>
          <span className="hidden truncate text-zinc-300 sm:block">
            {profile.name}
          </span>
        </a>

        <div className="flex min-w-0 items-center gap-0.5 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white sm:px-3"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
