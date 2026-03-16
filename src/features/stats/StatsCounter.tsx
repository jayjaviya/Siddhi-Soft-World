"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, Users, Clock, Award } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "from-brand-primary to-orange-300",
    iconColor: "text-brand-primary",
  },
  {
    icon: Briefcase,
    value: 160,
    suffix: "+",
    label: "Projects Delivered",
    color: "from-cyan-400 to-blue-400",
    iconColor: "text-cyan-400",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    color: "from-brand-primary to-orange-300",
    iconColor: "text-brand-primary",
  },
  {
    icon: Award,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-cyan-400 to-blue-400",
    iconColor: "text-cyan-400",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: prefersReducedMotion ? 0.01 : 1.4,
        ease: [0.22, 1, 0.36, 1],
      });
    }
  }, [isInView, motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsCounter() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Numbers That
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Speak
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-lg mx-auto">
            A decade of delivering enterprise-grade results across the globe.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.04]">
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-primary/0 group-hover:bg-brand-primary/[0.06] rounded-full blur-[60px] transition-all duration-700 pointer-events-none" />

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { rotate: 8, scale: 1.05 }}
                    className={`w-12 h-12 mx-auto rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center mb-6 ${stat.iconColor} transition-all duration-500`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </motion.div>

                  {/* Animated Number */}
                  <div className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b ${stat.color} mb-3 leading-none`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
