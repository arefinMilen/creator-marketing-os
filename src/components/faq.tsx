"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is Creator Marketing OS different from Metricool or Buffer?",
      a: "Traditional schedulers only post content and count likes. Creator Marketing OS is an end-to-end operational platform that connects creator discovery, product seeding vouchers, content approvals, DM lead capture, and revenue attribution to show your exact financial ROI.",
    },
    {
      q: "Is the Creator plan really 100% free forever?",
      a: "Yes! Creators receive free lifetime access to social scheduling, content planning, analytics, and their Creator Passport. Our strategy is network-led: by providing creators with genuine daily-use value, we build a thriving, high-quality creator pool for campaign opportunities.",
    },
    {
      q: "How does the Product Seeding & Voucher Drop work?",
      a: "Brands set a total seeding budget and issue vouchers (e.g. £100 per creator). Creators choose items from your curated product catalog, submit their claim, and place orders directly. If their cart exceeds the voucher amount, they can pay the difference. Content deliverables and tracking codes are linked automatically!",
    },
    {
      q: "Is Creator Marketing OS GDPR compliant in the UK & EU?",
      a: "Yes. The platform is architected with strict UK/EU GDPR compliance, explicit consent controls for social account connections, role-based workspace data isolation, and full data deletion workflows.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Everything you need to know about Creator Marketing OS.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-heading font-semibold text-sm sm:text-base text-white hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={cn("w-5 h-5 text-indigo-400 transition-transform duration-300 shrink-0", isOpen && "rotate-180")}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
