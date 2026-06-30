import { focusAreas, heroActions, profile } from "@/lib/data";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col justify-start px-4 py-16 sm:min-h-[calc(88vh-73px)] sm:justify-center sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl">
        <p className="mb-5 text-sm font-medium text-emerald-300">
          {profile.location}
        </p>
        <h1 className="max-w-4xl break-words text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-medium leading-tight text-zinc-200 sm:text-4xl">
          {profile.tagline}
        </p>
        <p className="mt-7 max-w-3xl break-words text-base leading-8 text-zinc-400 sm:text-lg">
          {profile.hero}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {heroActions.map((action, index) => (
            <a
              key={action.href}
              href={action.href}
              target={isExternalLink(action.href) ? "_blank" : undefined}
              rel={isExternalLink(action.href) ? "noopener noreferrer" : undefined}
              className={
                index === 0
                  ? "rounded-md bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-200"
                  : "rounded-md border border-zinc-800 bg-zinc-950/70 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-emerald-300/50 hover:bg-zinc-900 hover:text-white"
              }
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => (
          <div key={area} className="flex items-start gap-3">
            <span className="mt-2 size-2 shrink-0 rounded-sm bg-emerald-300" />
            <p className="text-sm leading-6 text-zinc-300">{area}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
