import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium text-emerald-300">
              Experience & education
            </p>
            <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Learning through internships, coursework, and practical builds.
            </h2>
          </div>

          <div className="grid gap-4">
            <article className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {experience.company}, {experience.location}
                  </p>
                </div>
                <p className="text-sm text-zinc-500">{experience.dates}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {experience.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {education.degree}
                  </p>
                </div>
                <p className="text-sm text-zinc-500">{education.dates}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
