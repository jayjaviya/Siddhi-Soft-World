"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black tracking-widest uppercase mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>About Siddhi Soft World</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Driving Global <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Digital Evolution</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Siddhi Soft World is a premium technology partner dedicated to building high-performance systems that empower global enterprises. We bridge the gap between complex challenges and elegant, scalable solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Target, title: "Our Mission", desc: "To be the first choice for IT solutions globally." },
                { icon: Users, title: "Expert Team", desc: "Dedicated professionals driven by excellence." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <item.icon className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <h3 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center space-x-3 text-brand-primary font-black uppercase text-xs tracking-widest hover:text-white transition-colors"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Visual Element (Glass Card Composition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 glass-card p-8 rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 opacity-30" />
              
              <div className="text-center">
                <div className="text-7xl md:text-9xl font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                  SSW
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                    10+
                  </div>
                  <div className="text-xs font-black tracking-[0.4em] uppercase text-gray-400">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
