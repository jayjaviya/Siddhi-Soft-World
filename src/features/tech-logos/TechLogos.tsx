"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Cloud,
  Zap,
  Atom,
  Triangle,
  Server,
  Monitor,
  Database,
  Container,
  Boxes,
  Code,
  Leaf,
  FileCode2,
  GitBranch,
  Terminal,
  Circle,
  type LucideIcon,
} from "lucide-react";

const TECH_LOGOS = [
  { name: "Microsoft Azure", icon: Cloud },
  { name: "AWS", icon: Zap },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Server },
  { name: "Windows Server", icon: Monitor },
  { name: "SQL Server", icon: Database },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Boxes },
  { name: "Python", icon: Code },
  { name: "MongoDB", icon: Leaf },
  { name: "TypeScript", icon: FileCode2 },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Linux", icon: Terminal },
];

function LogoCard({
  name,
  icon: Icon,
  iconClassName,
}: {
  name: string;
  icon?: LucideIcon;
  iconClassName: string;
}) {
  const SafeIcon = Icon ?? Circle;

  return (
    <div className="flex-shrink-0 group">
      <div className="flex items-center gap-4 px-8 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 cursor-default">
        <span className={`${iconClassName} transition-all duration-300 group-hover:scale-110`}>
          <SafeIcon className="w-6 h-6" />
        </span>
        <span className="text-sm font-bold text-gray-500 group-hover:text-white tracking-wide transition-colors duration-300 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function TechLogos() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const enableMarquee = isDesktop && !prefersReducedMotion;
  const ICON_COLORS = ["text-brand-primary", "text-white", "text-brand-secondary"];

  // Double the logos for seamless infinite loop
  const row1 = [...TECH_LOGOS.slice(0, 8), ...TECH_LOGOS.slice(0, 8)];
  const row2 = [...TECH_LOGOS.slice(8), ...TECH_LOGOS.slice(8)];

  return (
    <section className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 container mx-auto px-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 md:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Technologies We
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Master
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Enterprise-grade tools and platforms powering our solutions.
          </p>
        </motion.div>

        {enableMarquee ? (
          <>
            {/* Infinite scroll marquee - Row 1 (scroll left) */}
            <div className="relative mb-6">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {row1.map((logo, idx) => (
                  <LogoCard
                    key={`r1-${idx}`}
                    name={logo.name}
                    icon={logo.icon}
                    iconClassName={ICON_COLORS[idx % ICON_COLORS.length]}
                  />
                ))}
              </motion.div>
            </div>

            {/* Infinite scroll marquee - Row 2 (scroll right) */}
            <div className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-5"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  x: {
                    duration: 75,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {row2.map((logo, idx) => (
                  <LogoCard
                    key={`r2-${idx}`}
                    name={logo.name}
                    icon={logo.icon}
                    iconClassName={ICON_COLORS[(idx + 1) % ICON_COLORS.length]}
                  />
                ))}
              </motion.div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {TECH_LOGOS.map((logo, idx) => (
              <LogoCard
                key={`grid-${idx}`}
                name={logo.name}
                icon={logo.icon}
                iconClassName={ICON_COLORS[idx % ICON_COLORS.length]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
