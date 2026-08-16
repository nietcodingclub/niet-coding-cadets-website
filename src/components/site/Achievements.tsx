import { Trophy, ExternalLink } from "lucide-react";
import { achievements, timeline } from "@/data/achievements";
import { cn } from "@/lib/utils";
import { Container, Pill, Reveal, Section, SectionHeading } from "./primitives";
import { isPlaceholder } from "@/data/site";

export function AchievementsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="achievements">
      <Container>
        {heading ? (
          <SectionHeading
            eyebrow="Believe"
            title={
              <>
                Built to <span className="text-brand-bright">achieve.</span>
              </>
            }
            description="Results from cadets competing beyond the classroom. Every entry here is verified, placeholders stay until it is."
          />
        ) : null}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal
              key={`${a.title}-${i}`}
              delay={i * 90}
              className={cn(a.highlight && "lg:col-span-2")}
            >
              <article
                className={cn(
                  "card-lift relative h-full overflow-hidden rounded-2xl border p-7",
                  a.highlight
                    ? "border-brand/40 bg-card shadow-[var(--glow-brand)]"
                    : "border-border bg-card",
                )}
              >
                {a.highlight ? (
                  <div
                    className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand/20 blur-[90px]"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright">
                    <Trophy className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <Pill>{a.year}</Pill>
                </div>
                <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {a.category}
                </p>
                <h3
                  className={cn(
                    "relative mt-2 font-display font-bold uppercase leading-tight",
                    a.highlight ? "text-3xl sm:text-4xl" : "text-2xl",
                  )}
                >
                  {a.title}
                </h3>
                <p className="relative mt-3 text-lg font-semibold text-brand-bright">{a.result}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
                <p className="relative mt-5 border-t border-hairline pt-4 font-mono text-xs text-muted-foreground">
                  Team: {a.members}
                </p>
                {a.link && !isPlaceholder(a.link) ? (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-bright"
                  >
                    Proof <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function AchievementTimeline() {
  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="Timeline"
          title={
            <>
              The road so <span className="text-brand-bright">far.</span>
            </>
          }
          description="A year-by-year log of what the community has done. Unconfirmed milestones remain marked."
        />
        <ol className="relative mt-14 space-y-8 border-l border-border pl-6 sm:pl-10">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={entry.year} delay={i * 110} className="relative">
              <span
                className="absolute -left-[1.65rem] top-2 h-3 w-3 rounded-full border-2 border-brand bg-background sm:-left-[2.9rem]"
                aria-hidden="true"
              />
              <div className="card-lift rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-3xl font-bold text-brand-bright">{entry.year}</p>
                <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-wide">
                  {entry.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-4 shrink-0 bg-brand/60" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
