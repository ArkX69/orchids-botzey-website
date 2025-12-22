import React from 'react';

/**
 * PainPoints Section for Bima AI Automation Agency
 * 
 * Features:
 * - Sticky layout with a scroll-reveal effect for text content.
 * - Decorative SVG borders around each pain point text.
 * - Blurred background effect (glassmorphism) as specified in high-level design.
 * - Pixel-perfect computed styles for dark theme.
 */

const PainPoints = () => {
  const painPoints = [
    {
      id: "blur-text-1",
      text: "You need AI, but don’t know where to start",
    },
    {
      id: "blur-text-2",
      text: "Scaling is hard without automation",
    },
    {
      id: "blur-text-3",
      text: "High operational costs reduce profits",
    },
    {
      id: "blur-text-4",
      text: "Repetitive tasks slow you down",
    },
  ];

  return (
    <section className="relative w-full bg-[#000319]" style={{ minHeight: '300vh' }}>
      {/* Container for the sticky layout - The trigger for the whole sequence */}
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        
        {/* Left Side: Sticky Title */}
        <div 
          className="flex-1 flex items-center justify-center lg:justify-start lg:pl-[15%] z-10"
          id="problem"
        >
          <div className="max-w-[400px]">
             <h2 
              className="text-[48px] lg:text-[72px] font-bold tracking-tight text-white leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-gradient">Is This You?</span>
            </h2>
          </div>
        </div>

        {/* Right Side: Scrolling Reveal Content */}
        <div 
          className="flex-1 relative flex flex-col items-center justify-center p-6 lg:p-12 h-screen"
          id="text-scroll"
        >
          {/* 
              Note: This is a static implementation of the reveal structure. 
              In the real site, these layers are driven by a scroll progress value 
              mapping opacity and blur based on scroll Y coordinate.
          */}
          <div className="w-full max-w-[600px] flex flex-col gap-16 lg:gap-32">
            {painPoints.map((point, index) => (
              <div 
                key={point.id}
                id={point.id}
                className="group relative transition-all duration-700"
              >
                {/* Text Wrapper with Glassmorphism and Decorative Borders */}
                <div className="relative glass-card px-10 py-8 flex items-center justify-center border border-transparent">
                  {/* Left decorative SVG border */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[80%] opacity-50">
                    <svg width="100%" height="100%" viewBox="0 0 16 120" fill="none" preserveAspectRatio="none">
                      <path d="M1 0V120M1 0H16M1 120H16" stroke="#8D7AFA" strokeWidth="2" strokeOpacity="0.3" />
                    </svg>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-center text-white/90 leading-snug">
                    {point.text}
                  </h3>

                  {/* Right decorative SVG border */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[80%] rotate-180 opacity-50">
                    <svg width="100%" height="100%" viewBox="0 0 16 120" fill="none" preserveAspectRatio="none">
                      <path d="M1 0V120M1 0H16M1 120H16" stroke="#8D7AFA" strokeWidth="2" strokeOpacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Spacer for Scroll Depth */}
          <div className="h-[20vh] w-full shrink-0" />
        </div>
      </div>

      {/* Decorative background rays similar to Hero but specifically for this section transition */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div 
          className="absolute top-0 right-0 w-[80%] h-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(141, 122, 250, 0.15), transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* Global CSS required for the text-gradient class used above if not already provided in layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .text-gradient {
          background: linear-gradient(to right, #ffffff, #8d7afa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(13, 13, 31, 0.4);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          transition: all 0.3s ease;
        }
        #text-scroll > div:not(:first-child) {
          opacity: 0.6;
          filter: blur(4px);
        }
        #text-scroll:hover > div {
          opacity: 1 !important;
          filter: blur(0px) !important;
        }
      `}} />
    </section>
  );
};

export default PainPoints;