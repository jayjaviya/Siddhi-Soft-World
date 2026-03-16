"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Target, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeAbout() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableOrbit = isDesktop && !prefersReducedMotion;

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



            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Driving Global <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Digital Evolution</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
              Siddhi Soft World is a premium technology partner dedicated to building high-performance systems that empower global enterprises. We bridge the gap between complex challenges and elegant, scalable solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Target, title: "Our Mission", desc: "To be the first choice for IT solutions globally." },
                { icon: Users, title: "Expert Team", desc: "Dedicated professionals driven by excellence." },
              ].map((item, i) => (
                <div key={i} className="space-y-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center border border-brand-primary/20 transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group relative inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 overflow-hidden hover:scale-105 active:scale-95 text-sm"
            >
              {/* Shimmer Effect */}
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
              />

              <motion.div 
                className="px-8 py-4 flex items-center justify-center relative z-10"
                initial="initial"
                whileHover="hover"
              >
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                    hover: { opacity: 1, x: 0, width: "auto", marginRight: 12 }
                  }}
                  className="overflow-hidden flex items-center"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.span>
                
                <span className="tracking-widest uppercase">Discover Our Story</span>
                
                <motion.span
                  variants={{
                    initial: { opacity: 1, x: 0, width: "auto", marginLeft: 12 },
                    hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                  }}
                  className="overflow-hidden flex items-center"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right: Half Earth with 10+ Years */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-end min-h-[500px]"
          >
            {/* 10+ Years text floating above earth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 text-center mb-2"
            >
              <div className="text-7xl md:text-[10rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary leading-none">
                10+
              </div>
              <div className="text-sm font-black tracking-[0.5em] uppercase text-gray-400 mt-4">
                Years of Excellence
              </div>
            </motion.div>

            {/* Glow ring around earth */}
            {enableOrbit && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-[-60px] w-[400px] h-[400px] rounded-full border border-cyan-500/10 z-0"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-[-40px] w-[360px] h-[360px] rounded-full border border-brand-primary/10 z-0"
                />
              </>
            )}

            {/* Half Earth Image */}
            <div className="relative w-full overflow-hidden rounded-t-full" style={{ height: '380px' }}>
              <Image
                src="/images/half-earth.png"
                alt="Global digital network"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Top fade */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg-deep to-transparent z-10" />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-deep to-transparent z-10" />
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyan-500/15 rounded-full blur-[60px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
