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
  { name: "Blog", href: "#blog" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 py-4 md:px-6 md:py-6 flex justify-center",
        scrolled ? "md:py-4" : "md:py-8"
      )}
    >
      <nav 
        className={cn(
          "w-full max-w-[1100px] flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-8 py-2 md:py-3",
          scrolled 
            ? "bg-[#0A0A1A]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#8A7BFF]/30 rounded-lg blur-md group-hover:bg-[#8A7BFF]/50 transition-colors" />
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white relative z-10">
              <path d="M16 4L4 16L16 28L28 16L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="4" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            bima
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-white/70 hover:text-white px-4 py-2 transition-all hover:bg-white/5 rounded-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block bg-white text-[#030312] rounded-full px-6 py-2.5 text-sm font-bold hover:bg-[#8A7BFF] hover:text-white transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            Get Started
          </a>

          <button 
            className="md:hidden text-white p-2 relative z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[90] bg-[#030312]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-3xl font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  className="bg-white text-[#030312] rounded-full px-10 py-4 text-lg font-bold active:scale-95 shadow-2xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
