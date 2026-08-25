"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/content";
import { MotionSection } from "@/components/motion/MotionSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  const [tab, setTab] = useState(services[0].id);
  const reduce = useReducedMotion();
  const active = services.find((s) => s.id === tab) ?? services[0];

  return (
    <MotionSection id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
          How we partner
        </p>
        <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
          Build. Scale. Connect.
        </h2>

        <div className="mt-14 hidden md:block">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="border-0">
              {services.map((s) => (
                <TabsTrigger key={s.id} value={s.id}>
                  {s.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <AnimatePresence mode="wait">
              <TabsContent key={tab} value={tab} forceMount>
                <motion.div
                  key={tab}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 grid gap-12 border-t border-tertiary/15 pt-12 md:grid-cols-2"
                >
                  <div>
                    <p className="font-display text-2xl text-tertiary md:text-3xl">
                      {active.summary}
                    </p>
                    <p className="mt-6 max-w-[40ch] leading-relaxed text-muted">
                      {active.body}
                    </p>
                  </div>
                  <ul className="space-y-0">
                    {active.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={reduce ? false : { opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="flex items-baseline gap-4 border-b border-tertiary/10 py-4 font-display text-lg"
                      >
                        <span className="text-xs text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>

        <div className="mt-10 md:hidden">
          <Accordion type="single" collapsible defaultValue="build">
            {services.map((s) => (
              <AccordionItem key={s.id} value={s.id}>
                <AccordionTrigger>{s.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-tertiary">{s.summary}</p>
                  <p className="mb-6">{s.body}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2 text-tertiary">
                        <span className="text-primary">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </MotionSection>
  );
}
