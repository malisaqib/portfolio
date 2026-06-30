import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader eyebrow="About" title="Overview" />

        <div className="divider-reveal mt-8 grid gap-8 pt-8 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-xs font-medium uppercase leading-6 tracking-[0.2em] text-muted">
            Backend systems, retrieval, databases, and production workflows.
          </p>
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted">
            <p>
              I&apos;m a CS undergraduate at NUST who enjoys building the
              systems behind products: APIs, databases, retrieval pipelines,
              authentication, structured LLM outputs, and production workflows.
            </p>
            <p>
              Recently, I built Zorfit, an AI fitness coaching PWA with
              RAG-based food parsing, Supabase/PostgreSQL, pgvector, and LLM
              APIs. Right now, I&apos;m looking for backend or AI engineering
              internship opportunities where I can learn from real systems and
              contribute seriously.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
