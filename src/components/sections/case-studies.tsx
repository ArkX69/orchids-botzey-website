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
    alt: "Laptop displaying Batavia project"
  },
  {
    id: "02",
    title: "AI Workflow Automation – Finance Firm",
    description: "AI automation cut data processing time by 80% and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/jJrkFq5ug7TmqveSkRDGcIPkQ8-27.webp",
    alt: "Laptop displaying Mandala project"
  },
  {
    id: "03",
    title: "AI-Powered Customer Support for E-Commerce",
    description: "AI chatbot reduced support costs by 60% and tripled response speed for an e-commerce brand. See how automation improved customer experience.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/uYiu7pHP9kLmQxoEZgIIpEzXn7w-28.webp",
    alt: "Laptop mockup project"
  }
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.2, 0.4], ["blur(0px)", "blur(5px)", "blur(15px)"]);

  return (
    <section ref={containerRef} className="relative bg-[#030312] min-h-[500vh] pb-[150px]" id="case-studies">
      {/* Sticky Background Title */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,123,255,0.08),transparent_70%)]" />
        
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            filter: titleBlur
          }}
          className="relative z-0 px-6 text-center"
        >
          <h2 className="text-[12vw] md:text-[140px] lg:text-[180px] font-bold text-white tracking-[-0.05em] leading-[0.9] max-w-[1400px] mx-auto filter drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            See Our Work <br />
            <span className="text-gradient drop-shadow-[0_0_80px_rgba(138,123,255,0.4)]">in Action</span>
          </h2>
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 -mt-[40vh] container mx-auto px-6 max-w-[1240px]">
        {/* Project Cards */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 150, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col lg:flex-row items-stretch bg-[#0b0b21]/40 backdrop-blur-xl border border-[rgba(255,255,255,0.06)] rounded-[40px] overflow-hidden hover:border-[rgba(138,123,255,0.3)] transition-all duration-700 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            >
              {/* Decorative Corner Brackets for HUD look */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#8a7bff]/40 rounded-tl" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#8a7bff]/40 rounded-br" />

              {/* Content Side */}
              <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 rounded bg-[#8a7bff]/10 border border-[#8a7bff]/20 text-[#8a7bff] font-mono text-[12px] tracking-widest font-bold">
                    CASE STUDY {project.id}
                  </span>
                  <div className="h-[1px] w-12 bg-white/10" />
                </div>
                
                <h3 className="text-[36px] md:text-[48px] font-bold leading-[1.1] text-white mb-8 group-hover:text-gradient transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="text-[#9898b0] text-[18px] md:text-[21px] leading-[1.6] mb-12 max-w-[540px] font-sans">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-[13px] font-bold text-white/80 tracking-wider uppercase backdrop-blur-md hover:bg-[#8a7bff]/10 hover:border-[#8a7bff]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side with Hover Effects */}
              <div className="flex-1 relative w-full h-full min-h-[450px] lg:min-h-[600px] bg-[#050518] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(138,123,255,0.15),transparent_70%)]" />
                
                {/* Floating elements background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
                  <div className="absolute bottom-20 left-10 w-20 h-20 border border-[#8a7bff]/20 rounded-lg rotate-45" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-14">
                  <motion.div 
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
                
                {/* HUD Data Overlay */}
                <div className="absolute bottom-10 left-10 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8a7bff] animate-pulse" />
                    <span className="text-[#8a7bff] font-mono text-[10px] tracking-widest font-black uppercase">
                      SYSTEM_SCAN_ACTV
                    </span>
                  </div>
                  <span className="text-white/40 text-[22px] font-display font-light tracking-[0.4em] uppercase">
                    {project.id === "01" ? "BATAVIA" : project.id === "02" ? "MANDALA" : "KRESNA"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-24 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#0b0b21] border border-[rgba(255,255,255,0.1)] rounded-full text-white text-[18px] font-bold hover:border-[#8a7bff] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">See More Work</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8a7bff]/0 via-[#8a7bff]/10 to-[#8a7bff]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </section>
  );
}
