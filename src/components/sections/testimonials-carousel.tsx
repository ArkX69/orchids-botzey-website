"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  highlightedText: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our AI chatbot reduced response times from 10 minutes to just 2 seconds. Customer satisfaction skyrocketed, and we saved over 400 hours per month on support.",
    highlightedText: "reduced response times from 10 minutes to just 2 seconds",
    name: "Mila S.",
    role: "COO, Finance Firm",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/jWxowUVJAHTxyUhsrbmKxjDEc-3.png",
  },
  {
    quote: "We integrated AI for lead qualification. Our sales team now only speaks with high-intent prospects, doubling our conversion rate in 3 months!",
    highlightedText: "doubling our conversion rate in 3 months!",
    name: "Sarah M.",
    role: "Marketing Manager, Mandala",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/jWxowUVJAHTxyUhsrbmKxjDEc-3.png",
  },
  {
    quote: "We automated our sales pipeline and customer service with AI, a 35% increase in productivity, and a 50% reduction in operational costs!",
    highlightedText: "50% reduction in operational costs!",
    name: "John D.",
    role: "CEO, AI Agent",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/icons/jWxowUVJAHTxyUhsrbmKxjDEc-3.png",
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Highlight specific parts of the quote with purple gradient
  const renderQuote = (testimonial: Testimonial) => {
    const parts = testimonial.quote.split(testimonial.highlightedText);
    if (parts.length === 1) return testimonial.quote;

    return (
      <>
        {parts[0]}
        <span className="text-primary font-semibold italic">
          {testimonial.highlightedText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative w-full py-[160px] bg-background flex flex-col items-center overflow-hidden">
      <div className="container max-w-[1200px] px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-widest text-muted-foreground uppercase font-body flex items-center gap-2">
              [ TESTIMONIALS ]
            </span>
            <h2 className="text-[48px] md:text-[56px] leading-[1.1] font-display font-semibold text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col justify-center ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <blockquote className="text-[28px] md:text-[40px] font-display font-medium leading-[1.3] text-white/90 max-w-[900px]">
                &quot;{renderQuote(testimonial)}&quot;
              </blockquote>

              <div className="mt-12 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-[16px] font-display">
                    {testimonial.name}
                  </span>
                  <span className="text-muted-foreground text-[14px]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background radial gradient glow similar to design system */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] pointer-events-none opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(157,123,255,0.15)_0%,_transparent_70%)]" />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;