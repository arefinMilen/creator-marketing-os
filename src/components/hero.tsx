"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Users, Search, Package, Calendar, DollarSign, Lock } from "lucide-react";

interface HeroProps {
  activeRole: "brand" | "creator";
}

export const Hero: React.FC<HeroProps> = ({ activeRole }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"></span>
          <span>{activeRole === "brand" ? "Creator Marketing Operating System" : "Free Creator Toolkit & Campaign Marketplace"}</span>
        </motion.div>

        {/* Dynamic Main Headline */}
        <motion.h1
          key={activeRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6"
        >
          {activeRole === "brand" ? (
            <>
              Find the right creators. Track every pound.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let AI tell you what to do next.
              </span>
            </>
          ) : (
            <>
              Manage your social accounts. Get free drops.{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Monetize your audience.
              </span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={`sub-${activeRole}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-normal mb-8 leading-relaxed"
        >
          {activeRole === "brand"
            ? "The connected platform linking creator discovery, multi-platform social scheduling, product seeding drops, content approvals, and revenue attribution into one unified operating system."
            : "100% free lifetime social scheduling, visual content calendar, social analytics passport, and exclusive access to paid brand campaigns and product seeding drops."}
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{activeRole === "brand" ? "Book Brand Demo" : "Join Free as Creator"}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#simulator"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Try AI Discovery</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 mb-12"
        >
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Avatar 1" />
            <img className="w-8 h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Avatar 2" />
            <img className="w-8 h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Avatar 3" />
            <img className="w-8 h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Avatar 4" />
          </div>
          <span>Trusted by <strong className="text-white">1,200+ Creators & Brands</strong> across UK & EU</span>
        </motion.div>

        {/* Hero Interactive App Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-white/20 via-indigo-500/20 to-transparent shadow-2xl shadow-indigo-500/20"
        >
          <div className="bg-slate-950/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-2xl">
            {/* Header Toolbar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/60 px-3 py-1 rounded-full border border-white/5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>app.creatormarketingos.com/gaza-arabia/dashboard</span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Dashboard Workspace Mockup */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
              {/* Sidebar (Desktop) */}
              <div className="hidden md:flex flex-col gap-2 bg-slate-900/50 p-3 rounded-xl border border-white/5 text-xs font-medium">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                  <TrendingUp className="w-4 h-4" />
                  <span>Overview</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg text-slate-400 hover:bg-slate-800/40">
                  <Search className="w-4 h-4" />
                  <span>AI Creator Discovery</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg text-slate-400 hover:bg-slate-800/40">
                  <Package className="w-4 h-4" />
                  <span>Product Seeding Drops</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg text-slate-400 hover:bg-slate-800/40">
                  <Calendar className="w-4 h-4" />
                  <span>Publishing Calendar</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg text-slate-400 hover:bg-slate-800/40">
                  <DollarSign className="w-4 h-4" />
                  <span>Revenue Attribution</span>
                </div>
              </div>

              {/* Main Feed Content */}
              <div className="md:col-span-3 space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Attributed Revenue</div>
                    <div className="text-xl font-heading font-extrabold text-white">£48,290.00</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">↑ +34.2% vs last month</div>
                  </div>
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Campaign ROAS</div>
                    <div className="text-xl font-heading font-extrabold text-white">4.85x</div>
                    <div className="text-[11px] text-emerald-400 font-semibold mt-1">↑ Top 5% benchmark</div>
                  </div>
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Active Creators</div>
                    <div className="text-xl font-heading font-extrabold text-white">84 Creators</div>
                    <div className="text-[11px] text-indigo-400 font-semibold mt-1">✓ 96% Approved</div>
                  </div>
                </div>

                {/* Live Creator Score Card 1 */}
                <div className="bg-slate-900/40 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      AZ
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Amina Zahra (@aminastyle)</h4>
                      <p className="text-xs text-slate-400">UK Modest Fashion • 85.4k Followers • 6.8% Eng</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold whitespace-nowrap">
                    Score: 96/100
                  </div>
                </div>

                {/* Live Creator Score Card 2 */}
                <div className="bg-slate-900/40 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                      LK
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Layla Kassam (@laylastyle)</h4>
                      <p className="text-xs text-slate-400">London Lifestyle • 48.2k Followers • 7.4% Eng</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold whitespace-nowrap">
                    Score: 98/100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
