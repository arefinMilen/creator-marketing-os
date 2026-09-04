"use client";

import React, { useState } from "react";
import { Search, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

interface Creator {
  name: string;
  handle: string;
  location: string;
  followers: string;
  eng: string;
  score: number;
  niche: string;
  rate: string;
}

export const AiSimulator: React.FC = () => {
  const [prompt, setPrompt] = useState("Find UK modest fashion creators with 10k to 100k followers");
  const [isSearching, setIsSearching] = useState(false);

  const allCreators: Creator[] = [
    { name: "Amina Zahra", handle: "@aminastyle", location: "London, UK", followers: "85.4k", eng: "6.8%", score: 96, niche: "Modest Fashion & Lifestyle", rate: "£250/post" },
    { name: "Layla Kassam", handle: "@laylastyle", location: "London, UK", followers: "48.2k", eng: "7.4%", score: 98, niche: "Modest Fashion & Beauty", rate: "£180/post" },
    { name: "Fatima Al-Mansoor", handle: "@fatimadesigns", location: "Birmingham, UK", followers: "32.1k", eng: "6.1%", score: 94, niche: "Fashion & Accessories", rate: "£140/post" },
    { name: "Marcus Vance", handle: "@marcusfits", location: "Manchester, UK", followers: "112.0k", eng: "4.9%", score: 91, niche: "Fitness & Activewear", rate: "£350/post" },
    { name: "Sophia Chen", handle: "@sophiabeauty", location: "London, UK", followers: "64.5k", eng: "8.2%", score: 97, niche: "Skincare & Beauty", rate: "£220/post" },
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  const samplePrompts = [
    "Find UK modest fashion creators 10k-50k followers",
    "Find fitness and wellness influencers with high reel views",
    "Find micro creators for product seeding vouchers under £200",
  ];

  return (
    <section id="simulator" className="py-20 bg-slate-950/40 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Test the AI Creator Search Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Type or click sample prompts to simulate natural-language creator discovery in real time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Input Bar */}
          <div className="glass-card p-2 sm:p-3 flex flex-col sm:flex-row items-center gap-3 mb-4">
            <div className="flex items-center gap-3 w-full px-3">
              <Search className="w-5 h-5 text-indigo-400 shrink-0" />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type prompt e.g., 'Find UK fashion creators under £400'..."
                className="w-full bg-transparent border-none text-white text-sm focus:outline-none placeholder-slate-500"
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs whitespace-nowrap shadow-lg shadow-indigo-500/25 transition-all"
            >
              Search AI
            </button>
          </div>

          {/* Sample Prompts */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-slate-500">Sample prompts:</span>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPrompt(p);
                  handleSearch();
                }}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                {p.length > 35 ? p.substring(0, 35) + "..." : p}
              </button>
            ))}
          </div>

          {/* Simulated Creator Results */}
          <div className="space-y-3">
            {isSearching ? (
              <div className="p-8 text-center text-slate-400 text-sm animate-pulse">
                Processing AI prompt against verified creator passport network...
              </div>
            ) : (
              allCreators.map((c, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs">
                      {c.name.substring(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-white">{c.name}</h4>
                        <span className="text-xs text-slate-400">{c.handle}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {c.location} • {c.followers} Followers • {c.eng} Eng • Est. {c.rate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      Passport Score: {c.score}/100
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
