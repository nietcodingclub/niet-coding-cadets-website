import { ArrowRight, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import { site, socials, isPlaceholder } from "@/data/site";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

const socialCards = [
  { key: "instagram", Icon: Instagram },
  { key: "linkedin", Icon: Linkedin },
  { key: "github", Icon: Github },
  { key: "whatsapp", Icon: MessageCircle },
] as const;

export function JoinCTA() {
  const joinDisabled = isPlaceholder(site.joinUrl);
  const ig = socials.instagram;

  return (
    <Section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[130px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Become a Cadet</p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] sm:text-5xl">
            Your code. Your ideas. <span className="text-brand-bright">Your community.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Don&apos;t just watch from the sidelines. Build something. Compete. Learn. Lead. Become a
            Cadet.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={joinDisabled ? undefined : site.joinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-disabled={joinDisabled}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)] aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
            >
              Join Coding Cadets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={isPlaceholder(ig.url) ? undefined : ig.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-disabled={isPlaceholder(ig.url)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-brand/50 hover:text-brand-bright"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Follow us on Instagram
            </a>
          </div>
          {joinDisabled ? (
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              Registration link is a placeholder &mdash; set{" "}
              <span className="text-brand-bright">joinUrl</span> in src/data/site.ts.
            </p>
          ) : null}
        </Reveal>
      </Container>
    </Section>
  );
}

export function SocialsGrid() {
  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="Socials"
          align="center"
          title={
            <>
              Follow the <span className="text-brand-bright">journey.</span>
            </>
          }
          description="Announcements, event drops, results and behind-the-scenes."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialCards.map(({ key, Icon }, i) => {
            const s = socials[key];
            const disabled = isPlaceholder(s.url);
            return (
              <Reveal key={key} delay={i * 80}>
                <a
                  href={disabled ? undefined : s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-disabled={disabled}
                  className="card-lift group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 aria-disabled:cursor-not-allowed"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-lg font-bold">{s.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.handle}</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
