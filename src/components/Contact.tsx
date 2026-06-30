import { profile } from "@/lib/data";

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="border-y border-zinc-800 py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-emerald-300">Contact</p>
              <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Want to talk about backend, AI, or a project?
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                The fastest way to reach me is email. I am also active on
                GitHub and LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternalLink(link.href) ? "_blank" : undefined}
                  rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
                  className="rounded-md border border-zinc-800 bg-zinc-950/70 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-emerald-300/50 hover:bg-zinc-900 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
