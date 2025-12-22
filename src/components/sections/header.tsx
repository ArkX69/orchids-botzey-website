"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-4 md:px-6 md:py-6 flex justify-center",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div 
        className={cn(
          "w-full max-w-[1200px] flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2.5",
          scrolled 
            ? "bg-[#0A0A1A]/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#8A7BFF]/20 rounded-lg blur-sm group-hover:bg-[#8A7BFF]/30 transition-colors" />
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white relative z-10">
              <path d="M16 4L4 16L16 28L28 16L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            bima
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-white/60 hover:text-white px-4 py-2 transition-all hover:bg-white/5 rounded-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block bg-white text-[#030312] rounded-full px-5 py-2 text-sm font-bold hover:bg-[#8A7BFF] hover:text-white transition-all shadow-lg active:scale-95"
          >
            Get Started
          </a>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-[#0A0A1A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden md:hidden z-[99] p-4 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white px-4 py-3 text-lg font-medium transition-colors hover:bg-white/5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-white text-[#030312] text-center rounded-xl py-4 text-sm font-bold active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
