"use client";

import Hero from "@/features/hero";
import HomeAbout from "@/features/about/HomeAbout";
import ServicesSection from "@/features/services/ServicesSection";
import StickyReveal from "@/features/sticky-reveal";
import StatsCounter from "@/features/stats/StatsCounter";
import TechLogos from "@/features/tech-logos/TechLogos";
import { motion } from "framer-motion";
import { Cpu, Shield, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import WorkflowCycle from "@/features/workflow/WorkflowCycle";
import FAQ from "@/features/faq";


const REVEAL_ITEMS = [
  {
    title: "Agile Development",
    description: "We follow the agile software outsourcing model to ensure maximum targeted results for our global clients, delivering high-performance applications with precision.",
    icon: Code,
    image: "/images/home/features/Agile-Development.jpg",
    color: "from-brand-primary via-white to-brand-secondary",
  },
  {
    title: "Server Excellence",
    description: "Expertise in IIS Server Management, AD Infrastructure, and bare metal recovery. We provide 24/7 reliability for your most critical business systems.",
    icon: Cpu,
    image: "/images/home/features/Server-Excellence.jpg",
    color: "from-brand-secondary via-white to-brand-primary",
  },
  {
    title: "Disaster Recovery",
    description: "Proactive threat mitigation and advanced recovery protocols. We ensure your data is always secure with redundant RAID configurations and cloud backups.",
    icon: Shield,
    image: "/images/home/features/Disaster-Recovery.jpg",
    color: "from-brand-primary via-white to-brand-secondary",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TechLogos />
      <HomeAbout />
      <StatsCounter />
      <StickyReveal items={REVEAL_ITEMS} />
      

      <ServicesSection />

      <FAQ />
      {/* <WorkflowCycle />
      <Testimonials />
      <FAQ /> */}

      {/* CTA Section */}
      <section className="pt-32 pb-0 container mx-auto px-6">
        <div className="bg-gradient-blue-royal rounded-t-[4rem] p-16 md:p-20 relative overflow-hidden group border border-white/10">
          {/* Background Video (Replace src with your actual video path) */}
          <video
            src="/videos/cta-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none transition-opacity duration-1000 group-hover:opacity-40"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#020a1a]/40 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 text-white">
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter"
              >
                Ready to engineer your <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Digital Future?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/50 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Let's discuss how our high-performance architectures and scalable IT strategies can empower your business growth.
              </motion.p>
              
              <Link href="/contact" className="inline-block mt-4">
                <div className="group relative inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 overflow-hidden hover:scale-105 active:scale-95 text-sm">
                  {/* Shimmer Effect */}
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
                  />

                  <motion.div 
                    className="px-10 py-5 flex items-center justify-center relative z-10"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.span
                      variants={{
                        initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                        hover: { opacity: 1, x: 0, width: "auto", marginRight: 15 }
                      }}
                      className="overflow-hidden flex items-center"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.span>
                    
                    <span className="tracking-widest uppercase">Start Consultation</span>
                    
                    <motion.span
                      variants={{
                        initial: { opacity: 1, x: 0, width: "auto", marginLeft: 15 },
                        hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                      }}
                      className="overflow-hidden flex items-center"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.span>
                  </motion.div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Decorative background gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/20 via-brand-secondary/5 to-transparent -z-10 group-hover:opacity-75 transition-opacity duration-700" />
          
          {/* Animated circuit element - bottom right */}
          <div className="absolute bottom-8 right-8 w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20"
            />
            {/* Middle counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 md:inset-8 rounded-full border border-white/10"
            >
              {/* Dot on orbit */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              />
            </motion.div>
            {/* Inner rotating square */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
              className="absolute inset-14 md:inset-[4.5rem] rounded-2xl border border-brand-primary/25"
            >
              {/* Corner dots */}
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-brand-primary/60" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400/60" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-cyan-400/60" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-brand-primary/60" />
            </motion.div>
            {/* Center pulsing core */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-cyan-400 to-brand-primary shadow-lg shadow-cyan-400/40"
            />
            {/* Connecting lines from center */}
            <div className="absolute inset-0 m-auto w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />
            <div className="absolute inset-0 m-auto w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
