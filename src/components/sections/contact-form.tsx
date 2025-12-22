"use client";

import React from 'react';

/**
 * ContactForm Section Component
 * 
 * This component clones the "Ready to Automate Your Business?" section
 * with pixel-perfect accuracy using Tailwind CSS and the provided design system.
 */
export default function ContactForm() {
  return (
    <section className="relative w-full py-[160px] flex justify-center items-center overflow-hidden" id="contact">
      {/* Background Ray/Glow Effect (Inferred from high level design and ray mask in HTML structure) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[120%] bg-radial from-[rgba(157,123,255,0.15)] to-transparent blur-[120px]"
        />
      </div>

      <div className="container relative z-10 max-w-[1200px] px-8 md:px-16 lg:px-24">
        {/* Label Header */}
        <div className="flex flex-col items-center mb-4">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-[#9d7bff] uppercase font-body flex items-center gap-1">
            [ CONTACT US ]
          </span>
        </div>

        {/* Heading Section */}
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <h2 className="text-[48px] md:text-[56px] leading-[1.1] font-display font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-[18px] md:text-[20px] font-body text-[#a1a1aa] leading-relaxed">
            Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[700px] mx-auto">
          <form 
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[14px] font-medium text-white/90 font-body px-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full h-[56px] px-6 rounded-[16px] bg-white/[0.03] border border-white/[0.1] text-white placeholder:text-[#a1a1aa]/50 focus:outline-none focus:border-[#9d7bff] focus:ring-1 focus:ring-[#9d7bff] transition-all duration-300 font-body"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px] font-medium text-white/90 font-body px-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@example.com"
                  className="w-full h-[56px] px-6 rounded-[16px] bg-white/[0.03] border border-white/[0.1] text-white placeholder:text-[#a1a1aa]/50 focus:outline-none focus:border-[#9d7bff] focus:ring-1 focus:ring-[#9d7bff] transition-all duration-300 font-body"
                />
              </div>
            </div>

            {/* Textarea: Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[14px] font-medium text-white/90 font-body px-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                className="w-full p-6 rounded-[20px] bg-white/[0.03] border border-white/[0.1] text-white placeholder:text-[#a1a1aa]/50 focus:outline-none focus:border-[#9d7bff] focus:ring-1 focus:ring-[#9d7bff] transition-all duration-300 font-body resize-none"
              />
            </div>

            {/* Terms and Privacy Policy Notice */}
            <p className="text-[14px] text-[#a1a1aa] leading-relaxed px-1">
              By submitting, you agree to our{' '}
              <a href="#" className="text-white hover:text-[#9d7bff] underline transition-colors">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-white hover:text-[#9d7bff] underline transition-colors">
                Privacy Policy
              </a>.
            </p>

            {/* Submit Button */}
            <div className="mt-4 flex flex-col items-center">
              <button 
                type="submit"
                className="group relative w-full md:w-auto min-w-[200px] h-[58px] px-10 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all duration-300"
              >
                {/* Visual Background layer for button */}
                <div className="absolute inset-0 bg-[#4f46e5] group-hover:bg-[#9d7bff] transition-colors duration-300" />
                
                {/* Phase 4 Glow Effect (Inferred from CTA component styles) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(157,123,255,0.6)]" />
                
                <span className="relative z-10 text-[16px] font-display font-semibold text-white">
                  Submit
                </span>
                
                <svg 
                  className="relative z-10 w-4 h-4 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Contact Details (Optional but part of many layouts in this section based on content list) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/[0.05]">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold text-[#a1a1aa] tracking-widest uppercase font-body">[ CALL US ]</span>
            <a href="tel:+123456789" className="text-[24px] font-display font-semibold text-white hover:text-[#9d7bff] transition-colors">
              +1234 567 89
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold text-[#a1a1aa] tracking-widest uppercase font-body">[ MAIL US ]</span>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@bima.com" className="text-[24px] font-display font-semibold text-white hover:text-[#9d7bff] transition-colors">
                hello@bima.com
              </a>
              <p className="text-[#a1a1aa] font-body text-[16px]">Monday – Friday, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}