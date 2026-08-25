"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { navLinks } from "@/lib/content";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("/#", "").replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`/#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-tertiary/10 bg-neutral-dark/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="ADWA Studio home"
        >
          <Logo className="h-9 w-auto md:h-11" priority />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-secondary",
                active === link.href ||
                  (link.href.startsWith("/") &&
                    !link.href.includes("#") &&
                    false)
                  ? "text-secondary"
                  : "text-tertiary/70",
              )}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">Menu</span>
              <div className="flex w-6 flex-col gap-1.5">
                <motion.span
                  className="h-px w-full bg-tertiary"
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="h-px w-full bg-tertiary"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="h-px w-full bg-tertiary"
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </Dialog.Trigger>

          <AnimatePresence>
            {open && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    className="fixed inset-0 z-40 bg-neutral-dark/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.nav
                    className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-neutral-900 px-8 py-24"
                    aria-label="Mobile"
                    initial={reduce ? false : { x: "100%" }}
                    animate={{ x: 0 }}
                    exit={reduce ? undefined : { x: "100%" }}
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  >
                    <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                    <ul className="flex flex-col gap-6">
                      {navLinks.map((link, i) => (
                        <motion.li
                          key={link.href}
                          initial={reduce ? false : { opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i }}
                        >
                          <Dialog.Close asChild>
                            <a
                              href={link.href}
                              className="font-display text-3xl font-bold transition-colors hover:text-secondary"
                            >
                              {link.label}
                            </a>
                          </Dialog.Close>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.nav>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </header>
  );
}
