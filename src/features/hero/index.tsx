"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Server, ArrowRight, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["4rem", "0rem"]);

  // Background Image Animation
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <section ref={targetRef} className="relative -top-[30px] min-h-[150vh] pt-10 overflow-hidden">
      {/* Scroll-tracked Media Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
          className="relative w-full h-full overflow-hidden shadow-2xl shadow-brand-primary/20 bg-gradient-to-br from-brand-primary/10 via-bg-deep to-brand-secondary/10"
        >
          {/* Optimized Background Content */}
          <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
            <motion.div
              style={{ y: bgY, scale: bgScale }}
              className="absolute inset-0 z-0 will-change-transform"
            >
              <Image
                src="/images/home/hero/background.webp"
                alt="Corporate Office Background"
                fill
                priority
                className="object-cover opacity-60 grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep opacity-90" />
            </motion.div>

            {/* Strong Dark Overlay to make the colorful title pop */}
            <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-transparent to-bg-deep/90 z-10" />
          </div>

          <motion.div 
            style={{ opacity, y }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          >
            {/* The Future of Software Badge - Attached to top */}


            <motion.h1
              className="text-6xl md:text-[6.5rem] font-black mt-16 mb-8 leading-[1.1] tracking-tighter"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.04,
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              {/* SIDDHI - White */}
              <div className="flex flex-wrap justify-center overflow-hidden text-white mb-2">
                {"SIDDHI".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="will-change-[opacity,transform] inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* SOFT WORLD - Orange & Teal */}
              <div className="flex flex-wrap justify-center overflow-hidden px-4">
                <div className="flex mr-8">
                  {"SOFT".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-primary will-change-[opacity,transform] inline-block pb-2"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex">
                  {"WORLD".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-secondary will-change-[opacity,transform] inline-block pb-2"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
            >
              Elevating the digital dimension through premium software engineering and high-performance server management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pb-[30px]"
            >
              <Link
                href="/services"
                className="group relative inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-2xl shadow-brand-primary/30 overflow-hidden hover:scale-105 active:scale-95"
              >
                {/* Shimmer Effect */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
                />
                
                <motion.div 
                  className="px-12 py-6 flex items-center justify-center relative z-10"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                      hover: { opacity: 1, x: 0, width: "auto", marginRight: 16 }
                    }}
                    className="overflow-hidden flex items-center"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                  
                  <span className="tracking-widest uppercase">Explore Services</span>
                  
                  <motion.span
                    variants={{
                      initial: { opacity: 1, x: 0, width: "auto", marginLeft: 16 },
                      hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                    }}
                    className="overflow-hidden flex items-center"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </motion.div>
              </Link>
              <Link
                href="/about"
                className="group relative inline-block w-fit glass-effect hover:bg-white/10 text-white font-black rounded-3xl transition-all duration-500 shadow-2xl border border-white/10 overflow-hidden hover:scale-105 active:scale-95"
              >
                {/* Shimmer Effect */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
                />

                <motion.div 
                  className="px-12 py-6 flex items-center justify-center relative z-10"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                      hover: { opacity: 1, x: 0, width: "auto", marginRight: 16 }
                    }}
                    className="overflow-hidden flex items-center text-brand-secondary"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                  
                  <span className="tracking-widest uppercase text-gray-300">Our Story</span>
                  
                  <motion.span
                    variants={{
                      initial: { opacity: 1, x: 0, width: "auto", marginLeft: 16 },
                      hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                    }}
                    className="overflow-hidden flex items-center text-brand-secondary"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Highlights - Moved below the expanded view */}
      <div className="container mx-auto px-6 py-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 flex flex-col md:flex-row justify-center items-center md:space-x-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Our Performance
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Pillars
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            The foundational principles that drive our engineering excellence and delivery.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200, scaleX: 0.3 }}
          whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-brand-secondary/10 border border-brand-secondary/20 backdrop-blur-md p-[30px] rounded-[3rem]"
        >
            {[
              { icon: Server, title: "Server Excellence", desc: "Enterprise-grade infrastructure management with 24/7 reliability." },
              { icon: Shield, title: "Ironclad Security", desc: "Proactive threat mitigation and advanced disaster recovery protocols." },
              { icon: Zap, title: "Agile Velocity", desc: "Rapid deployment cycles and hyperscale performance optimizations." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-12 rounded-[3.5rem] group relative overflow-hidden hover:border-blue-400/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] transition-all duration-500"
              >
                {/* White Gradient at bottom (Always present, behind blue) */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                
                {/* Blue Hover Background (Appears on hover) */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all duration-500 group-hover:rotate-12">
                    <item.icon className="w-8 h-8 text-brand-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
