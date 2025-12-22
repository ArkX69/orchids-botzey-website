"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const painPoints = [
  {
    text: "You need AI, but don't know where to start",
    position: { top: "18%", left: "18%" },
    scrollRange: [0, 0.35],
  },
  {
    text: "Scaling is hard without automation",
    position: { top: "25%", right: "15%" },
    scrollRange: [0.1, 0.45],
  },
  {
    text: "High operational costs reduce profits",
    position: { bottom: "30%", left: "12%" },
    scrollRange: [0.2, 0.55],
  },
  {
    text: "Repetitive tasks are slowing you down",
    position: { bottom: "25%", right: "18%" },
    scrollRange: [0.3, 0.65],
  },
  {
    text: "Losing leads due to slow response times",
    position: { top: "48%", left: "5%" },
    scrollRange: [0.4, 0.75],
  },
  {
    text: "Manual data entry is prone to errors",
    position: { bottom: "12%", right: "22%" },
    scrollRange: [0.5, 0.85],
  },
  {
    text: "Your competition is moving faster with AI",
    position: { top: "10%", right: "28%" },
    scrollRange: [0.15, 0.5],
  },
  {
    text: "Systems don't talk to each other",
    position: { bottom: "15%", left: "25%" },
    scrollRange: [0.45, 0.8],
  },
];

const CornerBracket = () => {
  const bracketSize = "w-4 h-4";
  const borderColor = "border-white/20";
  return (
    <>
      <div className={`absolute -top-[1px] -left-[1px] ${bracketSize} border-t border-l ${borderColor} rounded-tl-[2px]`} />
      <div className={`absolute -bottom-[1px] -right-[1px] ${bracketSize} border-b border-r ${borderColor} rounded-br-[2px]`} />
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
    [0.85, 1, 1, 0.85]
  );

  const blur = useTransform(
    containerProgress,
    [start, start + 0.1, end - 0.1, end],
    ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]
  );

  const yOffset = useTransform(
    containerProgress,
    [start, end],
    [80, -80]
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
      className="absolute p-4 z-20 pointer-events-none"
    >
      <div className="relative px-8 py-6 bg-white/[0.02] backdrop-blur-[2px] rounded-[12px] border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
        <CornerBracket />
        <p className="text-[#cfe4ff]/90 text-[18px] md:text-[22px] font-medium max-w-[280px] leading-[1.2] tracking-tight text-center">
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

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#030312] overflow-visible">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8A7BFF]/5 via-transparent to-transparent pointer-events-none" />
        
          {/* Sticky Central Title */}
          <motion.div 
            style={{ 
              opacity: titleOpacity,
              scale: titleScale
            }}
            className="relative z-10 text-center pointer-events-none"
          >
            <h2 className="text-[12vw] md:text-[140px] lg:text-[180px] font-bold text-white tracking-[-0.05em] leading-[0.9] mb-4">
               Is This <br /><span className="text-[#8A7BFF] drop-shadow-[0_0_60px_rgba(138,123,255,0.3)]">You?</span>
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
        <div className="absolute top-[15%] left-[5%] w-[30vw] h-[30vw] bg-[#8A7BFF]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[30%] w-[25vw] h-[25vw] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
