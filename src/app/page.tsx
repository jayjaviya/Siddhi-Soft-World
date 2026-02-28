"use client";

import Hero from "@/features/hero";
import HomeAbout from "@/features/about/HomeAbout";
import ServicesSection from "@/features/services/ServicesSection";
import StickyReveal from "@/features/sticky-reveal";
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
      <HomeAbout />
      <StickyReveal items={REVEAL_ITEMS} />

      <ServicesSection />

      <FAQ />
      {/* <WorkflowCycle />
      <Testimonials />
      <FAQ /> */}

      {/* CTA Section */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="bg-gradient-blue-royal rounded-[4rem] p-16 md:p-20 relative overflow-hidden group border border-white/10">
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
              
              <Link href="/contact" className="inline-block">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-4 bg-brand-primary hover:bg-brand-secondary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-2xl shadow-brand-primary/25 group"
                >
                  <span>Start Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </Link>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/20 via-brand-secondary/5 to-transparent -z-10 group-hover:opacity-75 transition-opacity duration-700" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-secondary/20 rounded-full blur-[100px] -z-10" 
          />
        </div>
      </section>
    </main>
  );
}
