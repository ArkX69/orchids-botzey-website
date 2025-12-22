import React from 'react';
import Image from 'next/image';

const ContactFooter = () => {
  return (
    <footer className="relative w-full bg-[#050510] font-body overflow-hidden">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-[120px] max-w-[1200px]" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Text */}
          <div className="flex flex-col gap-6">
            <span className="label-tag text-[#8D7AFA] text-[11px] font-bold tracking-[0.1em] uppercase">
              [ CONTACT US ]
            </span>
            <h2 className="text-[48px] md:text-[56px] font-display font-semibold text-white leading-[1.1] tracking-[-0.02em]">
              Ready to Automate <br />
              <span className="text-gradient">Your Business?</span>
            </h2>
            <p className="text-[18px] text-[#9999AA] max-w-[480px] leading-[1.6]">
              Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
            </p>
          </div>

          {/* Right Side: Lead Capture Form */}
          <div className="glass-card p-8 md:p-10 border border-[#1A1A2E] bg-[#0D0D1F]/60 backdrop-blur-xl rounded-[24px]">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[14px] font-medium text-[#9999AA]">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-[#1A1A2E]/50 border border-[#1A1A2E] rounded-[12px] px-4 py-3 text-white placeholder:text-[#444455] focus:outline-none focus:ring-2 focus:ring-[#8D7AFA]/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px] font-medium text-[#9999AA]">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#1A1A2E]/50 border border-[#1A1A2E] rounded-[12px] px-4 py-3 text-white placeholder:text-[#444455] focus:outline-none focus:ring-2 focus:ring-[#8D7AFA]/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[14px] font-medium text-[#9999AA]">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#1A1A2E]/50 border border-[#1A1A2E] rounded-[12px] px-4 py-3 text-white placeholder:text-[#444455] focus:outline-none focus:ring-2 focus:ring-[#8D7AFA]/50 transition-all resize-none"
                />
              </div>
              <p className="text-[12px] text-[#666677] leading-relaxed">
                By submitting, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms</a> and <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                className="pill-button mt-2 w-full bg-gradient-to-r from-[#8D7AFA] to-[#B381FF] text-white font-semibold py-4 rounded-[100px] hover:shadow-[0_0_20px_rgba(141,122,250,0.4)] transition-all transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="border-t border-[#1A1A2E] pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#8D7AFA] uppercase tracking-widest">[ CALL US ]</span>
                <p className="text-[18px] text-white font-semibold">+1234 567 89</p>
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#8D7AFA] uppercase tracking-widest">[ MAIL US ]</span>
                <a href="mailto:hello@bima.com" className="text-[18px] text-white font-semibold hover:text-[#8D7AFA] transition-colors block">
                  hello@bima.com
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#8D7AFA] uppercase tracking-widest">[ NAVIGATION ]</span>
              <nav className="flex flex-col gap-3">
                {['Services', 'Case Studies', 'Pricing', 'Contact', 'Blog', '404'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#9999AA] hover:text-white transition-colors text-[15px]">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#8D7AFA] uppercase tracking-widest">[ FOLLOW US ]</span>
              <nav className="flex flex-col gap-3">
                {['X/Twitter', 'Instagram', 'LinkedIn'].map((link) => (
                  <a key={link} href="#" className="text-[#9999AA] hover:text-white transition-colors text-[15px]">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Empty or Logo slot */}
            <div className="flex flex-col lg:items-end">
              <div className="text-[24px] font-display font-bold text-white mb-4">bima</div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-[#1A1A2E] text-[14px] text-[#666677]">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span>@2025 bima. All Rights Reserved</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="uppercase text-[11px] tracking-wider">Made by</span>
              <span className="text-white font-bold flex items-center gap-1">
                VELOX <span className="text-[#8D7AFA]">THEMES</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Watermark and 3D Asset */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none select-none z-0">
        {/* Large "bima" text */}
        <div className="absolute inset-x-0 bottom-[10%] text-center">
            <h2 className="text-[30vw] font-display font-extrabold text-[#111122] opacity-20 transform translate-y-1/4">
                bima
            </h2>
        </div>
        
        {/* Floating 3D Logo Asset */}
        <div className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 w-[800px] h-[800px] opacity-80 blur-[2px]">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyzNVSLRKdxilXqP9QMmuTY2E-30.png"
            alt="Bima 3D Logo Watermark"
            width={1000}
            height={1000}
            className="w-full h-full object-contain animate-pulse-slow active:scale-110 transition-transform duration-1000"
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -20px) scale(1.05); }
        }
      `}</style>
    </footer>
  );
};

export default ContactFooter;