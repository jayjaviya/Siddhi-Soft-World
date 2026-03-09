"use client";

import { useRef, createRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Application Development",
    desc: "Drive efficiency and effectiveness with agile application solutions from us. Our proven methodology ensures you get products faster.",
    image: "/images/home/services/app-dev-v2.png",
    tags: ["Mobile Apps", "Cross-Platform", "Progressive Web Apps", "UI/UX Design"],
    slug: "application-development",
  },
  {
    title: "Software Development",
    desc: "We specialize in custom software applications, custom programming, database design, and client-server development.",
    image: "/images/home/services/software-dev-v2.jpg",
    tags: ["Custom Software", "Database Design", "Client-Server", "Enterprise Solutions"],
    slug: "software-development",
  },
  {
    title: "Web Development",
    desc: "Complex application solutions built for modern competition and scalability using the latest web technologies.",
    image: "/images/home/services/web-dev-v4.jpg",
    tags: ["React / Next.js", "Full-Stack", "E-commerce", "CMS Development"],
    slug: "web-development",
  },
  {
    title: "Managed Network Services",
    desc: "We provide various levels of support and help for your organization's computer networks, from basic to complex.",
    image: "/images/home/services/network-services-v2.jpg",
    tags: ["Network Support", "Infrastructure", "Connectivity", "Security"],
    slug: "managed-network-services",
  },
  {
    title: "Microsoft Windows Server",
    desc: "Expert administration and support for Windows Server environments, ensuring reliability and performance.",
    image: "/images/home/services/windows-server-v4.jpg",
    tags: ["Active Directory", "IIS Server", "Group Policy", "Server Security"],
    slug: "microsoft-windows-server",
  },
  {
    title: "Managed Services",
    desc: "Comprehensive outsourced management of your IT infrastructure and end-user systems, proactively managed under a subscription model.",
    image: "/images/home/services/managed-services-v2.jpg",
    tags: ["24/7 Monitoring", "IT Helpdesk", "Cloud Services", "Proactive Maintenance"],
    slug: "managed-services",
  },
  {
    title: "Storage Management",
    desc: "Optimizing AWS EC2 EBS and multi-cloud storage environments to reduce wastage and improve performance metrics.",
    image: "/images/home/services/storage-mgmt-v2.jpg",
    tags: ["EBS Optimization", "Capacity Planning", "Multi-Cloud Storage", "Cost Management"],
    slug: "storage-management",
  },
  {
    title: "Internet Information Server",
    desc: "Installation, Configuration of FTP, Web, NNTP services. IIS Security and comprehensive performance tuning.",
    image: "/images/home/services/iis-server-v2.jpg",
    tags: ["IIS Configuration", "FTP Services", "Security Hardening", "Performance Tuning"],
    slug: "internet-information-server",
  },
  {
    title: "Disaster Recovery & Backup",
    desc: "Acronis True Image Workstation-Desktop OS Images. Acronis Enterprise Server-Server recovery, bare metal Recovery.",
    image: "/images/home/services/disaster-recovery-v2.webp",
    tags: ["Acronis Backup", "Bare Metal Recovery", "Business Continuity", "Cloud Backup"],
    slug: "disaster-recovery-backup",
  },
];

/* ═══════════════════════════════════════════════════════════════
   NavItem — Highlights when its paired card section is in view
   ═══════════════════════════════════════════════════════════════ */
function NavItem({
  service,
  cardRef,
  onClick,
}: {
  service: (typeof SERVICES)[0];
  cardRef: React.RefObject<HTMLDivElement | null>;
  onClick: () => void;
}) {
  const isInView = useInView(cardRef, {
    margin: "-40% 0px -40% 0px",
  });

  return (
    <button
      onClick={onClick}
      className="text-left group relative transition-all duration-500 ease-out py-1"
    >
      <motion.span
        initial={false}
        animate={{ 
          color: isInView ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
          rotateX: isInView ? [90, 0] : 0,
          opacity: isInView ? 1 : 0.6,
          filter: isInView ? "blur(0px)" : "blur(1px)",
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block text-[clamp(1.25rem,2vw,2rem)] font-bold tracking-[-0.02em] origin-center"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        {service.title}
      </motion.span>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ParallaxImage — High-impact image with internal vertical motion
   ═══════════════════════════════════════════════════════════════ */
function ParallaxImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Increased parallax intensity for a more dramatic 'wow' factor
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] w-full overflow-hidden bg-white/5"
    >
      <motion.div style={{ y, scale: 1.3 }} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 62vw"
          priority={priority}
        />
      </motion.div>
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020a1a]/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ServicesSection — Main Component (Interleaved Sequence)
   ═══════════════════════════════════════════════════════════════ */
export default function ServicesSection() {
  // Create stable refs for each image section to trigger navigation
  const imageRefs = useMemo(
    () => SERVICES.map(() => createRef<HTMLDivElement>()),
    []
  );
  
  const cardRefs = useMemo(
    () => SERVICES.map(() => createRef<HTMLDivElement>()),
    []
  );

  return (
    <section className="relative" style={{ background: "#020a1a" }}>
      {/* ─── Section Header — scrolls away naturally ─── */}
      <div className="pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-[-0.04em] text-white leading-[0.9]"
            >
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/40 max-w-2xl text-base md:text-lg leading-relaxed mx-auto mt-10"
            >
              Full-spectrum IT capabilities under one roof. Whether you need
              application development or ongoing infrastructure support, we
              have the expertise to deliver.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ─── Services Content ─── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-[100px]">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* ═══ Left Column — Sticky Navigation ═══ */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="lg:sticky lg:top-[120px] pb-12">
              <nav className="hidden lg:flex flex-col gap-2 w-full">
                {SERVICES.map((s, idx) => (
                  <NavItem
                    key={idx}
                    service={s}
                    cardRef={imageRefs[idx]} // Triggered by image now
                    onClick={() =>
                      imageRefs[idx].current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  />
                ))}
              </nav>

              {/* Mobile Nav Pills */}
              <div className="lg:hidden flex overflow-x-auto gap-2 py-4 -mx-2 px-2 w-full">
                {SERVICES.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      imageRefs[idx].current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 bg-white/5 text-white/40 hover:text-white/60"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ Right Column — Interleaved Sequence ═══ */}
          <div className="w-full lg:w-[62%] relative flex flex-col gap-0">
            {SERVICES.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Image Segment — Slides up first */}
                <div ref={imageRefs[idx]} className="mb-0">
                  <ParallaxImage 
                    src={s.image} 
                    alt={s.title} 
                    priority={idx < 1} 
                  />
                </div>

                {/* Card Segment — Follows immediately */}
                <div 
                  ref={cardRefs[idx]}
                  className="bg-[#020a1a] py-6 md:py-8 lg:py-10 px-6 md:px-8 lg:px-10 relative z-10 border border-white/5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-white/20 font-mono text-xl md:text-2xl lg:text-3xl tracking-widest leading-none">
                      [{idx + 1 < 10 ? "0" : ""}<span className="text-white">{idx + 1}</span>]
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-[-0.03em] leading-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                    {s.desc}
                  </p>

                  <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-8">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                      {s.tags.map((tag) => (
                        <div 
                          key={tag} 
                          className="group/tag flex items-center bg-white/[0.03] border-l-2 border-brand-primary/30 hover:border-brand-primary py-1.5 px-3 transition-all duration-300"
                        >
                          <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.15em] text-white/40 group-hover/tag:text-white transition-colors cursor-default whitespace-nowrap">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${s.slug}`}
                      className="shrink-0 w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:text-white hover:bg-brand-primary transition-all duration-300 group/arrow shadow-xl"
                    >
                      <ArrowRight className="w-5 h-5 group-hover/arrow:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
            
            {/* 30px bottom padding after last card as requested */}
            <div className="h-[30px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
