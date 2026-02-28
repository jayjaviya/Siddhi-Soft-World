"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Users } from "lucide-react";

interface Benefit {
  title: string;
  desc: string;
}

interface ServiceBenefitsProps {
  benefits?: Benefit[];
}

const DEFAULT_BENEFITS = [
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption and proactive threat monitoring to keep your assets safe.",
    icon: ShieldCheck,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Hyperscale Velocity",
    desc: "Engineered for speed and low latency, ensuring your business stays ahead of the curve.",
    icon: Zap,
    color: "from-brand-primary to-brand-secondary"
  },
  {
    title: "ROI Optimized",
    desc: "Strategic implementations designed to maximize your technology investment and growth.",
    icon: TrendingUp,
    color: "from-green-600 to-teal-500"
  },
  {
    title: "Expert Partnership",
    desc: "Dedicated specialists who act as a strategic extension of your internal engineering team.",
    icon: Users,
    color: "from-purple-600 to-pink-500"
  }
];

const ICONS = [ShieldCheck, Zap, TrendingUp, Users];
const COLORS = [
  "from-blue-600 to-cyan-500",
  "from-brand-primary to-brand-secondary",
  "from-green-600 to-teal-500",
  "from-purple-600 to-pink-500"
];

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const displayBenefits = benefits && benefits.length > 0 ? benefits : DEFAULT_BENEFITS;
  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Competitive Edge</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Why leading global enterprises choose Siddhi Soft World for their mission-critical transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayBenefits.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const color = COLORS[idx % COLORS.length];
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateX: -45, transformOrigin: "top" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                style={{ perspective: 1000 }}
                className="group glass-effect p-12 rounded-[3rem] border border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row items-center gap-10"
              >
                <div className={`w-24 h-24 shrink-0 bg-gradient-to-br ${color} rounded-[2rem] flex items-center justify-center p-6 shadow-2xl`}>
                  <Icon className="w-full h-full text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black mb-4 group-hover:text-brand-primary transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
