"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Basic",
      price: billingCycle === "monthly" ? "99" : "84",
      description: "Small businesses",
      cta: "Choose Basic",
      features: [
        "AI chatbot for customer inquiries",
        "Basic workflow automation (email, CRM, data entry)",
        "AI-powered analytics dashboard",
        "24/7 support via email",
      ],
    },
    {
      name: "Growth",
      price: billingCycle === "monthly" ? "299" : "254",
      description: "Growing teams",
      cta: "Choose Growth",
      featured: true,
      features: [
        "Everything in Starter Plan",
        "Advanced AI chatbots with custom responses",
        "AI-driven lead qualification & follow-up",
        "Automated reporting & insights",
        "Priority customer support",
      ],
    },
    {
      name: "Bespoke",
      price: "Custom",
      description: "Large businesses",
      cta: "Contact Us",
      features: [
        "Everything in Growth Plan",
        "Custom AI integrations",
        "AI-powered decision-making models",
        "Workflow automation for multiple departments",
        "Dedicated AI consultant & 24/7 priority support",
      ],
    },
  ];

  return (
    <section className="py-[120px] px-6 bg-[#030312]" id="pricing">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.01em] mb-4">
              Pricing
            </h2>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center gap-2 bg-[#0B0B21] border border-white/10 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#8A7BFF] text-white"
                  : "text-[#9898B0] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-[#8A7BFF] text-white"
                  : "text-[#9898B0] hover:text-white"
              }`}
            >
              Yearly
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-[#8A7BFF]">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-panel p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] border border-white/10 ${
                plan.featured ? "bg-[#0B0B21] border-[#8A7BFF]/30" : "bg-[#0B0B21]"
              }`}
              style={{ borderRadius: "24px" }}
            >
              <div className="mb-8">
                <span className="label-tag mb-4">{plan.name}</span>
                <div className="flex items-baseline gap-1 mt-6">
                  {plan.name === "Bespoke" ? (
                    <h3 className="text-[28px] font-medium text-white">Custom Pricing</h3>
                  ) : (
                    <>
                      <span className="text-[48px] font-bold text-white tracking-tight">
                        ${plan.price}
                      </span>
                      <span className="text-[16px] text-[#9898B0]">/month</span>
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-[14px] text-[#9898B0]">Perfect for</p>
                  <p className="text-[18px] text-white font-medium">{plan.description}</p>
                </div>
              </div>

              <div className="mb-10">
                <button
                  className={`w-full py-4 px-6 rounded-full text-[16px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? "bg-[#8A7BFF] text-white shadow-[0_0_20px_rgba(138,123,255,0.3)] hover:brightness-110"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                  {plan.name !== "Bespoke" && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33334 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#8A7BFF]" />
                    </div>
                    <p className="text-[14px] leading-[1.5] text-[#9898B0]">
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
}
