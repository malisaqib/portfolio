import { heroActions, profile } from "@/lib/data";
import { Container } from "@/components/Container";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Hero() {
  return (
    <section id="top" className="pt-14 pb-8 sm:py-20 lg:py-24">
      <Container>
        <div className="divider-reveal border-b border-line pb-10 sm:min-h-[660px] sm:pb-16 lg:min-h-[620px]">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_0.22fr]">
            <div className="reveal">
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">
                  {profile.name}
                </p>
                <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted">
                  Portfolio
                </p>
              </div>

              <h1 className="mt-14 max-w-[350px] break-words font-display text-[4.35rem] font-semibold leading-[0.88] text-foreground sm:mt-16 sm:max-w-5xl sm:text-[7rem] sm:leading-[0.83] lg:text-[9.5rem]">
                Backend-minded
                <span className="block text-muted">AI systems</span>
              </h1>
            </div>

            <div className="reveal reveal-delay-2 flex flex-col justify-end lg:pb-5">
              <p className="max-w-[350px] break-words text-base leading-7 text-muted sm:max-w-md sm:text-lg">
                CS undergraduate at NUST building backend-heavy AI products,
                retrieval pipelines, APIs, and database-backed software.
              </p>
              <div className="mt-7 flex max-w-[350px] flex-wrap gap-x-6 gap-y-3 sm:max-w-md">
                {heroActions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    target={isExternalLink(action.href) ? "_blank" : undefined}
                    rel={
                      isExternalLink(action.href)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="editorial-link font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="reveal reveal-delay-3 mt-14 max-w-[350px] break-words font-mono text-xs uppercase tracking-[0.18em] text-muted sm:mt-20 sm:max-w-3xl sm:tracking-[0.24em]">
            Backend builder | AI systems | RAG pipelines | APIs
            <span className="cursor-mark" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </section>
  );
}
