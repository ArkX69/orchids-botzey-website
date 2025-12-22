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

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <section ref={containerRef} className="relative bg-[#030312] min-h-[400vh] pb-[120px]" id="case-studies">
      {/* Sticky Background Title */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale
          }}
          className="relative z-0 px-6 text-center"
        >
          <h2 className="text-[12vw] md:text-[140px] lg:text-[180px] font-bold text-white tracking-[-0.05em] leading-[0.9] max-w-[1400px] mx-auto">
            See Our Work <br />
            <span className="text-[#8a7bff] drop-shadow-[0_0_60px_rgba(138,123,255,0.3)] opacity-80">in Action</span>
          </h2>
        </motion.div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 -mt-[50vh] container mx-auto px-6 max-w-[1200px]">
        {/* Project Cards */}
        <div className="flex flex-col gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col lg:flex-row items-center bg-[#0b0b21]/80 backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-[32px] overflow-hidden hover:border-[rgba(138,123,255,0.2)] transition-colors duration-500"
            >
              {/* Content Side */}
              <div className="flex-1 p-10 md:p-16 flex flex-col">
                <div className="mb-4">
                  <span className="text-[#8a7bff] font-mono text-[14px] tracking-[0.2em] font-medium opacity-80">
                    [ {project.id} ]
                  </span>
                </div>
                
                <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.1] text-white mb-8 group-hover:text-[#8a7bff] transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-[#9898b0] text-[18px] md:text-[20px] leading-[1.6] mb-12 max-w-[520px]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-[14px] font-medium text-[#9898b0] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#08081a] overflow-hidden">
                {/* Draped fabric background effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,123,255,0.1),transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
                
                {/* Project Name Subtle Overlay */}
                <div className="absolute bottom-8 left-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-[18px] font-light tracking-[0.4em] uppercase">
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
