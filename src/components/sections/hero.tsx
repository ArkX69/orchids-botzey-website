"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote: '"Saved over 400 hours per month on support"',
    name: "Mila S.",
    role: "COO, Finance Firm",
  },
  {
    quote: '"Doubling our conversion rate in 3 months!"',
    name: "Sarah M.",
    role: "Marketing Manager, Mandala",
  },
  {
    quote: '"50% reduction in operational costs!"',
    name: "John D.",
    role: "CEO, AI Agent",
  },
];

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030312] pt-20">
      {/* Background Ray/Glow Mask */}
      <div className="absolute top-0 left-0 w-full h-[913px] z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-100px] left-[-10px] w-[1038px] h-[1021px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/Bc7eub42bMX1SkZz7JRmuQ7T8-1.png"
            width={1038}
            height={1021}
            alt=""
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="container relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12 px-6">
        {/* Left Content */}
        <div className="flex flex-col max-w-[840px] gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Turning Business into{" "}
              <span className="text-gradient block">AI-Powered Machine.</span>
            </h1>
            <p className="text-[18px] text-[#9898b0] leading-[1.6] max-w-[600px]">
              A result-focused design partner to help you{" "}
              <span className="text-white">automate workflows, optimize operations</span>, and scale faster{" "}
              <span className="text-white">with AI solutions</span>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            {/* CTA Button */}
            <a
              href="#contact"
              className="glow-button group relative flex items-center gap-3 bg-[rgba(138,123,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#8a7bff] px-6 py-4 rounded-full transition-all duration-300"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/zHCZ7ETiGeAbyYxBCzu0jEo2WB0-1.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-white font-semibold text-[16px]">
                Get a Free AI Strategy Session
              </span>
              <div className="ml-2 w-8 h-8 rounded-full bg-[#8a7bff] flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute right-[-40px]">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </a>

            {/* Micro Testimonial Carousel */}
            <div className="h-[60px] flex flex-col justify-center overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="h-[60px] flex flex-col justify-center text-left">
                    <p className="text-[#cfe4ff] text-[14px] font-medium leading-tight">
                      {t.quote}
                    </p>
                    <p className="text-[#9898b0] text-[12px] mt-1 uppercase tracking-wider font-bold">
                      {t.name} <span className="mx-1 opacity-50">-</span> {t.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Animation */}
        <div className="relative w-full md:w-[600px] h-[400px] md:h-[600px] flex items-center justify-center">
          <div className="absolute w-[800px] h-[800px] pointer-events-none scale-75 md:scale-100">
            <video
              src="https://framerusercontent.com/assets/zGhnB0sDl2lgYYho2DPbtmTsYQ.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #ffffff 0%, #8a7bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(138, 123, 255, 0.4);
        }
      `}</style>
    </section>
  );
}
