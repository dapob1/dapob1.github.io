"use client";

import { logos, testimonials } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";

export function Testimonials() {
  const loop = [...logos, ...logos];

  return (
    <MotionSection className="overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
          Kind words
        </p>
        <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
          Partners who trust the process.
        </h2>

        <div className="mt-16 grid gap-0 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`border-t border-tertiary/15 py-10 md:px-8 md:py-12 ${
                i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              } ${i >= 2 ? "" : "md:border-b"}`}
            >
              <p className="font-display text-2xl leading-snug text-tertiary md:text-3xl">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="font-medium text-tertiary">{t.name}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-tertiary/45">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="mt-20 border-y border-tertiary/10 py-8" aria-hidden>
        <div className="overflow-hidden">
          <div className="marquee-track gap-16 px-8">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 font-display text-2xl font-semibold tracking-tight text-tertiary/30 md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
