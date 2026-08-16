import { useMemo, useState } from "react";
import { ArrowRight, Lightbulb, RefreshCw, Terminal as TerminalIcon } from "lucide-react";
import { challenges, dailyChallenge, type Difficulty } from "@/data/challenges";
import { resources, skillInterests } from "@/data/resources";
import { techPoll } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container, Pill, Reveal, Section, SectionHeading } from "./primitives";

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

export function CodingChallenge() {
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");
  const [nonce, setNonce] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const challenge = useMemo(() => {
    const pool = challenges.filter((c) => c.difficulty === difficulty);
    if (nonce === 0) return dailyChallenge(difficulty);
    return pool[nonce % pool.length];
  }, [difficulty, nonce]);

  return (
    <Section id="challenge">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Daily Challenge"
            title={
              <>
                Ready to test your <span className="text-brand-bright">skills?</span>
              </>
            }
            description="A fresh problem every day, straight from our practice sets. Pick a difficulty and start thinking."
          />

          <Reveal>
            <div className="glass-panel rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-6 py-4">
                <div className="flex gap-2">
                  {difficulties.map((d) => (
                    <button
                      key={d}
                      type="button"
                      aria-pressed={difficulty === d}
                      onClick={() => {
                        setDifficulty(d);
                        setShowHint(false);
                      }}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest transition-colors",
                        difficulty === d
                          ? "border-brand bg-brand/15 text-brand-bright"
                          : "border-border text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setNonce((n) => n + 1);
                    setShowHint(false);
                  }}
                  className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground transition-colors hover:text-brand-bright"
                >
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Shuffle
                </button>
              </div>

              <div className="p-6" aria-live="polite">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-bright">
                  Challenge #{String(challenge.id).padStart(3, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight">
                  {challenge.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {challenge.prompt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill tone="brand">{challenge.difficulty}</Pill>
                  <Pill>{challenge.topic}</Pill>
                </div>

                {showHint ? (
                  <p className="mt-5 flex gap-2.5 rounded-xl border border-hairline bg-elevated p-4 text-sm text-muted-foreground">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" aria-hidden="true" />
                    {challenge.hint}
                  </p>
                ) : null}

                <button
                  type="button"
                  onClick={() => setShowHint((v) => !v)}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)]"
                >
                  {showHint ? "Hide hint" : "Try challenge"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function SkillExplorer() {
  const [interest, setInterest] = useState<(typeof skillInterests)[number]>("Web Development");
  const matches = resources.filter((r) => r.interests.includes(interest));

  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <SectionHeading
          eyebrow="Skill Explorer"
          title={
            <>
              Tell us what you want to <span className="text-brand-bright">learn.</span>
            </>
          }
          description="Pick an interest and we will point you at the club tracks and practice resources for it."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {skillInterests.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={interest === s}
              onClick={() => setInterest(s)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                interest === s
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3" aria-live="polite">
          {matches.map((track, i) => (
            <Reveal key={track.title} delay={i * 80}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{track.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function TechPoll() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <div className="glass-panel h-full rounded-2xl p-6">
      <p className="eyebrow">Tech Poll</p>
      <h3 className="mt-3 font-display text-xl font-bold">{techPoll.question}</h3>
      <ul className="mt-5 space-y-2.5">
        {techPoll.options.map((option) => (
          <li key={option}>
            <button
              type="button"
              aria-pressed={choice === option}
              onClick={() => setChoice(option)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                choice === option
                  ? "border-brand bg-brand/12 text-brand-bright"
                  : "border-border bg-elevated text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              {option}
              <span className="font-mono text-[0.65rem] uppercase tracking-widest">
                {choice === option ? "Voted" : "Vote"}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs text-muted-foreground" aria-live="polite">
        {choice
          ? `Noted: ${choice}. Bring it up at the next session.`
          : "Votes are stored locally in this browser only."}
      </p>
    </div>
  );
}

const commandResponses: Record<string, string[]> = {
  help: ["available: about, events, team, join, clear"],
  about: [
    "NIET Coding Cadets \u2014 CSE technical club, NIET Greater Noida.",
    "we learn, build, compete and ship together.",
  ],
  events: ["Algo Arena \u2022 DSA Bootcamp \u2022 Code Jam \u2022 Tech Talks", "see /events for details."],
  team: ["president, vice president, technical, event, design, social heads + core team.", "see /team"],
  join: ["run: open /join \u2014 or hit the Join the Cadets button.", "everyone is welcome."],
};

export function InteractiveTerminal() {
  const [history, setHistory] = useState<{ input: string; output: string[] }[]>([
    { input: "help", output: commandResponses.help },
  ]);
  const [value, setValue] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      setValue("");
      return;
    }
    const output = commandResponses[cmd] ?? [
      `command not found: ${cmd}`,
      "type 'help' for available commands.",
    ];
    setHistory((h) => [...h.slice(-6), { input: cmd, output }]);
    setValue("");
  };

  return (
    <div className="glass-panel h-full rounded-2xl p-6">
      <p className="eyebrow flex items-center gap-2">
        <TerminalIcon className="h-3.5 w-3.5" aria-hidden="true" /> Try the terminal
      </p>
      <div className="mt-4 space-y-2 font-mono text-sm" aria-live="polite">
        {history.map((entry, i) => (
          <div key={i}>
            <p className="text-muted-foreground">
              <span className="text-brand-bright">cadet@niet:~$</span> {entry.input}
            </p>
            {entry.output.map((line) => (
              <p key={line} className="pl-4 text-foreground/85">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
      <form onSubmit={submit} className="mt-4 flex items-center gap-2 border-t border-hairline pt-4">
        <label htmlFor="cadet-terminal" className="font-mono text-sm text-brand-bright">
          $
        </label>
        <input
          id="cadet-terminal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type help"
          autoComplete="off"
          spellCheck={false}
          className="w-full bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
        />
      </form>
    </div>
  );
}

export function EngagementDeck() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Participate"
          title={
            <>
              Not a brochure. A <span className="text-brand-bright">playground.</span>
            </>
          }
          description="Small things to poke at while you decide whether this is your kind of club."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <InteractiveTerminal />
          </Reveal>
          <Reveal delay={110}>
            <TechPoll />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
