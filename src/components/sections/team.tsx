import React from 'react';
import Image from 'next/image';

/**
 * TeamSection Component
 * 
 * Clones the "Meet the Experts" section with a grid of 4 team members.
 * Adheres to the dark theme, using Hanken Grotesk for display and Inter for body.
 */

const teamMembers = [
  {
    name: "Alex Kumongso",
    role: "Founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/XwjkWjX6323ETn2EdkLiASUF7f0-26.webp",
  },
  {
    name: "Lisa Ningrum",
    role: "Automation Architect",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/jJrkFq5ug7TmqveSkRDGcIPkQ8-27.webp",
  },
  {
    name: "Ryan Wilujeng",
    role: "Lead AI Engineer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/uYiu7pHP9kLmQxoEZgIIpEzXn7w-28.webp",
  },
  {
    name: "Sarah Kumala",
    role: "Customer Success Manager",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/iryXuFlc5kEuEPs9HnVhfWAkwWk-29.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-[160px] flex justify-center overflow-hidden bg-[#020210]">
      {/* Background Ray/Glow Mask Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/Bc7eub42bMX1SkZz7JRmuQ7T8.png')",
            filter: "blur(80px)"
          }}
        />
      </div>

      <div className="container relative z-10 px-6 sm:px-10 max-w-[1240px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-[600px]">
            <span className="inline-block text-[12px] font-semibold tracking-[0.1em] text-[#a1a1aa] mb-4 uppercase font-body">
              [ OUR TEAM ]
            </span>
            <h2 className="text-[48px] md:text-[56px] leading-[1.1] font-bold text-white font-display mb-6">
              Meet the Experts
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#a1a1aa] font-body">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col glass-card border-[rgba(255,255,255,0.1)] hover:border-[rgba(157,123,255,0.4)] transition-all duration-300 overflow-hidden"
              style={{ borderRadius: '24px' }}
            >
              {/* Member Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay for Text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020210] to-transparent" />
                
                {/* Role Label (Top Left) */}
                <div className="absolute top-5 left-5">
                  <span className="text-[12px] font-semibold text-white/60 font-body uppercase tracking-wider">
                    {member.role.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Text Overlay on Image Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-[14px] text-white/50 font-body mb-1">
                  {member.role}
                </p>
                <h3 className="text-[24px] font-bold text-white font-display tracking-tight leading-tight">
                  {member.name}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-1px] rounded-[24px] border border-[#9d7bff]/30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#9d7bff]/20 blur-[30px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}