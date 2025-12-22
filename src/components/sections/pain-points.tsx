"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

/**
 * PainPoints Section
 * 
 * A sticky scroll section where four specific business pain points
 * fade and blur into view sequentially as the user scrolls.
 * Uses Framer Motion for scroll-linked animations.
 */

const PAIN_POINTS = [
  {
    id: "blur-text-1",
    text: "You need AI, but don’t know where to start",
  },
  {
    id: "blur-text-2",
    text: "Scaling is hard without automation",
  },
  {
    id: "blur-text-3",
    text: "High operational costs reduce profits",
  },
  {
    id: "blur-text-4",
    text: "Repetitive tasks slow you down",
  },
];

const PainPointItem = ({ 
  text, 
  index, 
  total, 
  scrollYProgress 
}: { 
  text: string; 
  index: number; 
  total: number; 
  scrollYProgress: MotionValue<number> 
}) => {
  // We divide the scroll range (0-1) into stages for each item
  const sectionHeight = 1 / total;
  const start = index * sectionHeight;
  const end = (index + 1) * sectionHeight;
  
  // Custom ranges for entry fade/blur and exit fade/blur
  // This creates the "fade and blur into view sequentially" effect
  const opacity = useTransform(
    scrollYProgress,
    [start, start + sectionHeight * 0.4, end - sectionHeight * 0.4, end],
    [0, 1, 1, 0]
  );

  const blur = useTransform(
    scrollYProgress,
    [start, start + sectionHeight * 0.4, end - sectionHeight * 0.4, end],
    ["12px", "0px", "0px", "12px"]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + sectionHeight * 0.4, end - sectionHeight * 0.4, end],
    [0.9, 1, 1, 0.9]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + sectionHeight, end],
    [20, 0, -20]
  );

  return (
    <motion.div
      style={{
        opacity,
        filter: `blur(${blur.get()})`,
        scale,
        y,
        position: "absolute",
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        width: "100%",
      }}
      className="flex items-center justify-center px-6 text-center"
    >
      <div className="relative flex items-center gap-6 group">
        {/* Left border decoration (SVG from structure) */}
        <div className="hidden md:block opacity-20">
          <svg width="2" height="64" viewBox="0 0 2 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V64" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        <h3 className="text-[32px] md:text-[56px] font-display font-semibold leading-[1.1] tracking-tight text-white max-w-[800px]">
          {text}
        </h3>

        {/* Right border decoration (SVG from structure) */}
        <div className="hidden md:block opacity-20">
          <svg width="2" height="64" viewBox="0 0 2 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V64" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${PAIN_POINTS.length * 100}vh` }} // Make container long enough for sequential scroll
    >
      {/* Sticky Background & Title */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020210]">
        
        {/* Left Sticky Title "Is This You?" */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block z-10 pointer-events-none">
          <motion.h2 
            className="text-[48px] font-display font-semibold text-white/40 tracking-tight"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Is This You?
          </motion.h2>
        </div>

        {/* Center scrolling text container */}
        <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
          {/* Mobile Title */}
          <div className="lg:hidden absolute top-12 left-0 right-0 text-center">
            <h2 className="text-[24px] font-display font-semibold text-white/40 tracking-wider uppercase">
              Is This You?
            </h2>
          </div>

          <div className="relative w-full h-[400px]">
            {PAIN_POINTS.map((point, index) => (
              <PainPointItem 
                key={point.id} 
                text={point.text} 
                index={index} 
                total={PAIN_POINTS.length} 
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Atmospheric Glow (as per design spec) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(157, 123, 255, 0.03) 0%, transparent 70%)",
          }}
        />
      </section>
    </div>
  );
}