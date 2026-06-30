import { education, experience } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Experience & education"
          title="Learning through internships, coursework, and shipped projects."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
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
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {education.school}
                </p>
              </div>
              <p className="text-sm text-zinc-500">{education.dates}</p>
            </div>

            <ul className="mt-5 space-y-3">
              {education.bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
