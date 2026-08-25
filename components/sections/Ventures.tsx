"use client";

import Image from "next/image";
import { ventures } from "@/lib/content";
import {
  MotionSection,
  StaggerItem,
  StaggerList,
} from "@/components/motion/MotionSection";

type VenturesSectionProps = {
  id?: string;
  title?: string;
};

export function VenturesSection({
  id = "ventures",
  title = "Our Ventures",
}: VenturesSectionProps) {
  return (
    <MotionSection id={id} className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-4 border-b border-tertiary/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {title}
            </h2>
          </div>
          <p className="max-w-[32ch] text-muted md:text-right">
            Companies we build, shape, and scale from African soil for global
            impact.
          </p>
        </div>

        <StaggerList className="mt-0">
          {ventures.map((venture, i) => (
            <StaggerItem key={venture.slug}>
              <article
                className={`grid items-center gap-8 border-b border-tertiary/15 py-12 md:gap-14 md:py-16 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={venture.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-transparent to-transparent" />
                </div>

                <div>
                  <p className="font-display text-sm font-semibold tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                    {venture.placeholder ? " · Copy pending" : ""}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                    {venture.name}
                  </h3>
                  <p className="mt-4 font-display text-xl text-secondary md:text-2xl">
                    {venture.tagline}
                  </p>
                  <p className="mt-5 max-w-[40ch] leading-relaxed text-muted">
                    {venture.description}
                  </p>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    Visit site →
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </MotionSection>
  );
}
