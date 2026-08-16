import { useEffect, useState } from "react";

const lines: { cmd: string; out: string }[] = [
  { cmd: "$ whoami", out: "coding_cadet" },
  { cmd: "$ passion", out: "technology" },
  { cmd: "$ mission", out: "build \u2022 learn \u2022 compete" },
  { cmd: "$ status", out: "READY TO CODE_" },
];

export function HeroTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length * 2) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 620);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="animate-float relative mx-auto w-full max-w-md lg:mx-0">
      <div
        className="absolute -inset-6 rounded-3xl bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="glass-panel relative rounded-2xl">
        <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
          <span className="ml-2 font-mono text-[0.7rem] tracking-widest text-muted-foreground">
            cadets@niet: ~
          </span>
        </div>
        <div className="space-y-2.5 p-5 font-mono text-sm leading-relaxed">
          {lines.map((line, i) => {
            const showCmd = visible > i * 2;
            const showOut = visible > i * 2 + 1;
            return (
              <div key={line.cmd} className={showCmd ? "opacity-100" : "opacity-0"}>
                <p className="text-muted-foreground transition-opacity">{line.cmd}</p>
                <p
                  className={`pl-3 font-semibold text-brand-bright transition-opacity duration-300 ${
                    showOut ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {line.out}
                  {i === lines.length - 1 && showOut ? (
                    <span className="animate-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-brand-bright" />
                  ) : null}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
