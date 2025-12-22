import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="relative w-full py-[120px] bg-[#030312] overflow-hidden">
      <div className="container mx-auto max-w-[1216px] px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="label-tag bg-opacity-10 py-1.5 px-4 rounded-full border border-primary/20">
              [ BLOG ]
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Latest Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass-panel hover:border-primary/50 transition-all duration-300 text-sm font-semibold text-white"
          >
            More Insights
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Featured Article */}
          <div className="md:col-span-2 glass-panel p-6 flex flex-col lg:flex-row gap-8 items-center group cursor-pointer hover:border-primary/30 transition-all">
            <div className="relative w-full lg:w-[48%] aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyoGvpFzu5T6Jm77ftKQQ9KmEo-20.png"
                alt="The Future Is Automated"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col h-full py-2">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                  [ AI AUTOMATION ]
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 line-clamp-2 leading-tight">
                The Future Is Automated: Why Now Is the Time to Embrace AI
              </h3>
              <p className="text-[#9898B0] text-base mb-8 line-clamp-3">
                Discover how AI automation is reshaping industries—and why early adopters are leading the charge.
              </p>
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#16162d] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 opacity-80" />
                  </div>
                  <span className="text-sm font-medium text-white">Richard Thompson</span>
                </div>
                <span className="text-xs text-[#9898B0]">Apr 21, 2025</span>
              </div>
            </div>
          </div>

          {/* Small Article 1 */}
          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 group cursor-pointer hover:border-primary/30 transition-all">
            <div className="relative w-full md:w-[40%] aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/RTZYnC9sP7zj8eW0b5taC0ljk-21.png"
                alt="Business Automation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col py-1">
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                  [ BUSINESS ]
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 line-clamp-2 leading-snug">
                5 Business Tasks You Didn&apos;t Know You Could Automate
              </h4>
              <p className="text-[#9898B0] text-sm line-clamp-2">
                From scheduling to data entry, here’s how Bima can help you reclaim hours every week.
              </p>
            </div>
          </div>

          {/* Small Article 2 */}
          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 group cursor-pointer hover:border-primary/30 transition-all">
            <div className="relative w-full md:w-[40%] aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/QTDwH2lZxjpLxApTT0I51RgasxA-22.png"
                alt="AI Workflow"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col py-1">
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                  [ TIPS ]
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 line-clamp-2 leading-snug">
                AI vs. Human: Finding the Perfect Workflow Balance
              </h4>
              <p className="text-[#9898B0] text-sm line-clamp-2">
                Learn when to automate, when to delegate, and how to get the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;