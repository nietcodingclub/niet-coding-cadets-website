import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import logo from "@/assets/cadets-logo.png";
import { site, socials, isPlaceholder } from "@/data/site";
import { Container } from "./primitives";

type FooterNavItem = {
  to: "/" | "/about" | "/events";
  label: string;
  hash?: string;
};

const footerNav: FooterNavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/", hash: "achievements", label: "Achievements" },
  { to: "/", hash: "team", label: "Team" },
  { to: "/", hash: "gallery", label: "Gallery" },
  { to: "/", hash: "resources", label: "Resources" },
  { to: "/", hash: "join", label: "Join Us" },
];

const socialIcons = [
  { key: "instagram", Icon: Instagram },
  { key: "linkedin", Icon: Linkedin },
  { key: "github", Icon: Github },
  { key: "whatsapp", Icon: MessageCircle },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" loading="lazy" width={40} height={40} className="h-10 w-10" />
              <span className="font-display text-lg font-bold uppercase tracking-[0.12em]">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Official CSE Technical Club
              <br />
              {site.institution}
              <br />
              {site.location}
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.14em] text-brand-bright">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    key={`${item.to}-${item.hash ?? ""}`}
                    to={item.to}
                    hash={item.hash}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socialIcons.map(({ key, Icon }) => {
                const s = socials[key];
                const disabled = isPlaceholder(s.url);
                return (
                  <li key={key}>
                    <a
                      href={disabled ? undefined : s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-disabled={disabled}
                      className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-brand-bright aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {disabled ? s.label : s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
          <p className="font-mono">
            <span className="text-brand-bright">const</span> future = await build();
          </p>
        </div>
      </Container>
    </footer>
  );
}
