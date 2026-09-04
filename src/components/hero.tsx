"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Search, Package, Calendar, DollarSign, Lock } from "lucide-react";

interface HeroProps {
  activeRole: "brand" | "creator";
}

export const Hero: React.FC<HeroProps> = ({ activeRole }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981] shrink-0"></span>
          <span className="truncate">{activeRole === "brand" ? "Creator Marketing OS" : "Free Creator Toolkit & Marketplace"}</span>
        </motion.div>

        {/* Dynamic Main Headline */}
        <motion.h1
          key={activeRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6"
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
          className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-normal mb-8 leading-relaxed"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 w-full"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{activeRole === "brand" ? "Book Brand Demo" : "Join Free as Creator"}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#simulator"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
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
          className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-400 mb-10 flex-wrap"
        >
          <div className="flex -space-x-2">
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Avatar 1" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Avatar 2" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Avatar 3" />
            <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#070913]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Avatar 4" />
          </div>
          <span>Trusted by <strong className="text-white">1,200+ Creators & Brands</strong> in UK & EU</span>
        </motion.div>

        {/* Hero Interactive App Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto rounded-2xl p-0.5 sm:p-1 bg-gradient-to-b from-white/20 via-indigo-500/20 to-transparent shadow-2xl shadow-indigo-500/20 w-full overflow-hidden"
        >
          <div className="bg-slate-950/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-2xl w-full">
            {/* Header Toolbar */}
            <div className="bg-slate-900/90 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400 bg-slate-950/60 px-2.5 sm:px-3 py-1 rounded-full border border-white/5 max-w-[200px] xs:max-w-[280px] sm:max-w-none truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">app.creatormarketingos.com/gaza-arabia/dashboard</span>
              </div>

              <div className="hidden sm:block w-8"></div>
            </div>

            {/* Dashboard Workspace Mockup */}
            <div className="p-3 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 text-left">
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
              <div className="md:col-span-3 space-y-3 sm:space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="bg-slate-900/60 p-3 sm:p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Attributed Revenue</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-white">£48,290.00</div>
                    <div className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold mt-0.5">↑ +34.2% vs last month</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 sm:p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Campaign ROAS</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-white">4.85x</div>
                    <div className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold mt-0.5">↑ Top 5% benchmark</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 sm:p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Active Creators</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-white">84 Creators</div>
                    <div className="text-[10px] sm:text-[11px] text-indigo-400 font-semibold mt-0.5">✓ 96% Approved</div>
                  </div>
                </div>

                {/* Live Creator Score Card 1 */}
                <div className="bg-slate-900/40 p-3 sm:p-3.5 rounded-xl border border-white/5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                      AZ
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Amina Zahra (@aminastyle)</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400">UK Modest Fashion • 85.4k Followers • 6.8% Eng</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold whitespace-nowrap self-start xs:self-auto">
                    Score: 96/100
                  </div>
                </div>

                {/* Live Creator Score Card 2 */}
                <div className="bg-slate-900/40 p-3 sm:p-3.5 rounded-xl border border-white/5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                      LK
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Layla Kassam (@laylastyle)</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400">London Lifestyle • 48.2k Followers • 7.4% Eng</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold whitespace-nowrap self-start xs:self-auto">
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
