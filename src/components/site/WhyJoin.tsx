import {
  BookOpen,
  Hammer,
  Trophy,
  Users,
  Flag,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { whyJoin } from "@/data/site";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Hammer,
  Trophy,
  Users,
  Flag,
  TrendingUp,
};

export function WhyJoin() {
  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          align="center"
          title={
            <>
              Why become a <span className="text-brand-bright">cadet?</span>
            </>
          }
          description="Six reasons students stay long after their first session."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyJoin.map((item, i) => {
            const Icon = icons[item.icon] ?? BookOpen;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                  <span
                    className="absolute right-5 top-5 font-mono text-xs text-muted-foreground/40"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <span
                    className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand to-transparent transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
