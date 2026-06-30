import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="I like building things that work behind the scenes."
        />
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
          <p>
            I&apos;m a CS undergraduate at NUST who enjoys building APIs,
            databases, retrieval pipelines, and AI workflows. Recently, I built
            Zorfit, an AI fitness coaching PWA with RAG-based food parsing,
            nutrition grounding, Supabase/PostgreSQL, pgvector, and LLM APIs.
          </p>
          <p>
            Right now, I&apos;m looking for backend or AI engineering internship
            opportunities where I can learn from real systems, contribute
            seriously, and keep improving by working on production-level
            problems.
          </p>
        </div>
      </Container>
    </section>
  );
}
