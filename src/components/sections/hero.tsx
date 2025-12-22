import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[1080px] bg-[#050319] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Ray Asset */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[110%] h-[110%] opacity-50">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/Bc7eub42bMX1SkZz7JRmuQ7T8-1.png"
            alt="Background Glow"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-[840px] flex flex-col items-start text-left">
          <div className="space-y-4 mb-8">
            <h1 className="text-[56px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] font-display text-white">
              Turning Business into{' '}
              <span className="text-gradient">AI-Powered Machine.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#9999AA] leading-[1.6] max-w-[600px] font-body">
              A result-focused design partner to help you <span className="text-white">automate workflows, optimize operations</span>, and scale faster <span className="text-white">with AI solutions</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-16 pt-4 w-full">
            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative flex items-center gap-4 bg-white/5 border border-[#8D7AFA] rounded-[100px] p-2 pr-8 transition-transform duration-300 hover:scale-[1.05] shadow-[0_0_30px_rgba(141,122,250,0.2)]"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#8D7AFA]/30">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zHCZ7ETiGeAbyYxBCzu0jEo2WB0-1.png"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-white font-semibold text-[16px]">Get a Free AI Strategy Session</span>
              
              {/* Button Glow Effects */}
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#8D7AFA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Scrolling Testimonial */}
            <div className="relative h-[60px] overflow-hidden flex flex-col justify-center min-w-[280px]">
              <div className="animate-marquee-vertical flex flex-col gap-8">
                <div className="space-y-1">
                  <p className="text-white text-[14px] font-medium leading-tight">
                    "Saved over 400 hours per month on support"
                  </p>
                  <p className="text-[#9999AA] text-[12px]">
                    Mila S. <span className="mx-1 opacity-50">—</span> COO, Finance Firm
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-white text-[14px] font-medium leading-tight">
                    "Doubling our conversion rate in 3 months!"
                  </p>
                  <p className="text-[#9999AA] text-[12px]">
                    Sarah M. <span className="mx-1 opacity-50">—</span> Marketing Manger, Mandala
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-white text-[14px] font-medium leading-tight">
                    "50% reduction in operational costs!"
                  </p>
                  <p className="text-[#9999AA] text-[12px]">
                    John D. <span className="mx-1 opacity-50">—</span> CEO, AI Agent
                  </p>
                </div>
                {/* Clone for loop */}
                <div className="space-y-1">
                  <p className="text-white text-[14px] font-medium leading-tight">
                    "Saved over 400 hours per month on support"
                  </p>
                  <p className="text-[#9999AA] text-[12px]">
                    Mila S. <span className="mx-1 opacity-50">—</span> COO, Finance Firm
                  </p>
                </div>
              </div>

              {/* Masking for scroll effect */}
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#050319] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#050319] to-transparent z-10" />
            </div>
          </div>
        </div>

        {/* Right Content - 3D Asset */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-[500px] h-[500px] md:w-[796px] md:h-[796px]">
            <video
              src="https://framerusercontent.com/assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(141,122,250,0.3)] saturate-[1.2]"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-75%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 12s linear infinite;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .text-gradient {
          background: linear-gradient(to right, #FFFFFF, #8D7AFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;