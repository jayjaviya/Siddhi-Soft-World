"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Globe, Cpu, Cog } from "lucide-react";

interface Capability {
  title: string;
  desc: string;
}

interface ServiceCapabilitiesProps {
  capabilities: Capability[];
}

const ICONS = [Zap, Shield, Cpu, Globe, Cog, CheckCircle2];

export default function ServiceCapabilities({ capabilities }: ServiceCapabilitiesProps) {
  return (
    <section className="py-24 bg-bg-deep/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Capabilities</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our specialized expertise delivered with surgical precision and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full glass-effect p-10 rounded-[2.5rem] border border-white/5 group-hover:border-white/20 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                  {/* Decorative number */}
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] italic group-hover:text-white/[0.07] transition-colors duration-500">
                    {idx + 1}
                  </div>

                  <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7 text-brand-secondary group-hover:text-brand-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                      {item.desc || "Enterprise-grade solution tailored for high-performance requirements and scalable infrastructure."}
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-sm font-bold tracking-widest uppercase text-brand-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                    Precision Engineered
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
