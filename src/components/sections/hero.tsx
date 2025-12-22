"use client";

import React from "react";
import Image from "next/image";

/**
 * Hero Section component for Bima - AI Automation Agency
 * Features a split layout with high-impact typography and a floating 3D rotating ring.
 */
export default function HeroSection() {
  return (
    <section 
      className="relative w-full min-h-[1080px] overflow-hidden flex flex-col items-center justify-center pt-[140px] px-8 sm:px-16"
      style={{ backgroundColor: "#020210" }}
    >
      {/* Ray Mask / Background Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-[913px] pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute left-[-100px] top-[-100px] w-[1038px] h-[1021px] opacity-40 animate-pulse transition-opacity duration-[3000ms]"
          style={{ 
            backgroundImage: "url('https://framerusercontent.com/images/Bc7eub42bMX1SkZz7JRmuQ7T8.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 max-w-[1200px]">
        
        {/* Left Content Column */}
        <div className="flex flex-col max-w-[840px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h1 className="font-display text-[64px] md:text-[84px] leading-[1.05] font-bold tracking-tight text-white mb-2">
                Turning Business into
              </h1>
              <h1 className="font-display text-[64px] md:text-[84px] leading-[1.05] font-bold tracking-tight text-gradient">
                AI-Powered Machine.
              </h1>
            </div>
            
            <div className="max-w-[580px]">
              <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-[#A1A1AA]">
                A result-focused design partner to help you <span className="text-white">automate workflows, optimize operations</span>, and scale faster <span className="text-white">with AI solutions</span>.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
            {/* CTA Button with Avatar Integration */}
            <div className="relative group">
              <a 
                href="#contact" 
                className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-3 pl-3 pr-8 transition-all duration-300 hover:scale-105 hover:bg-white/10 relative z-10"
              >
                <div className="w-10 h-10 rounded-full border border-primary overflow-hidden">
                  <Image 
                    src="https://framerusercontent.com/images/zHCZ7ETiGeAbyYxBCzu0jEo2WB0.png" 
                    alt="Strategy Session Specialist" 
                    width={40} 
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-display font-semibold text-white text-[16px]">
                  Get a Free AI Strategy Session
                </span>
                
                {/* Internal Glow for Button */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: "0 0 20px rgba(157, 123, 255, 0.4)" }} />
              </a>
              {/* Outer Glow Path (Phase 4 Button Effect) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            {/* Testimonial Snippet */}
            <div className="flex flex-col gap-1 overflow-hidden h-[50px] relative w-[300px]">
               <div className="absolute inset-0 flex flex-col animate-[scroll-text_12s_infinite]">
                  <div className="h-[50px] flex flex-col justify-center shrink-0">
                    <p className="font-body italic text-[14px] text-white">"Saved over 400 hours per month on support"</p>
                    <p className="font-body text-[12px] text-[#A1A1AA] font-semibold">Mila S. — COO, Finance Firm</p>
                  </div>
                  <div className="h-[50px] flex flex-col justify-center shrink-0">
                    <p className="font-body italic text-[14px] text-white">"Doubling our conversion rate in 3 months!"</p>
                    <p className="font-body text-[12px] text-[#A1A1AA] font-semibold">Sarah M. — Marketing Manager, Mandala</p>
                  </div>
                  <div className="h-[50px] flex flex-col justify-center shrink-0">
                    <p className="font-body italic text-[14px] text-white">"50% reduction in operational costs!"</p>
                    <p className="font-body text-[12px] text-[#A1A1AA] font-semibold">John D. — CEO, AI Agent</p>
                  </div>
                  <div className="h-[50px] flex flex-col justify-center shrink-0">
                    <p className="font-body italic text-[14px] text-white">"Saved over 400 hours per month on support"</p>
                    <p className="font-body text-[12px] text-[#A1A1AA] font-semibold">Mila S. — COO, Finance Firm</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Asset Column (Rotating Ring) */}
        <div className="relative flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-center pointer-events-none select-none">
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain mix-blend-screen opacity-90 animate-in zoom-in duration-[2000ms]"
              src="https://framerusercontent.com/assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm"
            />
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes scroll-text {
          0%, 15% { transform: translateY(0); }
          25%, 40% { transform: translateY(-50px); }
          50%, 65% { transform: translateY(-100px); }
          75%, 90% { transform: translateY(-150px); }
          100% { transform: translateY(0); }
        }

        .text-gradient {
          background: linear-gradient(135deg, #FFFFFF 0%, #9D7BFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}