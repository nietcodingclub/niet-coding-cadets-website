import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, ScrollText } from "lucide-react";
import { useEffect, useState } from "react";
import { featuredEvent } from "@/data/events";
import { Container, Pill, Reveal, Section } from "./primitives";

function useCountdown(iso: string) {
  const valid = !Number.isNaN(Date.parse(iso));
  const [left, setLeft] = useState(() =>
    valid ? Date.parse(iso) - Date.now() : 0,
  );

  useEffect(() => {
    if (!valid) return;
    const id = setInterval(() => setLeft(Date.parse(iso) - Date.now()), 1000);
    return () => clearInterval(id);
  }, [iso, valid]);

  if (!valid || left <= 0) return null;
  const s = Math.floor(left / 1000);
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Mins: Math.floor((s % 3600) / 60),
    Secs: s % 60,
  };
}

export function FeaturedEvent() {
  const event = featuredEvent;
  const countdown = useCountdown(event.date);

  return (
    <Section className="overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <div
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-[120px]"
              aria-hidden="true"
            />
            <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
              <div>
                <Pill tone="brand">Featured Event</Pill>
                <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
                  {event.name}
                </h2>
                <p className="mt-3 font-mono text-sm text-brand-bright">{event.subtitle}</p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                {event.rounds?.length ? (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {event.rounds.map((round) => (
                      <li
                        key={round}
                        className="rounded-full border border-border bg-elevated px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground"
                      >
                        {round}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-5 text-xs uppercase tracking-wider text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-brand" aria-hidden="true" /> Prizes
                  </li>
                  <li className="flex items-center gap-2">
                    <ScrollText className="h-4 w-4 text-brand" aria-hidden="true" /> Certificates
                  </li>
                </ul>

                <Link
                  to="/events/$slug"
                  params={{ slug: event.slug }}
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)]"
                >
                  Event details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="self-center">
                <div className="glass-panel rounded-2xl p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {countdown ? "Starts in" : "Schedule"}
                  </p>
                  {countdown ? (
                    <dl className="mt-4 grid grid-cols-4 gap-2 text-center">
                      {Object.entries(countdown).map(([label, value]) => (
                        <div key={label} className="rounded-lg border border-hairline bg-elevated py-3">
                          <dd className="font-display text-2xl font-bold text-brand-bright">
                            {String(value).padStart(2, "0")}
                          </dd>
                          <dt className="mt-1 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">
                            {label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <dl className="mt-4 space-y-3 font-mono text-sm">
                      {[
                        ["Date", event.displayDate],
                        ["Time", event.time],
                        ["Venue", event.venue],
                        ["Deadline", event.registrationDeadline],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between gap-4 border-b border-hairline pb-2">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="text-right text-foreground">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                    A countdown appears automatically once a confirmed ISO date is set in
                    <span className="font-mono text-brand-bright"> src/data/events.ts</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
