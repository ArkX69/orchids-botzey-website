import React from 'react';
import Image from 'next/image';

const Solutions = () => {
  const bentoCards = [
    {
      title: "Workflow Automation",
      description: "Let AI handle repetitive tasks, so your team can focus on high-impact work.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/TS0GdeSRuq8LcLpRdIDKB8L5xA-3.png",
      span: "md:col-span-2",
      imgWidth: 1802,
      imgHeight: 662
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Enhance customer experience with 24/7 AI-driven support.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zujhS3mHLi4D2JdsnvbVVJrM-4.png",
      span: "md:col-span-1",
      imgWidth: 1283,
      imgHeight: 595
    },
    {
      title: "Personalized AI Marketing",
      description: "Send smarter messages at the right moment with AI.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/moHFnckbWJMT4QikVlOc93HWg-5.png",
      span: "md:col-span-1",
      imgWidth: 1014,
      imgHeight: 596
    },
    {
      title: "CRM Automation",
      description: "Capture, qualify, and route leads focuses only on the right prospects automatically.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/R27Ca5uwhsDd5u5TVFHAHXFRixw-6.png",
      span: "md:col-span-1",
      imgWidth: 1014,
      imgHeight: 596
    },
    {
      title: "Add new title here",
      description: "Write your new description here. The layout adapts to longer text, but for the best look, try to keep it around three lines.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI-2.png",
      span: "md:col-span-1",
      imgWidth: 1868,
      imgHeight: 1838,
      isPlaceholder: true
    }
  ];

  return (
    <section id="services" className="relative py-[120px] overflow-hidden bg-[#030312]">
      {/* Background Ray Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none opacity-40 z-0">
         <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI-2.png"
          alt="Reflective rays"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-end">
          <div className="flex flex-col gap-4">
            <span className="label-tag w-fit px-3 py-1 text-[12px] font-bold tracking-[0.1em] text-[#8a7bff] bg-[#8a7bff1a] rounded-full uppercase">
              [ Our Solutions ]
            </span>
            <h2 className="text-[48px] md:text-[56px] font-semibold leading-[1.1] text-white tracking-tight">
              Building AI-Powered <br />
              <span className="text-gradient">Workflow</span>
            </h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-[18px] text-[#9898b0] leading-[1.6]">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoCards.map((card, index) => (
            <div
              key={index}
              className={`bento-card group flex flex-col justify-between overflow-hidden p-0 min-h-[460px] ${card.span} bg-[#0b0b21] border border-white/10 rounded-[24px] transition-all duration-300 hover:border-[#8a7bff4d]`}
            >
              <div className="p-8 pb-0">
                <h3 className="text-[24px] font-medium text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[16px] text-[#9898b0] leading-relaxed max-w-[340px]">
                  {card.description}
                </p>
              </div>
              
              <div className="mt-6 relative w-full h-full min-h-[240px] flex items-end justify-center overflow-hidden">
                {card.isPlaceholder ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                     <div className="relative w-full h-full bg-[#16162d] rounded-2xl flex items-center justify-center border border-white/5">
                        <div className="w-16 h-16 rounded-full border-2 border-[#8a7bff] border-t-transparent animate-spin opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b21] to-transparent" />
                     </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative px-4 pt-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={card.imgWidth}
                      height={card.imgHeight}
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #ffffff 0%, #8a7bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Solutions;