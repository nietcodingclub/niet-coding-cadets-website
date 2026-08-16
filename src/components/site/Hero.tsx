import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { site } from "@/data/site";
import { Container, Pill } from "./primitives";
import { HeroTerminal } from "./HeroTerminal";

const floaters = [
  { text: "{ }", className: "left-[6%] top-[18%] text-6xl", delay: "0s" },
  { text: "</>", className: "right-[8%] top-[24%] text-5xl", delay: "1.2s" },
  { text: "01", className: "left-[14%] bottom-[18%] text-4xl", delay: "0.6s" },
  { text: "npm run build", className: "right-[14%] bottom-[26%] text-sm", delay: "1.8s" },
  { text: "git commit -m \"ship it\"", className: "left-[38%] top-[10%] text-xs", delay: "2.4s" },
  { text: "console.log()", className: "left-[4%] top-[52%] text-sm", delay: "0.9s" },
];

const stack = ["Java", "Python", "SQL", "React", "Node.js", "Git", "C++", "TypeScript"];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        aria-hidden="true"
      />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {floaters.map((f) => (
          <span
            key={f.text}
            style={{ animationDelay: f.delay }}
            className={`animate-float absolute font-mono text-foreground/[0.07] ${f.className}`}
          >
            {f.text}
          </span>
        ))}
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Pill tone="brand">CSE Technical Club &middot; NIET</Pill>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">Build.</span>
            <span className="block text-foreground">Compete.</span>
            <span className="block text-brand-gradient">Create.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-foreground/90">
            Where curiosity turns into code, ideas turn into innovation, and students become
            creators.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {site.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)]"
            >
              Join the Cadets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-bright"
            >
              Explore Events
            </Link>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore our journey
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 overflow-hidden border-y border-hairline py-3">
            <div className="flex w-max animate-marquee gap-8 pr-8">
              {[...stack, ...stack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <HeroTerminal />
      </Container>
    </section>
  );
}
