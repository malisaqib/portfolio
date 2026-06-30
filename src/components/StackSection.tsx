import { skillGroups } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader eyebrow="Stack" title="Technologies" />

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="border-t border-line pt-5">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-foreground">
                {group.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {group.skills.join("  ")}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
