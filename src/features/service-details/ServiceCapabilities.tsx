"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Capability {
  title: string;
  desc: string;
}

interface ServiceCapabilitiesProps {
  capabilities: Capability[];
}

const ACTIVE_BACKGROUNDS = [
  "from-[#ee7128]/72 via-orange-200/65 to-orange-50",
  "from-cyan-200/80 via-sky-100/60 to-white",
  "from-blue-200/80 via-indigo-100/60 to-white",
  "from-emerald-200/80 via-teal-100/60 to-white",
  "from-orange-200/80 via-amber-100/60 to-white",
  "from-violet-200/80 via-fuchsia-100/60 to-white",
];

export default function ServiceCapabilities({ capabilities }: ServiceCapabilitiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!capabilities || capabilities.length === 0) {
    return null;
  }

  const visibleIndexes = [activeIndex - 1, activeIndex, activeIndex + 1];

  return (
    <section className="py-24 bg-bg-deep/50 relative">
      <div className="relative z-10">
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

        <div className="overflow-hidden pb-2">
          <div className="flex items-stretch justify-center gap-4 md:gap-5">
            {visibleIndexes.map((idx, position) => {
              if (idx < 0 || idx >= capabilities.length) {
                return (
                  <div
                    key={`empty-${position}`}
                    className="w-[180px] md:w-[240px] shrink-0"
                    aria-hidden="true"
                  />
                );
              }

              const item = capabilities[idx];
              const isActive = idx === activeIndex;
              const number = String(idx + 1).padStart(2, "0");
              const isSideCard = position !== 1;
              const isLeftCard = position === 0;
              const handleSelect = () => {
                if (isSideCard) {
                  setActiveIndex(idx);
                }
              };

              return (
                <motion.div
                  key={idx}
                  onClick={handleSelect}
                  onKeyDown={(event) => {
                    if (!isSideCard) return;
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  role={isSideCard ? "button" : undefined}
                  tabIndex={isSideCard ? 0 : -1}
                  aria-label={isSideCard ? `Open capability: ${item.title}` : undefined}
                  layout
                  transition={{
                    duration: 0.65,
                    layout: { type: "spring", stiffness: 110, damping: 24, mass: 0.9 },
                  }}
                  className={`relative shrink-0 rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden ${
                    isActive ? "w-[420px] md:w-[520px] cursor-default" : "w-[180px] md:w-[240px] cursor-pointer"
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left center" }}
                    className={`absolute inset-0 bg-gradient-to-b ${ACTIVE_BACKGROUNDS[idx % ACTIVE_BACKGROUNDS.length]}`}
                  />

                  <motion.div layout className="relative p-7 md:p-8 min-h-[260px] md:min-h-[360px] flex flex-col">
                    <motion.div layout className={`text-5xl md:text-6xl font-black tracking-tight ${isActive ? "text-white/65" : "text-white/15"}`}>
                      {number}
                    </motion.div>

                    <div className="flex-1 flex items-center">
                      <motion.div layout className="w-full">
                        <motion.h3
                          layout
                          transition={{ type: "spring", stiffness: 140, damping: 20 }}
                          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                          className={`font-black leading-[0.95] [text-wrap:balance] ${isActive ? "text-[2.65rem] text-black mt-2 mb-3 tracking-[-0.03em]" : "text-[2rem] text-white/90 mb-0 tracking-[-0.02em]"}`}
                        >
                          {item.title}
                        </motion.h3>

                        <AnimatePresence initial={false} mode="wait">
                          {isActive && (
                            <motion.p
                              key={`capability-desc-${idx}`}
                              initial={{ opacity: 0, y: 18 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                              className="text-black/65 leading-relaxed max-w-md text-sm md:text-base"
                            >
                              {item.desc || "Enterprise-grade solution tailored for high-performance requirements and scalable infrastructure."}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {isSideCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-white/55"
                      >
                        {isLeftCard ? (
                          <>
                            <ChevronLeft className="w-3.5 h-3.5" />
                            <span>Click To Open</span>
                          </>
                        ) : (
                          <>
                            <span>Click To Open</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
