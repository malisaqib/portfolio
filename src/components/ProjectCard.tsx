import type { Project } from "@/lib/data";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 border-t border-line py-9 lg:grid-cols-[0.72fr_0.28fr] lg:py-11">
      <div className="max-w-4xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted">
          {project.category}
        </p>
        <h3 className="mt-4 font-display text-5xl font-semibold leading-none text-foreground sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
          {project.description}
        </p>
        <p className="mt-6 font-mono text-xs font-medium uppercase leading-6 tracking-[0.16em] text-foreground">
          {project.tech.join("  ")}
        </p>
      </div>

      <div className="flex items-start gap-5 lg:justify-end lg:pt-8">
        {project.links.map((link) => (
          <a
            key={`${project.title}-${link.label}`}
            href={link.href}
            target={isExternalLink(link.href) ? "_blank" : undefined}
            rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-muted"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
