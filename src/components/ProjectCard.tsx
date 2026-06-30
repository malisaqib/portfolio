import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function isExternalLink(href: string) {
  return href.startsWith("http");
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.links.map((link) => (
        <a
          key={`${project.title}-${link.label}`}
          href={link.href}
          target={isExternalLink(link.href) ? "_blank" : undefined}
          rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
          className="rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.05] sm:p-7">
      <div
        className={
          featured
            ? "grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
            : "flex h-full flex-col"
        }
      >
        <div>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200"
              >
                {category}
              </span>
            ))}
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            {project.subtitle}
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {featured ? <div className="mt-6"><ProjectLinks project={project} /></div> : null}
        </div>

        <div className={featured ? "" : "mt-6 border-t border-white/10 pt-5"}>
          <p className="text-xs font-medium uppercase text-zinc-500">
            Technical highlights
          </p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-zinc-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-zinc-500 transition-colors group-hover:bg-emerald-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {!featured ? (
          <div className="mt-auto pt-6">
            <ProjectLinks project={project} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
