"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

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
    title: "Data Analytics & Insights",
    description: "Unlock the power of your data with AI-driven analysis for better decision making.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI-2.png",
    span: "md:col-span-1",
    imgWidth: 1868,
    imgHeight: 1838,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SolutionsBento() {
  return (
    <section id="services" className="relative py-[100px] overflow-hidden bg-[#030312]">
      {/* Background Ray Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-full pointer-events-none opacity-40 z-0">
         <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI-2.png"
          alt="Reflective rays"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 px-8 md:px-16 lg:px-24 mx-auto max-w-[1100px]">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end"
        >
          <div className="flex flex-col gap-4">
            <span className="label-tag w-fit">
              [ Our Solutions ]
            </span>
                <h2 className="text-[30px] md:text-[36px] font-semibold leading-[1.1] text-white tracking-tight">
                Building AI-Powered <br />
                <span className="text-gradient">Workflow</span>
              </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-[16px] text-[#9898b0] leading-[1.6]">
              Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {bentoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group flex flex-col justify-between overflow-hidden p-0 min-h-[400px] ${card.span} bg-[#0b0b21] border border-white/10 rounded-[20px] transition-all duration-300 hover:border-[#8a7bff4d] hover:-translate-y-1 shadow-xl`}
            >
              <div className="p-7 pb-0">
                <h3 className="text-[20px] font-medium text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#9898b0] leading-relaxed max-w-[300px]">
                  {card.description}
                </p>
              </div>
              
              <div className="mt-6 relative w-full h-full min-h-[240px] flex items-end justify-center overflow-hidden">
                <div className="w-full h-full relative px-4 pt-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={card.imgWidth}
                    height={card.imgHeight}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
