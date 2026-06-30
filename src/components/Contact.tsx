import { socialLinks } from "@/lib/data";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader eyebrow="Get in touch" title="Socials" />

        <div className="mt-10 border-b border-line">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="row-hover divider-reveal grid gap-3 py-6 transition-colors hover:text-muted sm:grid-cols-[0.25fr_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {link.label}
              </span>
              <span className="font-display text-4xl font-semibold leading-none text-foreground">
                {link.value}
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Visit
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
