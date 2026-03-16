"use client";

import { motion } from "framer-motion";
import { Send, FileText, Users, Code, CheckCircle } from "lucide-react";

const STEPS = [
  {
    title: "Application",
    desc: "Submit your resume and portfolio through our online form."
  },
  {
    title: "Initial Screening",
    desc: "Our recruiters review your experience and technical alignment."
  },
  {
    title: "Technical Assessment",
    desc: "Showcase your skills through a real-world coding challenge or architecture review."
  },
  {
    title: "Cultural Interview",
    desc: "A chance to meet the team and ensure our values are in sync."
  },
  {
    title: "Offer & Onboarding",
    desc: "Welcome to the team! We provide a seamless transition into our ecosystem."
  }
];

export default function HiringProcess() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
              How we <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Hire</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our process is rigorous yet respectful. We look for technical excellence, creative problem-solving, and a cultural fit that elevates everyone.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.title} className="relative">
                  <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Section */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full lg:w-[42%] text-left"
                    >
                      <div className={`p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.05] group backdrop-blur-sm relative overflow-hidden`}>
                        {/* Hover Effect Light */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex items-center gap-6 mb-6 flex-row">
                          <div>
                            <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase block mb-1">Step {idx + 1}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>

                    {/* Step Number (Middle) */}
                    <div className="relative z-20 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#080808] border-[3px] border-white/10 flex items-center justify-center text-3xl md:text-4xl font-black text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-white/5 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">{idx + 1}</span>
                      </motion.div>
                    </div>

                    {/* Spacer for Desktop Zigzag */}
                    <div className="hidden lg:block w-[42%]" />
                  </div>

                  {/* Connecting Arc/Line between steps (Optional/Conceptual) */}
                  {idx < STEPS.length - 1 && (
                    <div className="lg:hidden h-12 w-px bg-gradient-to-b from-white/10 to-transparent mx-auto my-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
