"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  desc: string;
}

const DEFAULT_STEPS = [
  { title: "Discovery", desc: "We begin by understanding your unique business challenges and technical requirements." },
  { title: "Strategy", desc: "Developing a customized roadmap and architecture tailored for your specific goals." },
  { title: "Execution", desc: "Agile development and precise implementation with continuous quality assurance." },
  { title: "Optimization", desc: "Performance tuning and scaling to ensure your system operates at peak efficiency." }
];

export default function ServiceProcess() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Approach</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            A proven, structured methodology that transforms complex challenges into scalable, high-performance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -z-10" />
          
          {DEFAULT_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="mb-10 relative">
                <div className="w-20 h-20 bg-bg-deep border border-white/5 rounded-[2rem] flex items-center justify-center text-3xl font-black text-white group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 group-hover:scale-110 shadow-2xl">
                  {idx + 1}
                </div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-brand-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-2xl font-black mb-6 group-hover:text-brand-secondary transition-colors uppercase tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                {step.desc}
              </p>
              
              <div className="mt-8 h-1 w-0 bg-brand-primary group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background flare */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
