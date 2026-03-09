"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Server, Code, Globe, ArrowRight, ChevronRight, Monitor, Network, Database, ShieldCheck, HardDrive, Settings } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Software Development", href: "/services/software-development", icon: Code },
      { name: "Application Development", href: "/services/application-development", icon: Monitor },
      { name: "Web Development", href: "/services/web-development", icon: Globe },
      { name: "Managed Network Services", href: "/services/managed-network-services", icon: Network },
      { name: "Microsoft Windows Servers", href: "/services/microsoft-windows-servers", icon: Server },
      { name: "Managed Services", href: "/services/managed-services", icon: Settings },
      { name: "Storage Management", href: "/services/storage-management", icon: HardDrive },
      { name: "Internet Information Server", href: "/services/internet-information-server", icon: Database },
      { name: "Disaster Recovery & Backup", href: "/services/disaster-recovery-backup", icon: ShieldCheck },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? 'down' : 'up';
    lastScrollY.current = latest;

    if (latest < 50) {
      setHidden(false);
    } else if (direction === 'down') {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-6 md:p-8 pointer-events-none">
        <motion.div
          animate={{ y: hidden ? -150 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="w-full max-w-[1400px] h-20 bg-white/[0.03] backdrop-blur-2xl rounded-[1.5rem] border border-white/10 px-8 md:px-12 flex items-center justify-between pointer-events-auto relative shadow-2xl"
        >
          
          {/* Column 1: Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="hover:scale-105 transition-transform duration-300">
              <Logo />
            </Link>
          </div>

          {/* Column 2: Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "#", hasDropdown: true },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <div
                key={link.name}
                className="relative group flex items-center"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown("Services")}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 hover:text-white transition-colors relative group/link"
                >
                  <motion.div
                    className="flex items-center"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.span
                      variants={{
                        initial: { opacity: 0, x: -10, width: 0 },
                        hover: { opacity: 1, x: 0, width: "auto" },
                      }}
                      className="mr-2 text-white pointer-events-none overflow-hidden flex items-center"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                    <span className="flex items-center">
                      {link.name}
                    </span>
                  </motion.div>
                </Link>

                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === "Services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-[680px] p-4 bg-bg-deep rounded-[2rem] border border-white/10 shadow-2xl grid grid-cols-3 gap-2"
                      >
                        {NAV_LINKS.find((l) => l.name === "Services")?.dropdown?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-all group/item"
                          >
                            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                              {/* Architectural Glass Slab */}
                              <div className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-2xl group-hover/item:bg-white/[0.08] group-hover/item:border-white/20 group-hover/item:scale-110 transition-all duration-500 ease-out" />
                              
                              {/* Inner Glow Layer */}
                              <div className="absolute inset-[2px] rounded-[14px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                              {/* Icon with 3D Motion */}
                              <motion.div
                                whileHover={{ rotateY: 180, scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="relative z-10"
                              >
                                <item.icon className="w-5 h-5 text-white/30 group-hover/item:text-white transition-colors duration-500" />
                              </motion.div>

                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                <motion.div 
                                  initial={{ x: "-100%", opacity: 0 }}
                                  whileHover={{ x: "100%", opacity: 1 }}
                                  transition={{ duration: 0.6, ease: "easeInOut" }}
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-z-0" 
                                />
                              </div>
                            </div>

                            <span className="text-[13px] font-bold text-white/40 group-hover/item:text-white tracking-tight transition-colors duration-300">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Column 3: CTA Button (Right) */}
          <div className="flex-1 flex justify-end">
            <Link
              href="/contact"
              className="group relative inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 overflow-hidden hover:scale-105 active:scale-95 text-xs"
            >
              {/* Shimmer Effect */}
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
              />

              <motion.div 
                className="px-6 h-10 flex items-center justify-center relative z-10"
                initial="initial"
                whileHover="hover"
              >
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                    hover: { opacity: 1, x: 0, width: "auto", marginRight: 12 }
                  }}
                  className="overflow-hidden flex items-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.span>
                
                <span className="truncate tracking-widest uppercase">Start Journey</span>
                
                <motion.span
                  variants={{
                    initial: { opacity: 1, x: 0, width: "auto", marginLeft: 12 },
                    hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                  }}
                  className="overflow-hidden flex items-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.span>
              </motion.div>
            </Link>
            </div>
        </motion.div>
      </header>
    </>
  );
}
