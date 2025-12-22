"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const painPoints = [
  {
    text: "You need AI, but don’t know where to start",
    x: "-20%",
    y: "-30%",
  },
  {
    text: "Scaling is hard without automation",
    x: "25%",
    y: "-15%",
  },
  {
    text: "High operational costs reduce profits",
    x: "-25%",
    y: "15%",
  },
  {
    text: "Repetitive tasks slow you down",
    x: "20%",
    y: "35%",
  },
];

interface PainPointProps {
  text: string;
  x: string;
  y: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const PainPointItem = ({ text, x, y, index, scrollYProgress }: PainPointProps) => {
  // Each item has a specific scroll range
  const start = index * 0.15;
  const end = start + 0.4;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  const blur = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      style={{
        opacity,
        filter: blur,
        scale,
        left: `calc(50% + ${x})`,
        top: `calc(50% + ${y})`,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
    >
      <div className="flex items-center gap-4 whitespace-nowrap">
        <div className="w-1 h-8 bg-[#8A7BFF]/30 rounded-full" />
        <h3 className="text-[24px] md:text-[32px] font-medium text-white tracking-tight">
          {text}
        </h3>
        <div className="w-1 h-8 bg-[#8A7BFF]/30 rounded-full" />
      </div>
    </motion.div>
  );
};

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-[#030312]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Sticky Background Title */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
          }}
          className="relative z-10"
        >
          <h2 className="text-[60px] md:text-[120px] font-bold text-white tracking-tighter text-center">
            Is This You?
          </h2>
        </motion.div>

        {/* Floating Pain Points */}
        <div className="absolute inset-0 w-full h-full">
          {painPoints.map((point, idx) => (
            <PainPointItem
              key={idx}
              index={idx}
              text={point.text}
              x={point.x}
              y={point.y}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A7BFF]/5 blur-[120px] rounded-full -z-10" />
      </div>
    </section>
  );
}
