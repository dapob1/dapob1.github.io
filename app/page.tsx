import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyAdwa } from "@/components/sections/WhyAdwa";
import { VenturesSection } from "@/components/sections/Ventures";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TeamSection } from "@/components/sections/Team";
import { Blog } from "@/components/sections/Blog";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Vision />
      <WhatWeDo />
      <WhyAdwa />
      <VenturesSection id="work" title="Selected ventures" />
      <Services />
      <Testimonials />
      <TeamSection />
      <Blog />
      <CtaBanner />
      <Contact />
    </main>
  );
}
