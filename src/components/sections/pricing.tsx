"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      name: "Basic",
      price: billingCycle === "monthly" ? "999" : "849",
      description: "Perfect for Small businesses",
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
      price: billingCycle === "monthly" ? "1,999" : "1,699",
      description: "Perfect for Growing teams",
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
      price: "Custom",
      description: "Perfect for Large businesses",
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
    <section
      id="pricing"
      className="relative w-full py-[160px] flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-[56px] font-display font-bold text-white tracking-tight">
            Pricing
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center p-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300",
                billingCycle === "monthly"
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(157,123,255,0.4)]"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "relative px-6 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300 flex items-center gap-2",
                billingCycle === "yearly"
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(157,123,255,0.4)]"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              Yearly
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-md text-[#9D7BFF]">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "glass-card group relative flex flex-col p-10 transition-all duration-500 hover:translate-y-[-8px]",
                plan.highlighted && "border-primary/40 bg-[rgba(157,123,255,0.05)]"
              )}
            >
              {/* Card Header */}
              <div className="flex flex-col mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-bold text-white">
                    {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground font-body">/month</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Perfect for
                  </p>
                  <p className="text-sm text-white/80">{plan.description}</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={cn(
                  "relative w-full py-4 rounded-xl font-display font-semibold transition-all duration-300 mb-10 overflow-hidden",
                  plan.highlighted
                    ? "bg-primary text-white shadow-[0_0_30px_-5px_rgba(157,123,255,0.5)] active:scale-[0.98]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-[0.98]"
                )}
              >
                <div className="relative z-10">{plan.cta}</div>
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                )}
              </button>

              {/* Features List */}
              <div className="flex flex-col gap-5 mt-auto">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <p className="text-[15px] font-body text-white/70 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative corner glow for highlighted card */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full -mr-10 -mt-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;