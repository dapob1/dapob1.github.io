"use client";

import { whatWeDo } from "@/lib/content";
import {
  MotionSection,
  StaggerItem,
  StaggerList,
} from "@/components/motion/MotionSection";

const icons: Record<string, React.ReactNode> = {
  spark: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 19h16M7 16V10M12 16V6M17 16v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

export function WhatWeDo() {
  return (
    <MotionSection id="what-we-do" className="relative overflow-hidden py-24 md:py-36">
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 font-display text-[32vw] font-bold leading-none text-tertiary/[0.035] select-none"
        aria-hidden
      >
        DO
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-8 border-b border-tertiary/15 pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              What We Do
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
              Build beside founders.
            </h2>
          </div>
          <p className="max-w-[36ch] text-base leading-relaxed text-muted md:text-lg md:text-right">
            {whatWeDo.intro}
          </p>
        </div>

        <StaggerList className="mt-0">
          {whatWeDo.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className="group grid items-center gap-4 border-b border-tertiary/15 py-10 transition-colors md:grid-cols-[5rem_1fr_1.2fr_auto] md:gap-8 md:py-12">
                <span className="font-display text-4xl font-bold text-tertiary/20 transition-colors group-hover:text-primary md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-primary">{icons[item.icon]}</span>
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted md:max-w-[36ch]">{item.body}</p>
                <span
                  className="hidden h-px w-12 origin-left scale-x-0 bg-secondary transition-transform duration-500 group-hover:scale-x-100 md:block"
                  aria-hidden
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </MotionSection>
  );
}
