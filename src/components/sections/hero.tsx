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
    <section className="relative w-full min-h-[90vh] flex items-center overflow-x-hidden bg-[#030312] pt-32 pb-20">
      {/* Background Ray/Glow Mask */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/Bc7eub42bMX1SkZz7JRmuQ7T8-1.png"
            fill
            alt=""
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="container relative z-10 w-full max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-[52px] md:text-[88px] font-bold leading-[1.05] tracking-[-0.03em] text-white font-display">
              Turning Business into<br />
              <span className="text-gradient">AI-Powered Machine.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#9898b0] leading-[1.6] max-w-[650px] font-sans">
              A result-focused design partner to help you{" "}
              <span className="text-white font-medium">automate workflows, optimize operations</span>, and scale faster{" "}
              <span className="text-white font-medium">with AI solutions</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mt-4">
            {/* CTA Button with Bolt Animation */}
            <a
              href="#contact"
              className="bolt-animation group relative flex items-center gap-3 bg-[rgba(138,123,255,0.08)] border border-[rgba(255,255,255,0.1)] hover:border-[#8a7bff]/50 px-7 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/zHCZ7ETiGeAbyYxBCzu0jEo2WB0-1.png"
                  alt="Avatar"
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </div>
              <span className="text-white font-semibold text-[17px] tracking-tight">
                Get a Free AI Strategy Session
              </span>
              <div className="w-8 h-8 rounded-full bg-[#8a7bff] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute -right-12">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </a>

            {/* Testimonial Scroller */}
            <div className="relative h-[60px] min-w-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <p className="text-[#cfe4ff] text-[15px] font-medium leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="text-[#9898b0] text-[12px] mt-1 uppercase tracking-[0.1em] font-bold">
                    {testimonials[currentTestimonial].name} <span className="mx-1 opacity-40">—</span> {testimonials[currentTestimonial].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Animation aligned as in screenshot */}
        <div className="lg:col-span-4 relative h-[400px] lg:h-[700px] w-full">
          <div className="absolute top-1/2 left-0 lg:-left-20 lg:-top-10 w-[120%] lg:w-[180%] h-full lg:h-[120%] transform -translate-y-1/2 pointer-events-none">
            <video
              src="https://framerusercontent.com/assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
