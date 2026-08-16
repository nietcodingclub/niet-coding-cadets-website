import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery, galleryFilters, instagramPosts } from "@/data/gallery";
import { socials, isPlaceholder } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container, Reveal, Section, SectionHeading } from "./primitives";

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const move = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? null : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, move]);

  return (
    <Section id="gallery">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments that <span className="text-brand-bright">matter.</span>
            </>
          }
          description="Competitions, workshops, hackathons and the people who show up. Swap in real club photographs from src/data/gallery.ts."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                filter === f
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <Reveal key={`${item.caption}-${i}`} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-elevated text-left transition-colors hover:border-brand/50"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className={cn(
                    "w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105",
                    item.shape === "tall" && "aspect-3/4",
                    item.shape === "wide" && "aspect-16/10",
                    !item.shape && "aspect-4/3",
                  )}
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-background/95 to-transparent p-4 pt-10">
                  <span className="text-sm font-semibold">{item.caption}</span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-brand-bright">
                    {item.category}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].caption}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div className="relative max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[75vh] w-full rounded-2xl border border-border object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                {items[active].caption} &middot;{" "}
                <span className="font-mono text-xs text-brand-bright">
                  {items[active].category}
                </span>
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => move(-1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:border-brand/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => move(1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:border-brand/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:border-brand/50"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}

export function InstagramStrip() {
  const ig = socials.instagram;
  return (
    <Section tone="surface" className="border-y border-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Instagram"
            title={
              <>
                Follow the <span className="text-brand-bright">journey.</span>
              </>
            }
            description={`Recent club content from ${ig.handle}. Add real posts in src/data/gallery.ts.`}
          />
          <a
            href={isPlaceholder(ig.url) ? undefined : ig.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={isPlaceholder(ig.url)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-brand/50 hover:text-brand-bright"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            See more on Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {instagramPosts.map((post, i) => (
            <Reveal key={i} delay={i * 70}>
              <a
                href={isPlaceholder(post.url) ? undefined : post.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-disabled={isPlaceholder(post.url)}
                className="group relative block overflow-hidden rounded-xl border border-border bg-elevated"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-brand-bright" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
