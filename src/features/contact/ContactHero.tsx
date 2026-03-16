"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function ContactHero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["4rem", "0rem"]);

  // Composition animation
  const compY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const compRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={targetRef} className="relative -top-[30px] min-h-[100vh] pt-10 overflow-hidden">
      {/* Scroll-tracked Media Container */}
      <div className="sticky top-0 h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
          className="relative w-full h-full overflow-hidden shadow-2xl shadow-brand-primary/20 bg-bg-deep"
        >
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact/contact-hero-bg.jpg"
              alt="Contact Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-bg-deep/50 backdrop-blur-[1px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/60 via-transparent to-bg-deep/60 z-10" />
          </div>
            
            {/* Ambient Blurs */}
            <motion.div 
              animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] z-20" 
            />
            <motion.div 
              animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] z-20" 
            />

          <motion.div 
            style={{ opacity, y }}
            className="relative z-10 h-full container mx-auto px-6 flex items-center justify-center text-center"
          >
            {/* Left Content */}
            <div className="pt-20">

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
                  {"LET'S CONNECT &".split(" ").map((word, wIdx) => (
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
                    {"INNOVATE".split("").map((char, index) => (
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
                    {"TOGETHER".split("").map((char, index) => (
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
                className="text-lg md:text-2xl text-gray-400 max-w-xl mb-12 leading-relaxed mx-auto"
              >
                Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
              </motion.p>

              {/* Unique Breadcrumb Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative inline-flex items-center mb-12"
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
                  
                  <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Contact Us
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
