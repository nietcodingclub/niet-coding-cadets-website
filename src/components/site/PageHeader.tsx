import type { ReactNode } from "react";
import { Container, Reveal } from "./primitives";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand/12 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.98] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
