import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-emerald-300/40 hover:bg-zinc-950 sm:p-6 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-emerald-300">
            {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-zinc-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-800 bg-black/30 px-2.5 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-zinc-800 pt-5">
        <p className="text-xs font-medium uppercase text-zinc-500">
          Technical build
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

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.links.map((link) => (
          <a
            key={`${project.title}-${link.label}`}
            href={link.href}
            target={isExternalLink(link.href) ? "_blank" : undefined}
            rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
            className="rounded-md border border-zinc-800 px-3.5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
