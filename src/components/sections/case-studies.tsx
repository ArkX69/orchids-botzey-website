import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: "01",
    title: "AI for Lead Qualification – SaaS Company",
    description: "AI-driven lead scoring boosted conversions by 40% for a SaaS company, reducing wasted time and doubling recurring revenue.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/B7UgIbtSivDNxsW5IZaMYzVC7gw-8.jpg",
    logoText: "BATAVIA"
  },
  {
    id: "02",
    title: "AI Workflow Automation – Finance Firm",
    description: "AI automation cut data processing time by 80% and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/bIoafZBGDDkv76VvPOYCtZk-9.jpg",
    logoText: "Mandala"
  },
  {
    id: "03",
    title: "AI-Powered Customer Support for E-Commerce",
    description: "AI chatbot reduced support costs by 60% and tripled response speed for an e-commerce brand. See how automation improved customer experience.",
    tags: ["Startup", "E-commerce"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/yTUnV3zMKsVEgqFGDU7fBY84Q-10.jpg",
    logoText: "AI Agent"
  }
];

export default function CaseStudies() {
  return (
    <section className="relative w-full bg-[#020210] py-[160px] overflow-hidden" id="work">
      <div className="container mx-auto max-w-[1200px] px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="font-display text-[48px] md:text-[56px] font-semibold text-white tracking-tight mb-8">
            See Our Work in Action
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card group relative overflow-hidden flex flex-col md:flex-row min-h-[480px] bg-white/[0.03] border border-white/10 rounded-[24px] transition-all duration-500 hover:border-primary/40"
            >
              {/* Left Content */}
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-between z-10">
                <div className="space-y-6 max-w-[480px]">
                  <div className="inline-flex items-center gap-2 font-display text-[14px] text-muted-foreground/80 tracking-widest font-semibold">
                    <span>[</span>
                    <span className="text-white">{study.id}</span>
                    <span>]</span>
                  </div>
                  
                  <h3 className="font-display text-[32px] md:text-[40px] leading-[1.1] font-semibold text-white">
                    {study.title}
                  </h3>
                  
                  <p className="font-body text-[18px] text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-10 md:mt-0">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[14px] font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Image/Mockup */}
              <div className="flex-1 relative min-h-[300px] md:min-h-auto overflow-hidden bg-[#0a0a1a]">
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 overflow-hidden">
                  <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-[1.05]">
                    {/* Abstract Shadow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-3xl opacity-50" />
                    
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Brand Overlay on Image */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-80">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-display text-white text-[16px] font-bold tracking-widest uppercase">
                        {study.logoText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#work"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <span className="font-display font-semibold text-white tracking-wide">More works</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-[20%] -right-[15%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[20%] -left-[15%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
    </section>
  );
}