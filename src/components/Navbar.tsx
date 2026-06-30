import { navItems, profile } from "@/lib/data";
import { Container } from "@/components/Container";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between gap-4"
        >
          <a
            href="#top"
            className="font-display text-3xl font-semibold leading-none text-foreground"
            aria-label="Go to homepage"
          >
            {profile.shortName}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={isExternalLink(item.href) ? "_blank" : undefined}
                rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
                className="nav-link font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden border border-foreground px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
