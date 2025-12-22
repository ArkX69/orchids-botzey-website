import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      tag: 'AI AUTOMATION',
      title: 'The Future Is Automated: Why Now Is the Time to Embrace AI',
      description: 'Discover how AI automation is reshaping industries—and why early adopters are leading the charge.',
      author: 'Richard Thompson',
      date: 'Apr 21, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/zyoGvpFzu5T6Jm77ftKQQ9KmEo-20.png',
      featured: true,
    },
    {
      id: 2,
      tag: 'BUSINESS',
      title: '5 Business Tasks You Didn’t Know You Could Automate',
      description: 'From scheduling to data entry, here’s how Bima can help you reclaim hours every week.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/RTZYnC9sP7zj8eW0b5taC0ljk-21.png',
      featured: false,
    },
    {
      id: 3,
      tag: 'TIPS',
      title: 'AI vs. Human: Finding the Perfect Workflow Balance',
      description: 'Learn when to automate, when to delegate, and how to get the best of both worlds.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/QTDwH2lZxjpLxApTT0I51RgasxA-22.png',
      featured: false,
    },
  ];

  return (
    <section className="relative py-[120px] bg-[#050510] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col gap-4">
            <span className="label-tag">[ BLOG ]</span>
            <h2 className="text-[48px] font-semibold tracking-[-0.02em] leading-[1.1] text-white">
              Latest Insights
            </h2>
          </div>
          <a
            href="#"
            className="pill-button bg-[rgba(141,122,250,0.1)] border border-[#8D7AFA] text-white flex items-center gap-2 hover:scale-105 transition-transform duration-300 group"
          >
            More Insights
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Post */}
          <div className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden flex flex-col md:col-span-2 lg:col-span-2 group cursor-pointer hover:border-[#8D7AFA33] transition-colors">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative w-full lg:w-[45%] h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[11px] font-bold text-[#8D7AFA] tracking-[0.1em] mb-6 block">
                  [ {blogPosts[0].tag} ]
                </span>
                <h3 className="text-[32px] font-semibold text-white leading-[1.2] mb-6 max-w-[500px]">
                  {blogPosts[0].title}
                </h3>
                <p className="text-[#9999AA] text-[16px] leading-[1.6] mb-8 max-w-[500px]">
                  {blogPosts[0].description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A2E] border border-[#FFFFFF14] items-center justify-center flex overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#8D7AFA] to-[#B381FF] opacity-50" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[14px] font-medium">{blogPosts[0].author}</span>
                    <span className="text-[#9999AA] text-[12px]">{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Posts */}
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="glass-card bg-[#0D0D1F] border border-[#1A1A2E] rounded-[24px] overflow-hidden group cursor-pointer hover:border-[#8D7AFA33] transition-colors"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-[180px] h-[200px] sm:h-full shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-[#8D7AFA] tracking-[0.1em] mb-4 block">
                    [ {post.tag} ]
                  </span>
                  <h4 className="text-[20px] font-semibold text-white leading-[1.3] mb-4">
                    {post.title}
                  </h4>
                  <p className="text-[#9999AA] text-[14px] leading-[1.5] line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;