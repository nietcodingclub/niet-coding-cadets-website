import { Github, Linkedin } from "lucide-react";
import { team, leadership, spotlights } from "@/data/team";
import { isPlaceholder } from "@/data/site";
import { Container, Pill, Reveal, Section, SectionHeading } from "./primitives";

function SocialLink({
  url,
  label,
  Icon,
}: {
  url?: string;
  label: string;
  Icon: typeof Github;
}) {
  if (!url) return null;
  const disabled = isPlaceholder(url);
  return (
    <a
      href={disabled ? undefined : url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      aria-disabled={disabled}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-elevated text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand-bright aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function LeadershipFeature() {
  return (
    <Section id="team">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <div
              className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-brand/15 blur-[110px]"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-[0.8fr_1.2fr] lg:p-12">
              <div className="overflow-hidden rounded-2xl border border-hairline bg-elevated">
                <img
                  src={leadership.photo}
                  alt={`${leadership.name}, ${leadership.role}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <div className="self-center">
                <Pill tone="brand">Leadership</Pill>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  The people who keep the community moving.
                </h2>
                <p className="mt-6 font-display text-2xl font-bold">{leadership.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-bright">
                  {leadership.role}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {leadership.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  <SocialLink url={leadership.linkedin} label="LinkedIn profile" Icon={Linkedin} />
                  <SocialLink url={leadership.github} label="GitHub profile" Icon={Github} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function TeamGrid() {
  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="Connect"
          title={
            <>
              Meet the people behind the <span className="text-brand-bright">code.</span>
            </>
          }
          description="The team running events, sessions and everything in between. Update the roster in src/data/team.ts."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={`${member.role}-${i}`} delay={(i % 4) * 80}>
              <article className="card-lift group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative overflow-hidden bg-elevated">
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-4/5 w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card to-transparent p-4 pt-10 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-bright">
                    {member.role}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold">{member.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex gap-2">
                    <SocialLink url={member.linkedin} label={`LinkedIn: ${member.role}`} Icon={Linkedin} />
                    <SocialLink url={member.github} label={`GitHub: ${member.role}`} Icon={Github} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function StudentSpotlight() {
  return (
    <Section id="team">
      <Container>
        <SectionHeading
          eyebrow="Spotlight"
          title={
            <>
              Cadets in <span className="text-brand-bright">action.</span>
            </>
          }
          description="Students who put the work in and have something to show for it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {spotlights.map((s, i) => (
            <Reveal key={`${s.name}-${i}`} delay={i * 90}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={s.photo}
                    alt={s.name}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="h-14 w-14 rounded-full border border-hairline object-cover"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold">{s.name}</h3>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-brand-bright">
                      {s.achievement}
                    </p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.story}</p>
                <div className="mt-5 flex gap-2">
                  <SocialLink url={s.linkedin} label={`LinkedIn: ${s.name}`} Icon={Linkedin} />
                  <SocialLink url={s.github} label={`GitHub: ${s.name}`} Icon={Github} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
