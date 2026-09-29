"use client";

import Link from "next/link";
import { aboutCta } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <MotionSection className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 border-t border-tertiary/15 pt-16 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:pt-20">
          <div>
            <h2 className="max-w-[18ch] font-display text-3xl font-bold tracking-tight md:text-5xl">
              {aboutCta.title}
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              {aboutCta.body}
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-4 md:justify-end md:pb-1">
            <Button asChild variant="primary">
              <a
                href={aboutCta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {aboutCta.primary.label}
              </a>
            </Button>
            <Button asChild variant="outlined">
              <Link href={aboutCta.secondary.href}>
                {aboutCta.secondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
