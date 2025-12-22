"use client";

import React from 'react';
import Image from 'next/image';

const SolutionsBento = () => {
  return (
    <section className="relative w-full py-[120px] bg-[#050510] overflow-hidden" id="services">
      {/* Background Decorative Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full pointer-events-none opacity-40">
        <Image
          src="https://framerusercontent.com/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI.png?width=1868&height=1838"
          alt="Reflective ray background"
          width={1868}
          height={1838}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="label-tag mb-6 text-[#8D7AFA] font-display font-bold text-[11px] tracking-[0.1em] uppercase">
            [ OUR SOLUTIONS ]
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.1] text-gradient max-w-[600px]">
              Building AI-Powered Workflow
            </h2>
            <p className="text-[#9999AA] text-base md:text-lg font-body max-w-[420px] leading-[1.6]">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Workflow Automation - Wide Card */}
          <div className="md:col-span-2 glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden group">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-3 font-display text-white">Workflow Automation</h3>
              <p className="text-[#9999AA] font-body text-base max-w-[400px]">
                Let AI handle repetitive tasks, so your team can focus on high-impact work.
              </p>
            </div>
            <div className="relative mt-auto px-6 pb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(141,122,250,0.15)] bg-[#111128]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/TS0GdeSRuq8LcLpRdIDKB8L5xA-3.png"
                  alt="Workflow Automation Interface"
                  width={1802}
                  height={662}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1F]/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* AI Chatbots - Vertical Card */}
          <div className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col group">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 font-display text-white">AI Chatbots & Virtual Assistants</h3>
              <p className="text-[#9999AA] font-body text-base">
                Enhance customer experience with 24/7 AI-driven support.
              </p>
            </div>
            <div className="mt-auto pl-6 pr-6 pb-6 lg:pb-0 lg:pr-0 lg:mt-4 self-end w-full lg:w-[120%]">
               <div className="relative rounded-tl-2xl overflow-hidden shadow-[0_0_40px_rgba(141,122,250,0.15)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zujhS3mHLi4D2JdsnvbVVJrM-4.png"
                  alt="AI Chatbot Interface"
                  width={1283}
                  height={595}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Personalized Marketing */}
          <div className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col group">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 font-display text-white">Personalized AI Marketing</h3>
              <p className="text-[#9999AA] font-body text-base">
                Send smarter messages at the right moment with AI.
              </p>
            </div>
            <div className="mt-8 px-6 pb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(141,122,250,0.1)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/moHFnckbWJMT4QikVlOc93HWg-5.png"
                  alt="Personalized AI Marketing"
                  width={1014}
                  height={596}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* CRM Automation */}
          <div className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col group">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 font-display text-white">CRM Automation</h3>
              <p className="text-[#9999AA] font-body text-base">
                Capture, qualify, and route leads focuses only on the right prospects automatically.
              </p>
            </div>
            <div className="mt-auto px-6 pb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_-10px_30px_rgba(141,122,250,0.12)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/R27Ca5uwhsDd5u5TVFHAHXFRixw-6.png"
                  alt="CRM Automation"
                  width={1120}
                  height={625}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>
            </div>
          </div>

          {/* Custom Card Placeholder (Add new title here) */}
          <div className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col group">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 font-display text-white">Custom Solutions</h3>
              <p className="text-[#9999AA] font-body text-base">
                Write your own description here. The layout adapts to longer text, but for the best look, try to keep it around three lines.
              </p>
            </div>
            <div className="mt-auto p-8 flex items-center justify-center">
              {/* Decorative AI Icon / Visual */}
              <div className="relative w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
                <div className="w-12 h-12 rounded-lg bg-[#8D7AFA]/20 border border-[#8D7AFA] flex items-center justify-center shadow-[0_0_20px_rgba(141,122,250,0.5)]">
                   <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #FFFFFF 30%, #8D7AFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
           transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .glass-card:hover {
          border-color: rgba(141, 122, 250, 0.3);
          box-shadow: 0 0 50px rgba(141, 122, 250, 0.05);
        }
      `}</style>
    </section>
  );
};

export default SolutionsBento;