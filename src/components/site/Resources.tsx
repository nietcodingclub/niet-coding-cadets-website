import {
  Binary,
  Braces,
  BrainCircuit,
  Briefcase,
  Coffee,
  Database,
  GitBranch,
  Globe,
  ShieldCheck,
  Timer,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { resources } from "@/data/resources";
import { isPlaceholder } from "@/data/site";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

const icons: Record<string, LucideIcon> = {
  Binary,
  Coffee,
  Braces,
  Globe,
  Database,
  GitBranch,
  Briefcase,
  Timer,
  BrainCircuit,
  ShieldCheck,
};

export function ResourceTracks({ limit }: { limit?: number }) {
  const list = limit ? resources.slice(0, limit) : resources;
  return (
    <Section id="resources">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title={
            <>
              Level up your <span className="text-brand-bright">skills.</span>
            </>
          }
          description="Curated starting points for every track we run. Club-created notes are linked as they are published."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((track, i) => {
            const Icon = icons[track.icon] ?? Braces;
            return (
              <Reveal key={track.title} delay={(i % 3) * 80}>
                <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide">
                    {track.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {track.blurb}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-hairline pt-4">
                    {track.links.map((link) => {
                      const disabled = isPlaceholder(link.url);
                      return (
                        <li key={link.label}>
                          <a
                            href={disabled ? undefined : link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-disabled={disabled}
                            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-brand-bright aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
                          >
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            {disabled ? `${link.label} [ADD LINK]` : link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
