import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { WhyJoin } from "@/components/site/WhyJoin";
import { FeaturedEvent } from "@/components/site/FeaturedEvent";
import { EventsExplorer } from "@/components/site/EventsExplorer";
import { AchievementsGrid, AchievementTimeline } from "@/components/site/Achievements";
import { LeadershipFeature, StudentSpotlight } from "@/components/site/Team";
import { InstagramStrip } from "@/components/site/Gallery";
import { CodingChallenge, EngagementDeck, SkillExplorer } from "@/components/site/Engagement";
import { JoinCTA } from "@/components/site/JoinCTA";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const title = "NIET Coding Cadets | CSE Technical Club";
const description =
  "NIET Coding Cadets is the official technical club of the CSE Department at NIET, Greater Noida. Explore coding events, workshops, hackathons, achievements and student opportunities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyJoin />
      <FeaturedEvent />
      <Section tone="surface" className="border-y border-border">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Participate"
              title={
                <>
                  What&apos;s <span className="text-brand-bright">happening?</span>
                </>
              }
              description="Contests, workshops and hackathons run through the semester. Filter by what you care about."
            />
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-bright"
            >
              All events
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <EventsExplorer limit={3} />
          </div>
        </Container>
      </Section>
      <AchievementsGrid />
      <AchievementTimeline />
      <LeadershipFeature />
      <StudentSpotlight />
      <CodingChallenge />
      <SkillExplorer />
      <EngagementDeck />
      <InstagramStrip />
      <JoinCTA />
    </>
  );
}
