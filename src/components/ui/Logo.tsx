"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center ${className}`}
    >
      <Image
        src="/images/home/logo/LogoMedium.png"
        alt="Siddhi Soft World Logo"
        width={180}
        height={50}
        priority
        className="w-full h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[160px] lg:max-w-[180px] object-contain transition-all"
        style={{ width: "auto" }}
      />
    </motion.div>
  );
}
