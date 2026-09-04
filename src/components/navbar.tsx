"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeRole: "brand" | "creator";
  onRoleChange: (role: "brand" | "creator") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRole, onRoleChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why Creator OS", href: "#comparison" },
    { label: "Features", href: "#features" },
    { label: "AI Simulator", href: "#simulator" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 w-full max-w-full overflow-hidden",
        isScrolled
          ? "bg-[#070913]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-2.5 sm:py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-base sm:text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              C
            </div>
            <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
              Creator<span className="text-indigo-400">OS</span>
            </span>
          </a>

          {/* Role Toggle Switch (Desktop & Tablet) */}
          <div className="hidden md:flex items-center bg-slate-900/80 border border-white/15 p-1 rounded-full backdrop-blur-md">
            <button
              onClick={() => onRoleChange("brand")}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                activeRole === "brand"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                  : "text-slate-400 hover:text-white"
              )}
            >
              For Brands & Agencies
            </button>
            <button
              onClick={() => onRoleChange("creator")}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                activeRole === "creator"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                  : "text-slate-400 hover:text-white"
              )}
            >
              For Creators
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop & Tablet CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#pricing"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-200"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5"
            >
              <span>{activeRole === "brand" ? "Book Demo" : "Join Free"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/90 border border-white/15 text-slate-200 hover:text-white focus:outline-none shadow-md"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070913]/98 border-b border-white/15 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-w-full overflow-hidden">
          {/* Mobile Role Switcher */}
          <div className="flex items-center bg-slate-900 border border-white/15 p-1 rounded-full w-full max-w-xs mx-auto mb-3">
            <button
              onClick={() => {
                onRoleChange("brand");
              }}
              className={cn(
                "flex-1 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 text-center",
                activeRole === "brand"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                  : "text-slate-400"
              )}
            >
              For Brands
            </button>
            <button
              onClick={() => {
                onRoleChange("creator");
              }}
              className={cn(
                "flex-1 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 text-center",
                activeRole === "creator"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                  : "text-slate-400"
              )}
            >
              For Creators
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-center font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30"
            >
              {activeRole === "brand" ? "Book Brand Demo" : "Join Free as Creator"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
