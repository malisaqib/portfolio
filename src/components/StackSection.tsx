import { skillGroups } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Stack"
          title="Tools I use to build backend and AI systems."
          subtitle="My strongest interests are backend logic, databases, retrieval systems, and integrating LLMs into useful product flows."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-emerald-300/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-base font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
