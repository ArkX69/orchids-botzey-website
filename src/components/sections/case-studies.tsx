"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useScroll, useTransform, motion } from "framer-motion";

const projects = [
    {
      id: "01",
      title: "AI for Lead Qualification – SaaS Company",
      description: "AI-driven lead scoring <strong class='text-white font-bold'>boosted conversions by 40%</strong> for a SaaS company, reducing wasted time and doubling recurring revenue.",
      tags: ["Startup", "E-commerce"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/XwjkWjX6323ETn2EdkLiASUF7f0-26.webp",
      alt: "Laptop displaying Batavia project",
      brand: "BATAVIA"
    },
    {
      id: "02",
      title: "AI Workflow Automation – Finance Firm",
      description: "AI automation <strong class='text-white font-bold'>cut data processing time by 80%</strong> and <strong class='text-white font-bold'>sped up compliance approvals by 50%</strong> for a finance firm. Learn how AI improved efficiency.",
      tags: ["Startup", "E-commerce"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/jJrkFq5ug7TmqveSkRDGcIPkQ8-27.webp",
      alt: "Laptop displaying Mandala project",
      brand: "MANDALA"
    },
    {
      id: "03",
      title: "AI-Powered Customer Support for E-Commerce",
      description: "AI chatbot <strong class='text-white font-bold'>reduced support costs by 60%</strong> and <strong class='text-white font-bold'>tripled response speed</strong> for an e-commerce brand. See how automation improved customer experience.",
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
                   {/* Content Side (Left) */}
                   <div className="flex-[1.2] p-8 md:p-16 flex flex-col justify-between relative min-h-[400px]">
                     <div>
                       <div className="mb-10">
                         <span className="text-[#9898b0] font-mono text-[13px] tracking-[0.2em]">[ {project.id} ]</span>
                       </div>
                       
                       <h3 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold leading-[1.1] text-white mb-12 tracking-tight">
                         {project.title}
                       </h3>
                     </div>

                     <div>
                       <p 
                         className="text-[#9898b0] text-[15px] md:text-[17px] leading-[1.6] mb-10 max-w-[500px]"
                         dangerouslySetInnerHTML={{ __html: project.description }}
                       />

                       <div className="flex flex-wrap gap-2.5">
                         {project.tags.map((tag) => (
                           <span
                             key={tag}
                             className="px-5 py-2 rounded-full border border-white/10 bg-transparent text-[13px] font-medium text-[#c0c0cf] hover:bg-white/5 transition-all cursor-default"
                           >
                             {tag}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
   
                   {/* Image side (Right) */}
                   <div className="flex-1 relative min-h-[350px] md:min-h-[500px] bg-[#0e0e26] flex items-center justify-center p-6 md:p-10 overflow-hidden m-4 md:m-6 rounded-[20px] md:rounded-[24px]">
                     <div className="absolute bottom-6 left-8 flex flex-col gap-1 z-10">
                       <span className="text-white text-[16px] md:text-[20px] font-serif italic tracking-[0.1em] uppercase opacity-90">
                         {project.brand}
                       </span>
                     </div>
  
                    <motion.div 
                      className="relative w-full h-full z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
