"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  activeRole: "brand" | "creator";
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ activeRole }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-14 text-center border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/60 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {activeRole === "brand"
                ? "Ready to Turn Creator Content into Measurable Revenue?"
                : "Ready to Level Up Your Creator Business for Free?"}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {activeRole === "brand"
                ? "Join hundreds of UK & EU brands leveraging the ultimate operating system for creator-led marketing."
                : "Get free lifetime scheduling tools, content calendar, and access to paid product seeding drops."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{activeRole === "brand" ? "Book Brand Demo" : "Create Free Account"}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
