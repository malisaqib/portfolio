import { focusAreas, heroActions, profile } from "@/lib/data";
import { Container } from "@/components/Container";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Hero() {
  return (
    <section id="top" className="py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div className="min-w-0">
            <p className="mb-5 text-sm font-medium text-emerald-300">
              {profile.location}
            </p>
            <h1 className="max-w-[11ch] break-words text-4xl font-semibold leading-tight text-white sm:max-w-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {profile.tagline}
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 break-words text-base leading-8 text-zinc-400 sm:text-lg">
              <p>{profile.heroIntro}</p>
              <p>{profile.heroDetail}</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {heroActions.map((action, index) => (
                <a
                  key={action.href}
                  href={action.href}
                  target={isExternalLink(action.href) ? "_blank" : undefined}
                  rel={
                    isExternalLink(action.href)
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    index === 0
                      ? "rounded-xl bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-200"
                      : "rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20">
            <p className="text-sm font-medium text-zinc-300">Systems focus</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="max-w-full break-words rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-zinc-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm leading-6 text-zinc-400">
                Building toward internship-ready backend and AI engineering
                work through practical shipped projects.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
