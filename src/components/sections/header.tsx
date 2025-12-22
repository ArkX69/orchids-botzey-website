"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 py-4 md:px-12 md:py-6 flex justify-between items-center bg-transparent",
        scrolled ? "backdrop-blur-md bg-[#030312]/30" : ""
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/YwYy0uU5o7n5qY80p8P3I7g9e4.png"
            width={40}
            height={40}
            alt="Bima Logo"
          />
        </div>
        <span className="text-2xl font-bold text-white tracking-tighter font-display">
          bima
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-sans">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[15px] font-medium text-white/80 hover:text-white transition-all underline-offset-8 hover:underline decoration-[#8a7bff] decoration-2"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-4 font-sans">
        <a
          href="#contact"
          className="hidden md:block bg-[#16162d] text-white border border-white/10 rounded-full px-8 py-3 text-[15px] font-bold hover:bg-[#8a7bff] hover:border-[#8a7bff] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95"
        >
          Work with Us
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[90] w-full max-w-xs bg-[#030312] border-l border-white/5 flex flex-col p-10 pt-24 gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-2xl font-semibold transition-colors font-display"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-white text-[#030312] text-center rounded-full py-4 text-lg font-bold active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work with Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
