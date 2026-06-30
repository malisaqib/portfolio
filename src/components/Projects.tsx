import { projects } from "@/lib/data";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="work" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Work"
          title="Selected backend and AI projects."
          subtitle="Projects where I worked on APIs, data pipelines, LLM integrations, databases, and production deployment."
        />

        <div className="mt-10 space-y-5">
          <ProjectCard project={featuredProject} featured />
          <div className="grid gap-5 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
