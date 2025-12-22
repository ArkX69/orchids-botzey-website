import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const projects = [
    {
      id: "01",
      title: "AI for Lead Qualification – SaaS Company",
      description: "AI-driven lead scoring boosted conversions by 40% for a SaaS company, reducing wasted time and doubling recurring revenue.",
      tags: ["Startup", "E-commerce"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/XwjkWjX6323ETn2EdkLiASUF7f0-26.webp",
      alt: "Laptop displaying Batavia project"
    },
    {
      id: "02",
      title: "AI Workflow Automation – Finance Firm",
      description: "AI automation cut data processing time by 80% and sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
      tags: ["Startup", "E-commerce"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/jJrkFq5ug7TmqveSkRDGcIPkQ8-27.webp",
      alt: "Laptop displaying Mandala project"
    },
    {
      id: "03",
      title: "AI-Powered Customer Support for E-Commerce",
      description: "AI chatbot reduced support costs by 60% and tripled response speed for an e-commerce brand. See how automation improved customer experience.",
      tags: ["Startup", "E-commerce"],
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/uYiu7pHP9kLmQxoEZgIIpEzXn7w-28.webp",
      alt: "Laptop mockup project"
    }
  ];

  return (
    <section className="bg-[#030312] py-[120px] overflow-hidden" id="case-studies">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-[48px] font-semibold tracking-[-0.01em] leading-[1.2] text-white text-center">
            See Our Work <span className="text-gradient">in Action</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col md:flex-row bg-[#0b0b21] border border-[rgba(255,255,255,0.08)] rounded-[24px] overflow-hidden hover:border-[rgba(138,123,255,0.3)] transition-all duration-300"
            >
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#8a7bff] font-mono text-[12px] tracking-[0.1em]">[{project.id}]</span>
                  </div>
                  <h3 className="text-[28px] font-medium leading-[1.3] text-white mb-6 group-hover:text-[#8a7bff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#9898b0] text-[18px] leading-[1.6] mb-8 max-w-[480px]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[12px] font-semibold text-[#9898b0] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative aspect-[1.2/1] md:aspect-auto overflow-hidden bg-[radial-gradient(circle_at_center,rgba(138,123,255,0.05)_0%,transparent_70%)]">
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full rounded-[12px]"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#0b0b21] border border-[rgba(255,255,255,0.08)] rounded-full text-white text-[16px] font-semibold hover:border-[#8a7bff] transition-all duration-300 shadow-[0_0_20px_rgba(138,123,255,0)] hover:shadow-[0_0_20px_rgba(138,123,255,0.2)]"
          >
            More works
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-x-0 bottom-[-1px] h-[1px] bg-gradient-to-r from-transparent via-[#8a7bff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;