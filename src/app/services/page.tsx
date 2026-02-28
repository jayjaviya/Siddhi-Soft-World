"use client";

import PageHero from "@/features/service-details/PageHero";
import { motion } from "framer-motion";
import { Monitor, Code, Globe, Network, Server, Settings, HardDrive, Database, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const ALL_SERVICES = [
  {
    title: "Application Development",
    desc: "Agile application solutions and proven methodologies for high-performance results.",
    icon: Monitor,
    slug: "application-development",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Software Development",
    desc: "Tailored enterprise software and database architectures for business automation.",
    icon: Code,
    slug: "software-development",
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Web Development",
    desc: "Complex, scalable web solutions using the latest high-performance technologies.",
    icon: Globe,
    slug: "web-development",
    color: "from-brand-primary to-blue-400"
  },
  {
    title: "Managed Network Services",
    desc: "High-availability LAN/WAN infrastructures with 24/7 monitoring and security.",
    icon: Network,
    slug: "managed-network-services",
    color: "from-cyan-600 to-teal-500"
  },
  {
    title: "MS Windows Servers",
    desc: "Expert Active Directory design and robust Microsoft server infrastructure.",
    icon: Server,
    slug: "microsoft-windows-servers",
    color: "from-blue-700 to-indigo-600"
  },
  {
    title: "Managed Services",
    desc: "Proactive IT operations and expert support to keep your systems running at 100%.",
    icon: Settings,
    slug: "managed-services",
    color: "from-brand-secondary to-blue-500"
  },
  {
    title: "Storage Management",
    desc: "Enterprise IBM SAN and RAID solutions for secure, redundant data storage.",
    icon: HardDrive,
    slug: "storage-management",
    color: "from-orange-600 to-red-500"
  },
  {
    title: "IIS Server",
    desc: "High-performance web server hosting and military-grade security hardening.",
    icon: Database,
    slug: "internet-information-server",
    color: "from-indigo-600 to-purple-500"
  },
  {
    title: "Disaster Recovery",
    desc: "Mission-critical backup strategies and bare-metal recovery protocols.",
    icon: ShieldCheck,
    slug: "disaster-recovery-backup",
    color: "from-red-600 to-orange-500"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-bg-deep rounded-t-[4rem]">
      <PageHero 
        title="Our Services" 
        subtitle="Explore our comprehensive suite of premium IT solutions and high-performance engineering services."
        breadcrumb="Services"
      />

      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-[3rem] blur-2xl transition-opacity duration-500`} />
              
              <Link href="/contact" className="block h-full">
                <div className="relative h-full glass-effect p-12 rounded-[3rem] border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                  {/* Decorative number */}
                  <div className="absolute -top-6 -right-6 text-[10rem] font-black text-white/[0.02] italic group-hover:text-white/[0.05] transition-colors duration-500 select-none">
                    0{idx + 1}
                  </div>

                  <div>
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-brand-secondary group-hover:text-brand-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-6 tracking-tighter leading-none group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-sm font-bold tracking-widest uppercase text-brand-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                    <span>Explore Methodology</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Bottom Section */}
      <section className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="glass-effect p-16 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]"
                >
                  Custom <span className="text-brand-primary">Architectures</span> for Global Scale
                </motion.h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
                  We don't just provide services; we engineer the high-performance foundations that power leading enterprises worldwide.
                </p>
                <Link href="/contact" className="px-12 py-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-2xl transition-all inline-flex items-center space-x-3 shadow-xl shadow-brand-primary/20">
                  <span>Start a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Uptime", val: "99.9%" },
                    { label: "Expertise", val: "10+ Yrs" },
                    { label: "Deployment", val: "Global" },
                    { label: "Security", val: "E2E" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-effect p-8 rounded-3xl border border-white/5 text-center"
                    >
                      <div className="text-4xl font-black text-brand-secondary mb-2">{stat.val}</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
