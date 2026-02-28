"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, Code, TestTube, Rocket, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
const WORKFLOW_STEPS = [
  { icon: Search, label: "Discover", color: "#38bdf8" },
  { icon: Palette, label: "Design", color: "#a78bfa" },
  { icon: Code, label: "Develop", color: "#ee7528" },
  { icon: TestTube, label: "Test", color: "#34d399" },
  { icon: Rocket, label: "Deploy", color: "#f472b6" },
  { icon: RefreshCw, label: "Iterate", color: "#38bdf8" },
];

const EMOJIS = ["⚡", "🚀", "💻", "🛡️", "✅", "🔧", "📊", "🌐"];

export default function WorkflowCycle() {
  const radius = 190;
  const centerX = 240;
  const centerY = 240;
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % EMOJIS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[480px] h-[480px] mx-auto">
      {/* Static outer ring */}
      <svg width="480" height="480" className="absolute inset-0">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="rgba(56, 189, 248, 0.1)"
          strokeWidth="1"
        />
      </svg>

      <motion.svg
        width="480"
        height="480"
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="2"
          strokeDasharray="150 1050"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Workflow step nodes */}
      {WORKFLOW_STEPS.map((step, idx) => {
        const angle = (idx * 360) / WORKFLOW_STEPS.length - 90;
        const rad = (angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="absolute flex flex-col items-center"
            style={{
              left: x - 28,
              top: y - 28,
            }}
          >
            {/* Node circle */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 0px ${step.color}40`,
                  `0 0 20px ${step.color}60`,
                  `0 0 0px ${step.color}40`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              className="w-14 h-14 rounded-full border-2 flex items-center justify-center backdrop-blur-xl"
              style={{
                borderColor: step.color,
                background: `${step.color}15`,
              }}
            >
              <step.icon className="w-6 h-6" style={{ color: step.color }} />
            </motion.div>

            {/* Label */}
            <span
              className="text-[10px] font-black tracking-widest uppercase mt-2 whitespace-nowrap"
              style={{ color: step.color }}
            >
              {step.label}
            </span>
          </motion.div>
        );
      })}

      {/* Center: Blue Glass Emoji Box */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "600px" }}>
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotateY: [0, 5, -5, 0],
            rotateX: [0, -3, 3, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[110px] h-[110px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main face */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8] shadow-[0_8px_32px_rgba(59,130,246,0.5)] flex items-center justify-center border border-white/20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={emojiIndex}
                initial={{ y: 40, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -40, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="text-5xl drop-shadow-lg"
              >
                {EMOJIS[emojiIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* Glass reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />
          {/* Side depth shadow */}
          <div className="absolute inset-0 rounded-2xl" style={{ transform: "translateZ(-8px)", background: "rgba(29, 78, 216, 0.6)" }} />
        </motion.div>
      </div>
    </div>
  );
}
