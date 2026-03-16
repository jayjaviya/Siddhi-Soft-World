"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Users, ChevronUp, ChevronDown } from "lucide-react";

interface Benefit {
  title: string;
  desc: string;
}

interface ServiceBenefitsProps {
  benefits?: Benefit[];
}

const ICONS = [ShieldCheck, Zap, TrendingUp, Users];
const COLORS = [
  "from-blue-600 to-cyan-500",
  "from-brand-primary to-brand-secondary",
  "from-green-600 to-teal-500",
  "from-purple-600 to-pink-500"
];

const DEFAULT_BENEFITS = [
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption and proactive threat monitoring to keep your assets safe.",
  },
  {
    title: "Hyperscale Velocity",
    desc: "Engineered for speed and low latency, ensuring your business stays ahead of the curve.",
  },
  {
    title: "ROI Optimized",
    desc: "Strategic implementations designed to maximize your technology investment and growth.",
  },
  {
    title: "Expert Partnership",
    desc: "Dedicated specialists who act as a strategic extension of your internal engineering team.",
  }
];

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const displayBenefits = benefits && benefits.length > 0 ? benefits : DEFAULT_BENEFITS;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % displayBenefits.length);
  }, [displayBenefits.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + displayBenefits.length) % displayBenefits.length);
  }, [displayBenefits.length]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const item = displayBenefits[current];
  const Icon = ICONS[current % ICONS.length];
  const color = COLORS[current % COLORS.length];

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Competitive Edge</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            Why leading global enterprises choose Siddhi Soft World for their mission-critical transformations.
          </p>
        </div>

        {/* Vertical Slider */}
        <div className="relative max-w-3xl mx-auto">
          {/* Slider Content */}
          <div className="relative overflow-hidden rounded-[2.5rem] min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="glass-effect p-10 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8"
              >
                <div className={`w-20 h-20 shrink-0 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center p-5 shadow-2xl`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: up arrow left, counter center, down arrow right */}
          <div className="flex items-center justify-between mt-6 px-8">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-brand-primary/40 hover:bg-brand-primary/10 transition-all duration-300"
            >
              <ChevronUp className="w-4 h-4 text-gray-400" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-brand-primary">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-600 text-sm font-medium">
                / {String(displayBenefits.length).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={next}
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-brand-primary/40 hover:bg-brand-primary/10 transition-all duration-300"
            >
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
