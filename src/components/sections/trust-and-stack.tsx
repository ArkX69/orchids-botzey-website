"use client";

import React from 'react';
import Image from 'next/image';

const featureCards = [
  {
    label: '[ PROVEN RESULTS ]',
    title: '200+ businesses automated',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/4tBBTStYBI6viIm3S0V32LWmEsE-1766421628573.jpeg?width=8000&height=8000&resize=contain',
  },
  {
    label: '[ SEAMLESS AI INTEGRATION ]',
    title: 'Works with your existing tools',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/wuAQkitFA7FROtqnxuSNB3IjY-1766421628774.jpeg?width=8000&height=8000&resize=contain',
  },
  {
    label: '[ TAILORED FOR YOU ]',
    title: 'Custom AI solutions',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/0inQJKilj8qkeUgN4bqX6KsU5rU-1766421628570.jpeg?width=8000&height=8000&resize=contain',
  },
  {
    label: '[ ONGOING SUPPORT ]',
    title: 'We ensure your AI runs smoothly',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dIX4pjdxAyXF48AZQtOmL0xk-1766421628565.jpeg?width=8000&height=8000&resize=contain',
  },
];

const logos = [
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png" },
  { name: "LOGOIPSUM", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png" },
  { name: "Logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png" },
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png" },
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png" },
];

const stack = [
  {
    id: "01",
    name: "OPEN AI",
    img: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg",
  },
  {
    id: "02",
    name: "ZAPIER",
    img: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
  },
  {
    id: "03",
    name: "AIRTABLE",
    img: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg",
  },
  {
    id: "04",
    name: "LANGCHAIN",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png",
  },
  {
    id: "05",
    name: "PYTHON",
    img: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    id: "06",
    name: "ANTHROPIC",
    img: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg",
  },
  {
    id: "07",
    name: "MAKE.COM",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/wuAQkitFA7FROtqnxuSNB3IjY-1766421628774.jpeg",
  },
  {
    id: "08",
    name: "NOTION",
    img: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg",
  },
  {
    id: "09",
    name: "SLACK",
    img: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
  },
  {
    id: "10",
    name: "INTERCOM",
    img: "https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg",
  },
];

export default function TrustAndStack() {
  return (
    <div className="bg-[#030312]">
      {/* Trust Section */}
      <section className="py-[100px] overflow-hidden">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px]">
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl">
              Why Top Brands <span className="text-gradient">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-[#0b0b21] border border-white/5 rounded-[24px] p-8 flex flex-col items-start h-[460px] relative overflow-hidden"
              >
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                  <span className="text-[9px] font-bold text-[#9898B0] tracking-[0.2em] uppercase">
                    {card.label}
                  </span>
                </div>
                
                <div className="w-full flex-grow flex items-center justify-center">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-[26px] font-bold leading-[1.1] text-white tracking-tight mt-auto">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Logos Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10 border-t border-white/5">
            <div className="max-w-[240px]">
              <p className="text-[13px] leading-relaxed text-[#9898B0] opacity-60">
                Trusted by leading companies in tech, finance and e-commerce
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-10 gap-y-6 grayscale opacity-40">
              {logos.map((logo, i) => (
                <div key={i} className="relative w-24 h-6">
                   <Image 
                    src={logo.icon} 
                    alt={logo.name} 
                    fill 
                    className="object-contain opacity-80" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-[100px] overflow-hidden relative">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px]">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white mb-2">
              Our <span className="text-gradient">Tech Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {stack.map((item) => (
              <div
                key={item.id}
                className="group relative h-[200px] bg-[#0b0b21] border border-white/5 rounded-[24px] p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div className="text-[11px] font-bold text-[#9898b0]/40 tracking-[0.2em]">
                  [{item.id}]
                </div>
                
                <div className="flex-1 flex items-center justify-center py-3">
                  <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-contain grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
                
                <div className="mt-3">
                  <h4 className="text-[14px] font-bold tracking-[0.1em] text-white text-center">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#8a7bff]/10 blur-[150px] rounded-[100%] pointer-events-none z-0" />
      </section>
    </div>
  );
}
