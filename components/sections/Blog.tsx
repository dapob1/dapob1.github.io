"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogTags, formatDate } from "@/lib/content";
import {
  MotionSection,
  StaggerItem,
  StaggerList,
} from "@/components/motion/MotionSection";
import { cn } from "@/lib/utils";

export function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return blogPosts;
    return blogPosts.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <MotionSection id="journal" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
          Journal
        </p>
        <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
          Notes from the studio.
        </h2>

        <div
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-tertiary/15 pb-6"
          role="group"
          aria-label="Filter by tag"
        >
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={cn(
              "text-xs font-medium uppercase tracking-[0.18em] transition-colors",
              !activeTag
                ? "text-secondary"
                : "text-muted hover:text-tertiary",
            )}
          >
            All
          </button>
          {blogTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={cn(
                "text-xs font-medium uppercase tracking-[0.18em] transition-colors",
                activeTag === tag
                  ? "text-secondary"
                  : "text-muted hover:text-tertiary",
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <StaggerList className="mt-0 divide-y divide-tertiary/15">
          {filtered.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid items-center gap-6 py-10 md:grid-cols-[12rem_1fr] md:gap-12 md:py-12"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 md:aspect-square">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <time
                    dateTime={post.date}
                    className="text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-secondary md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-muted">{post.excerpt}</p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.15em] text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </MotionSection>
  );
}
