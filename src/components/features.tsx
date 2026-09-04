"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Package, Calendar, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "seeding" | "publishing" | "attribution">("ai");

  const tabs = [
    { id: "ai", label: "AI Creator Discovery", icon: Sparkles },
    { id: "seeding", label: "Product Seeding Drops", icon: Package },
    { id: "publishing", label: "Campaign Scheduler", icon: Calendar },
    { id: "attribution", label: "Revenue Attribution", icon: TrendingUp },
  ];

  const tabContent = {
    ai: {
      title: "AI Natural Language Creator Discovery",
      desc: "Query our AI engine in plain English to instantly find verified creators matching your exact audience, niche, engagement, and budget parameters.",
      bullets: [
        'Natural language search: "Find UK modest fashion creators 10k-50k followers"',
        "0-100 Creator Passport Score measuring reliability & authentic audience",
        "Automated contract generation & usage rights management",
      ],
      preview: (
        <div className="space-y-3">
          <div className="bg-slate-950/70 p-3 rounded-xl border border-white/10 text-xs">
            <div className="text-slate-400 font-semibold mb-1">AI Prompt Simulator</div>
            <div className="text-white font-medium bg-slate-900 px-3 py-2 rounded-lg border border-white/5">
              Find UK modest fashion creators with &gt;5% engagement under £300 budget
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-indigo-500/30 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Layla Kassam (@laylastyle)</div>
                <div className="text-xs text-slate-400">London, UK • 48k Followers • 7.4% Eng</div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Match: 98%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Fatima Al-Mansoor (@fatimadesigns)</div>
                <div className="text-xs text-slate-400">Birmingham, UK • 32k Followers • 6.1% Eng</div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Match: 94%</span>
            </div>
          </div>
        </div>
      ),
    },
    seeding: {
      title: "Product Seeding & Voucher Drops",
      desc: "TikTok-Shop style product seeding drops for any e-commerce store (Shopify, WooCommerce). Allocate vouchers, let creators order products, and automatically track deliverable timelines.",
      bullets: [
        "Set campaign budgets & per-creator voucher allowances (e.g. £100 allowance)",
        "Creator claims products & tops up difference at checkout",
        "Automated order tracking: Claimed → Dispatched → Content Submitted",
      ],
      preview: (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-indigo-500/30">
            <div className="text-xs text-emerald-400 font-bold mb-1">GazaArabia Ramadan Drop</div>
            <div className="text-sm font-semibold text-white">Silk Modest Abaya Collection</div>
            <div className="text-xs text-slate-400 mt-1">£100 Voucher Allowance • 45 Creators Claimed</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-xs">
            <div>
              <div className="font-semibold text-white">Order #4829 — Dispatched</div>
              <div className="text-slate-400">Creator: @aminastyle • Content Due: 3 Days</div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">Tracked</span>
          </div>
        </div>
      ),
    },
    publishing: {
      title: "Campaign-Aware Publishing Calendar",
      desc: "Drag-and-drop calendar for both creators and brands across Instagram, TikTok, YouTube, Facebook, X, and LinkedIn. Approved campaign assets flow directly into schedule queues.",
      bullets: [
        "Approved-content publishing workflow with version history",
        "Timezone-aware scheduling & AI best-time recommendations",
        "First-comment hashtag support & platform capability flags",
      ],
      preview: (
        <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 space-y-3">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Scheduled Posts — Today, 18:00 GMT</span>
            <span className="text-emerald-400 font-semibold">✓ Approved</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
              IG
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Ramadan Special Reel — Drop</div>
              <div className="text-[11px] text-slate-400">Instagram Reel • @gazaarabia</div>
            </div>
          </div>
        </div>
      ),
    },
    attribution: {
      title: "Real-Time Revenue & ROAS Attribution",
      desc: "Stop relying on vanity likes. Creator Marketing OS tracks unique promo codes, UTM tracking links, add-to-carts, orders, and total revenue attributed to every post and creator.",
      bullets: [
        "End-to-end attribution: Click → Cart → Checkout → Attributed Revenue",
        "Automatic commission payouts & creator earnings ledger",
        "Executive dashboard highlighting money metrics over vanity engagement",
      ],
      preview: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
              <div className="text-[10px] text-slate-400 uppercase">Attributed Sales</div>
              <div className="text-lg font-bold text-emerald-400">£48,290</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10">
              <div className="text-[10px] text-slate-400 uppercase">Net ROAS</div>
              <div className="text-lg font-bold text-white">4.85x</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-xs">
            <div>
              <div className="font-semibold text-white">Top Creator: @laylastyle</div>
              <div className="text-slate-400">142 Orders • £9,230 Attributed Sales</div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">ROAS: 6.2x</span>
          </div>
        </div>
      ),
    },
  };

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Ecosystem Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Built for Complete Campaign Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Explore the key modules engineered to connect brands, creators, and commerce seamlessly.
          </p>
        </div>

        {/* Feature Tabs Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Feature Content Box */}
        <div className="glass-card p-6 sm:p-10 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {tabContent[activeTab].desc}
                </p>
                <ul className="space-y-2.5 pt-2">
                  {tabContent[activeTab].bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preview Box */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-white/10 shadow-xl">
                {tabContent[activeTab].preview}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
