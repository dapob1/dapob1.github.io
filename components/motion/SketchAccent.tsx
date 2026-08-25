"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SketchAccent({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 200 40"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M4 28 C 40 4, 70 36, 100 18 S 160 4, 196 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
