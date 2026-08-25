import type { Metadata } from "next";
import { VenturesSection } from "@/components/sections/Ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "ADWA Studio portfolio — Oyana, Acutemeter, and the companies we build and scale.",
};

export default function VenturesPage() {
  return (
    <main id="main" className="pt-16 md:pt-20">
      <VenturesSection />
    </main>
  );
}
