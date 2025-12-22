"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";

/**
 * PainPoints Section
 * 
 * "Is This You?" title stays sticky in the center of the viewport.
 * Common business pain points scroll vertically past the central title.
 * Each item highlights and unblurs as it hits the vertical center.
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
];

export default function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the y transform for the entire list
  const listY = useTransform(smoothProgress, [0, 1], ["80vh", "-120vh"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[600vh] bg-[#050510] overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Sticky Central Title */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
            }}
            className="text-center"
          >
            <span className="text-[#8D7AFA] font-display font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
              [ THE CHALLENGES ]
            </span>
            <h2 className="text-[56px] md:text-[84px] font-display font-bold text-white tracking-tighter leading-none">
              Is This You?
            </h2>
          </motion.div>
        </div>

        {/* Scrolling Pain Points List */}
        <div className="relative w-full max-w-4xl z-10">
          <motion.div 
            style={{ y: listY }}
            className="flex flex-col gap-[40vh] items-center"
          >
            {PAIN_POINTS.map((point, index) => (
              <PainPointItem 
                key={index} 
                text={point} 
                index={index} 
                total={PAIN_POINTS.length} 
                progress={smoothProgress} 
              />
            ))}
          </motion.div>
        </div>

        {/* Global Masks for Fading */}
        <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#050510] to-transparent z-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#050510] to-transparent z-30 pointer-events-none" />
        
        {/* Subtle Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8D7AFA]/10 rounded-full blur-[160px] pointer-events-none z-0" />
      </div>
    </section>
  );
}

function PainPointItem({ 
  text, 
  index, 
  total, 
  progress 
}: { 
  text: string; 
  index: number; 
  total: number; 
  progress: MotionValue<number>;
}) {
  const step = 0.8 / (total - 1);
  const center = 0.1 + index * step;
  
  const opacity = useTransform(
    progress,
    [center - 0.12, center, center + 0.12],
    [0.1, 1, 0.1]
  );

  const blurValue = useTransform(
    progress,
    [center - 0.12, center, center + 0.12],
    [10, 0, 10]
  );

  const scale = useTransform(
    progress,
    [center - 0.12, center, center + 0.12],
    [0.85, 1.15, 0.85]
  );

  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        filter
      }}
      className="w-full text-center px-6"
    >
      <div className="relative px-10 py-8 glass-card border border-white/5 rounded-3xl inline-block max-w-2xl">
         <p className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
