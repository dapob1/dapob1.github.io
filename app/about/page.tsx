import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutBeliefs } from "@/components/sections/AboutBeliefs";
import { TeamSection } from "@/components/sections/Team";
import { AboutCta } from "@/components/sections/AboutCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Every creator has a story to tell. Meet the team behind Oyana — operators from YouTube, Amazon, Google, and builders across Africa.",
};

export default function AboutPage() {
  return (
    <main id="main" className="pt-16 md:pt-20">
      <AboutHero />
      <AboutBeliefs />
      <TeamSection />
      <AboutCta />
    </main>
  );
}
