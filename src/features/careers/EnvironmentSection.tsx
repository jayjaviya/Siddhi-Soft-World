"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FACILITIES = [
  {
    title: "Premium Workstations",
    desc: "Engineered for focus. High-end setups, ergonomic gear, and the latest tech to empower your best work.",
    image: "/images/careers/workstation.png"
  },
  {
    title: "Creative Lounges",
    desc: "Spaces to recharge and connect. Our lounge areas are designed for spontaneous collaboration and relaxation.",
    image: "/images/careers/lounge.png"
  },
  {
    title: "Agile Zones",
    desc: "Dynamic environments for team coordination, stand-ups, and brainstorming high-performance solutions.",
    image: "/images/careers/collaboration.png"
  },
  {
    title: "High-Speed Infrastructure",
    desc: "Uninterrupted flow. Our space is backed by industrial-grade connectivity and redundant power systems.",
    image: "/images/careers/infrastructure.png"
  },
];

export interface FacilityItem {
  title: string;
  desc: string;
  image: string;
}

interface EnvironmentSectionProps {
  title?: React.ReactNode;
  description?: string;
  items?: FacilityItem[];
  className?: string;
}

export default function EnvironmentSection({ 
  title, 
  description = "We believe that extraordinary work happens in extraordinary spaces. Our office is designed to foster innovation, comfort, and seamless collaboration.", 
  items = FACILITIES, 
  className = "py-24" 
}: EnvironmentSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {title ? (
            title
          ) : (
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white"
              >
                Culture &
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
              >
                Space
              </motion.span>
            </h2>
          )}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
              </div>

              {/* Bottom Content Panel */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-8 pt-24 isolate">
                {/* Glassmorphism Effect */}
                <div 
                  className="absolute inset-0 backdrop-blur-xl bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" 
                  style={{ 
                    maskImage: "linear-gradient(to top, black 40%, transparent)",
                    WebkitMaskImage: "linear-gradient(to top, black 40%, transparent)",
                  }}
                />
                
                <div className="relative pt-6">
                  <h3 className="text-[1.15rem] md:text-[1.25rem] font-black mb-3 tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-primary">
                    {facility.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed font-medium">
                    {facility.desc}
                  </p>
                </div>
              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
