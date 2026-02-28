"use client";

import { motion } from "framer-motion";

export default function HandshakeAnimation() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-32 bg-blue-600/20 rounded-full blur-[80px]" 
      />

      <svg
        viewBox="0 0 240 160"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Handshake Group with gentle motion */}
        <motion.g
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 0.5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Wireframe Mesh Lines (Polygonal look) */}
          <motion.path
            d="M40 80 L80 80 L90 40 L120 80 L100 120 L60 120 L40 80 M80 80 L100 120 M90 40 L120 80 M120 80 L150 40 L200 80 L180 120 L140 120 L120 80 M150 40 L200 80 M180 120 L120 80"
            stroke="url(#glowGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
          />

          {/* Main Glowing Outlines */}
          {/* Left Hand / Sleeve */}
          <motion.path
            d="M10 60 L60 60 L75 30 L90 60 L60 90 Z"
            stroke="url(#glowGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Right Hand / Sleeve */}
          <motion.path
            d="M230 60 L180 60 L165 30 L150 60 L180 90 Z"
            stroke="url(#glowGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* The Grasp - Detailed Wireframe fingers */}
          <motion.path
            d="M90 60 C110 60 125 50 140 60 L155 80 C140 100 110 100 90 80 Z"
            stroke="url(#glowGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ 
              strokeWidth: [2.5, 3.5, 2.5],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Glowing Points (Particles at vertices) */}
          {[
            {x: 60, y: 60}, {x: 75, y: 30}, {x: 90, y: 60}, 
            {x: 150, y: 60}, {x: 165, y: 30}, {x: 180, y: 60},
            {x: 120, y: 80}, {x: 100, y: 120}, {x: 140, y: 120}
          ].map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="#fff"
              filter="url(#glow)"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.g>

        {/* Floating Background Particles - Deterministic to avoid hydration errors */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`p-${i}`}
            r={1 + (i % 3) * 0.5}
            fill="#3b82f6"
            initial={{ 
              x: (i * 20) % 240, 
              y: (i * 13) % 160,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -15 - (i % 5)],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 2 + (i % 3), 
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </svg>

      {/* Ground Light Spill */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 w-48 h-1 bg-blue-500/40 blur-[15px] rounded-full" 
      />
    </div>
  );
}

