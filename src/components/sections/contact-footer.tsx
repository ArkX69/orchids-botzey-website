"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#030312]">
      {/* Contact Section */}
      <section id="contact" className="relative w-full py-[100px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(138, 123, 255, 0.15) 0%, transparent 70%)"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <span className="label-tag">
                  [ CONTACT US ]
                </span>
                <h2 className="text-white text-[36px] font-semibold leading-[1.2] tracking-[-0.01em]">
                  Ready to Automate <br />
                  <span className="text-gradient">Your Business?</span>
                </h2>
                <p className="text-[#9898B0] text-base max-w-[450px] leading-[1.6]">
                  Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-[11px] font-semibold text-[#8a7bff] uppercase tracking-widest mb-1">[ CALL US ]</p>
                    <a href="tel:+123456789" className="text-white text-lg font-medium hover:text-[#8a7bff] transition-colors">
                      +1234 567 89
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8a7bff] uppercase tracking-widest mb-1">[ MAIL US ]</p>
                    <a href="mailto:hello@botzey.com" className="text-white text-lg font-medium hover:text-[#8a7bff] transition-colors">
                      hello@botzey.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-xs font-medium">X/Twitter</a>
                  <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-xs font-medium">Instagram</a>
                  <a href="#" className="text-[#9898B0] hover:text-white transition-colors text-xs font-medium">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="glass-panel bg-[#0b0b21]/70 backdrop-blur-xl border border-white/10 p-7 lg:p-9 rounded-[20px]">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[13px] font-medium text-white/70 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[13px] font-medium text-white/70 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[13px] font-medium text-white/70 ml-1">Message</label>
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8a7bff]/50 transition-all resize-none text-sm"
                    ></textarea>
                  </div>
                  <button className="group w-full bg-[#8a7bff] hover:bg-[#7a6bff] text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(138,123,255,0.2)] text-sm">
                    Submit
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full overflow-hidden pt-[100px] pb-[40px] text-[#9898B0]">
        <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none select-none">
          <div className="relative w-full max-w-[1240px] h-[300px]">
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[120px] font-bold leading-none tracking-tighter text-[#FFFFFF] opacity-[0.03]">
              botzey
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-20">
              <video 
                src="https://framerusercontent.com/assets/IPRh1hJBQSji41jecF2XhFAVno.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 mb-20">
            <div className="md:col-span-6 flex flex-col gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF] bg-[rgba(138,123,255,0.1)] px-2 py-0.5 rounded-sm">[ CALL US ]</span>
                  <span className="text-white text-base font-medium">+1234 567 89</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF] bg-[rgba(138,123,255,0.1)] w-fit px-2 py-0.5 rounded-sm">[ MAIL US ]</span>
                  <Link href="mailto:hello@botzey.com" className="text-white text-2xl md:text-3xl font-semibold tracking-tight transition-colors hover:text-[#8A7BFF]">
                    hello@botzey.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF]">[ NAVIGATION ]</span>
                <nav className="flex flex-col gap-2 font-medium text-sm">
                  {['Services', 'Case Studies', 'Contact', 'Blog'].map((name) => (
                    <Link key={name} href={`#${name.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-[#8A7BFF] transition-colors w-fit">
                      {name}
                    </Link>
                  ))}
                </nav>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF]">[ FOLLOW US ]</span>
              <div className="flex flex-col gap-2 font-medium text-sm">
                {['X/Twitter', 'Instagram', 'LinkedIn'].map((name) => (
                  <Link key={name} href="#" className="text-white hover:text-[#8A7BFF] transition-colors w-fit">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1">
              <span className="opacity-60">@{currentYear} botzey. All Rights Reserved</span>
              <Link href="#" className="text-white hover:text-[#8A7BFF]">Privacy Policy</Link>
              <Link href="#" className="text-white hover:text-[#8A7BFF]">Terms and Conditions</Link>
            </div>
            <div className="flex items-center gap-2 font-semibold text-white">
              <span className="text-[10px] uppercase tracking-[0.1em] opacity-60">MADE BY</span>
              <div className="flex items-center gap-1.5">
                <Image 
                  src="https://slatdmfqsnqreuzmzhmt.supabase.co/storage/v1/object/public/images/botzeylogo.png"
                  width={18}
                  height={18}
                  alt="Botzey Logo"
                />
                <span>botzey</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
