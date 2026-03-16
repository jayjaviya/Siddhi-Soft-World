"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Deep Analysis",
    desc: "We dive deep into requirements to find the most efficient architectural path."
  },
  {
    icon: PenTool,
    title: "Advanced Architecture",
    desc: "Designing scalable, decoupled systems using modern microservices or serverless patterns."
  },
  {
    icon: Layout,
    title: "Rapid Development",
    desc: "High-speed implementation with continuous integration and clean code standards."
  },
  {
    icon: ShieldCheck,
    title: "Rigorous QA",
    desc: "AI-driven and manual testing to ensure rock-solid stability and security."
  },
  {
    icon: Rocket,
    title: "Continuous Delivery",
    desc: "Automated deployment pipelines for seamless, zero-downtime updates."
  }
];

export default function WorkingCycle() {
  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/[0.05] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white"
            >
              How We
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Work
            </motion.span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Our engineering process is built for agility and scale. We don't just write code; we architect solutions that stand the test of time.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group relative"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-bg-deep border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-white" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-white text-[10px] font-black flex items-center justify-center border-4 border-[#080808]">
                    0{idx + 1}
                  </div>

                  {/* Thin connecting arrow to next node (Desktop only) */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(100%+1.25rem)] top-1/2 -translate-y-1/2 text-white/25 pointer-events-none select-none">
                      <ArrowRight className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
