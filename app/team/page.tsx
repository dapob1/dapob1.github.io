import type { Metadata } from "next";
import { TeamSection } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the ADWA Studio team — operators from YouTube, Amazon, Google, and builders across Africa.",
};

export default function TeamPage() {
  return (
    <main id="main" className="pt-16 md:pt-20">
      <TeamSection />
    </main>
  );
}
