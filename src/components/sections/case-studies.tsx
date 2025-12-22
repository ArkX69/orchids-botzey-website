import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: '01',
      title: 'AI for Lead Qualification – SaaS Company',
      description: 'AI-driven lead scoring boosted conversions by 40% for a SaaS company, reducing wasted time and doubling recurring revenue.',
      tags: ['Startup', 'E-commerce'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/TrEGezxzqyqQMs8eZ60Ntj15Dw-7.png'
    },
    {
      id: '02',
      title: 'AI Workflow Automation – Finance Firm',
      description: 'AI automation cut data processing time by 80% and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.',
      tags: ['Startup', 'E-commerce'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png'
    },
    {
      id: '03',
      title: 'AI-Powered Customer Support for E-Commerce',
      description: 'AI chatbot reduced support costs by 60% and tripled response speed for an e-commerce brand. See how automation improved customer experience.',
      tags: ['Startup', 'E-commerce'],
      // Fallback placeholder if third asset is missing from list
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png'
    }
  ];

  return (
    <section className="bg-[#050510] py-[120px] px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight mb-4 font-display">
            See Our Work in Action
          </h2>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="glass-card bg-[#0D0D1F]/60 border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col lg:flex-row min-h-[440px] transition-transform duration-500 hover:border-[#8d7afa]/30"
            >
              {/* Left Content */}
              <div className="flex-1 p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-[11px] font-bold text-[#8D7AFA] tracking-[0.1em] font-display">
                      [ {study.id} ]
                    </span>
                  </div>
                  
                  <h3 className="text-[32px] md:text-[40px] font-semibold text-white leading-[1.1] mb-6 font-display">
                    {study.title}
                  </h3>
                  
                  <p className="text-[16px] md:text-[18px] text-[#9999AA] leading-[1.6] max-w-[500px] mb-8 font-body">
                    {study.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full border border-[#1A1A2E] bg-white/5 text-[#9999AA] text-[13px] font-medium font-body transition-colors hover:text-white hover:border-[#8d7afa]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Image/Mockup */}
              <div className="flex-1 relative bg-gradient-to-br from-[#0D0D1F] to-[#0A0A1A] overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8D7AFA]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12">
                  <div className="relative w-full aspect-video transform-gpu transition-transform duration-700 group-hover:scale-[1.03] flex items-center justify-center">
                    <Image 
                      src={study.image}
                      alt={study.title}
                      width={800}
                      height={450}
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      priority={study.id === '01'}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Works Button */}
        <div className="mt-16 flex justify-center">
          <a 
            href="#case-studies"
            className="pill-button bg-[#8D7AFA]/10 border border-[#8D7AFA] text-white flex items-center gap-2 hover:scale-[1.05] transition-all duration-300 group shadow-[0_0_20px_rgba(141,122,250,0.15)]"
          >
            <span className="text-[16px] font-semibold">More works</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;