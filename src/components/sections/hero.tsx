"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Saved over 400 hours per month on support",
    name: "Mila S.",
    role: "COO, Finance Firm",
  },
  {
    quote: "Doubling our conversion rate in 3 months!",
    name: "Sarah M.",
    role: "Marketing Manager, Mandala",
  },
  {
    quote: "50% reduction in operational costs!",
    name: "John D.",
    role: "CEO, AI Agent",
  },
];

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-x-hidden bg-[#030312] pt-24 pb-16">
      {/* Background Ray/Glow Mask */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/Bc7eub42bMX1SkZz7JRmuQ7T8-1.png"
            fill
            alt=""
            priority
            className="object-cover opacity-50"
          />
        </div>
      </div>

      {/* Decorative Video - Refined size and position */}
      <div className="absolute right-[-10%] top-[65%] -translate-y-1/2 w-[45%] h-[80%] z-0 pointer-events-none flex items-center justify-end">
        <div className="relative w-full h-full max-w-[600px] aspect-square transform scale-100 lg:scale-90">
          <video
            src="https://framerusercontent.com/assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain opacity-70"
          />
        </div>
      </div>

      <div className="container relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-[750px] flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1] tracking-[-0.03em] text-white font-display">
                Turning Business into<br />
                <span className="text-gradient">AI-Powered Machine.</span>
              </h1>
              <p className="text-[14px] md:text-[16px] text-[#9898b0] leading-[1.6] max-w-[500px] font-sans">
                A result-focused design partner to help you{" "}
                <span className="text-white font-medium">automate workflows, optimize operations</span>, and scale faster{" "}
                <span className="text-white font-medium">with AI solutions</span>.
              </p>
            </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 mt-4">
            {/* CTA Button with Glow Effect (No ring) */}
            <a
              href="#contact"
              className="cta-glow-effect group relative flex items-center gap-4 bg-[rgba(138,123,255,0.08)] border border-[rgba(255,255,255,0.12)] hover:border-[#8a7bff]/60 px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/zHCZ7ETiGeAbyYxBCzu0jEo2WB0-1.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-white font-bold text-[17px] tracking-tight">
                Get a Free AI Strategy Session
              </span>
              <div className="w-8 h-8 rounded-full bg-[#8a7bff] flex items-center justify-center opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute -right-12">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </a>

            {/* Testimonial Scroller - Better Spacing and Alignment */}
            <div className="relative h-[64px] min-w-[300px] flex items-center pl-8 border-l border-white/10 hidden lg:flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  <p className="text-[#cfe4ff] text-[17px] font-medium leading-[1.3] italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="text-[#9898b0] text-[12px] mt-2.5 uppercase tracking-widest font-bold opacity-80">
                    {testimonials[currentTestimonial].name} <span className="mx-2 opacity-30">—</span> {testimonials[currentTestimonial].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
