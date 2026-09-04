"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, ShoppingBag, ArrowUpRight } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [budget, setBudget] = useState(5000);
  const [creators, setCreators] = useState(25);
  const [price, setPrice] = useState(65);

  const estimatedRevenue = Math.round(budget * 4.875);
  const roas = (estimatedRevenue / budget).toFixed(2);
  const estimatedOrders = Math.round(estimatedRevenue / price);

  return (
    <section id="calculator" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Revenue Forecaster</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Calculate Your Projected Campaign ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Adjust budget and creator parameters to forecast attributed sales, ROAS, and net return.
          </p>
        </div>

        <div className="glass-card max-w-4xl mx-auto p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              {/* Slider 1: Budget */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Campaign Budget (£)</span>
                  <span className="text-indigo-400">£{budget.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Creators */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Participating Creators</span>
                  <span className="text-indigo-400">{creators} Creators</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={creators}
                  onChange={(e) => setCreators(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Avg Product Price (£)</span>
                  <span className="text-indigo-400">£{price}</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={300}
                  step={5}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Output Display Box */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-indigo-500/30 text-center space-y-4 shadow-xl">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Projected Attributed Revenue
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-extrabold bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent mt-1">
                  £{estimatedRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Projected ROAS</div>
                  <div className="text-base font-bold text-emerald-400 flex items-center gap-1">
                    <span>{roas}x</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase">Attributed Orders</div>
                  <div className="text-base font-bold text-white flex items-center gap-1">
                    <span>{estimatedOrders} Orders</span>
                    <ShoppingBag className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
