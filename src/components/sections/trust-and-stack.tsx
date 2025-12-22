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
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="mb-20">
            <h2 className="text-[48px] md:text-[68px] font-semibold leading-[1.05] tracking-tight text-white max-w-4xl">
              Why Top Brands <span className="text-gradient">Trust Us</span>
            </h2>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
              {featureCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-[#0b0b21] border border-white/5 rounded-[32px] p-10 flex flex-col items-start h-[540px] relative overflow-hidden"
                >
                  <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
                    <span className="text-[10px] font-bold text-[#9898B0] tracking-[0.2em] uppercase">
                      {card.label}
                    </span>
                  </div>
                  
                  <div className="w-full flex-grow flex items-center justify-center">
                    <div className="relative w-full h-[280px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-[32px] font-bold leading-[1.1] text-white tracking-tight mt-auto">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

          {/* Logos Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 border-t border-white/5">
            <div className="max-w-[280px]">
              <p className="text-[14px] leading-relaxed text-[#9898B0] opacity-60">
                Trusted by leading companies in tech, finance and e-commerce
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
              {logos.map((logo, i) => (
                <div key={i} className="relative w-28 h-8">
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
      <section className="py-[120px] overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-tight text-white mb-2">
              Our Tech Stack
            </h2>
            <p className="text-[18px] text-[#9898b0] max-w-[540px]">
              We use the most advanced AI tools and frameworks to build powerful solutions for your business.
            </p>
          </div>

          <div className="relative flex justify-center items-center h-[500px] md:h-[600px] mt-12 mb-12">
            {stack.map((item, index) => (
              <div
                key={item.id}
                className="absolute transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-12 cursor-pointer"
                style={{
                  zIndex: item.zIndex,
                  transform: `translateX(${(index - 2) * 120}px) rotate(${item.rotation})`,
                  left: 'calc(50% - 110px)',
                }}
              >
                <div className="group relative w-[240px] h-[320px] bg-[#0b0b21] border border-white/5 rounded-[28px] p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-white/10">
                  <div className="text-[14px] font-bold text-[#9898b0]/30 tracking-[0.2em]">
                    [{item.id}]
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative w-28 h-28 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100 scale-90 group-hover:scale-100">
                      <Image src={item.img} alt={item.name} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[16px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#8a7bff] to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#8a7bff]/10 blur-[150px] rounded-[100%] pointer-events-none z-0" />
      </section>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #ffffff 30%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
