import React from 'react';
import Image from 'next/image';

const TrustAndPartners = () => {
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
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png', // Fallback as requested
    },
    {
      label: '[ ONGOING SUPPORT ]',
      title: 'We ensure your AI runs smoothly',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyzNVSLRKdxilXqP9QMmuTY2E-30.png', // Fallback as requested
    },
  ];

  const partnerLogos = [
    { name: 'LogoiPSum 1', url: 'https://framerusercontent.com/images/8r2Wn6SDRB3IqE8G7T8.png' },
    { name: 'LogoiPSum 2', url: 'https://framerusercontent.com/images/9vJfSW.png' },
    { name: 'LogoiPSum 3', url: 'https://framerusercontent.com/images/8acmk4.png' },
    { name: 'LogoiPSum 4', url: 'https://framerusercontent.com/images/5xq42q?width=192&height=192' },
  ];

  return (
    <section className="bg-[#030312] py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
            Why Top Brands Trust Us
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className="group bento-card flex flex-col items-start min-h-[460px] relative overflow-hidden"
              style={{ padding: '32px' }}
            >
              {/* Card Label */}
              <span className="text-[12px] font-bold text-[#8A7BFF] tracking-[0.1em] mb-4 opacity-70">
                {card.label}
              </span>

              {/* Card Content Placeholder for 3D Image */}
              <div className="w-full flex-grow flex items-center justify-center py-6">
                <div className="relative w-full h-[220px] transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-[20px] font-medium leading-[1.4] text-white mt-auto">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Marquee/Logo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-white/5 pt-12">
          {/* Tagline */}
          <div className="max-w-[320px]">
            <p className="text-[14px] leading-relaxed text-[#9898B0]">
              Trusted by leading companies in tech, finance and e-commerce
            </p>
          </div>

          {/* Logo Marquee Simulator */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 grayscale opacity-40">
            {/* Custom SVG Text-based Logos (as per HTML structure hints) */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-[24px] tracking-tight text-white/80">logoipsum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[24px] tracking-tight text-white/50">LogoIpsum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-serif italic font-bold text-[26px] tracking-tight text-white/70">LOGOIPSUM</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-sans font-black text-[22px] tracking-tighter text-white/60">logoiPsum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndPartners;