"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ServiceOverviewProps {
  overview: string;
  summary: string;
}

export default function ServiceOverview({ overview, summary }: ServiceOverviewProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="pb-24 relative overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="relative rounded-[3rem] overflow-hidden border border-white/10"
      >
        {/* Background image with parallax */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 -top-[10%] -bottom-[10%]"
        >
          <Image
            src="/images/service-overview-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020a1a]/70 via-[#020a1a]/60 to-[#020a1a]/80" />
        </motion.div>

        {/* Animated mesh lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Horizontal glowing lines */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          />
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
          />
          
          {/* Vertical glowing lines */}
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-[25%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
          />
          <motion.div
            animate={{ y: ["100%", "-100%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute right-[25%] top-0 w-px h-full bg-gradient-to-b from-transparent via-brand-primary/15 to-transparent"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/50"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-primary/50 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-brand-primary/50 to-transparent" />
        </div>

        {/* Content */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 p-12 md:p-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-10"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/80">Service Overview</span>
            </motion.div>

            {/* Title with staggered word animation */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-8"
            >
              Empowering your business with{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary inline-block"
              >
                Precision & Scale
              </motion.span>
            </motion.h2>

            {/* Overview text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-medium"
            >
              {overview}
            </motion.p>

            {/* Animated divider */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="h-[2px] mx-auto mb-10 bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary"
            />

            {/* Summary quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed italic"
            >
              &ldquo;{summary}&rdquo;
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
