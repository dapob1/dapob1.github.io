"use client";

import { aboutBeliefs } from "@/lib/content";
import {
  MotionSection,
  StaggerItem,
  StaggerList,
} from "@/components/motion/MotionSection";

export function AboutBeliefs() {
  return (
    <MotionSection className="border-b border-tertiary/15 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
              {aboutBeliefs.eyebrow}
            </p>
            <p className="mt-5 max-w-[36ch] text-lg leading-relaxed text-muted md:text-xl">
              {aboutBeliefs.intro}
            </p>
          </div>
          <StaggerList className="space-y-12 lg:col-span-6 lg:col-start-7">
            {aboutBeliefs.items.map((item) => (
              <StaggerItem key={item.title}>
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-[44ch] leading-relaxed text-muted">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </MotionSection>
  );
}
