import { profile } from "@/lib/data";
import { Container } from "@/components/Container";

const contactLinks = [
  { label: "Email Me", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-emerald-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Want to build something backend or AI related?
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                I&apos;m open to backend development, AI engineering, and software
                engineering internships.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternalLink(link.href) ? "_blank" : undefined}
                  rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
                  className="rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
