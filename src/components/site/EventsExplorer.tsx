import { useMemo, useState } from "react";
import { events, eventFilters } from "@/data/events";
import { cn } from "@/lib/utils";
import { EventCard } from "./EventCard";
import { Reveal } from "./primitives";

export function EventsExplorer({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof eventFilters)[number]>("All");

  const list = useMemo(() => {
    const filtered =
      filter === "All" ? events : events.filter((e) => e.category === filter);
    const ordered = [...filtered].sort((a, b) =>
      a.status === "completed" && b.status !== "completed" ? 1 : -1,
    );
    return limit ? ordered.slice(0, limit) : ordered;
  }, [filter, limit]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter events by category"
      >
        {eventFilters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
              filter === f
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 rounded-xl border border-dashed border-border p-8 text-center font-mono text-sm text-muted-foreground">
          No events in this category yet. [ADD EVENT in src/data/events.ts]
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((event, i) => (
            <Reveal key={event.slug} delay={(i % 3) * 90}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
