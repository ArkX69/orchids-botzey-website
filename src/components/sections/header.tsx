"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-8 py-4 md:px-16 lg:px-24 flex justify-between items-center bg-transparent",
        scrolled ? "backdrop-blur-md bg-[#030312]/30" : ""
      )}
    >
      <div className="container mx-auto flex justify-between items-center max-w-[1100px] p-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png"
              width={32}
              height={32}
              alt="Bima Logo"
              className="brightness-200"
            />
          </div>
          <span className="text-xl font-bold text-white tracking-tighter font-display">
            bima
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-white/80 hover:text-white transition-all underline-offset-8 hover:underline decoration-[#8a7bff] decoration-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 font-sans">
            <a
              href="#contact"
              className="cta-glow-effect hidden md:block bg-[#16162d] text-white border border-white/10 rounded-full px-6 py-2.5 text-[14px] font-bold hover:bg-[#1a1a35] hover:border-white/20 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95"
            >
            Work with Us
          </a>

          <button 
            className="md:hidden text-white p-2 relative z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
