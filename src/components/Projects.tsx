import { projectFilters, projects } from "@/lib/data";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 pt-8 pb-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader eyebrow="Work" title="Projects" />

        <div className="divider-reveal mt-8 flex flex-wrap gap-x-5 gap-y-2 pt-5">
          {projectFilters.map((filter) => (
            <span
              key={filter}
              className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted"
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
