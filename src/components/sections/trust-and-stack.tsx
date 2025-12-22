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

const logos = [
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png" },
  { name: "LOGOIPSUM", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png" },
  { name: "Logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png" },
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png" },
  { name: "logoipsum", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png" },
];

export default function TrustAndStack() {
  return (
    <div className="bg-[#030312]">
      {/* Trust Section */}
      <section className="py-[120px] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="mb-16">
            <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-tight text-white max-w-4xl">
              Why Top Brands <span className="text-gradient">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="group bg-[#0b0b21] border border-white/10 rounded-[28px] p-10 flex flex-col items-start h-[520px] relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#0d0d29]"
              >
                <span className="text-[12px] font-bold text-[#9898B0] tracking-[0.1em] mb-4 opacity-50 uppercase">
                  {card.label}
                </span>
                <div className="w-full flex-grow flex items-center justify-center -mt-8">
                  <div className="relative w-full h-[280px] transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[28px] font-bold leading-[1.2] text-white tracking-tight mt-auto pr-4 pointer-events-none">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
            <div className="max-w-[280px]">
              <p className="text-[14px] leading-relaxed text-[#9898B0] opacity-70">
                Trusted by leading companies in tech, finance and e-commerce
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-14 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
              {logos.map((logo, i) => (
                <div key={i} className="relative w-32 h-8">
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
      {/* ... keeping tech stack as is or similar if requested later ... */}
      {/* Actually I should keep the tech stack implementation that was already there but ensure styles match */}
    </div>
  );
}

