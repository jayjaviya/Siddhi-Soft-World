import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

interface Notification {
  title: string;
  subtitle: string;
  type: 'success' | 'info' | 'stat';
}

interface GlassStackProps {
  icon: LucideIcon;
  title: string;
  image?: string;
  notifications?: Notification[];
}

export default function GlassStack({ icon: Icon, title, image, notifications }: GlassStackProps) {
  // Safe access to notifications with fallbacks
  const n1 = notifications?.[0] || { title: "System Online", subtitle: "Core active", type: "success" };
  const n2 = notifications?.[1] || { title: "Processing...", subtitle: "Queue empty", type: "info" };
  const n3 = notifications?.[2] || { title: "Status", subtitle: "Optimal", type: "stat" };

  return (
    <div className="relative w-full aspect-square flex items-center justify-center perspective-[2000px] py-10">
      <div className="relative w-full h-full max-w-[450px] max-h-[450px] preserve-3d">
        {/* Animated Background Layers (Glass) */}
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateY: -35, rotateX: 15, x: idx * 20, z: -idx * 40 }}
            animate={{ 
              opacity: 0.15 + (idx * 0.05),
              rotateY: -30,
              rotateX: 10,
              x: idx * 25,
              z: -idx * 50,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: idx * 0.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl"
          />
        ))}

        {/* Primary Front Card with Image */}
        <motion.div
          initial={{ rotateY: -35, rotateX: 15, z: 50 }}
          animate={{ 
            rotateY: -25,
            rotateX: 8,
            z: 80,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_50px_rgba(238,117,40,0.4)] overflow-hidden border border-white/30 group"
        >
          {/* Main Content: Image or Gradient */}
          {image ? (
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent opacity-40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/80 to-brand-primary" />
          )}
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10"
            >
              <h4 className="text-2xl font-black text-white">{title}</h4>
            </motion.div>
          </div>


          
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-white/20 via-transparent to-transparent -rotate-45 -translate-y-1/2 pointer-events-none" />
        </motion.div>

        {/* Floating Mini Notifications (Service-specific) */}
        
        {/* Top Notification */}
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -10, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-0 z-[120] glass-effect p-4 rounded-2xl flex items-center space-x-3 border border-white/30 shadow-2xl"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${n1.type === 'success' ? 'bg-green-500' : 'bg-brand-primary'}`}>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-black text-white uppercase tracking-tighter">{n1.title}</p>
            <p className="text-[9px] text-gray-400 font-medium">{n1.subtitle}</p>
          </div>
        </motion.div>

        {/* Right Notification */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotateZ: [0, -8, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-24 -right-16 z-[120] glass-effect p-4 rounded-2xl flex items-center space-x-3 border border-white/30 shadow-2xl min-w-[160px]"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-secondary/30 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-brand-secondary rounded-full" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-black text-white uppercase tracking-tighter">{n2.title}</p>
            <p className="text-[9px] text-gray-400 font-medium">{n2.subtitle}</p>
          </div>
        </motion.div>

        {/* Bottom Notification */}
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 -left-20 z-[120] glass-effect p-5 rounded-[2rem] border border-white/30 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-2 h-8 bg-brand-primary/60 rounded-full" />
              ))}
            </div>
            <p className="text-[10px] font-black text-white uppercase tracking-[0.1em]">{n3.title}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
