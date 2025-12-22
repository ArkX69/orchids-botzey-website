"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our AI chatbot reduced response times from 10 minutes to just 2 seconds. Customer satisfaction skyrocketed, and we saved over 400 hours per month on support.",
    name: "Mila S.",
    title: "COO, Finance Firm",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/bIoafZBGDDkv76VvPOYCtZk-9.jpg",
  },
  {
    quote: "We integrated AI for lead qualification. Our sales team now only speaks with high-intent prospects, doubling our conversion rate in 3 months!",
    name: "Sarah M.",
    title: "Marketing Manger, Mandala",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/yTUnV3zMKsVEgqFGDU7fBY84Q-10.jpg",
  },
  {
    quote: "We automated our sales pipeline and customer service with AI, a 35% increase in productivity, and a 50% reduction in operational costs!",
    name: "John D.",
    title: "CEO, AI Agent",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/B7UgIbtSivDNxsW5IZaMYzVC7gw-8.jpg",
  },
];

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative overflow-hidden bg-[#030312] py-[100px]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          
          {/* Label Column */}
          <div className="w-full md:w-1/4">
            <span className="label-tag">
              [ TESTIMONIALS ]
            </span>
          </div>

          {/* Slider Column */}
          <div className="w-full md:w-3/4">
            {/* Header Area with Navigation */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[28px] md:text-[38px] font-semibold tracking-tight text-white line-clamp-1">
                What Our Clients Say
              </h2>
              
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#8a7bff]/50 transition-all duration-300 glass-panel"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#8a7bff]/50 transition-all duration-300 glass-panel"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Testimonial Content Area */}
            <div className="relative min-h-[260px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out absolute top-0 left-0 w-full ${
                    index === activeIndex 
                      ? "opacity-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="max-w-[700px]">
                    <blockquote className="text-[20px] md:text-[26px] font-medium leading-[1.3] text-white mb-8 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div>
                        <div className="text-[17px] font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-[13px] text-[#9898B0]">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Indicators */}
            <div className="flex gap-2 mt-[100px]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-[#8a7bff]" : "w-1 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-[#8a7bff]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}
