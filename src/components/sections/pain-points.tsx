"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const painPoints = [
  {
    text: "You need AI, but don't know where to start",
    position: { top: "15%", left: "15%" },
    scrollRange: [0, 0.4],
  },
  {
    text: "Scaling is hard without automation",
    position: { top: "20%", right: "12%" },
    scrollRange: [0.1, 0.5],
  },
  {
    text: "High operational costs reduce profits",
    position: { bottom: "25%", left: "12%" },
    scrollRange: [0.2, 0.6],
  },
  {
    text: "Repetitive tasks are slowing you down",
    position: { bottom: "20%", right: "15%" },
    scrollRange: [0.3, 0.7],
  },
  {
    text: "Losing leads due to slow response times",
    position: { top: "45%", left: "8%" },
    scrollRange: [0.4, 0.8],
  },
  {
    text: "Manual data entry is prone to errors",
    position: { bottom: "10%", right: "20%" },
    scrollRange: [0.5, 0.9],
  },
];

const CornerBracket = () => {
  const bracketSize = "w-2 h-2";
  const borderColor = "border-white/20";
  return (
    <>
      <div className={`absolute -top-1 -left-1 ${bracketSize} border-t border-l ${borderColor}`} />
      <div className={`absolute -bottom-1 -right-1 ${bracketSize} border-b border-r ${borderColor}`} />
    </>
  );
};

interface PainPointItemProps {
  item: typeof painPoints[0];
  containerProgress: MotionValue<number>;
}

const PainPointItem = ({ item, containerProgress }: PainPointItemProps) => {
  const [start, end] = item.scrollRange;
  
  const opacity = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.9, 1, 1, 0.9]
  );

  const blur = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
  );

  const yOffset = useTransform(
    containerProgress,
    [start, end],
    [30, -30]
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
      className="absolute p-4 z-20"
    >
      <div className="relative px-6 py-4 bg-white/[0.02] backdrop-blur-[2px] rounded-sm">
        <CornerBracket />
        <p className="text-white/80 text-[18px] md:text-[22px] font-light max-w-[280px] leading-[1.4] tracking-tight">
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

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#030312] overflow-visible">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8A7BFF]/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Sticky Central Title */}
        <motion.div 
          style={{ 
            opacity: titleOpacity,
            scale: titleScale
          }}
          className="relative z-10 text-center"
        >
          <h2 className="text-[14vw] md:text-[100px] lg:text-[130px] font-medium text-white tracking-[-0.04em] leading-tight">
             Is This <span className="text-[#8A7BFF] drop-shadow-[0_0_30px_rgba(138,123,255,0.3)]">You?</span>
          </h2>
        </motion.div>

        {/* Scattered Pain Points */}
        <div className="absolute inset-0 w-full h-full">
          {painPoints.map((item, index) => (
            <PainPointItem 
              key={index} 
              item={item} 
              containerProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Ambient Moving Glows */}
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#8A7BFF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
