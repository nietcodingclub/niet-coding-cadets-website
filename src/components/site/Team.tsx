import { Github, Linkedin, RotateCcw } from "lucide-react";
import { useState } from "react";
import { team, spotlights } from "@/data/team";
import { isPlaceholder } from "@/data/site";
import { Container, Pill, Reveal, Section, SectionHeading } from "./primitives";

/** Filter out any member whose name is still a placeholder. */
const visibleTeam = team.filter((m) => !m.name.startsWith("[ADD"));

/**
 * Show spotlight section with real-named members.
 * Placeholder achievement / story is rendered as "Coming soon" so the section
 * is visible and not blank — but never shows template instructional text.
 */
const visibleSpotlights = spotlights.filter((s) => !s.name.startsWith("[ADD"));


/** The featured leadership card — the member marked lead:true in team.ts */
const leader = visibleTeam.find((m) => m.lead) ?? visibleTeam[0];

function SocialLink({
  url,
  label,
  Icon,
}: {
  url?: string | undefined;
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
      onClick={(e) => e.stopPropagation()}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

/** Flippable team member card — click to reveal bio + socials on the back. */
function MemberCard({
  member,
  delay,
}: {
  member: (typeof visibleTeam)[0];
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="group h-full cursor-pointer"
        style={{ perspective: "900px" }}
        onClick={() => setFlipped((v) => !v)}
        role="button"
        aria-label={`${member.name} — click to ${flipped ? "see photo" : "see bio"}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setFlipped((v) => !v);
        }}
      >
        <div
          className="relative h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── FRONT ── */}
          <article
            className="h-full overflow-hidden rounded-2xl border border-border bg-card"
            style={{ backfaceVisibility: "hidden" }}
          >
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
              {/* flip hint */}
              <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-card/70 text-muted-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-bold">{member.name}</h3>
              {member.former && (
                <span className="mt-1 inline-block rounded-full border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  Alumni
                </span>
              )}
              <p className="mt-2 text-xs text-muted-foreground">Tap to read bio →</p>
            </div>
          </article>

          {/* ── BACK ── */}
          <article
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-brand/30 bg-card p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-bright">
                {member.role}
              </p>
              <h3 className="mt-2 font-display text-base font-bold">{member.name}</h3>
              {member.former && (
                <span className="mt-1 inline-block rounded-full border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  Alumni
                </span>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              <SocialLink
                url={member.linkedin}
                label={`LinkedIn: ${member.name}`}
                Icon={Linkedin}
              />
              <SocialLink
                url={member.github}
                label={`GitHub: ${member.name}`}
                Icon={Github}
              />
            </div>
            <p className="mt-3 text-[0.65rem] text-muted-foreground/50">
              Tap again to flip back
            </p>
          </article>
        </div>
      </div>
    </Reveal>
  );
}

export function LeadershipFeature() {
  if (!leader) return null;

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
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.role}`}
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
                <p className="mt-6 font-display text-2xl font-bold">{leader.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-bright">
                  {leader.role}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {leader.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  <SocialLink
                    url={leader.linkedin}
                    label="LinkedIn profile"
                    Icon={Linkedin}
                  />
                  <SocialLink
                    url={leader.github}
                    label="GitHub profile"
                    Icon={Github}
                  />
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
              Meet the people behind the{" "}
              <span className="text-brand-bright">code.</span>
            </>
          }
          description="The team running events, sessions and everything in between."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTeam.map((member, i) => (
            <MemberCard
              key={`${member.name}-${member.role}`}
              member={member}
              delay={(i % 4) * 80}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Flip card for the Cadets in Action section — large photo front, bio back. */
function SpotlightCard({
  s,
  delay,
}: {
  s: (typeof visibleSpotlights)[0];
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        style={{ perspective: "1000px" }}
        className="cursor-pointer"
        onClick={() => setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label={`${s.name} — click to ${flipped ? "see photo" : "read bio"}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setFlipped((v) => !v);
        }}
      >
        <div
          className="relative transition-all duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── FRONT: large photo with gradient overlay ── */}
          <article
            className="relative overflow-hidden rounded-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={s.photo}
              alt={`${s.name}, ${s.achievement}`}
              loading="lazy"
              width={600}
              height={750}
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* gradient overlay bottom-to-top */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Name + role at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="inline-block rounded-full border border-brand/40 bg-brand/15 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-brand-bright backdrop-blur-sm">
                {s.achievement}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white drop-shadow-lg">
                {s.name}
              </h3>
            </div>

            {/* Flip hint icon — top right */}
            <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white/70 backdrop-blur-sm transition-opacity">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </article>

          {/* ── BACK: bio + socials ── */}
          <article
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-brand/30 bg-card p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <span className="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-brand-bright">
                {s.achievement}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.story}</p>
            </div>
            <div>
              <div className="mt-5 flex gap-2 border-t border-hairline pt-4">
                <SocialLink url={s.linkedin} label={`LinkedIn: ${s.name}`} Icon={Linkedin} />
                <SocialLink url={s.github} label={`GitHub: ${s.name}`} Icon={Github} />
              </div>
              <p className="mt-2 text-[0.65rem] text-muted-foreground/50">Tap again to flip back</p>
            </div>
          </article>
        </div>
      </div>
    </Reveal>
  );
}

export function StudentSpotlight() {
  if (visibleSpotlights.length === 0) return null;

  return (
    <Section id="spotlight">
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
        {/* 2 cols on mobile, 3 on lg — 5 cards land as 3+2 */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSpotlights.map((s, i) => (
            <SpotlightCard key={`${s.name}-${i}`} s={s} delay={i * 80} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
