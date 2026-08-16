import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EventsExplorer } from "@/components/site/EventsExplorer";
import { FeaturedEvent } from "@/components/site/FeaturedEvent";
import { JoinCTA } from "@/components/site/JoinCTA";
import { Container, Section } from "@/components/site/primitives";

const title = "Events, Workshops & Hackathons | NIET Coding Cadets";
const description =
  "Coding contests, technical workshops, hackathons and seminars hosted by NIET Coding Cadets at NIET Greater Noida. Filter upcoming and past events.";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/events" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            What&apos;s <span className="text-brand-bright">happening?</span>
          </>
        }
        description="Every contest, workshop and hackathon the club runs. Upcoming events are marked live; past events keep their results."
      />
      <FeaturedEvent />
      <Section tone="surface" className="border-y border-border">
        <Container>
          <EventsExplorer />
        </Container>
      </Section>
      <JoinCTA />
    </>
  );
}
