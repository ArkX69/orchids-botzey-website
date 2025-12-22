"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

/**
 * PainPoints Section
 * 
 * A sticky scroll section where common business problems are listed.
 * "Is This You?" stays sticky in the center while the problems scroll vertically.
 */

const PAIN_POINTS = [
  "You need AI, but don’t know where to start",
  "Scaling is hard without automation",
  "High operational costs reduce profits",
  "Repetitive tasks slow you down",
  "Manual data entry is prone to errors",
  "Customer support is overwhelmed",
  "Your team is burnt out from busywork",
  "Inconsistent lead follow-ups losing revenue",
  "Lack of data visibility into operations",
];

export default function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use spring for smoother scroll experience
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Total items + some padding for entry/exit
  const listY = useTransform(smoothProgress, [0, 1], ["40vh", "-60vh"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[500vh] bg-[#020210] overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Massive Background Text "IS THIS YOU?" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.h2 
            style={{
              opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 0.03, 0.03, 0]),
              scale: useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 1.1]),
            }}
            className="text-[120px] md:text-[240px] font-display font-bold text-white select-none tracking-tighter text-center leading-none whitespace-nowrap"
          >
            IS THIS YOU?
          </motion.h2>
        </div>

        {/* Foreground Title - Stays Sticky/Fixed in the center */}
        <div className="relative z-20 text-center mb-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-blue-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              The Challenges
            </span>
            <h3 className="text-[48px] md:text-[72px] font-display font-semibold text-white tracking-tight leading-tight">
              Is This You?
            </h3>
          </motion.div>
        </div>

        {/* Scrolling List Content */}
        <div className="relative w-full max-w-4xl h-[400px] z-10">
          <motion.div 
            style={{ y: listY }}
            className="flex flex-col gap-12 md:gap-24 items-center w-full"
          >
            {PAIN_POINTS.map((point, index) => {
              // Calculate specific scroll progress range for this item
              const totalItems = PAIN_POINTS.length;
              const sectionSize = 1 / totalItems;
              const center = index * sectionSize;
              
              // Map opacity based on proximity to center of viewport
              // These values need tuning based on the total list height vs viewport
              // Since the list moves from 40vh to -60vh, the items pass the center
              // at different times. 
              
              return (
                <PainPointItem 
                  key={index} 
                  text={point} 
                  index={index} 
                  total={totalItems} 
                  scrollYProgress={smoothProgress} 
                />
              );
            })}
          </motion.div>
        </div>

        {/* Masking Gradients for smooth fade in/out at top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#020210] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#020210] to-transparent z-20 pointer-events-none" />
        
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      </div>
    </section>
  );
}

function PainPointItem({ 
  text, 
  index, 
  total, 
  scrollYProgress 
}: { 
  text: string; 
  index: number; 
  total: number; 
  scrollYProgress: any 
}) {
  // We want each item to highlight (full opacity) when it's in the vertical center.
  // The list moves from 40vh to -60vh. 
  // An item at index `i` is at its center when scrollYProgress is roughly `index/total`.
  
  const start = index / total;
  const padding = 0.15;
  
  const opacity = useTransform(
    scrollYProgress,
    [start - padding, start, start + padding],
    [0.1, 1, 0.1]
  );

  const scale = useTransform(
    scrollYProgress,
    [start - padding, start, start + padding],
    [0.9, 1.05, 0.9]
  );

  const blur = useTransform(
    scrollYProgress,
    [start - padding, start, start + padding],
    ["4px", "0px", "4px"]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        filter: blur.get() ? `blur(${blur.get()})` : "none",
      }}
      className="w-full text-center px-6"
    >
      <div className="flex items-center justify-center gap-6">
        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <p className="text-2xl md:text-5xl font-display font-medium text-white tracking-tight max-w-3xl leading-tight">
          {text}
        </p>
        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>
    </motion.div>
  );
}
