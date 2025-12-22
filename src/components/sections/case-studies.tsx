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

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.2, 0.4], ["blur(0px)", "blur(4px)", "blur(12px)"]);

  return (
    <section ref={containerRef} className="relative bg-[#030312] min-h-[400vh] pb-[150px]" id="case-studies">
      {/* Sticky Title Layer */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            filter: titleBlur
          }}
          className="relative px-6 text-center"
        >
          <h2 className="text-[10vw] md:text-[120px] lg:text-[160px] font-bold text-white tracking-[-0.05em] leading-[0.9] max-w-[1400px] mx-auto">
            See Our Work <br />
            <span className="text-gradient">in Action</span>
          </h2>
        </motion.div>
      </div>

      {/* Tiles Layer - Slides Over the title */}
      <div className="relative z-20 -mt-[40vh] container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col md:flex-row items-stretch bg-[#0b0b21] border border-[rgba(255,255,255,0.08)] rounded-[32px] overflow-hidden hover:border-[#8a7bff]/30 transition-all duration-500 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Content Side (Left) */}
              <div className="flex-[1.2] p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[#9898b0] font-mono text-[14px] font-medium tracking-tighter">
                    [ {project.id} ]
                  </span>
                </div>
                
                <h3 className="text-[32px] md:text-[44px] xl:text-[52px] font-bold leading-[1.1] text-white mb-8 group-hover:text-[#8a7bff] transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-[#9898b0] text-[18px] md:text-[20px] leading-[1.6] mb-10 max-w-[540px]">
                  {project.description.split(project.description.includes("boosted") ? "boosted" : "cut").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-white font-bold">{project.description.includes("boosted") ? "boosted" : "cut"}</span>}
                    </React.Fragment>
                  ))}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border border-white/10 text-[13px] font-medium text-[#9898b0] hover:text-white hover:border-[#8a7bff]/40 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side (Right) */}
              <div className="flex-1 relative min-h-[350px] md:min-h-[500px] bg-[#050518] flex items-center justify-center p-8 overflow-hidden">
                {/* HUD Elements */}
                <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/10" />
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/10" />
                
                <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8a7bff] animate-pulse" />
                    <span className="text-[#8a7bff] font-mono text-[10px] tracking-widest font-black">SYSTEM_SCAN</span>
                  </div>
                  <span className="text-white/20 text-[24px] md:text-[32px] font-display font-light tracking-[0.3em] uppercase">
                    {project.brand}
                  </span>
                </div>

                <motion.div 
                  className="relative w-[120%] h-full transform translate-x-10"
                  whileHover={{ scale: 1.05, x: 20 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-contain"
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
