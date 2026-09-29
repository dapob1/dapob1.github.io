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
                    alt={member.name}
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
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    className="mt-4 inline-flex h-10 w-10 items-center justify-center border border-tertiary/20 text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <p className="text-muted md:max-w-[40ch]">{member.bio}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>

        {limit && (
          <div className="mt-10">
            <Link
              href="/about"
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
