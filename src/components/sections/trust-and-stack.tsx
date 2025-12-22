"use client";

import React from 'react';
import Image from 'next/image';

const TrustAndStack = () => {
  const trustCards = [
    {
      label: '[ PROVEN RESULTS ]',
      title: '200+ businesses automated',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png'
    },
    {
      label: '[ SEAMLESS AI INTEGRATION ]',
      title: 'Works with your existing tools',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png'
    },
    {
      label: '[ TAILORED FOR YOU ]',
      title: 'Custom AI solutions',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png'
    },
    {
      label: '[ ONGOING SUPPORT ]',
      title: 'We ensure your AI runs smoothly',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png'
    }
  ];

  const techStack = [
    { id: '01', name: 'OPEN AI', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png' },
    { id: '02', name: 'ZAPIER', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/tvGWuWMdg0mHd4Kf2PeiQbOM6GE-16.png' },
    { id: '03', name: 'AIRTABLE', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/EG35ITABCQIe4vx2G9qN3fWvtto-17.png' },
    { id: '04', name: 'LANGCHAIN', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/9Dfj4JQljtSFbK4ZwIpvC69ZE4-18.png' },
    { id: '05', name: 'PYTHON', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png' } // Reusing for diversity as fallback
  ];

  return (
    <div className="w-full bg-[#020210] overflow-hidden">
      {/* Why Top Brands Trust Us Section */}
      <section className="container mx-auto px-4 py-[160px]">
        <h2 className="text-[48px] md:text-[56px] font-display font-bold text-white mb-[80px]">
          Why Top Brands Trust Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col justify-between min-h-[400px] border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(12px)', borderRadius: '24px' }}
            >
              <div className="text-[12px] font-bold text-[#a1a1aa] tracking-widest mb-8">
                {card.label}
              </div>
              <div className="flex-grow flex items-center justify-center py-6">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={250} 
                  height={250} 
                  className="object-contain"
                />
              </div>
              <h3 className="text-[20px] font-display font-semibold text-white mt-4">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="mt-[80px] flex flex-col md:flex-row items-center gap-10">
          <p className="text-[14px] text-[#a1a1aa] max-w-[200px]">
            Trusted by leading companies in tech, finance and e-commerce
          </p>
          <div className="flex-1 flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Using text representations as fallback since marquee images weren't explicitly provided in section assets */}
            <span className="text-[24px] font-display font-bold text-white">LOGOIPSUM</span>
            <span className="text-[24px] font-display font-bold text-white tracking-tighter">● LOGOIPSUM</span>
            <span className="text-[24px] font-display font-bold text-white border-2 border-white px-2 italic">LOGOIPSUM</span>
            <span className="text-[24px] font-display font-bold text-white">LOGOIPSUM.</span>
          </div>
        </div>
      </section>

      {/* Our Tech Stack Section */}
      <section className="container mx-auto px-4 py-[160px] relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[48px] md:text-[56px] font-display font-bold text-white mb-4">
              Our Tech<br />
              <span className="text-gradient">Stack</span>
            </h2>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end pr-0 lg:pr-20 group h-[500px]">
             {/* Fan-out animation container */}
            <div className="relative w-[280px] h-[360px] transform-gpu">
              {techStack.map((tech, idx) => (
                <div 
                  key={tech.id}
                  className="absolute inset-0 glass-card p-6 border border-white/10 transition-all duration-700 ease-out flex flex-col justify-between"
                  style={{ 
                    zIndex: 10 + techStack.length - idx,
                    transform: `translateX(${(techStack.length - 1 - idx) * -5}px) translateY(${(techStack.length - 1 - idx) * -5}px) rotate(${(techStack.length - 1 - idx) * -2}deg)`,
                    borderRadius: '20px',
                    background: 'rgba(10, 10, 30, 0.95)',
                  }}
                  // Using Tailwind hover and peer strategies would be complex for a fan-out like this, 
                  // usually handled via framer-motion, but applying standard transition states for interactivity.
                >
                  <div className="text-[12px] font-bold text-[#a1a1aa] mb-2">
                    [{tech.id}]
                  </div>
                  <div className="flex-grow flex items-center justify-center">
                    <Image 
                      src={tech.image} 
                      alt={tech.name} 
                      width={120} 
                      height={120} 
                      className="object-contain brightness-75 group-hover:brightness-100 transition-all" 
                    />
                  </div>
                  <h4 className="text-[14px] font-bold text-white uppercase text-center mt-4">
                    {tech.name}
                  </h4>
                </div>
              ))}

              {/* Hover effect styles using CSS pseudo-classes since motion libs aren't explicitly requested for standard logic */}
              <style jsx>{`
                .relative:hover div:nth-child(1) { transform: rotate(10deg) translateX(140px) translateY(-20px) !important; }
                .relative:hover div:nth-child(2) { transform: rotate(5deg) translateX(70px) translateY(-10px) !important; }
                .relative:hover div:nth-child(3) { transform: rotate(0deg) !important; }
                .relative:hover div:nth-child(4) { transform: rotate(-5deg) translateX(-70px) translateY(-10px) !important; }
                .relative:hover div:nth-child(5) { transform: rotate(-10deg) translateX(-140px) translateY(-20px) !important; }
              `}</style>
            </div>
          </div>
        </div>

        {/* Ambient background rays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-20">
          <Image 
            src="https://framerusercontent.com/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI.png" 
            alt="" 
            fill
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default TrustAndStack;