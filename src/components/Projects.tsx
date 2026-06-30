import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-emerald-300">Featured work</p>
          <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Backend-heavy AI projects and shipped software.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            These projects focus on retrieval, data modeling, API design, AI
            grounding, and the product flows needed to make them useful.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
