"use client";

import { motion } from "framer-motion";

interface ServiceOverviewProps {
  overview: string;
  summary: string;
}

export default function ServiceOverview({ overview, summary }: ServiceOverviewProps) {
  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-12 md:p-20 rounded-[3.5rem] border border-white/10 relative overflow-hidden group"
        >
          {/* Spotlight Effect */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
            >
              Empowering your business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Precision & Scale</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-medium"
            >
              {overview}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-10"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed italic"
            >
              "{summary}"
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Decorative side blurs */}
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
