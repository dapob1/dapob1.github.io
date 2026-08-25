"use client";

import Image from "next/image";
import Link from "next/link";
import { team, teamIntro } from "@/lib/content";
import {
  MotionSection,
  StaggerItem,
  StaggerList,
} from "@/components/motion/MotionSection";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  id?: string;
  showIntro?: boolean;
  limit?: number;
  className?: string;
};

export function TeamSection({
  id = "team",
  showIntro = true,
  limit,
  className,
}: TeamSectionProps) {
  const members = limit ? team.slice(0, limit) : team;

  return (
    <MotionSection id={id} className={cn("py-24 md:py-36", className)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-8 border-b border-tertiary/15 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Team
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Meet The Team
            </h2>
          </div>
          {showIntro && (
            <p className="max-w-[48ch] text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:self-end">
              {teamIntro}
            </p>
          )}
        </div>

        <StaggerList className="mt-0 divide-y divide-tertiary/15">
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <article className="group grid items-center gap-6 py-10 md:grid-cols-[8rem_1fr_1.4fr] md:gap-10 md:py-12">
                <div className="relative aspect-square w-24 overflow-hidden md:w-32">
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                    {member.role}
                  </p>
                </div>
                <p className="text-muted md:max-w-[40ch]">{member.bio}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>

        {limit && (
          <div className="mt-10">
            <Link
              href="/team"
              className="inline-flex border-b border-secondary pb-1 text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              View full team →
            </Link>
          </div>
        )}
      </div>
    </MotionSection>
  );
}
