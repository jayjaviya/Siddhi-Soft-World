"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Server, Code, Globe, ArrowRight, ChevronRight, Monitor, Network, Database, ShieldCheck, HardDrive, Settings, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }

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
      <header className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-2 sm:p-4 md:p-6 pointer-events-none w-full">
        <motion.div
          animate={{ y: hidden && !mobileMenuOpen ? -150 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="w-full max-w-[1400px] h-14 sm:h-18 md:h-20 bg-[#020a1a]/60 backdrop-blur-2xl rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 px-3 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between pointer-events-auto relative shadow-2xl"
        >
          
          <div className="flex items-center">
            <Link href="/" className="hover:scale-105 transition-transform duration-300 block w-[100px] sm:w-[130px] md:w-[160px]">
              <Logo className="w-full h-auto" />
            </Link>
          </div>

          {/* Column 2: Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown("Services")}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
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

                {link.dropdown && (
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5" />}
            </button>
            <Link
              href="/contact"
              className="hidden lg:inline-block group relative w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 overflow-hidden hover:scale-105 active:scale-95 text-xs"
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-18 sm:top-24 left-2 right-2 sm:left-4 sm:right-4 md:left-1/2 md:right-auto md:w-[min(92vw,720px)] md:-translate-x-1/2 z-[70] lg:hidden rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-2xl p-2.5 sm:p-4 md:p-5 shadow-2xl max-h-[calc(100svh-5.5rem)] sm:max-h-[calc(100svh-7rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-contain pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="rounded-[1.1rem] sm:rounded-[1.5rem] border border-white/5 bg-white/[0.02] overflow-hidden">
                    {link.dropdown ? (
                      <>
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 text-[13px] sm:text-sm font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white/80 hover:text-white transition-colors"
                        >
                          <span>{link.name}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-90 text-brand-primary" : "text-brand-primary/70"}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 pt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={`flex items-center gap-2.5 sm:gap-3 rounded-[0.95rem] sm:rounded-[1.25rem] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold transition-colors min-w-0 ${pathname === item.href ? "bg-white/[0.09] text-white" : "text-white/75 hover:bg-white/[0.05] hover:text-white"}`}
                                    >
                                      <item.icon className="w-4 h-4 shrink-0 text-brand-primary" />
                                      <span className="min-w-0 leading-snug break-words">{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 text-[13px] sm:text-sm font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase transition-colors ${pathname === link.href ? "text-white bg-white/[0.09]" : "text-white/80 hover:text-white"}`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-brand-primary/70" />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-[0.95rem] sm:rounded-[1.25rem] bg-brand-primary px-4 sm:px-5 py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.24em] text-white"
              >
                Start Journey
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
