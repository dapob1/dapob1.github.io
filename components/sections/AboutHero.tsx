"use client";

import { aboutHero } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";

export function AboutHero() {
  return (
    <MotionSection className="border-b border-tertiary/15 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
          About
        </p>
        <h1 className="mt-5 max-w-[22ch] font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {aboutHero.title}
        </h1>
        <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl">
          {aboutHero.body}
        </p>
      </div>
    </MotionSection>
  );
}
