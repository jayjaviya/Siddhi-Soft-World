"use client";

import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface RevealItem {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  features?: string[];
}

interface StickyRevealProps {
  items: RevealItem[];
}

interface RevealMediaProps {
  item: RevealItem;
  idx: number;
  n: number;
  scrollYProgress: any;
  enableScrollFx: boolean;
}

function RevealMedia({ item, idx, n, scrollYProgress, enableScrollFx }: RevealMediaProps) {
  const input = [];
  const output = [];
  
  if (idx === 0) {
    input.push(0, (idx + 0.5) / n, (idx + 0.8) / n);
    output.push(1, 1, 0);
  } else if (idx === n - 1) {
    input.push((idx - 0.2) / n, (idx + 0.1) / n, 1);
    output.push(0, 1, 1);
  } else {
    input.push(
      (idx - 0.2) / n,
      (idx + 0.1) / n,
      (idx + 0.5) / n,
      (idx + 0.8) / n
    );
    output.push(0, 1, 1, 0);
  }
  
  const opacity = useTransform(scrollYProgress, input, output, { clamp: true });
  const staticOpacity = idx === 0 ? 1 : 0;
  
  return (
    <motion.div
      style={{ opacity: enableScrollFx ? opacity : staticOpacity }}
      className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[3rem]"
    >
      <Image 
        src={item.image} 
        alt={item.title} 
        fill 
        className="object-cover opacity-90" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent opacity-40" />
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-15 mix-blend-overlay`} />
    </motion.div>
  );
}

interface RevealTextProps {
  item: RevealItem;
  idx: number;
  n: number;
  scrollYProgress: any;
  enableScrollFx: boolean;
}

function RevealText({ item, idx, n, scrollYProgress, enableScrollFx }: RevealTextProps) {
  const input = [];
  const outputOpacity = [];
  const outputRotateX = [];
  
  if (idx === 0) {
    input.push(0, (idx + 0.5) / n, (idx + 0.8) / n);
    outputOpacity.push(1, 1, 0);
    outputRotateX.push(0, 0, -90);
  } else if (idx === n - 1) {
    input.push((idx - 0.2) / n, (idx + 0.1) / n, 1);
    outputOpacity.push(0, 1, 1);
    outputRotateX.push(90, 0, 0);
  } else {
    input.push(
      (idx - 0.2) / n,
      (idx + 0.1) / n,
      (idx + 0.5) / n,
      (idx + 0.8) / n
    );
    outputOpacity.push(0, 1, 1, 0);
    outputRotateX.push(90, 0, 0, -90);
  }
  
  const opacity = useTransform(scrollYProgress, input, outputOpacity, { clamp: true });
  const rotateX = useTransform(scrollYProgress, input, outputRotateX, { clamp: true });
  
  const staticOpacity = idx === 0 ? 1 : 0;
  
  return (
    <motion.div
      style={{ 
        opacity: enableScrollFx ? opacity : staticOpacity,
        rotateX: enableScrollFx ? rotateX : 0,
        transformOrigin: "center center -200px",
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex flex-col justify-center max-w-lg"
    >
      <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
        {item.title}
      </h3>
      <p className="text-lg text-gray-400 leading-relaxed font-medium mb-6">
        {item.description}
      </p>

      {item.features && (
        <ul className="space-y-3 mb-8">
          {item.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-center gap-3 text-sm md:text-[15px] text-gray-200 font-medium tracking-wide">
              <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(238,113,40,0.6)] flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="h-1.5 w-20 bg-brand-primary rounded-full shadow-[0_0_20px_rgba(238,113,40,0.4)]" />
    </motion.div>
  );
}

export default function StickyReveal({ items }: StickyRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableScrollFx = isDesktop && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 25,
  });

  return (
    <div ref={containerRef} className="relative pt-12 pb-12">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 flex flex-row flex-wrap justify-center items-center gap-x-4 leading-[1.1] text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enterprise
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Infrastructure
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-xl mx-auto">
            Robust, scalable, and secure foundations for your mission-critical applications.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-start min-h-[100px]">
          
          {/* 1. Mobile & Medium Grid: traditional flow */}
          <div className="lg:hidden w-full flex flex-col gap-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
                </div>
                <div className="max-w-lg">
                  <h3 className="text-2xl font-black mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium mb-4">{item.description}</p>

                  {item.features && (
                    <ul className="space-y-2.5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Desktop Sticky Scroll Height Provider (Invisible Spacer) */}
          <div className="hidden lg:block lg:w-1/2 h-[350vh] opacity-0 pointer-events-none invisible" />

          {/* 3. Left Side: Sticky Media Panel */}
          <div className="hidden lg:flex lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:w-1/2 h-full flex-col items-end pr-12">
            <div className="sticky top-[12vh] w-full max-w-[500px] aspect-square rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden group shadow-2xl relative">
              {items.map((item, idx) => (
                <RevealMedia 
                  key={idx} 
                  item={item} 
                  idx={idx} 
                  n={items.length} 
                  scrollYProgress={smoothScrollProgress} 
                  enableScrollFx={enableScrollFx}
                />
              ))}
            </div>
          </div>

          {/* 4. Right Side: Sticky Text Slider Panel */}
          <div className="hidden lg:flex lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 h-full flex-col items-start pl-12">
            <div className="sticky top-[12vh] w-full max-w-[500px] h-96 relative">
              {items.map((item, idx) => (
                <RevealText 
                  key={idx} 
                  item={item} 
                  idx={idx} 
                  n={items.length} 
                  scrollYProgress={smoothScrollProgress} 
                  enableScrollFx={enableScrollFx}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
