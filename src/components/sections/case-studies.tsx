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
      <div className="relative z-20 -mt-[30vh] md:-mt-[40vh] container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col md:flex-row items-stretch bg-[#0b0b21] border border-[rgba(255,255,255,0.06)] rounded-[32px] md:rounded-[40px] overflow-hidden hover:border-[#8a7bff]/20 transition-all duration-700 shadow-[0_32px_96px_rgba(0,0,0,0.7)]"
            >
              {/* Content Side (Left) */}
              <div className="flex-[1.1] p-10 md:p-14 md:pr-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 md:mb-10">
                  <span className="text-[#9898b0]/60 font-mono text-[16px] font-medium tracking-tighter">
                    [ {project.id} ]
                  </span>
                </div>
                
                <h3 className="text-[34px] md:text-[46px] lg:text-[54px] font-bold leading-[1.05] text-white mb-8 group-hover:text-[#8a7bff] transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-[#9898b0] text-[18px] md:text-[20px] leading-[1.5] mb-10 max-w-[500px]">
                  {project.description.split("boosted").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part.split("cut").map((subPart, j, subArr) => (
                        <React.Fragment key={j}>
                          {subPart}
                          {j < subArr.length - 1 && <span className="text-white font-bold underline decoration-[#8a7bff]/40">cut</span>}
                        </React.Fragment>
                      ))}
                      {i < arr.length - 1 && <span className="text-white font-bold underline decoration-[#8a7bff]/40">boosted</span>}
                    </React.Fragment>
                  ))}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[14px] font-medium text-[#c0c0cf] hover:text-white transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side (Right) */}
              <div className="flex-1 relative min-h-[400px] md:min-h-[550px] bg-[#050518] flex items-center justify-center p-8 md:p-12 overflow-hidden">
                {/* Image area glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(138,123,255,0.05),transparent_70%)]" />
                
                <div className="absolute bottom-12 left-12 flex flex-col gap-1.5 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8a7bff] animate-pulse shadow-[0_0_10px_#8a7bff]" />
                    <span className="text-[#8a7bff] font-mono text-[10px] tracking-[0.2em] font-black uppercase">SYSTEM_SCAN</span>
                  </div>
                  <span className="text-white/20 text-[28px] md:text-[40px] font-display font-light tracking-[0.35em] uppercase leading-none">
                    {project.brand}
                  </span>
                </div>

                <motion.div 
                  className="relative w-[115%] h-full"
                  whileHover={{ scale: 1.04, rotateY: 8, rotateX: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
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
