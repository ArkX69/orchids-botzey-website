"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useScroll, useTransform, motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "AI for Lead Qualification – SaaS Company",
    description: "AI-driven lead scoring boosted conversions by 40% for a SaaS company, reducing wasted time and doubling recurring revenue.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/XwjkWjX6323ETn2EdkLiASUF7f0-26.webp",
    alt: "Laptop displaying Batavia project",
    brand: "BATAVIA"
  },
  {
    id: "02",
    title: "AI Workflow Automation – Finance Firm",
    description: "AI automation cut data processing time by 80% and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/jJrkFq5ug7TmqveSkRDGcIPkQ8-27.webp",
    alt: "Laptop displaying Mandala project",
    brand: "MANDALA"
  },
  {
    id: "03",
    title: "AI-Powered Customer Support for E-Commerce",
    description: "AI chatbot reduced support costs by 60% and tripled response speed for an e-commerce brand. See how automation improved customer experience.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/uYiu7pHP9kLmQxoEZgIIpEzXn7w-28.webp",
    alt: "Laptop mockup project",
    brand: "KRESNA"
  }
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 0.5, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.7]);
    const titleBlur = useTransform(scrollYProgress, [0, 0.05, 0.15], ["blur(0px)", "blur(10px)", "blur(30px)"]);
    const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

    return (
      <section ref={containerRef} className="relative bg-[#030312] min-h-[400vh]" id="case-studies">
        {/* Sticky Title Layer - Low Z */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <motion.div
            style={{
              opacity: titleOpacity,
              scale: titleScale,
              filter: titleBlur,
              y: titleY
            }}
            className="relative px-6 text-center"
          >
            <h2 className="text-[8vw] md:text-[70px] lg:text-[84px] font-bold text-white tracking-[-0.05em] leading-[0.9] max-w-[1100px] mx-auto uppercase">
                 See Our Work <br />
                 <span className="text-[#8a7bff]">in Action</span>
               </h2>
           </motion.div>
         </div>
 
         {/* Tiles Layer - Slides Over the title with High Z */}
         <div className="relative z-50 mt-0 container mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px] pb-[120px]">
           <div className="flex flex-col gap-20 md:gap-24">
             {projects.map((project, index) => (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, y: 150 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="group relative flex flex-col md:flex-row items-stretch bg-[#0b0b21] border border-[rgba(255,255,255,0.08)] rounded-[24px] md:rounded-[32px] overflow-hidden hover:border-[#8a7bff]/30 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
               >
                 {/* HUD Elements */}
                 <div className="absolute top-6 left-6 flex items-center gap-3 z-30">
                   <span className="text-[#8a7bff] font-mono text-[11px] font-bold tracking-[0.2em]">[ 0{index + 1} ]</span>
                   <div className="h-[1px] w-6 bg-[#8a7bff]/30" />
                 </div>
 
                 {/* Content Side (Left) */}
                 <div className="flex-[1.2] p-8 md:p-12 md:pr-6 flex flex-col justify-center relative">
                   <div className="mb-6 md:mb-8 mt-4">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8a7bff]/10 border border-[#8a7bff]/20 mb-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#8a7bff]" />
                       <span className="text-[#8a7bff] font-mono text-[10px] tracking-widest uppercase font-bold">Live Project</span>
                     </div>
                   </div>
                   
                     <h3 className="text-[26px] md:text-[34px] lg:text-[38px] font-bold leading-[1.05] text-white mb-6 group-hover:tracking-tight transition-all duration-700">
                       {project.title}
                     </h3>
                     
                     <p className="text-[#9898b0] text-[14px] md:text-[16px] leading-[1.6] mb-8 max-w-[450px]">
                       {project.description}
                     </p>
 
                   <div className="flex flex-wrap gap-2.5">
                     {project.tags.map((tag) => (
                       <span
                         key={tag}
                         className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[12px] font-semibold text-[#c0c0cf] hover:bg-white/10 hover:text-white transition-all cursor-default uppercase tracking-wider"
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
 
                 {/* Image side (Right) */}
                 <div className="flex-1 relative min-h-[350px] md:min-h-[500px] bg-[#050518] flex items-center justify-center p-6 md:p-12 overflow-hidden">
                   {/* Digital Grid Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(138,123,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(138,123,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
                   
                   {/* Scanner HUD */}
                   <div className="absolute top-10 right-10 z-20 flex items-center gap-3">
                     <div className="flex flex-col items-end gap-1">
                       <span className="text-[#8a7bff] font-mono text-[9px] tracking-widest font-black uppercase">SYSTEM_SCAN</span>
                       <div className="w-20 h-[1.5px] bg-[#8a7bff]/20 relative overflow-hidden">
                         <motion.div 
                           className="absolute inset-0 bg-[#8a7bff]"
                           animate={{ x: ["-100%", "100%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         />
                       </div>
                     </div>
                   </div>
 
                   <div className="absolute bottom-10 left-10 flex flex-col gap-1 z-10">
                     <span className="text-white/30 text-[24px] md:text-[36px] font-display font-light tracking-[0.4em] uppercase leading-none opacity-50">
                       {project.brand}
                     </span>
                   </div>

                  <motion.div 
                    className="relative w-[120%] h-full z-10"
                    whileHover={{ scale: 1.05, rotateY: 10, rotateX: -4, dropShadow: "0 40px 80px rgba(0,0,0,0.9)" }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>


        {/* See More CTA */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 px-10 py-5 bg-[rgba(138,123,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full text-white font-bold hover:bg-[#8a7bff]/10 hover:border-[#8a7bff]/40 transition-all">
            See More Case Studies
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
