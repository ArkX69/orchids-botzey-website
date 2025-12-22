"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const painPoints = [
  {
    text: "You need AI, but don’t know where to start",
    align: "left",
  },
  {
    text: "Scaling is hard without automation",
    align: "right",
  },
  {
    text: "High operational costs reduce profits",
    align: "left",
  },
  {
    text: "Repetitive tasks slow you down",
    align: "right",
  },
];

interface PainPointProps {
  text: string;
  align: "left" | "right";
  index: number;
  containerProgress: MotionValue<number>;
}

const PainPointCard = ({ text, align, index, containerProgress }: PainPointProps) => {
  // Each item has a specific range of the scroll where it's active
  const start = index * 0.2;
  const end = start + 0.3;
  
  // Opacity: fades in and then out
  const opacity = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.1, 1, 1, 0.1]
  );

  // Blur: unblurs and then re-blurs
  const blur = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  // Vertical movement for a subtle floating effect
  const y = useTransform(
    containerProgress,
    [start, end],
    [40, -40]
  );

  return (
    <motion.div
      style={{
        opacity,
        filter: blur,
        y,
      }}
      className={`flex w-full mb-32 last:mb-0 ${
        align === 'right' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Left bracket decoration */}
        <div className="w-1.5 h-12 bg-primary/20 rounded-full hidden md:block" />
        
        <h3 className="text-[28px] md:text-[42px] font-medium leading-[1.3] text-foreground tracking-tight max-w-[600px]">
          {text}
        </h3>

        {/* Right bracket decoration */}
        <div className="w-1.5 h-12 bg-primary/20 rounded-full hidden md:block" />
      </div>
    </motion.div>
  );
};

export default function PainPoints() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background"
      style={{ height: '300vh' }} // Extended height for scroll room
    >
      {/* Sticky Header */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        
        {/* "Is This You?" Title - slightly fades as we scroll through points */}
        <motion.div 
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
            y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
          }}
          className="absolute top-24 z-10"
        >
          <h2 className="text-[32px] md:text-[48px] font-semibold tracking-[-0.01em] text-white">
            Is This You?
          </h2>
        </motion.div>

        {/* The scrolling items container */}
        <div className="container relative w-full h-full flex flex-col justify-center px-6 md:px-12">
          <div className="relative w-full max-w-5xl mx-auto pointer-events-auto">
            {painPoints.map((point, idx) => (
              <PainPointCard
                key={idx}
                index={idx}
                text={point.text}
                align={point.align as "left" | "right"}
                containerProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Ambient background glow that follows scroll subtly */}
        <motion.div 
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
          className="absolute -z-10 w-[800px] h-[800px] bg-[#8a7bff]/10 blur-[120px] rounded-full"
        />
      </div>
    </section>
  );
}