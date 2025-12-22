import React from 'react';
import Image from 'next/image';

/**
 * Team section for the Bima AI Automation Agency clone.
 * Showcases "Meet the Experts" with premium dark-themed member cards.
 */

interface TeamMember {
  name: string;
  role: string;
  image: string;
  label: string;
}

const team: TeamMember[] = [
  {
    name: 'Alex Kumongso',
    role: 'Founder',
    label: 'Founder',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/tvGWuWMdg0mHd4Kf2PeiQbOM6GE-16.png',
  },
  {
    name: 'Lisa Ningrum',
    role: 'Automation Architect',
    label: 'Automation Architect',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/EG35ITABCQIe4vx2G9qN3fWvtto-17.png',
  },
  {
    name: 'Ryan Wilujeng',
    role: 'Lead AI Engineer',
    label: 'Lead AI Engineer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/9Dfj4JQljtSFbK4ZwIpvC69ZE4-18.png',
  },
  {
    name: 'Sarah Kumala',
    role: 'Customer Success Manager',
    label: 'Customer Success Manager',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/VfFigIJ1sE79kbxrtXaKdHVH9pw-19.png',
  },
];

const Team = () => {
  return (
    <section className="relative w-full py-[120px] bg-background overflow-hidden" id="team">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                [ OUR TEAM ]
              </span>
            </div>
            <h2 className="text-[48px] font-semibold leading-[1.2] text-white">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-[18px] text-muted-foreground leading-[1.6]">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-surface border border-border rounded-[24px] overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              {/* Member Label (Top left corner absolute) */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-[12px] text-white/50 font-medium font-sans">
                  {member.role}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay for text legibility and style */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>

              {/* Name (Bottom absolute on card for pixel-perfect match) */}
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-[20px] font-semibold text-white tracking-tight">
                  {member.name}
                </h3>
              </div>

              {/* Subtle card bottom shadow for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow Asset (optional, matches the rays in hero/solution) */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] pointer-events-none opacity-20">
        <div className="w-full h-full bg-primary blur-[160px] rounded-full" />
      </div>
    </section>
  );
};

export default Team;