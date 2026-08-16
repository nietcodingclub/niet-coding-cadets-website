import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { Pill } from "./primitives";

export function EventCard({ event }: { event: ClubEvent }) {
  const completed = event.status === "completed";
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-16/10 overflow-hidden bg-elevated">
        <img
          src={event.poster}
          alt={`${event.name} poster`}
          loading="lazy"
          width={1200}
          height={750}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {completed ? (
            <Pill>Completed</Pill>
          ) : (
            <Pill tone="live">{event.status === "live" ? "Live" : "Upcoming"}</Pill>
          )}
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-foreground backdrop-blur">
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide">{event.name}</h3>
        {event.subtitle ? (
          <p className="mt-1 font-mono text-xs text-brand-bright">{event.subtitle}</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{event.summary}</p>

        <dl className="mt-5 space-y-1.5 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <dt className="sr-only">Date</dt>
            <dd>{event.displayDate}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <dt className="sr-only">Time</dt>
            <dd>{event.time}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <dt className="sr-only">Venue</dt>
            <dd>{event.venue}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-3">
          <Link
            to="/events/$slug"
            params={{ slug: event.slug }}
            className="group/link inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-brand/50 hover:text-brand-bright"
          >
            Details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5" />
          </Link>
          {event.registrationOpen ? (
            <Link
              to="/events/$slug"
              params={{ slug: event.slug }}
              className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-foreground transition-colors hover:bg-brand-bright"
            >
              Register
            </Link>
          ) : (
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              Registration closed
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
