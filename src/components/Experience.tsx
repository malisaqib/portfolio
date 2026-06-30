import { timelineItems } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <section className="py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Learning through shipped projects and internships"
        />

        <div className="mt-10">
          {timelineItems.map((item) => (
            <article
              key={item.title}
              className="row-hover divider-reveal grid gap-4 py-8 lg:grid-cols-[0.35fr_0.2fr_0.45fr]"
            >
              <div>
                <h3 className="font-display text-4xl font-semibold leading-none text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-muted">{item.meta}</p>
              </div>
              <p className="font-mono text-xs font-medium uppercase leading-6 tracking-[0.18em] text-muted">
                {item.dates}
              </p>
              <p className="max-w-2xl text-base leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
