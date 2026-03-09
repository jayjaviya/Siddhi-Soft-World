"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function AboutHero() {
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
    <section ref={targetRef} className="relative -top-[30px] min-h-[100vh] pt-10 overflow-hidden">
      {/* Scroll-tracked Media Container */}
      <div className="sticky top-0 h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
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
                src="/images/about/about-hero-bg.webp"
                alt="About Hero Background"
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

            <motion.h1
              className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
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
              <div className="flex flex-wrap justify-center overflow-hidden text-white/90">
                {"DRIVING THE".split(" ").map((word, wIdx) => (
                  <div key={wIdx} className="flex mr-4">
                    {word.split("").map((char, index) => (
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
                ))}
              </div>
              <div className="flex flex-wrap justify-center overflow-hidden">
                <div className="flex mr-4">
                  {"DIGITAL".split("").map((char, index) => (
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
                  {"EVOLUTION".split("").map((char, index) => (
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
              className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
            >
              Siddhi Soft World is a premium technology partner dedicated to building high-performance systems that empower global enterprises.
            </motion.p>

            {/* Unique Breadcrumb Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative inline-flex items-center"
            >
              <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-50 rounded-full" />
              <div className="relative flex items-center space-x-3 px-8 py-3 glass-effect rounded-full border border-white/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <Link 
                  href="/" 
                  className="text-xs font-black tracking-[0.2em] uppercase text-gray-500 hover:text-brand-primary transition-colors flex items-center"
                >
                  Home
                </Link>
                
                <ChevronRight className="w-3 h-3 text-brand-primary/40" />
                
                <span className="text-xs font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  About Us
                </span>

                {/* Animated shimmer on hover */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
