import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/cadets-logo.png";
import nietLogo from "@/assets/niet-logo.png";
import { site, isPlaceholder } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";

type NavItem = {
  to: "/" | "/about" | "/events";
  label: string;
  hash?: string;
  /** When true, this item never gets the active capsule (scroll anchors). */
  noActive?: boolean;
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/", hash: "achievements", label: "Achievements", noActive: true },
  { to: "/", hash: "team", label: "Team", noActive: true },
  { to: "/", hash: "gallery", label: "Gallery", noActive: true },
  { to: "/", hash: "resources", label: "Resources", noActive: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <div className="flex items-center gap-2">
            <img
              src={nietLogo}
              alt="NIET"
              width={52}
              height={32}
              className="h-7 w-auto object-contain"
            />

            <div className="h-7 w-px bg-border" aria-hidden="true" />

            <img
              src={logo}
              alt="NIET Coding Cadets"
              width={48}
              height={40}
              className="h-9 w-12 rounded-md object-cover"
              loading="eager"
            />
          </div>

          <span className="font-display text-[0.82rem] font-bold uppercase leading-none tracking-[0.14em] sm:text-sm">
            NIET Coding
            <span className="block text-brand-bright">Cadets</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={`${item.to}-${item.hash ?? ""}`}
              to={item.to}
              // Only spread hash when it actually exists — avoids passing
              // undefined to a prop that doesn't accept it (exactOptionalPropertyTypes)
              {...(item.hash ? { hash: item.hash } : {})}
              activeOptions={{ exact: true, includeHash: false }}
              activeProps={{
                className: item.noActive
                  ? "text-muted-foreground"
                  : "text-foreground bg-elevated",
              }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={isPlaceholder(site.joinUrl) ? undefined : site.joinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={isPlaceholder(site.joinUrl)}
            className="group hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand-bright hover:shadow-[var(--glow-brand)] aria-disabled:cursor-not-allowed aria-disabled:opacity-70 sm:inline-flex"
          >
            Join the Club
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile nav drawer */}
      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={`${item.to}-${item.hash ?? ""}`}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              activeOptions={{ exact: true, includeHash: false }}
              onClick={() => setOpen(false)}
              activeProps={{
                className: item.noActive
                  ? "text-muted-foreground"
                  : "text-brand-bright",
              }}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={isPlaceholder(site.joinUrl) ? undefined : site.joinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={isPlaceholder(site.joinUrl)}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
          >
            Join the Club <ArrowRight className="h-4 w-4" />
          </a>
        </Container>
      </div>
    </header>
  );
}
