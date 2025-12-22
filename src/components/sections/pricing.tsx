"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "$99",
      yearlyPrice: "$84",
      description: "Perfect for",
      target: "Small businesses",
      cta: "Choose Basic",
      features: [
        "AI chatbot for customer inquiries",
        "Basic workflow automation (email, CRM, data entry)",
        "AI-powered analytics dashboard",
        "24/7 support via email",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      monthlyPrice: "$199",
      yearlyPrice: "$169",
      description: "Perfect for",
      target: "Growing teams",
      cta: "Choose Growth",
      features: [
        "Everything in Starter Plan",
        "Advanced AI chatbots with custom responses",
        "AI-driven lead qualification & follow-up",
        "Automated reporting & insights",
        "Priority customer support",
      ],
      highlighted: true,
    },
    {
      name: "Bespoke",
      price: "Custom Pricing",
      description: "Perfect for",
      target: "Large businesses",
      cta: "Contact Us",
      features: [
        "Everything in Growth Plan",
        "Custom AI integrations",
        "AI-powered decision-making models",
        "Workflow automation for multiple departments",
        "Dedicated AI consultant & 24/7 priority support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-[120px] bg-[#050510] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(141,122,250,0.08)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-[48px] font-semibold text-white tracking-tight leading-[1.1] font-display">
            Pricing
          </h2>

          {/* Toggle Switch */}
          <div className="flex bg-[#0d0d1f] p-1.5 rounded-[100px] border border-[#1a1a2e] items-center relative">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "relative z-10 px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-[100px]",
                billingCycle === "monthly" ? "text-white" : "text-[#9999aa] hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "relative z-10 px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-[100px] flex items-center gap-2",
                billingCycle === "yearly" ? "text-white" : "text-[#9999aa] hover:text-white"
              )}
            >
              Yearly
              <span className="text-[11px] font-bold text-[#8D7AFA] bg-[rgba(141,122,250,0.15)] px-2 py-0.5 rounded-full">
                -15%
              </span>
            </button>
            {/* Animated Background Slide */}
            <div
              className={cn(
                "absolute h-[calc(100%-12px)] top-1.5 rounded-[100px] bg-[#8D7AFA] transition-all duration-300 ease-in-out",
                billingCycle === "monthly" ? "left-1.5 w-[96px]" : "left-[108px] w-[118px]"
              )}
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "group relative border rounded-[32px] p-8 flex flex-col h-full transition-all duration-500",
                plan.highlighted
                  ? "bg-[#0d0d1f] border-[#8D7AFA] shadow-[0_0_40px_rgba(141,122,250,0.1)]"
                  : "bg-[#0d0d1f] border-[#1a1a2e] hover:border-[#8D7AFA]/30"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8D7AFA] text-white text-[12px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[24px] font-semibold text-white mb-4 font-display">
                  {plan.name}
                </h3>
                
                {plan.price ? (
                  <div className="mb-4">
                    <span className="text-[32px] font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[48px] font-bold text-white tracking-tight">
                      {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-[#9999aa] text-lg font-medium">/month</span>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-[#9999aa] font-medium">
                    {plan.description}
                  </span>
                  <span className="text-[16px] text-white font-semibold">
                    {plan.target}
                  </span>
                </div>
              </div>

              <a
                href="#"
                className={cn(
                  "w-full text-center py-4 rounded-[100px] font-semibold text-base transition-all duration-300 mb-10 block border",
                  plan.highlighted
                    ? "bg-[#8D7AFA] text-white hover:bg-[#7a67f0] border-transparent"
                    : "bg-transparent text-white border-[#1a1a2e] hover:border-[#8D7AFA]"
                )}
              >
                {plan.cta}
              </a>

              <div className="flex flex-col gap-5 mt-auto">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[rgba(141,122,250,0.15)] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#8D7AFA]" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-[#9999aa] text-[15px] leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;