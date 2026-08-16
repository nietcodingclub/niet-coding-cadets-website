import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyJoin } from "@/components/site/WhyJoin";
import { Stats } from "@/components/site/Stats";
import { JoinCTA } from "@/components/site/JoinCTA";
import { Container, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { site } from "@/data/site";

const title = "About the Club | NIET Coding Cadets";
const description =
  "Learn how NIET Coding Cadets, the CSE technical club at NIET Greater Noida, helps students learn, build, compete and grow together.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const story = [
  {
    h: "Who we are",
    p: `${site.name} is the technical club of the ${site.department} department at ${site.institution}. Membership is open to every student who wants to get better at building software.`,
  },
  {
    h: "How we work",
    p: "Sessions are hands-on and peer-led. Seniors mentor juniors, teams form around real problems, and every event ends with something built, solved or shipped.",
  },
  {
    h: "Why it matters",
    p: "Classroom credit is one thing. A portfolio, a contest ranking and a network of people who build with you is another. That is what the club is here to create.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            More than a <span className="text-brand-bright">coding club.</span>
          </>
        }
        description={site.description}
      />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The story"
            title={
              <>
                Learn. Build. <span className="text-brand-bright">Belong.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {story.map((block, i) => (
              <Reveal key={block.h} delay={i * 90}>
                <article className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                    {block.h}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.p}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Stats />
      <About />
      <WhyJoin />
      <JoinCTA />
    </>
  );
}
