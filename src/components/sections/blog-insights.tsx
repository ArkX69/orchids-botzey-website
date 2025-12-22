import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const BlogInsights = () => {
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/VfFigIJ1sE79kbxrtXaKdHVH9pw-19.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyoGvpFzu5T6Jm77ftKQQ9KmEo-20.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/RTZYnC9sP7zj8eW0b5taC0ljk-21.png"
  ];

  return (
    <section className="py-[160px] bg-[#020210] relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold text-[#9D7BFF] tracking-widest flex items-center gap-2">
              [ BLOG ]
            </span>
            <h2 className="text-[48px] md:text-[56px] font-display font-bold text-white tracking-tight leading-[1.1]">
              Latest Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="text-white font-display font-semibold text-sm">More Insights</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Post */}
          <div className="lg:col-span-8 flex flex-col bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden group hover:border-[#9D7BFF]/30 transition-colors duration-500">
            <div className="relative h-[320px] md:h-[400px] overflow-hidden">
              <Image
                src={assets[0]}
                alt="The Future Is Automated"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-[#9D7BFF] tracking-widest uppercase">
                  [ AI AUTOMATION ]
                </span>
                <h3 className="text-[28px] md:text-[32px] font-display font-bold text-white leading-tight">
                  The Future Is Automated: Why Now Is the Time to Embrace AI
                </h3>
                <p className="text-[#A1A1AA] text-base leading-relaxed max-w-[580px]">
                  Discover how AI automation is reshaping industries—and why early adopters are leading the charge.
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 overflow-hidden relative border border-white/20">
                     <Image 
                        src="https://framerusercontent.com/images/zHCZ7ETiGeAbyYxBCzu0jEo2WB0.png"
                        alt="Richard Thompson"
                        fill
                        className="object-cover"
                     />
                  </div>
                  <span className="text-sm font-medium text-white">Richard Thompson</span>
                </div>
                <span className="text-sm text-[#A1A1AA]">Apr 21, 2025</span>
              </div>
            </div>
          </div>

          {/* Smaller Secondary Posts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Post 2 */}
            <div className="flex flex-col bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden group hover:border-[#9D7BFF]/30 transition-colors duration-500">
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={assets[1]}
                  alt="5 Business Tasks You Didn’t Know You Could Automate"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-[#9D7BFF] tracking-widest uppercase">
                  [ BUSINESS ]
                </span>
                <h5 className="text-[20px] font-display font-bold text-white leading-tight">
                  5 Business Tasks You Didn’t Know You Could Automate
                </h5>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  From scheduling to data entry, here’s how Bima can help you reclaim hours every week.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden group hover:border-[#9D7BFF]/30 transition-colors duration-500">
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={assets[2]}
                  alt="AI vs. Human: Finding the Perfect Workflow Balance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-[#9D7BFF] tracking-widest uppercase">
                  [ TIPS ]
                </span>
                <h5 className="text-[20px] font-display font-bold text-white leading-tight">
                  AI vs. Human: Finding the Perfect Workflow Balance
                </h5>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  Learn when to automate, when to delegate, and how to get the best of both worlds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Mobile "More" Button */}
        <div className="flex md:hidden mt-8">
           <a
            href="/blog"
            className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-white/10 bg-white/5"
          >
            <span className="text-white font-display font-semibold text-sm">More Insights</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;