import React from 'react';
import Image from 'next/image';

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

export default function TeamSection() {
  return (
    <section className="relative w-full py-[120px] bg-[#030312] overflow-hidden" id="team">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="label-tag">
                [ OUR TEAM ]
              </span>
            </div>
            <h2 className="text-[48px] font-semibold leading-[1.2] text-white">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-[18px] text-[#9898B0] leading-[1.6]">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-[#0b0b21] border border-white/10 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-[#8a7bff]/30"
            >
              <div className="absolute top-6 left-6 z-20">
                <span className="text-[12px] text-white/50 font-medium">
                  {member.role}
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b21] via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-[20px] font-semibold text-white tracking-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] pointer-events-none opacity-20">
        <div className="w-full h-full bg-[#8a7bff] blur-[160px] rounded-full" />
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #ffffff 0%, #8a7bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
