"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface RevealItem {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
}

interface StickyRevealProps {
  items: RevealItem[];
}

interface RevealMediaProps {
  item: RevealItem;
  idx: number;
  n: number;
  scrollYProgress: any;
}

function RevealMedia({ item, idx, n, scrollYProgress }: RevealMediaProps) {
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
  
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[3rem]"
    >
      <Image 
        src={item.image} 
        alt={item.title} 
        fill 
        className="object-cover opacity-90 transition-transform duration-1000 hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent opacity-40" />
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 mix-blend-overlay`} />
    </motion.div>
  );
}

export default function StickyReveal({ items }: StickyRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative pt-32 pb-32">
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
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Robust, scalable, and secure foundations for your mission-critical applications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Side: Sticky Media */}
          <div className="lg:w-1/2 h-[50vh] lg:h-[70vh] sticky top-48 lg:top-[25vh] flex flex-col justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden group shadow-2xl">
              {items.map((item, idx) => (
                <RevealMedia 
                  key={idx} 
                  item={item} 
                  idx={idx} 
                  n={items.length} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>

          {/* Right Side: Scrollable Content */}
          <div className="lg:w-1/2 space-y-[20vh] py-[10vh] order-1 lg:order-2">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-200px" }}
                transition={{ duration: 0.8 }}
                className="max-w-lg"
              >
                <item.icon className="w-12 h-12 text-brand-primary mb-8" />
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black mb-8 leading-tight"
                >
                  {item.title}
                </motion.h2>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  {item.description}
                </p>
                <div className="mt-12 h-1 w-24 bg-brand-primary rounded-full group" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
