"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Comparison } from "@/components/comparison";
import { Features } from "@/components/features";
import { AiSimulator } from "@/components/ai-simulator";
import { RoiCalculator } from "@/components/roi-calculator";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  const [activeRole, setActiveRole] = useState<"brand" | "creator">("brand");

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 relative selection:bg-indigo-500/30">
      <Navbar activeRole={activeRole} onRoleChange={setActiveRole} />
      <Hero activeRole={activeRole} />
      <Comparison />
      <Features />
      <AiSimulator />
      <RoiCalculator />
      <Pricing />
      <Faq />
      <CtaBanner activeRole={activeRole} />
      <Footer />
    </main>
  );
}
