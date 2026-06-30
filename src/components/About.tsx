export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-emerald-300">About</p>
          <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-white sm:text-4xl">
            I like building the systems that make products useful.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-zinc-400">
            <p>
              I am a CS student at NUST focused on backend development and AI
              engineering. My recent work has been around APIs, databases, RAG
              pipelines, nutrition data, and LLM-powered workflows that need
              reliable structure around them.
            </p>
            <p>
              I am still early in my degree, so I care about practical projects
              and real constraints: authentication, data quality, retrieval
              accuracy, secure access, and deployable product behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
