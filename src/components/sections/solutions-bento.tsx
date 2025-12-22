import React from 'react';
import Image from 'next/image';

const SolutionsBento = () => {
  return (
    <section className="relative w-full py-[160px] overflow-hidden bg-[#020210]" id="services">
      {/* Background Ray Asset */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] pointer-events-none opacity-50">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI-2.png"
          alt="Glow Ray"
          width={1868}
          height={1838}
          className="w-full h-auto"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="text-[12px] font-semibold tracking-[0.1em] text-white/60 uppercase font-body">
                [ OUR SOLUTIONS ]
              </span>
            </div>
            <h2 className="text-[48px] md:text-[56px] font-display font-semibold leading-[1.1] text-white mb-6">
              Building AI-Powered <br />
              <span className="text-gradient">Workflow</span>
            </h2>
          </div>
          <div className="md:max-w-md pt-10 md:pt-14">
            <p className="text-[16px] md:text-[18px] text-muted-foreground font-body leading-relaxed">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Top Row - Large Cards */}
          <div className="md:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Workflow Automation */}
            <div className="glass-card p-10 flex flex-col justify-between overflow-hidden group min-h-[440px]">
              <div className="relative z-10">
                <h3 className="text-[24px] md:text-[28px] font-display font-semibold text-white mb-4">
                  Workflow Automation
                </h3>
                <p className="text-[16px] text-muted-foreground font-body max-w-sm">
                  Let AI handle repetitive tasks, so your team can focus on high-impact work.
                </p>
              </div>
              <div className="mt-8 -mx-10 -mb-10 relative h-[220px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/TS0GdeSRuq8LcLpRdIDKB8L5xA-3.png"
                  alt="Workflow Automation Visualization"
                  fill
                  className="object-cover object-top filter transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* AI Chatbots */}
            <div className="glass-card p-10 flex flex-col justify-between overflow-hidden group min-h-[440px]">
              <div className="relative z-10">
                <h3 className="text-[24px] md:text-[28px] font-display font-semibold text-white mb-4">
                  AI Chatbots & Virtual Assistants
                </h3>
                <p className="text-[16px] text-muted-foreground font-body max-w-sm">
                  Enhance customer experience with 24/7 AI-driven support.
                </p>
              </div>
              <div className="mt-8 -mx-10 -mb-10 relative h-[220px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zujhS3mHLi4D2JdsnvbVVJrM-4.png"
                  alt="AI Chatbots Visualization"
                  fill
                  className="object-cover object-top filter transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row - Smaller/Medium Cards */}
          <div className="md:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personalized AI Marketing */}
            <div className="glass-card p-8 flex flex-col justify-between overflow-hidden group min-h-[460px]">
              <div className="mt-0 -mx-8 -mt-8 relative h-[240px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/moHFnckbWJMT4QikVlOc93HWg-5.png"
                  alt="Personalized AI Marketing"
                  fill
                  className="object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 pt-6">
                <h3 className="text-[20px] font-display font-semibold text-white mb-3">
                  Personalized AI Marketing
                </h3>
                <p className="text-[15px] text-muted-foreground font-body leading-relaxed">
                  Send smarter messages at the right moment with AI.
                </p>
              </div>
            </div>

            {/* CRM Automation */}
            <div className="glass-card p-8 flex flex-col justify-between overflow-hidden group min-h-[460px]">
              <div className="mt-0 -mx-8 -mt-8 relative h-[240px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/R27Ca5uwhsDd5u5TVFHAHXFRixw-6.png"
                  alt="CRM Automation"
                  fill
                  className="object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 pt-6">
                <h3 className="text-[20px] font-display font-semibold text-white mb-3">
                  CRM Automation
                </h3>
                <p className="text-[15px] text-muted-foreground font-body leading-relaxed">
                  Capture, qualify, and route leads focuses only on the right prospects automatically.
                </p>
              </div>
            </div>

            {/* Empty/Customizable State Card */}
            <div className="glass-card p-8 flex flex-col justify-center items-start overflow-hidden group min-h-[460px] bg-white/[0.01]">
              <div className="mb-6 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:glow-purple transition-all duration-300">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </div>
              <div className="relative z-10">
                <h3 className="text-[20px] font-display font-semibold text-white mb-3">
                  Add new title here
                </h3>
                <p className="text-[15px] text-muted-foreground font-body leading-relaxed">
                  Write your new description here. The layout adapts to longer text, but for the best look, try to keep it around three lines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsBento;