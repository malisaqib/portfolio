import { profile } from "@/lib/data";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="pb-10">
      <Container className="border-t border-white/10 pt-8">
        <div className="flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>2026 {profile.name}</p>
          <p>Backend, AI systems, APIs, databases, and RAG pipelines.</p>
        </div>
      </Container>
    </footer>
  );
}
