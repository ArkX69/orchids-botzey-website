import React from 'react';
import Link from 'next/link';

/**
 * Footer component for Bima - AI Automation Agency.
 * Features a multi-column layout with contact details, navigation, social links,
 * and a large background branding watermark with glowing orbital assets.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#030312] pt-[120px] pb-[60px] text-[#9898B0]">
      {/* Background Watermark Branding */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none select-none">
        <div className="relative w-full max-w-[1400px] h-[500px]">
          {/* Large "bima" watermark text */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[400px] font-bold leading-none tracking-tighter text-[#FFFFFF] opacity-[0.03]">
            bima
          </div>
          
          {/* Glowing orbital asset */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40">
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

      <div className="container relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 mb-24">
          
          {/* Contact Details Column */}
          <div className="md:col-span-6 flex flex-col gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF] bg-[rgba(138,123,255,0.1)] px-2 py-1 rounded-sm">
                  [ CALL US ]
                </span>
                <span className="text-white text-lg font-medium">+1234 567 89</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF] bg-[rgba(138,123,255,0.1)] w-fit px-2 py-1 rounded-sm">
                  [ MAIL US ]
                </span>
                <Link 
                  href="mailto:hello@bima.com" 
                  className="text-white text-3xl md:text-5xl font-semibold tracking-tight transition-colors hover:text-[#8A7BFF]"
                >
                  hello@bima.com
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF]">
              [ NAVIGATION ]
            </span>
            <nav className="flex flex-col gap-3 font-medium">
              {[
                { name: 'Services', href: '/#services' },
                { name: 'Case Studies', href: '/#work' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'Contact', href: '/#contact' },
                { name: 'Blog', href: '/blog' },
                { name: '404', href: '/404' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-white hover:text-[#8A7BFF] transition-colors w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A7BFF]">
              [ FOLLOW US ]
            </span>
            <div className="flex flex-col gap-3 font-medium">
              {[
                { name: 'X/Twitter', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'LinkedIn', href: '#' }
              ].map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  className="text-white hover:text-[#8A7BFF] transition-colors w-fit"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar Separator */}
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.08)] mb-8" />

        {/* Legal & Attribution */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px]">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <span className="opacity-60">@{currentYear} bima. All Rights Reserved</span>
            <Link href="/privacy" className="text-white hover:text-[#8A7BFF] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white hover:text-[#8A7BFF] transition-colors">Terms and Conditions</Link>
          </div>
          
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-[11px] uppercase tracking-[0.1em] opacity-60">MADE BY</span>
            <div className="flex items-center gap-1 text-white">
              <span>bima</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Specific Styles (not possible in globals for positioning) */}
      <style jsx global>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </footer>
  );
}