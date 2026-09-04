"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Creator Free",
      desc: "For creators wanting free scheduling tools, analytics & brand drops.",
      priceMonthly: 0,
      priceAnnual: 0,
      period: "forever",
      cta: "Join Free as Creator",
      featured: false,
      features: [
        "Multi-platform social scheduler",
        "Visual content calendar",
        "Creator Passport profile & metrics",
        "Direct campaign applications",
        "Creator Wallet & earnings payouts",
      ],
    },
    {
      name: "Brand Starter",
      desc: "For emerging brands launching creator campaigns.",
      priceMonthly: 79,
      priceAnnual: 63,
      period: "/ month",
      cta: "Start 14-Day Free Trial",
      featured: false,
      features: [
        "Creator CRM (up to 100 creators)",
        "Campaign Builder & Brief generator",
        "Content Approval Studio",
        "Multi-platform Social Scheduler",
        "Basic Campaign Analytics",
      ],
    },
    {
      name: "Brand Growth",
      desc: "For growing e-commerce brands driving high ROI via seeding.",
      priceMonthly: 199,
      priceAnnual: 159,
      period: "/ month",
      cta: "Get Started Now",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Starter, plus:",
        "AI Creator Discovery & Matching",
        "Product Seeding & Voucher Drops",
        "Real-Time Revenue Attribution",
        "ManyChat-style Lead DM Flows",
      ],
    },
    {
      name: "Agency White-Label",
      desc: "For agencies managing multiple client brands & portals.",
      priceMonthly: 499,
      priceAnnual: 399,
      period: "/ month",
      cta: "Contact Agency Sales",
      featured: false,
      features: [
        "Everything in Growth, plus:",
        "White-label agency domain & logo",
        "Dedicated Client Portal access",
        "Multi-brand workspace isolation",
        "Priority API & custom reports",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Choose the Plan Built for Your Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Free lifetime tools for creators to grow network liquidity. Clear subscriptions for brands and agencies.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-900 border border-white/10 p-1 rounded-full mt-6">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                billingCycle === "monthly" ? "bg-indigo-600 text-white" : "text-slate-400"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1",
                billingCycle === "annual" ? "bg-indigo-600 text-white" : "text-slate-400"
              )}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const displayPrice = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={cn(
                  "glass-card p-6 flex flex-col justify-between relative transition-all duration-300",
                  plan.featured
                    ? "border-indigo-500 bg-slate-900/90 shadow-2xl shadow-indigo-500/20 scale-105"
                    : "hover:border-white/20"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px] mb-4">{plan.desc}</p>
                  
                  <div className="text-3xl font-heading font-extrabold text-white mb-6">
                    £{displayPrice}{" "}
                    <span className="text-xs font-normal text-slate-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={cn(
                    "w-full py-2.5 rounded-xl font-semibold text-xs text-center transition-all duration-200 block",
                    plan.featured
                      ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 hover:opacity-95"
                      : "bg-slate-900 text-slate-200 border border-white/10 hover:border-white/25 hover:text-white"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
