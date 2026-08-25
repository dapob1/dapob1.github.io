"use client";

import { motion, useReducedMotion } from "framer-motion";
import { vision } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";

export function Vision() {
  const reduce = useReducedMotion();

  return (
    <MotionSection id="vision" className="relative overflow-hidden py-24 md:py-36">
      <div
        className="pointer-events-none absolute right-0 top-0 font-display text-[28vw] font-bold leading-none text-tertiary/[0.04] select-none"
        aria-hidden
      >
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
              Our Vision
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              We see an
              <span className="mt-1 block text-secondary">Africa</span>
              remade.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {vision.body}
            </p>

            <ol className="mt-14 space-y-0">
              {vision.pillars.map((pillar, i) => (
                <motion.li
                  key={pillar.label}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.55,
                    delay: reduce ? 0 : i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-[auto_1fr] gap-6 border-t border-tertiary/15 py-8 md:gap-10 md:py-10"
                >
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">
                    {pillar.label}
                  </span>
                  <p className="max-w-[28ch] font-display text-2xl font-semibold leading-snug text-tertiary transition-colors group-hover:text-secondary md:text-3xl">
                    {pillar.text}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
