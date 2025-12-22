"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const painPoints = [
  {
    text: "You need AI, but don't know where to start",
    position: { top: "15%", left: "15%" },
    delay: 0,
  },
  {
    text: "Scaling is hard without automation",
    position: { top: "25%", right: "15%" },
    delay: 0.1,
  },
  {
    text: "High operational costs reduce profits",
    position: { bottom: "20%", left: "20%" },
    delay: 0.2,
  },
  {
    text: "Repetitive tasks are slowing you down",
    position: { bottom: "30%", right: "10%" },
    delay: 0.3,
  },
  {
    text: "Losing leads due to slow response times",
    position: { top: "45%", left: "5%" },
    delay: 0.4,
  },
  {
    text: "Manual data entry is prone to errors",
    position: { bottom: "10%", right: "25%" },
    delay: 0.5,
  },
];

const CornerBracket = () => (
  <>
    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40" />
    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40" />
  </>
);

interface PainPointItemProps {
  item: typeof painPoints[0];
  containerProgress: MotionValue<number>;
  index: number;
}

const PainPointItem = ({ item, containerProgress, index }: PainPointItemProps) => {
  // Each item has its own scroll range where it is most visible
  const start = index * 0.1;
  const end = start + 0.4;
  
  const opacity = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.8, 1, 1, 0.8]
  );

  const blur = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  const yOffset = useTransform(
    containerProgress,
    [start, end],
    [50, -50]
  );

  return (
    <motion.div
      style={{ 
        opacity, 
        scale, 
        filter: blur,
        y: yOffset,
        ...item.position 
      }}
      className="absolute p-6 backdrop-blur-sm z-20"
    >
      <div className="relative px-6 py-4">
        <CornerBracket />
        <p className="text-white text-lg md:text-xl font-medium max-w-[250px] leading-snug">
          {item.text}
        </p>
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

  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#030312] overflow-visible">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Grid/Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Sticky Central Title */}
        <motion.div 
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="relative z-10 text-center"
        >
          <h2 className="text-[12vw] md:text-[80px] lg:text-[100px] font-bold text-white tracking-tight leading-tight">
            Is This <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">You?</span>
          </h2>
        </motion.div>

        {/* Scattered Pain Points */}
        <div className="absolute inset-0 w-full h-full">
          {painPoints.map((item, index) => (
            <PainPointItem 
              key={index} 
              item={item} 
              index={index}
              containerProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
