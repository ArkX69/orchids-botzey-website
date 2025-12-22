import React from 'react';
import Image from 'next/image';

const TechStack = () => {
  const stack = [
    {
      id: "01",
      name: "OPEN AI",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/GOqzj1nSpi8ghRB6cOx3gs02M4-15.png",
      rotation: "-8deg",
      zIndex: 10,
    },
    {
      id: "02",
      name: "ZAPIER",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/dIX4pjdxAyXF48AZQtOmL0xk-14.png",
      rotation: "-4deg",
      zIndex: 20,
    },
    {
      id: "03",
      name: "AIRTABLE",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/0inQJKilj8qkeUgN4bqX6KsU5rU-13.png",
      rotation: "0deg",
      zIndex: 30,
    },
    {
      id: "04",
      name: "LANGCHAIN",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/wuAQkitFA7FROtqnxuSNB3IjY-12.png",
      rotation: "4deg",
      zIndex: 40,
    },
    {
      id: "05",
      name: "PYTHON",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b45b94bc-8e63-4fb4-af64-78780ade06d8-bima-framer-media/assets/images/4tBBTStYBI6viIm3S0V32LWmEsE-11.png",
      rotation: "8deg",
      zIndex: 50,
    },
  ];

  return (
    <section className="relative w-full py-[120px] bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24">
          <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-tight">
            Our Tech<br />
            <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="relative flex justify-center items-center h-[500px] md:h-[600px] mt-12">
          {stack.map((item, index) => (
            <div
              key={item.id}
              className="absolute transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-8"
              style={{
                zIndex: item.zIndex,
                transform: `translateX(${(index - 2) * 110}px) rotate(${item.rotation})`,
                left: 'calc(50% - 110px)', // Centering base on card width
              }}
            >
              <div className="group relative w-[220px] h-[280px] bg-surface border border-white/10 rounded-[24px] p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                {/* ID Tag */}
                <div className="text-[12px] font-semibold text-muted-foreground/50 tracking-widest">
                  [{item.id}]
                </div>

                {/* Logo Area */}
                <div className="flex-1 flex items-center justify-center py-4">
                  <div className="relative w-24 h-24 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="text-center">
                  <h4 className="text-[14px] font-bold tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                </div>
                
                {/* Subtle bottom glow on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/0 group-hover:bg-primary/40 blur-md rounded-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative element for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />
    </section>
  );
};

export default TechStack;