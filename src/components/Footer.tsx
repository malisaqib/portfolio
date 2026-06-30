import { profile } from "@/lib/data";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <Container>
        <div className="divider-reveal pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-display text-4xl font-semibold leading-none text-foreground">
                {profile.shortName}
              </p>
              <p className="mt-2 text-sm text-muted">
                Backend & AI systems builder at NUST.
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              &copy; {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
