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
    answer: "We provide a full range of digital marketing services, including SEO, social media marketing, paid advertising (PPC), content marketing, email marketing, and branding strategy. Our goal is to help businesses grow their online presence and attract more customers.",
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    answer: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
  {
    question: "What industries can benefit from AI automation?",
    answer: "We don’t just deliver services—we craft strategies that drive real results. With a focus on creativity, data-driven decisions, and personalized solutions, we help brands stand out in a crowded market. Plus, we treat your success as our own!",
  },
  {
    question: "What’s the difference between your pricing plans?",
    answer: "We offer a full range of branding services, including logo design, brand identity development, messaging, brand strategy, and visual storytelling. Our goal is to create a strong, memorable brand that resonates with your audience.",
  },
  {
    question: "How long does AI setup take?",
    answer: "Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers.",
  },
  {
    question: "Can I request a custom AI solution?",
    answer: "Yes! We offer full social media management, including content creation, strategy development, scheduling, and engagement. We help grow your presence, connect with your audience, and turn followers into loyal customers.",
  },
];

const FAQAccordionItem = ({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void 
}) => {
  return (
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:opacity-80 group"
      >
        <span className="text-[18px] md:text-[20px] font-medium text-white tracking-tight">
          {item.question}
        </span>
        <div className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-transform duration-300",
          isOpen ? "rotate-45" : "rotate-0"
        )}>
          <Plus className="w-4 h-4 text-white" />
        </div>
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 pb-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[#9898B0] text-[16px] leading-[1.6] max-w-[800px]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-[120px] bg-[#030312]" id="faq">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-[48px] font-semibold leading-[1.2] text-white tracking-tight mb-2">
                FAQ
              </h2>
              <p className="text-[#9898B0] text-[18px] leading-[1.6]">
                Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {faqData.map((item, index) => (
              <FAQAccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleIndex(index)}
              />
            ))}
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A7BFF] opacity-[0.03] blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
}
