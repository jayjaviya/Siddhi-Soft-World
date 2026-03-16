"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Server, ArrowRight, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableParallax = isDesktop && !prefersReducedMotion;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, enableParallax ? 1.08 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, enableParallax ? 120 : 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["4rem", "0rem"]);

  // Background Image Animation
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", enableParallax ? "8%" : "0%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, enableParallax ? 1.1 : 1.02]);

  return (
    <>
      <section ref={targetRef} className="relative -top-[30px] min-h-[115svh] md:min-h-[120vh] pt-10 overflow-hidden">
        {/* Scroll-tracked Media Container */}
        <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
            className="relative w-full h-full overflow-hidden shadow-2xl shadow-brand-primary/20 bg-gradient-to-br from-brand-primary/10 via-bg-deep to-brand-secondary/10"
          >
            {/* Optimized Background Content */}
            <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
              <motion.div
                style={{ y: bgY, scale: bgScale }}
                className="absolute inset-0 z-0"
              >
                <video
                  src="/videos/hero-bg.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep opacity-90" />
              </motion.div>

              {/* Strong Dark Overlay to make the colorful title pop */}
              <div className="absolute inset-0 bg-black/60 z-10" />
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
      </section>

    </>
  );
}
