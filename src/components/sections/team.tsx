import React from 'react';
import Image from 'next/image';

/**
 * TeamSection Component
 * 
 * Clones the "Meet the Experts" team section with:
 * - 4-column grid of professional portraits
 * - Labels, names, and roles
 * - Glassmorphic cards with glowing border effects
 * - Dark theme consistency with specified typography and colors
 */

const teamMembers = [
  {
    name: 'Alex Kumongso',
    role: 'Founder',
    majorRole: 'Automation Architect',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/tvGWuWMdg0mHd4Kf2PeiQbOM6GE-16.png'
  },
  {
    name: 'Lisa Ningrum',
    role: 'Automation Architect',
    majorRole: 'Lead AI Engineer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/EG35ITABCQIe4vx2G9qN3fWvtto-17.png'
  },
  {
    name: 'Ryan Wilujeng',
    role: 'Lead AI Engineer',
    majorRole: 'Customer Success Manager',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/9Dfj4JQljtSFbK4ZwIpvC69ZE4-18.png'
  },
  {
    name: 'Sarah Kumala',
    role: 'Customer Success Manager',
    majorRole: 'Lead AI Engineer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/VfFigIJ1sE79kbxrtXaKdHVH9pw-19.png'
  }
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-[120px] bg-[#050510] overflow-hidden">
      {/* Background Lighting/Ray Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20">
        <Image 
          src="https://framerusercontent.com/images/Bc7eub42bMX1SkZz7JRmuQ7T8.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-[1200px]">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 px-4">
          <div className="max-w-[600px]">
            <span className="label-tag block mb-4 text-[#8D7AFA] font-bold text-[11px] tracking-[0.1em]">
              [ OUR TEAM ]
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 font-display">
              Meet the Experts
            </h2>
          </div>
          <div className="max-w-[420px]">
            <p className="text-[#9999AA] text-base md:text-lg leading-relaxed font-body">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col rounded-[24px] bg-[#0D0D1F] border border-[#ffffff14] overflow-hidden transition-all duration-500 hover:border-[#8D7AFA33] hover:shadow-[0_0_30px_rgba(141,122,250,0.1)]"
            >
              {/* Image Container with Gradient Fade */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Status/Label Tag */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="text-[12px] text-white/50 font-medium font-body bg-[#050510]/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.role}
                  </span>
                </div>

                {/* Vertical Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1F] via-transparent to-transparent opacity-60"></div>
                
                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white font-display">
                    {member.name}
                  </h3>
                  <p className="text-[#9999AA] text-sm font-body">
                    {member.majorRole}
                  </p>
                </div>
              </div>

              {/* Glowing Border Effect (Internal) */}
              <div className="absolute inset-0 rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(400px_circle_at_var(--mouse-x,0)_var(--mouse-y,0),rgba(141,122,250,0.15),transparent_40%)]" style={{ transform: 'translateZ(0)' }} />
              
              {/* Subtle accent line on top of info */}
              <div className="absolute bottom-[80px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#8D7AFA]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom glow decorative element */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-[#8D7AFA] rounded-[100%] blur-[120px] opacity-[0.05] pointer-events-none"></div>
    </section>
  );
}