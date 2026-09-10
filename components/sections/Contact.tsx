"use client";

import { useState, type FormEvent } from "react";
import { MotionSection } from "@/components/motion/MotionSection";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim(),
    };

    const nextErrors: Record<string, string> = {};
    if (!data.name) nextErrors.name = "Name is required";
    if (!data.email) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = "Enter a valid email";
    if (!data.message || data.message.length < 10)
      nextErrors.message = "Message must be at least 10 characters";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please fix the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(
      `ADWA Studio inquiry from ${data.name}`,
    );
    const body = encodeURIComponent(
      `From: ${data.name} <${data.email}>\n\n${data.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    setMessage("Opening your email client — thanks, we'll be in touch soon.");
    form.reset();
  }

  return (
    <MotionSection id="contact" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-secondary">
            Contact
          </p>
          <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-bold tracking-tight md:text-6xl">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-6 max-w-[40ch] text-muted">
            Share a brief, a link, or a half-formed idea. We partner with
            founders who share an audacious spirit.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-8 border-t border-tertiary/15 pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12"
          noValidate
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className={cn(
                "mt-2 w-full border-b border-tertiary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-primary",
                errors.name && "border-primary",
              )}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-primary">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={cn(
                "mt-2 w-full border-b border-tertiary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-primary",
                errors.email && "border-primary",
              )}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-primary">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={cn(
                "mt-2 w-full resize-y border-b border-tertiary/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-primary",
                errors.message && "border-primary",
              )}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-primary">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            variant="primary"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </Button>

          {message && (
            <p
              role="status"
              className={cn(
                "text-sm",
                status === "success" ? "text-secondary" : "text-primary",
              )}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </MotionSection>
  );
}
