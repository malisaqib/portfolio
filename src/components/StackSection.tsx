import { skillGroups } from "@/lib/data";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-emerald-300">Stack</p>
            <h2 className="mt-3 break-words text-3xl font-semibold text-white sm:text-4xl">
              Tools I use to build backend and AI systems.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              My strongest interests are backend logic, databases, retrieval
              systems, and integrating LLMs into useful product flows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
