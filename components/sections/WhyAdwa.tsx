"use client";

import { whyAdwa } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";

export function WhyAdwa() {
  return (
    <MotionSection id="why-adwa" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,98,45,0.12),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
          {whyAdwa.title}
        </p>
        <h2 className="mx-auto mt-8 max-w-[18ch] font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Victory against
          <span className="text-primary"> overwhelming odds.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-[48ch] text-lg leading-relaxed text-muted md:text-xl">
          {whyAdwa.body}
        </p>
      </div>
    </MotionSection>
  );
}
