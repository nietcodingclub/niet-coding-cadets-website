import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, MapPin, Timer, Trophy } from "lucide-react";
import { getEvent, type ClubEvent } from "@/data/events";
import { isPlaceholder } from "@/data/site";
import { Container, Pill, Reveal, Section } from "@/components/site/primitives";
import { JoinCTA } from "@/components/site/JoinCTA";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event unavailable | NIET Coding Cadets" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    const title = `${event.name} | NIET Coding Cadets`;
    return {
      meta: [
        { title },
        { name: "description", content: event.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: event.summary },
        { property: "og:url", content: `/events/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/events/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.name,
            description: event.summary,
            organizer: { "@type": "Organization", name: "NIET Coding Cadets" },
          }),
        },
      ],
    };
  },
  notFoundComponent: EventNotFound,
  component: EventDetail,
});

function EventNotFound() {
  return (
    <Section className="pt-36">
      <Container className="text-center">
        <h1 className="font-display text-4xl font-bold uppercase">Event not found</h1>
        <p className="mt-4 text-muted-foreground">
          That event does not exist, or it has not been added yet.
        </p>
        <Link
          to="/events"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand-foreground"
        >
          All events
        </Link>
      </Container>
    </Section>
  );
}

function InfoList({ event }: { event: ClubEvent }) {
  const rows: [string, string, typeof CalendarDays][] = [
    ["Date", event.displayDate, CalendarDays],
    ["Time", event.time, Clock],
    ["Venue", event.venue, MapPin],
    ["Deadline", event.registrationDeadline, Timer],
  ];
  return (
    <dl className="space-y-3 font-mono text-sm">
      {rows.map(([label, value, Icon]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-4 border-b border-hairline pb-3"
        >
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
            {label}
          </dt>
          <dd className="text-right text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h2 className="font-display text-xl font-bold uppercase tracking-wide">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-4 shrink-0 bg-brand/60" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventDetail() {
  const { event } = Route.useLoaderData();
  const registerDisabled = isPlaceholder(event.registerUrl) || !event.registrationOpen;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-28 pb-14 sm:pt-36">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-brand/12 blur-[120px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brand-bright"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to events
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {event.status === "completed" ? (
                  <Pill>Completed</Pill>
                ) : (
                  <Pill tone="live">{event.status === "live" ? "Live" : "Upcoming"}</Pill>
                )}
                <Pill tone="brand">{event.category}</Pill>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                {event.name}
              </h1>
              {event.subtitle ? (
                <p className="mt-3 font-mono text-sm text-brand-bright">{event.subtitle}</p>
              ) : null}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl border border-border bg-elevated">
                <img
                  src={event.poster}
                  alt={`${event.name} poster`}
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-b border-border">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <ListBlock title="Rounds" items={event.rounds} />
              <ListBlock title="Rules" items={event.rules} />
              <ListBlock title="Eligibility" items={event.eligibility} />
              <ListBlock title="Prizes" items={event.prizes} />

              {event.winners?.length ? (
                <div>
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide">Winners</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {event.winners.map((w) => (
                      <li
                        key={w.position}
                        className="card-lift flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                      >
                        <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-brand-bright" aria-hidden="true" />
                        <span>
                          <span className="block font-display text-sm font-bold uppercase tracking-wide">
                            {w.position}
                          </span>
                          <span className="mt-1 block font-mono text-xs text-muted-foreground">
                            {w.name}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {event.gallery?.length ? (
                <div>
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide">
                    Event gallery
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {event.gallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${event.name} photo ${i + 1}`}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="aspect-4/3 w-full rounded-xl border border-border object-cover"
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="glass-panel rounded-2xl p-6">
                <p className="eyebrow">Event details</p>
                <div className="mt-5">
                  <InfoList event={event} />
                </div>
                <a
                  href={registerDisabled ? undefined : event.registerUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-disabled={registerDisabled}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)] aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
                >
                  {event.registrationOpen ? "Register now" : "Registration closed"}
                </a>
                {event.registrationOpen && isPlaceholder(event.registerUrl) ? (
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    Set registerUrl for this event in src/data/events.ts.
                  </p>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </Section>
      <JoinCTA />
    </>
  );
}
