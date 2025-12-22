import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#020210] pt-[160px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {/* Main Footer Links Section */}
        <div className="flex flex-col md:flex-row justify-between mb-24 md:mb-40 gap-16 md:gap-0">
          {/* Contact Details */}
          <div className="flex flex-col gap-12">
            <div className="flex gap-4 items-start">
              <span className="text-[12px] font-semibold text-[#a1a1aa] font-display uppercase tracking-widest mt-1">
                [ CALL US ]
              </span>
              <a href="tel:+123456789" className="text-[20px] font-display font-bold text-white hover:text-[#9d7bff] transition-colors">
                +1234 567 89
              </a>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[12px] font-semibold text-[#a1a1aa] font-display uppercase tracking-widest mt-1">
                [ MAIL US ]
              </span>
              <div className="flex flex-col">
                <a href="mailto:hello@bima.com" className="text-[32px] md:text-[40px] font-display font-bold text-gradient leading-tight">
                  hello@bima.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Socials */}
          <div className="flex gap-16 md:gap-24">
            {/* Navigation Column */}
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#a1a1aa] font-display uppercase tracking-widest">
                [ NAVIGATION ]
              </span>
              <ul className="flex flex-col gap-3">
                {['Services', 'Case Studies', 'Pricing', 'Contact', 'Blog', '404'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-[#9d7bff] text-base transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#a1a1aa] font-display uppercase tracking-widest">
                [ FOLLOW US ]
              </span>
              <ul className="flex flex-col gap-3">
                {['X/Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-white hover:text-[#9d7bff] text-base transition-colors">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/10 gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[14px] text-[#a1a1aa]">@2025 bima. All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="text-[14px] text-[#a1a1aa] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[14px] text-[#a1a1aa] hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#a1a1aa] font-display uppercase tracking-widest">MADE BY</span>
            <span className="text-white font-display font-bold text-lg tracking-tight">bima</span>
          </div>
        </div>
      </div>

      {/* Stylized Huge Logo Section */}
      <div className="relative w-full flex justify-center mt-[-100px] pointer-events-none select-none">
        <div className="relative w-full max-w-[1400px] h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Stylized "bima" Background Text */}
          <h2 className="absolute text-[20vw] font-display font-black text-white/[0.02] tracking-tighter bottom-0 leading-[0.8]">
            bima
          </h2>
          
          {/* 3D Ring/Graphic visual */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-full h-full flex items-center justify-center opacity-70">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyzNVSLRKdxilXqP9QMmuTY2E-30.png"
                  alt="Bima Decorative Ring"
                  width={800}
                  height={800}
                  className="w-auto h-full max-h-[100%] object-contain mix-blend-screen"
                  priority
                />
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9d7bff]/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;