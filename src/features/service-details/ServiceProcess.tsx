"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Step {
  title: string;
  desc: string;
  image: string;
}

const DEFAULT_STEPS: Step[] = [
  { 
    title: "Discovery", 
    desc: "We begin by understanding your unique business challenges and technical requirements before defining direction.", 
    image: "/images/approach/discovery.png" 
  },
  { 
    title: "Strategy", 
    desc: "Developing a customized roadmap and architecture tailored for your specific goals, ensuring a validated execution plan.", 
    image: "/images/approach/strategy.png" 
  },
  { 
    title: "Execution", 
    desc: "Agile development and precise implementation with continuous quality assurance to convert concepts into practical systems.", 
    image: "/images/approach/execution.png" 
  },
  { 
    title: "Optimization", 
    desc: "Performance tuning, scaling, and integration to ensure your system operates at peak efficiency with post-launch support.", 
    image: "/images/approach/optimization.png" 
  }
];

export default function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-bg-deep rounded-[3rem]">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Approach</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            A systematic, results-driven methodology designed to transform complex challenges into 
            seamless digital solutions with precision and excellence.
          </motion.p>
        </div>

        <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-24 relative">
          
          {/* Central Connecting SVG Line (Desktop Only) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            {/* 
              ViewBox 0 0 100 100 allows us to use percentages directly as coordinates.
              The desktop layout uses a strict 50/50 split per row.
              Right icon center is around x=75 and left icon center around x=25.
              We adjust the Y coordinates to match the vertical spacing of the flex rows.
            */}
            <svg 
              className="w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path
                d="M 10.5 12.5
                   L 10.5 25
                   L 89.5 25
                   L 89.5 37.5
                   L 89.5 50
                   L 10.5 50
                   L 10.5 62.5
                   L 10.5 75
                   L 89.5 75
                   L 89.5 87.5"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              />
              <motion.path
                 d="M 10.5 12.5
                   L 10.5 25
                   L 89.5 25
                   L 89.5 37.5
                   L 89.5 50
                   L 10.5 50
                   L 10.5 62.5
                   L 10.5 75
                   L 89.5 75
                   L 89.5 87.5"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
            </svg>
          </div>

          {DEFAULT_STEPS.map((step, idx) => {
            // Layout: Alternating L-R-L-R
            const isImageRight = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col-reverse md:flex-row items-center justify-center md:gap-12 gap-8 relative z-10 md:min-h-[250px] ${
                  isImageRight ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Block */}
                <div className="w-full md:w-1/2 flex flex-col pt-8 md:pt-0 md:px-6">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white/90 mb-5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-0 max-w-[32rem]">
                    {step.desc}
                  </p>
                </div>

                {/* Image Block */}
                <div className={`w-full md:w-1/2 flex ${isImageRight ? "md:justify-end" : "md:justify-start"} justify-center`}>
                  {/* Decorative Zig-Zag Bracket (Mobile Only) */}
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[3px] h-12 bg-white/30 rounded-full block md:hidden -z-10" />

                  {/* Image */}
                  <div className="relative w-44 h-44 md:w-60 md:h-60 z-10 bg-bg-deep rounded-[5px] border border-brand-primary/20 shadow-[0_0_40px_rgba(238,113,40,0.1)] overflow-hidden">
                     <Image 
                        src={step.image} 
                        alt={step.title}
                        fill
                        className="object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
