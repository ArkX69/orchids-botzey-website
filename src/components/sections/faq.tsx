"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050510] py-[120px] px-6 md:px-12 overflow-hidden relative">
      <div className="container max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-[48px] font-semibold leading-[1.1] text-white font-display mb-6 tracking-[-0.02em]">
              FAQ
            </h2>
          </div>
          <div className="flex-1 max-w-[500px]">
            <p className="text-[18px] text-[#9999AA] leading-[1.6] font-body">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Accordion Interface */}
        <div className="max-w-[1200px] mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card border border-white/5 overflow-hidden transition-all duration-300 ease-in-out",
                activeIndex === index ? "bg-[#0d0d1f]/80" : "bg-[#0d0d1f]/40"
              )}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between group focus:outline-none"
              >
                <span className="text-[20px] md:text-[22px] font-semibold text-white font-display transition-colors group-hover:text-[#8D7AFA]">
                  {item.question}
                </span>
                <div 
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300",
                    activeIndex === index ? "rotate-45 bg-[#8D7AFA] border-[#8D7AFA]" : "rotate-0"
                  )}
                >
                  <Plus 
                    className={cn(
                      "w-4 h-4 transition-colors",
                      activeIndex === index ? "text-white" : "text-[#9999AA]"
                    )} 
                  />
                </div>
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out font-body",
                  activeIndex === index ? "max-height-[500px] opacity-100 pb-8 px-8" : "max-h-0 opacity-0"
                )}
              >
                <div className="text-[16px] text-[#9999AA] leading-[1.7] border-t border-white/5 pt-6">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element (Consistent with Bima visual effects) */}
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(141, 122, 250, 0.3) 0%, rgba(5, 5, 16, 0) 70%)"
        }}
      />
    </section>
  );
}