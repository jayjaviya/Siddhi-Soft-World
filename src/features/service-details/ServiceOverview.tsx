"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Orb from "@/components/ui/Orb";

interface ServiceOverviewProps {
  title: string;
  overview: string;
  summary: string;
}

export default function ServiceOverview({ title, overview, summary }: ServiceOverviewProps) {
  // Truncate summary to ~15 words for a cleaner, concise message
  const shortDescription = summary.split(" ").slice(0, 15).join(" ") + "...";

  // Dynamic Title Mapping based on service title
  const getDynamicTitle = (t: string) => {
    const lower = t.toLowerCase();
    if (lower.includes("web development")) return "Digital Engines";
    if (lower.includes("software development")) return "Agile Craft";
    if (lower.includes("managed services")) return "Infinite Care";
    if (lower.includes("network")) return "Neural Link";
    if (lower.includes("storage")) return "Data Vaults";
    if (lower.includes("server")) return "Server Core";
    if (lower.includes("backup") || lower.includes("disaster")) return "Safe Guard";
    if (lower.includes("application")) return "App Pulse";
    return "Future Tech";
  };

  const dynamicTitle = getDynamicTitle(title);
  
  return (
    <section className="pb-24 relative">
      <div className="relative overflow-hidden bg-[#020a1a] border border-white/5 min-h-[800px] flex items-center justify-center">
        
        {/* Full Space Orb Background - Scaled to act as a container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-full h-full max-w-[680px] max-h-[680px]">
            <Orb
              hoverIntensity={1.2}
              rotateOnHover
              hue={0}
              forceHoverState={false}
              backgroundColor="#020a1a"
              className="scale-[1.15]"
            />
          </div>
        </div>

        {/* Atmospheric Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient(circle at center, transparent 20%, #020a1a 100%) opacity-60" />
        </div>

        {/* Centered Content - PLACED INSIDE THE CIRCLE */}
        <div className="relative z-10 text-center px-8 max-w-sm mx-auto flex flex-col items-center justify-center aspect-square rounded-full pointer-events-none">
          

          {/* 2-3 Word Big Title - Dynamic Based on Service */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-5xl font-black leading-[1] tracking-tighter mb-6 text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {dynamicTitle}
          </motion.h2>

          {/* Visionary Description - Centered Inside Orb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs mx-auto"
          >
            <p className="text-[10px] md:text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-[0.2em] opacity-80">
              {shortDescription}
            </p>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
