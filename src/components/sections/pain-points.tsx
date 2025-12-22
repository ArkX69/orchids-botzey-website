"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const painPoints = [
  "You're overwhelmed by repetitive manual tasks",
  "Scaling feels impossible without more headcount",
  "Your team is burnt out from administrative work",
  "Data is scattered across too many different tools",
  "Customer response times are slower than expected",
  "You suspect AI could help but don't know where to start",
  "Operational costs are eating into your margins",
  "You're losing leads because of slow follow-ups",
];

interface PainPointItemProps {
  text: string;
  index: number;
  containerProgress: MotionValue<number>;
}

const PainPointItem = ({ text, index, containerProgress }: PainPointItemProps) => {
  // We want each item to highlight when it passes through the center of the viewport
  // The scroll ranges are divided by the number of items
  const itemCount = painPoints.length;
  const start = index / itemCount;
  const end = (index + 1) / itemCount;
  const center = (start + end) / 2;

  // Use a slightly wider range for the highlight effect
  const opacity = useTransform(
    containerProgress,
    [center - 0.1, center, center + 0.1],
    [0.2, 1, 0.2]
  );

  const scale = useTransform(
    containerProgress,
    [center - 0.1, center, center + 0.1],
    [0.9, 1.1, 0.9]
  );

  const blur = useTransform(
    containerProgress,
    [center - 0.1, center, center + 0.1],
    ["blur(4px)", "blur(0px)", "blur(4px)"]
  );

  return (
    <motion.div
      style={{ opacity, scale, filter: blur }}
      className="h-[150px] flex items-center justify-center px-6"
    >
      <div className="flex items-center gap-6">
        <div className="w-1.5 h-12 bg-gradient-to-b from-[#8A7BFF] to-transparent rounded-full shadow-[0_0_15px_rgba(138,123,255,0.5)]" />
        <p className="text-[20px] md:text-[36px] font-semibold text-white text-center max-w-4xl tracking-tight leading-tight">
          {text}
        </p>
        <div className="w-1.5 h-12 bg-gradient-to-t from-[#8A7BFF] to-transparent rounded-full shadow-[0_0_15px_rgba(138,123,255,0.5)]" />
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

  // Calculate the vertical movement of the list
  // The list moves upwards as we scroll through the section
  const y = useTransform(scrollYProgress, [0, 1], ["40vh", "-40vh"]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#030312]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Is This You? title - Sticky in background, slightly larger and dimmed */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[12vw] md:text-[150px] font-black text-white/5 tracking-tighter uppercase select-none whitespace-nowrap">
            Is This You?
          </h2>
        </div>

        {/* The scrolling pain points list */}
        <motion.div 
          style={{ y }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {painPoints.map((text, index) => (
            <PainPointItem
              key={index}
              text={text}
              index={index}
              containerProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        {/* Center highlight guide / mask */}
        <div className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center">
             {/* Large "Is This You?" centered precisely */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-[60px] md:text-[120px] font-black text-white/10 tracking-tighter uppercase whitespace-nowrap">
                    Is This You?
                </h2>
             </div>
             
             {/* Glowing lines to define the active area */}
             <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#8A7BFF]/30 to-transparent mb-32" />
             <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#8A7BFF]/30 to-transparent mt-32" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#8A7BFF]/5 blur-[150px] rounded-full -z-10" />
      </div>
    </section>
  );
}
