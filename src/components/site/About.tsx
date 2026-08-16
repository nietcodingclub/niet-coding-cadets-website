import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { journey } from "@/data/site";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

const offers = [
  "Coding competitions",
  "Technical workshops",
  "Hackathons",
  "Problem-solving activities",
  "Peer learning",
  "Project showcases",
  "Technical discussions",
  "Career-oriented activities",
];

export function About() {
  return (
    <Section id="journey">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Discover"
              title={
                <>
                  More than a <span className="text-brand-bright">coding club.</span>
                </>
              }
              description="NIET Coding Cadets is the technical club of the Computer Science & Engineering Department at NIET. We bring together students who want to learn, build, compete and explore the world of technology."
            />
            <Reveal delay={120} className="mt-8">
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {offers.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 font-mono text-brand" aria-hidden="true">
                      &#47;&#47;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-bright"
              >
                Read the full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <ol className="relative space-y-4">
            <span
              className="absolute left-[1.35rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand/70 via-border to-transparent"
              aria-hidden="true"
            />
            {journey.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 100} className="relative">
                <div className="card-lift flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-brand/35 bg-brand/10 font-mono text-sm font-bold text-brand-bright">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {item.step}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
