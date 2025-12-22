"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "How can AI automation help my business?",
    answer: "We provide a full range of digital marketing services, including SEO, social media marketing, paid advertising (PPC), content marketing, email marketing, and branding strategy. Our goal is to help businesses grow their online presence and attract more customers."
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    answer: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly."
  },
  {
    question: "What industries can benefit from AI automation?",
    answer: "We don’t just deliver services—we craft strategies that drive real results. With a focus on creativity, data-driven decisions, and personalized solutions, we help brands stand out in a crowded market. Plus, we treat your success as our own!"
  },
  {
    question: "What’s the difference between your pricing plans?",
    answer: "We offer a full range of branding services, including logo design, brand identity development, messaging, brand strategy, and visual storytelling. Our goal is to create a strong, memorable brand that resonates with your audience."
  },
  {
    question: "How long does AI setup take?",
    answer: "Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers."
  },
  {
    question: "Can I request a custom AI solution?",
    answer: "Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={cn(
        "border border-white/10 rounded-[20px] transition-all duration-300 mb-4 overflow-hidden",
        isOpen ? "bg-white/[0.03]" : "bg-transparent"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
      >
        <span className="text-white text-lg md:text-xl font-display font-semibold transition-colors group-hover:text-primary">
          {question}
        </span>
        <div className={cn(
          "flex-shrink-0 transition-transform duration-300 ml-4",
          isOpen ? "rotate-45 text-primary" : "text-white/40"
        )}>
          <Plus size={24} />
        </div>
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 text-muted-foreground leading-relaxed font-body text-base max-w-[90%]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-40 bg-background overflow-hidden" id="faq">
      {/* Background Ray Mask Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-40">
        <div 
          className="absolute inset-x-0 top-0 h-full w-full bg-no-repeat bg-center bg-contain"
          style={{ 
            backgroundImage: `url('https://framerusercontent.com/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI.png?width=1868&height=1838')`,
            backgroundSize: '180%' 
          }}
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,2fr] gap-12 lg:gap-20">
          {/* Header Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[12px] font-semibold text-white tracking-[0.1em] uppercase">
                [ FAQ ]
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-md leading-relaxed">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}