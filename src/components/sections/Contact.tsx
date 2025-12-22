"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Contact section component for the Bima AI Automation Agency clone.
 * Features a dark-themed layout with a simple contact form and "Ready to Automate Your Business?" CTA.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-[120px] bg-[#030312] overflow-hidden">
      {/* Background Ray Effect (Simulated from assets context) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(138, 123, 255, 0.15) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="label-tag">
                [ CONTACT US ]
              </span>
              <h2 className="text-white text-[ clamp(32px, 5vw, 48px) ] font-semibold leading-[1.2] tracking-[-0.01em]">
                Ready to Automate <br />
                <span className="text-gradient">Your Business?</span>
              </h2>
              <p className="text-[#9898B0] text-lg max-w-[500px] leading-[1.6]">
                Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[12px] font-semibold text-[#8a7bff] uppercase tracking-widest mb-1">[ CALL US ]</p>
                  <a href="tel:+123456789" className="text-white text-xl font-medium hover:text-[#8a7bff] transition-colors">
                    +1234 567 89
                  </a>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#8a7bff] uppercase tracking-widest mb-1">[ MAIL US ]</p>
                  <a href="mailto:hello@bima.com" className="text-white text-xl font-medium hover:text-[#8a7bff] transition-colors">
                    hello@bima.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-sm font-medium">X/Twitter</a>
                <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-sm font-medium">Instagram</a>
                <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
            <div className="bento-card bg-[#0b0b21]/70 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-[24px]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="glow-button group w-full bg-[#8a7bff] hover:bg-[#7a6bff] text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transition-duration-300 shadow-[0_0_20px_rgba(138,123,255,0.2)]"
                  >
                    Submit
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-[12px] text-[#9898B0] text-center mt-4 leading-relaxed">
                    By submitting, you agree to our 
                    <a href="#" className="text-white hover:text-[#8a7bff] mx-1 underline underline-offset-2">Terms</a> 
                    and 
                    <a href="#" className="text-white hover:text-[#8a7bff] mx-1 underline underline-offset-2">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}