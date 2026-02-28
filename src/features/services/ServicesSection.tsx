"use client";

import { motion } from "framer-motion";
import { Code, Globe, Server, Network, Database, ShieldCheck, Monitor, HelpCircle, HardDrive, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import GlassStack from "@/components/ui/GlassStack";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SERVICES = [
  {
    title: "Application Development",
    desc: "Drive efficiency and effectiveness with agile application solutions from us. Our proven methodology ensures you get products faster.",
    icon: Monitor,
    image: "/images/home/services/app-dev.webp",
    notifications: [
      { title: "Deployment Ready", subtitle: "Version 2.4 active", type: "success" },
      { title: "Resource Sync", subtitle: "Cloud nodes balanced", type: "info" },
      { title: "API Stats", subtitle: "99.9% Uptime", type: "stat" },
    ]
  },
  {
    title: "Software Development",
    desc: "We specialize in custom software applications, custom programming, database design, and client-server development.",
    icon: Code,
    image: "/images/home/services/software-dev-new.webp",
    notifications: [
      { title: "Build Success", subtitle: "Artifacts generated", type: "success" },
      { title: "Code Quality", subtitle: "A+ Rating", type: "info" },
      { title: "CI/CD", subtitle: "Pipeline Idle", type: "stat" },
    ]
  },
  {
    title: "Web Development",
    desc: "Complex application solutions built for modern competition and scalability using the latest web technologies.",
    icon: Globe,
    image: "/images/home/services/web-dev-new.webp",
    notifications: [
      { title: "SSL Secure", subtitle: "Certificate valid", type: "success" },
      { title: "Global CDN", subtitle: "12 Nodes active", type: "info" },
      { title: "Core Web", subtitle: "LCP: 0.8s", type: "stat" },
    ]
  },
  {
    title: "Managed Network Services",
    desc: "Build robust networks with advanced technology. LAN/WAN services provide comprehensive network management.",
    icon: Network,
    image: "/images/home/services/network-services-new.webp",
    notifications: [
      { title: "Network Up", subtitle: "Fiber link stable", type: "success" },
      { title: "Router Status", subtitle: "No Packet Loss", type: "info" },
      { title: "Traffic", subtitle: "1.2 Gbps", type: "stat" },
    ]
  },
  {
    title: "Microsoft Windows Servers",
    desc: "Planning, Designing & Implementation of Active Directory Network Infrastructure including multi forest and domain tree.",
    icon: Server,
    image: "/images/home/services/windows-server-new.webp",
    notifications: [
      { title: "AD Sync", subtitle: "Forest replications OK", type: "success" },
      { title: "Patch MGMT", subtitle: "Updates pending: 0", type: "info" },
      { title: "CPU Load", subtitle: "12% Total", type: "stat" },
    ]
  },
  {
    title: "Managed Services",
    desc: "Our managed services simplify IT operations and provide proactive support to keep your business running smoothly.",
    icon: Settings,
    image: "/images/home/services/managed-services-new.webp",
    notifications: [
      { title: "SLA Status", subtitle: "100% Fulfilled", type: "success" },
      { title: "Support", subtitle: "Response < 5min", type: "info" },
      { title: "Incident", subtitle: "0 Critical", type: "stat" },
    ]
  },
  {
    title: "Storage Management",
    desc: "IBM SAN, Matrox NAS. Software RAID 0, 1, 5 and Hardware RAID - 0, 1, 5, 10 (Mirroring + Disk Striping).",
    icon: HardDrive,
    image: "/images/home/services/storage-mgmt-new.webp",
    notifications: [
      { title: "RAID Health", subtitle: "Array Optimized", type: "success" },
      { title: "Disk Space", subtitle: "4.2 TB Free", type: "info" },
      { title: "IOPS", subtitle: "120k Peak", type: "stat" },
    ]
  },
  {
    title: "Internet Information Server",
    desc: "Installation, Configuration of FTP, Web, NNTP services. IIS Security and comprehensive performance tuning.",
    icon: Database,
    image: "/images/home/services/iis-server-new.webp",
    notifications: [
      { title: "IIS Active", subtitle: "Worker Process OK", type: "success" },
      { title: "Req Logging", subtitle: "Real-time active", type: "info" },
      { title: "Throughput", subtitle: "5.4k req/m", type: "stat" },
    ]
  },
  {
    title: "Disaster Recovery & Backup",
    desc: "Acronis True Image Workstation-Desktop OS Images. Acronis Enterprise Server-Server recovery, bare metal Recovery.",
    icon: ShieldCheck,
    image: "/images/home/services/disaster-recovery-new.webp",
    notifications: [
      { title: "Backup Done", subtitle: "Full snapshot saved", type: "success" },
      { title: "Recovery Pt", subtitle: "Point-in-time ready", type: "info" },
      { title: "Redundancy", subtitle: "3x Nodes", type: "stat" },
    ]
  },
];

export default function ServicesSection() {
  return (
    <section className="mt-[25px] py-32 relative overflow-hidden bg-gradient-blue-night">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter flex flex-row flex-wrap justify-center items-center gap-x-4 leading-[1.1] text-white">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Services &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
              >
                Solutions
              </motion.span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-2xl text-lg leading-relaxed font-medium mx-auto"
          >
            We deliver maximum targeted results through our global software outsourcing model and specialized technological expertise.
          </motion.p>
        </div>

        <div className="services-slider-container max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            speed={600}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            className="overflow-visible pb-24"
          >
            {SERVICES.map((service, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                  {/* Left Column: Service Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card group p-12 rounded-2xl border border-white/5 hover:border-brand-secondary/50 relative overflow-hidden flex flex-col h-full min-h-[450px] transition-all duration-500"
                  >
                    <div className="flex-1">
                      <div className="w-20 h-20 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-brand-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                        <service.icon className="w-10 h-10 text-brand-secondary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-3xl font-black mb-6 tracking-tight text-white">{service.title}</h3>
                      <p className="text-white/40 leading-relaxed text-lg font-medium">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 group-hover:border-brand-secondary/20 transition-colors flex items-center justify-between">
                      <Link
                        href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="group relative inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 overflow-hidden hover:scale-105 active:scale-95 text-sm"
                      >
                        {/* Shimmer Effect */}
                        <motion.div 
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" 
                        />

                        <motion.div 
                          className="px-8 py-4 flex items-center justify-center relative z-10"
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
                            <ArrowRight className="w-5 h-5 text-white" />
                          </motion.span>
                          
                          <span className="tracking-widest uppercase">Explore</span>
                          
                          <motion.span
                            variants={{
                              initial: { opacity: 1, x: 0, width: "auto", marginLeft: 12 },
                              hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                            }}
                            className="overflow-hidden flex items-center"
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </motion.span>
                        </motion.div>
                      </Link>
                    </div>
                    
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/5 rounded-full blur-[60px] group-hover:bg-brand-secondary/10 transition-colors" />
                  </motion.div>

                  {/* Right Column: Glass Stack Animation */}
                    <div className="flex flex-col h-full justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <GlassStack 
                          icon={service.icon} 
                          title={service.title} 
                          image={service.image}
                          notifications={service.notifications as any}
                        />
                      </motion.div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="custom-services-pagination mt-4 flex items-center justify-center w-full" />
        </div>
      </div>
    </section>
  );
}
