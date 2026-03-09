"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
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
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
            {/* Scroll-tracked Background Image */}
            <motion.div
              style={{ y: bgY, scale: bgScale }}
              className="absolute inset-0 z-0 will-change-transform"
            >
              <Image
                src="/images/services/hero-services.jpg"
                alt="Services Hero Background"
                fill
                priority
                className="object-cover opacity-40 grayscale-[0.2]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep opacity-90" />
            <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-transparent to-bg-deep/90 z-10" />
            
            {/* Ghost Title Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap z-0">
              {breadcrumb || title.split(" ")[0]}
            </div>
          </div>

          <motion.div 
            style={{ opacity, y }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter"
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
              <div className="flex flex-wrap justify-center overflow-hidden">
                {(() => {
                  const words = title.toUpperCase().split(" ");
                  
                  if (words.length <= 1) {
                    return (
                      <div className="flex">
                        {words[0].split("").map((char, index) => (
                          <motion.span
                            key={`only-${index}`}
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
                    );
                  }

                  if (words.length === 2) {
                    return (
                      <>
                        <div className="flex mr-6 text-white">
                          {words[0].split("").map((char, index) => (
                            <motion.span
                              key={`first-${index}`}
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
                        <div className="flex">
                          {words[1].split("").map((char, index) => (
                            <motion.span
                              key={`last-${index}`}
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
                      </>
                    );
                  }

                  // 3+ words: first words white, second-to-last orange gradient, last word teal gradient
                  const lastWord = words[words.length - 1];
                  const secondLastWord = words[words.length - 2];
                  const firstWords = words.slice(0, -2).join(" ");
                  
                  return (
                    <>
                      {/* First word(s) - White, on its own line */}
                      <div className="flex justify-center w-full text-white mb-2">
                        {firstWords.split("").map((char, index) => (
                          <motion.span
                            key={`first-${index}`}
                            variants={{
                              initial: { opacity: 0, y: 30 },
                              animate: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="will-change-[opacity,transform] inline-block"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </div>
                      {/* Second-to-last word - Orange gradient + Last word - Teal gradient */}
                      <div className="flex justify-center">
                        <div className="flex mr-6">
                          {secondLastWord.split("").map((char, index) => (
                            <motion.span
                              key={`mid-${index}`}
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
                          {lastWord.split("").map((char, index) => (
                            <motion.span
                              key={`last-${index}`}
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
                    </>
                  );
                })()}
              </div>
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Unique Breadcrumb Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative inline-flex items-center"
            >
              <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-30 rounded-full" />
              <div className="relative flex items-center space-x-3 px-6 py-2.5 glass-effect rounded-full border border-white/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <Link 
                  href="/" 
                  className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-500 hover:text-brand-primary transition-colors"
                >
                  Home
                </Link>
                
                <ChevronRight className="w-3 h-3 text-brand-primary/40" />
                
                {breadcrumb && (
                  <>
                    <Link 
                      href="/services" 
                      className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-500 hover:text-brand-primary transition-colors"
                    >
                      Services
                    </Link>
                    <ChevronRight className="w-3 h-3 text-brand-primary/40" />
                  </>
                )}
                
                <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {breadcrumb || title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Decorative Elements (Fixed to Viewport or sticking) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent -z-10 pointer-events-none" />
      
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}
