"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const brandY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -40],
  );

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=2400&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/55 via-primary-900/35 to-neutral-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/55 to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(245,237,214,0.22) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </motion.div>

      {/* Oversized brand wordmark — fills the composition */}
      <motion.div
        style={{ y: brandY }}
        className="pointer-events-none absolute inset-x-0 top-[18%] z-0 px-4 md:top-[14%] md:px-6"
        aria-hidden
      >
        <motion.p
          className="mx-auto max-w-[100vw] text-center font-display text-[22vw] font-bold leading-none tracking-[-0.04em] text-tertiary/[0.2] select-none md:text-[18vw]"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          ADWA
        </motion.p>
      </motion.div>

      <div className="relative z-10 w-full px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <motion.h1
              className="max-w-[14ch] font-display text-4xl font-bold leading-[1.05] tracking-tight text-tertiary sm:text-5xl md:text-6xl lg:text-7xl"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.headline}
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Button asChild variant="primary">
                <a href="/ventures">Our ventures</a>
              </Button>
              <Button asChild variant="outlined">
                <a href="#contact">Start a conversation</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-tertiary/20 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <p className="max-w-[42ch] text-base leading-relaxed text-tertiary/80 md:text-lg">
              {hero.body}
            </p>
            <div className="mt-6 h-px w-16 bg-secondary" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
