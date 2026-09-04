"use client";

import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg">
                C
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Creator<span className="text-indigo-400">OS</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              The operating system for creator-led marketing. Empowering creators with free social management tools while giving brands total revenue transparency.
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>UK & EU GDPR Conscious Architecture</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">AI Discovery</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Product Seeding Drops</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Publishing Calendar</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Revenue Calculator</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-white transition-colors">For E-Commerce Brands</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">For Agencies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">For Creators</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Buffer / Metricool Alternative</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm">Legal & Security</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">UK & EU GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creator Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>© 2026 Creator Marketing OS. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
