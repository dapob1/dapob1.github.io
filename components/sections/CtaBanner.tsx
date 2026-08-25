"use client";

import { MotionSection } from "@/components/motion/MotionSection";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <MotionSection className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,165,0,0.45),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,237,214,0.35) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-tertiary/70">
              Next chapter
            </p>
            <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-bold md:text-6xl lg:text-7xl">
              Ready to build Africa&apos;s next global champion?
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-[36ch] text-tertiary/85 md:text-lg">
              Founders and operators — tell us what you&apos;re building. We
              reply within two business days.
            </p>
            <div className="mt-8">
              <Button asChild variant="inverted">
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
