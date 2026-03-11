"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PARTNERS = [
  {
    category: "Car Service",
    content: "We're partnering with global leaders in ground transportation to integrate our systems into the everyday mobility network seamlessly."
  },
  {
    category: "Airlines",
    content: "Our partnerships with leading global airlines expand our reach, ensuring our technology operates safely and efficiently in shared airspace."
  },
  {
    category: "Infrastructure",
    content: "Together with key infrastructure partners, we are developing the physical and digital foundations required to support next-generation operations."
  },
  {
    category: "R&D",
    content: "We collaborate with pioneers in manufacturing and research to push the boundaries of what's possible in aerospace materials and systems."
  },
  {
    category: "Technology",
    content: "Our aviation technology partnerships power the systems that keep our operations running autonomously, safely, and predictably."
  },
  {
    category: "Government",
    content: "We collaborate with forward-thinking government agencies to define the regulatory landscape and safety standards for the future."
  }
];

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add smoothing to replicate GSAP scrub: 1 feel (weighted scrolling)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll position mapping
  // 0-16% = panel 0, 17-33% = panel 1, etc.
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      // 0.99 ensures we never hit an out-of-bounds index (6)
      const index = Math.floor(v * 0.99 * PARTNERS.length);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  // Horizontal motion for the marquee
  // Moves from 0% (left-aligned start) to -80% (showing the last item)
  const xTransform = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);
  
  // Opacities for continuous visual engagement 
  const headerOpacity = useTransform(smoothProgress, [0.95, 1], [1, 0.5]);

  return (
    <section ref={containerRef} className="relative bg-bg-deep text-white border-t border-white/5">
      {/* 400vh container gives us ample scroll space to map to the 6 items visually */}
      <div style={{ height: "400vh" }}>
        
        {/* Sticky viewport content */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
            
            {/* Header */}
            <motion.div 
              className="container mx-auto px-6 mb-12 md:mb-16 mt-8 md:mt-0"
              style={{ opacity: headerOpacity }}
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter max-w-5xl leading-[1.1]">
                   With partners like this,<br className="hidden md:block" /> there&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-orange-400 to-brand-secondary">nowhere to go but up.</span>
                </h2>
            </motion.div>

            {/* Scrolling Marquee Area */}
            {/* Using a relative container with overflow-hidden to act as the window */}
            <div className="w-full relative py-6 md:py-10 border-y border-white/[0.08] mb-12 md:mb-20 bg-white/[0.01]">
              
                {/* Fade overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />

                <motion.div 
                   className="flex items-center"
                   style={{ x: xTransform }}
                >
                   {/* Spacing adjustments to ensure items come into focus nicely */}
                   <div className="flex items-center gap-16 md:gap-32 px-12 md:px-[15vw]">
                       {PARTNERS.map((partner, i) => {
                          const isActive = activeIndex === i;
                          return (
                            <div 
                              key={partner.category}
                              className={`text-5xl md:text-7xl lg:text-[7rem] font-black whitespace-nowrap transition-all duration-700 ease-out select-none ${
                                  isActive 
                                    ? "text-white scale-100 opacity-100" 
                                    : "text-white/10 scale-95 opacity-50 blur-[2px]"
                              }`}
                            >
                              {partner.category}
                            </div>
                          );
                       })}
                   </div>
                </motion.div>
            </div>

            {/* Content Panels mapped to Active Index */}
            <div className="container mx-auto px-6 h-48 md:h-56 relative flex items-start">
               {PARTNERS.map((partner, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div
                      key={i}
                      className={`absolute left-6 right-6 top-0 transition-all duration-700 ease-out flex flex-col items-start ${
                        isActive 
                          ? "opacity-100 translate-y-0 z-10" 
                          : "opacity-0 translate-y-12 pointer-events-none z-0"
                      }`}
                    >
                       {/* Label element connecting to the marquee */}
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-2 h-2 rounded-full bg-brand-primary" />
                         <span className="text-xs font-black tracking-[0.2em] uppercase text-brand-primary">
                           {partner.category} Partner
                         </span>
                       </div>
                       
                       <div className="max-w-4xl">
                           <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium leading-[1.4] tracking-tight">
                               &quot;{partner.content}&quot;
                           </p>
                       </div>
                    </div>
                  );
               })}
            </div>

        </div>
      </div>
    </section>
  );
}
