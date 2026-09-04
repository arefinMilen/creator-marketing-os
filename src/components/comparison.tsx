"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export const Comparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Social Post Scheduling",
      traditional: "Basic post queue & time slot",
      creatorOs: "Campaign-aware drag & drop calendar",
      traditionalOk: true,
      creatorOsOk: true,
    },
    {
      feature: "Creator CRM & Discovery",
      traditional: "None / Manual spreadsheets",
      creatorOs: "AI Matching + 0-100 Creator Passport",
      traditionalOk: false,
      creatorOsOk: true,
    },
    {
      feature: "Product Seeding & Voucher Drops",
      traditional: "None",
      creatorOs: "E-commerce integration + basket top-up",
      traditionalOk: false,
      creatorOsOk: true,
    },
    {
      feature: "Revenue Attribution & ROAS",
      traditional: "Engagement metrics only (Likes/Comments)",
      creatorOs: "Track every £ attributed to creator posts",
      traditionalOk: false,
      creatorOsOk: true,
    },
    {
      feature: "DM & Conversational Leads",
      traditional: "Third-party bot integration required",
      creatorOs: "Built-in ManyChat-style lead capture",
      traditionalOk: false,
      creatorOsOk: true,
    },
    {
      feature: "Free Tier Strategy",
      traditional: "Limited or crippled free trials",
      creatorOs: "Free social tools for creators to build flywheel",
      traditionalOk: false,
      creatorOsOk: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comparative Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Beyond Traditional Schedulers
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Why modern UK & EU brands and creators choose Creator Marketing OS over legacy posting tools like Buffer, Metricool, or ManyChat.
          </p>
        </div>

        {/* Desktop & Tablet Table View (Hidden on Small Screens) */}
        <div className="hidden md:block glass-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-white/10 text-sm font-heading font-semibold text-slate-300">
                <th className="py-4 px-6">Capability / Requirement</th>
                <th className="py-4 px-6 text-slate-400">
                  Traditional Schedulers
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    (Metricool, Buffer, PostMagic)
                  </span>
                </th>
                <th className="py-4 px-6 bg-indigo-600/20 text-indigo-300 border-b-2 border-indigo-500">
                  Creator Marketing OS
                  <span className="block text-xs font-normal text-indigo-300/70 mt-0.5">
                    (Connected Operating System)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      {row.traditionalOk ? (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 shrink-0" />
                      )}
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-indigo-600/5 font-semibold text-slate-100">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-indigo-200">{row.creatorOs}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Mobile-First Card View (<768px) */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="glass-card p-5 space-y-3">
              <h3 className="font-heading font-bold text-base text-white border-b border-white/10 pb-2">
                {row.feature}
              </h3>
              
              {/* Creator OS Advantage */}
              <div className="p-3 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-200 text-xs space-y-1">
                <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Creator Marketing OS</span>
                </div>
                <p className="text-slate-300 font-medium pl-5">{row.creatorOs}</p>
              </div>

              {/* Traditional Scheduler */}
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 text-slate-400 text-xs space-y-1">
                <div className="font-medium text-slate-400 flex items-center gap-1.5">
                  {row.traditionalOk ? <Check className="w-4 h-4 text-slate-400" /> : <X className="w-4 h-4 text-slate-600" />}
                  <span>Traditional Tools</span>
                </div>
                <p className="pl-5 text-slate-400">{row.traditional}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
