"use client";

import React from 'react';
import Image from 'next/image';

const featureCards = [
  {
    label: '[ PROVEN RESULTS ]',
    title: '200+ businesses automated',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png',
  },
  {
    label: '[ SEAMLESS AI INTEGRATION ]',
    title: 'Works with your existing tools',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyzNVSLRKdxilXqP9QMmuTY2E-30.png',
  },
  {
    label: '[ TAILORED FOR YOU ]',
    title: 'Custom AI solutions',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png',
  },
  {
    label: '[ ONGOING SUPPORT ]',
    title: 'We ensure your AI runs smoothly',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyzNVSLRKdxilXqP9QMmuTY2E-30.png',
  },
];

const stack = [
  {
    id: "01",
    name: "OPEN AI",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png",
    rotation: "-8deg",
    zIndex: 10,
  },
  {
    id: "02",
    name: "ZAPIER",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png",
    rotation: "-4deg",
    zIndex: 20,
  },
  {
    id: "03",
    name: "AIRTABLE",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png",
    rotation: "0deg",
    zIndex: 30,
  },
  {
    id: "04",
    name: "LANGCHAIN",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png",
    rotation: "4deg",
    zIndex: 40,
  },
  {
    id: "05",
    name: "PYTHON",
    img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png",
    rotation: "8deg",
    zIndex: 50,
  },
];

export default function TrustAndStack() {
  return (
    <div className="bg-[#030312]">
      {/* Trust Section */}
      <section className="py-[120px] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
              Why Top Brands Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="group bg-[#0b0b21] border border-white/10 rounded-[24px] p-8 flex flex-col items-start min-h-[460px] relative overflow-hidden transition-all duration-300 hover:border-[#8a7bff]/30"
              >
                <span className="text-[12px] font-bold text-[#8A7BFF] tracking-[0.1em] mb-4 opacity-70">
                  {card.label}
                </span>
                <div className="w-full flex-grow flex items-center justify-center py-6">
                  <div className="relative w-full h-[220px] transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] font-medium leading-[1.4] text-white mt-auto">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-white/5 pt-12">
            <div className="max-w-[320px]">
              <p className="text-[14px] leading-relaxed text-[#9898B0]">
                Trusted by leading companies in tech, finance and e-commerce
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 grayscale opacity-40">
              <span className="font-bold text-[24px] tracking-tight text-white/80">logoipsum</span>
              <span className="font-bold text-[24px] tracking-tight text-white/50">LogoIpsum</span>
              <span className="font-serif italic font-bold text-[26px] tracking-tight text-white/70">LOGOIPSUM</span>
              <span className="font-sans font-black text-[22px] tracking-tighter text-white/60">logoiPsum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-[120px] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-tight text-white">
              Our Tech<br />
              <span className="text-gradient">Stack</span>
            </h2>
          </div>

          <div className="relative flex justify-center items-center h-[500px] md:h-[600px] mt-12">
            {stack.map((item, index) => (
              <div
                key={item.id}
                className="absolute transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-8"
                style={{
                  zIndex: item.zIndex,
                  transform: `translateX(${(index - 2) * 110}px) rotate(${item.rotation})`,
                  left: 'calc(50% - 110px)',
                }}
              >
                <div className="group relative w-[220px] h-[280px] bg-[#0b0b21] border border-white/10 rounded-[24px] p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                  <div className="text-[12px] font-semibold text-[#9898b0]/50 tracking-widest">
                    [{item.id}]
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative w-24 h-24 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                      <Image src={item.img} alt={item.name} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[14px] font-bold tracking-[0.15em] text-white group-hover:text-[#8a7bff] transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#8a7bff]/0 group-hover:bg-[#8a7bff]/40 blur-md rounded-full transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-[#8a7bff]/5 blur-[120px] rounded-[100%] pointer-events-none" />
      </section>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #ffffff 0%, #8a7bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
