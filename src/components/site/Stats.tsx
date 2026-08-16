import { stats } from "@/data/site";
import { Container, Counter, Reveal, Section } from "./primitives";

export function Stats() {
  return (
    <Section tone="surface" className="border-y border-border py-14 sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="relative pl-5">
              <span
                className="absolute left-0 top-1 h-10 w-px bg-brand"
                aria-hidden="true"
              />
              <dd className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <Counter target={stat.target} suffix={stat.suffix} fallback={stat.value} />
              </dd>
              <dt className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground/90">
                {stat.label}
              </dt>
              {stat.note ? (
                <p className="mt-1 font-mono text-xs text-muted-foreground">{stat.note}</p>
              ) : null}
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
