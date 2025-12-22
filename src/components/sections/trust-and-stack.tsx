import React from 'react';
import Image from 'next/image';

const TrustAndStack = () => {
  // Why Top Brands Trust Us Data
  const trustPillars = [
    {
      label: '[ PROVEN RESULTS ]',
      title: '200+ businesses automated',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png',
    },
    {
      label: '[ SEAMLESS AI INTEGRATION ]',
      title: 'Works with your existing tools',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png',
    },
    {
      label: '[ TAILORED FOR YOU ]',
      title: 'Custom AI solutions',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png',
    },
    {
      label: '[ ONGOING SUPPORT ]',
      title: 'We ensure your AI runs smoothly',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png',
    },
  ];

  // Tech Stack Data
  const techStack = [
    { id: '[05]', name: 'PYTHON' },
    { id: '[04]', name: 'LANGCHAIN' },
    { id: '[03]', name: 'AIRTABLE' },
    { id: '[02]', name: 'ZAPIER' },
    { id: '[01]', name: 'OPEN AI' },
  ];

  return (
    <div className="bg-[#050510] relative flex flex-col items-center overflow-hidden">
      {/* Why Top Brands Trust Us Section */}
      <section className="w-full max-w-[1200px] px-6 py-[120px] z-10">
        <div className="mb-[64px]">
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
            Why Top Brands Trust Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] p-8 flex flex-col h-full hover:border-[#8D7AFA]/30 transition-colors group"
            >
              <div className="text-[11px] font-bold text-[#8D7AFA] tracking-[0.1em] mb-8 uppercase">
                {pillar.label}
              </div>
              <div className="relative w-full aspect-square mb-8 flex items-center justify-center">
                <Image 
                  src={pillar.image}
                  alt={pillar.title}
                  width={200}
                  height={200}
                  className="object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <h3 className="text-[18px] font-medium text-white leading-[1.4] mt-auto">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-start gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-[14px] text-[#9999AA] max-w-[200px]">Trusted by leading companies in tech, finance and e-commerce</span>
           {/* Logo Placeholders usually found in this section */}
           <div className="flex flex-wrap items-center gap-12">
             <div className="text-[18px] font-bold text-white tracking-widest">LOGOPRUM</div>
             <div className="text-[18px] font-bold text-white tracking-widest italic">Logoipsum</div>
             <div className="text-[18px] font-bold text-white tracking-widest uppercase">Logoipsum</div>
             <div className="text-[18px] font-bold text-white tracking-widest">Logoipsum</div>
           </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-[1200px] px-6 py-[120px] z-10 relative">
        <div className="mb-[80px]">
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
            Our Tech<br />Stack
          </h2>
        </div>

        <div className="relative h-[400px] w-full flex justify-center items-end perspective-[1000px]">
          {techStack.map((tech, idx) => {
            const rotation = (idx - 2) * 5; // Tilted effect
            const xOffset = (idx - 2) * 160; // Spread effect
            const zIndex = 5 - idx; // Stacking effect
            
            return (
              <div 
                key={tech.name}
                className="absolute bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] p-8 w-[280px] h-[360px] shadow-2xl transition-all duration-500 hover:-translate-y-8 hover:border-[#8D7AFA]/50 group"
                style={{
                  transform: `translateX(${xOffset}px) rotateY(${rotation}deg) rotateX(10deg)`,
                  zIndex: zIndex,
                  bottom: '0'
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <span className="text-[11px] font-bold text-[#9999AA] tracking-[0.1em]">{tech.id}</span>
                  
                  {/* Technology Icon Placeholder - Bima uses simple SVG/Text combos */}
                  <div className="flex flex-col items-center justify-center flex-grow opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8D7AFA] to-[#B381FF] opacity-20 mb-4" />
                    <h4 className="text-[20px] font-bold text-white tracking-wider">{tech.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#8D7AFA] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#B381FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default TrustAndStack;