"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonial data directly from the content and assets provided.
 */
const testimonials = [
  {
    quote:
      "Our AI chatbot reduced response times from 10 minutes to just 2 seconds. Customer satisfaction skyrocketed, and we saved over 400 hours per month on support.",
    name: "Mila S.",
    role: "COO, Finance Firm",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/yTUnV3zMKsVEgqFGDU7fBY84Q-10.jpg",
  },
  {
    quote:
      "We integrated AI for lead qualification. Our sales team now only speaks with high-intent prospects, doubling our conversion rate in 3 months!",
    name: "Sarah M.",
    role: "Marketing Manger, Mandala",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/B7UgIbtSivDNxsW5IZaMYzVC7gw-8.jpg",
  },
  {
    quote:
      "We automated our sales pipeline and customer service with AI, a 35% increase in productivity, and a 50% reduction in operational costs!",
    name: "John D.",
    role: "CEO, AI Agent",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/bIoafZBGDDkv76VvPOYCtZk-9.jpg",
  },
];

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-[120px] bg-[#050510] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Label */}
        <div className="flex flex-col md:flex-row md:items-start mb-4">
           <div className="mb-6 md:mb-0 md:w-1/4">
            <span className="label-tag text-[11px] font-bold tracking-[0.1em] text-[#8D7AFA]">
              [ TESTIMONIALS ]
            </span>
          </div>

          <div className="md:w-3/4 flex justify-between items-end">
            <h2 className="text-[48px] md:text-[56px] font-semibold leading-[1.1] text-white font-display">
              What Our Clients Say
            </h2>
            
            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#1A1A2E] bg-[#0D0D1F] flex items-center justify-center text-white hover:border-[#8D7AFA] transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#1A1A2E] bg-[#0D0D1F] flex items-center justify-center text-white hover:border-[#8D7AFA] transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Content */}
        <div className="relative mt-12 md:ml-[25%]">
            <div className="flex transition-all duration-500 ease-in-out">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`w-full transition-opacity duration-500 absolute top-0 left-0 ${
                            index === activeIndex ? "opacity-100 z-10 relative" : "opacity-0 z-0"
                        }`}
                    >
                        <blockquote className="text-[24px] md:text-[36px] font-medium leading-[1.3] text-white font-display max-w-[900px] mb-10">
                            &quot;{testimonial.quote}&quot;
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1A1A2E]">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-semibold text-white font-display">
                                    {testimonial.name}
                                </span>
                                <span className="text-[14px] text-[#9999AA] font-body">
                                    {testimonial.role}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Arrows */}
            <div className="flex md:hidden gap-3 mt-12">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#1A1A2E] bg-[#0D0D1F] flex items-center justify-center text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#1A1A2E] bg-[#0D0D1F] flex items-center justify-center text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8D7AFA] opacity-[0.03] blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}