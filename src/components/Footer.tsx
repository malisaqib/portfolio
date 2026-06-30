import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-zinc-900 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>2026 {profile.name}</p>
        <p>Backend, AI systems, APIs, databases, and RAG pipelines.</p>
      </div>
    </footer>
  );
}
