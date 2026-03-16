"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AboutHero from "@/features/about/AboutHero";
import Testimonials from "@/features/testimonials";
import HandshakeAnimation from "@/components/ui/HandshakeAnimation";
import { Target, Eye, Shield, Globe, Landmark, Building2, ShoppingCart, Hotel, Sprout, PhoneCall, Rocket, ShieldCheck, Cpu, ArrowRight, ChevronDown } from "lucide-react";
import EnvironmentSection from "@/features/careers/EnvironmentSection";


const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discussion With Us",
    description: "We understand your business goals, challenges, and technical expectations before defining direction.",
    align: "left",
  },
  {
    step: "02",
    title: "Brief & Analysis",
    description: "We research competitors, gather references, and prepare a validated execution plan for your approval.",
    align: "right",
  },
  {
    step: "03",
    title: "Prototype & Design",
    description: "We craft UX-focused concepts and convert them into practical design systems ready for development.",
    align: "left",
  },
  {
    step: "04",
    title: "Layout & Launch",
    description: "After approval, we implement, integrate, optimize, and launch with complete QA and post-launch support.",
    align: "right",
  },
];

const INDUSTRIES = [
  { 
    icon: Landmark, 
    name: "Banks & Insurance", 
    desc: "Securing financial futures with enterprise-grade infrastructure and ironclad security for global institutions.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400"
  },
  { 
    icon: Building2, 
    name: "Government Agencies", 
    desc: "Providing scalable IT solutions that empower public services and streamline complex administrative workflows.",
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-400"
  },
  { 
    icon: ShoppingCart, 
    name: "Retail & Wholesale", 
    desc: "Optimizing supply chains and elevating e-commerce through intelligent data management and integration.",
    color: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-400"
  },
  { 
    icon: Hotel, 
    name: "Hotels & Hospitals", 
    desc: "Enhancing service delivery in critical environments with 24/7 server availability and high-performance networks.",
    color: "from-indigo-500/20 to-indigo-600/5",
    iconColor: "text-indigo-400"
  },
  { 
    icon: Sprout, 
    name: "Agriculture", 
    desc: "Revolutionizing traditional farming with data-driven insights and smart technology for the modern landscape.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400"
  },
  { 
    icon: PhoneCall, 
    name: "Telecommunications", 
    desc: "Powering the next generation of connectivity with low-latency architecture and agile network deployments.",
    color: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400"
  },
];

const ABOUT_FACILITIES = [
  {
    title: "Collaborative Lounge",
    desc: "Open spaces for creative thinking. Designed to foster innovation, comfort, and spontaneous synergy between teams.",
    image: "/images/about/about_lounge.png"
  },
  {
    title: "Deep Work Corners",
    desc: "Quiet zones engineered for focus. Standardized quiet areas tailored for solving complex architectural constraints.",
    image: "/images/about/about_deep_work.png"
  },
  {
    title: "Mentorship Hubs",
    desc: "Spaces linking high-performance leads with emerging engineering talent for continuous learning support cycles.",
    image: "/images/about/about_mentorship.png"
  },
  {
    title: "Unwind Spaces",
    desc: "Recreational facilities maintaining work-life balance perfectly aligned with elite performance engineering thresholds.",
    image: "/images/about/about_unwind.png"
  },
];

export default function AboutPage() {
  const industriesRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: industriesRef,
    offset: ["start start", "end end"],
  });


  const x = useTransform(scrollYProgress, [0, 1], ["0px", scrollRange ? `-${scrollRange}px` : "0px"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 0.5, 0]);
  const arrowX = useTransform(scrollYProgress, [0, 0.05, 0.18], ["0px", "-30px", "-120px"]);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const container = industriesRef.current;
      if (!track || !container) return;
      const trackW = track.scrollWidth;
      const containerW = container.offsetWidth;
      setScrollRange(Math.max(0, trackW - containerW));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="relative pb-0 bg-bg-deep rounded-t-[4rem] overflow-x-clip">
      <AboutHero />
      <EnvironmentSection 
        className="pt-0 pb-24" 
        items={ABOUT_FACILITIES}
        description="We craft dynamic environments that balance deep focus with creative synergy for high-performing engineering teams."
        title={
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 md:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white"
            >
              Innovation &
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Ecosystem
            </motion.span>
          </h2>
        }
      />


      {/* Process Section - alternating flow cards */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.9] mb-8">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl mx-auto">
              A structured four-phase workflow from first discussion to successful launch.
            </p>
          </div>

          <div className="relative rounded-[2.25rem] border border-white/10 px-6 py-10 md:px-10 md:py-14 overflow-hidden">
            {/* Flow lines */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full hidden md:block"
              viewBox="0 0 1200 1200"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M110 170 C 360 90, 380 310, 620 250 C 820 200, 900 90, 1080 170" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
              <path d="M120 540 C 320 430, 450 650, 680 600 C 900 555, 980 440, 1080 530" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              <path d="M110 920 C 350 810, 440 1040, 690 980 C 900 930, 980 820, 1080 900" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="2" />
            </svg>

            <div className="space-y-12 md:space-y-14 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isLeft = step.align === "left";

                return (
                  <motion.article
                    key={step.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start ${isLeft ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}
                  >
                    <div className={`relative ${isLeft ? "justify-self-start" : "justify-self-end"}`}>
                      <div className="w-[260px] md:w-[290px] rounded-[1.5rem] border-2 border-white/60 p-6 pb-10 shadow-xl shadow-black/30">
                        <p className={`text-[42px] leading-none font-black tracking-tight text-white/90 mb-6 ${isLeft ? "text-left" : "text-right"}`}>{step.step}</p>

                        <div className="inline-flex rounded-2xl bg-brand-primary text-white px-5 py-3 text-lg md:text-[28px] font-black tracking-tight leading-none">
                          {step.title}
                        </div>
                      </div>

                      <div
                        className={`absolute -bottom-[1px] w-[86px] h-[40px] border-b-2 border-white/60 rounded-b-[22px] ${isLeft ? "left-7 border-l-2" : "right-7 border-r-2"}`}
                      />
                    </div>

                    <div className={`pt-3 ${isLeft ? "md:pt-5" : "md:pt-6"}`}>
                      <div className="h-[2px] w-36 bg-white/70 mb-5" />
                      <p className="text-gray-200/90 text-sm md:text-[17px] leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries we serve - Sticky horizontal scroll cards (vertical scroll drives horizontal track) */}
      {/* Industries we serve */}
      <section className="relative bg-white/[0.03]">

        {/* DESKTOP (≥ md): ref is directly on the h-[400vh] tall container so
            useScroll correctly measures the scroll range for the x animation */}
        <div ref={industriesRef} className="relative hidden md:block h-[220vh] lg:h-[240vh]">
          {/* sticky top-0 h-screen pins the content to fill the full viewport */}
          <div className="sticky top-0 h-screen flex flex-col justify-start pt-16 lg:pt-20 overflow-hidden">

            {/* Heading */}
            <div className="container mx-auto px-6 mb-10 shrink-0">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-tight">
                  Industries We <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Transform</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl mx-auto">
                  Designing high-performance architectures for the most demanding sectors.
                </p>
              </div>
            </div>

            {/* Horizontal track — parent overflow-hidden clips outflowing cards */}
            <div className="w-full shrink-0">
              <div className="relative">
                {/* Scroll arrow indicator */}
                <motion.div
                  className="absolute left-[5%] top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
                  style={{ opacity: arrowOpacity, x: arrowX }}
                >
                  <div className="absolute inset-0 -m-4 bg-brand-primary/5 rounded-full blur-2xl" />
                  <motion.span
                    className="text-[14px] font-black tracking-[0.3em] uppercase text-white/60 mb-3 relative"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Scroll
                  </motion.span>
                  <motion.div
                    className="w-[2px] h-10 bg-gradient-to-b from-transparent via-brand-primary/40 to-transparent"
                    animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, 6, 0], opacity: [0.15 + i * 0.1, 0.7 - i * 0.15, 0.15 + i * 0.1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    >
                      <ChevronDown
                        className={`w-8 h-8 ${i === 0 ? "text-brand-primary/70" : i === 1 ? "text-brand-primary/50" : "text-brand-primary/30"}`}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Sliding card strip */}
                <motion.div ref={trackRef} className="flex gap-8 will-change-transform pl-[calc(50vw-300px)] lg:pl-[calc(50vw-380px)]" style={{ x }}>
                  {INDUSTRIES.map((industry, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.06 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="min-w-[320px] lg:min-w-[380px] flex-shrink-0 group cursor-pointer"
                    >
                      <div className={`relative p-8 rounded-3xl border border-white/8 shadow-xl bg-gradient-to-br ${industry.color} overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl`}>
                        <div className="absolute top-0 right-0 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 -mr-4 -mt-8 select-none">
                          {(idx + 1).toString().padStart(2, "0")}
                        </div>
                        <motion.div
                          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ width: "100%" }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="relative z-10">
                          <motion.div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${industry.iconColor} bg-white/5 group-hover:bg-white/10 transition-all duration-500`}
                            whileHover={{ rotate: 15, scale: 1.1 }}
                          >
                            <industry.icon className="w-7 h-7" />
                          </motion.div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{industry.name}</h3>
                          <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{industry.desc}</p>
                          <div className="flex gap-4 mb-6 text-xs font-black tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                              <span>Enterprise Ready</span>
                            </div>
                            <div>•</div>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                              <span>24/7 Support</span>
                            </div>
                          </div>
                          <motion.button
                            className="w-fit py-2.5 px-6 rounded-full bg-white/5 border border-white/10 text-[11px] font-black tracking-[0.2em] uppercase text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex items-center gap-3 overflow-hidden shadow-xl"
                            initial="initial"
                            whileHover="hover"
                          >
                            <div className="flex items-center relative z-10">
                              <motion.span
                                variants={{ initial: { opacity: 0, x: -10, width: 0, marginRight: 0 }, hover: { opacity: 1, x: 0, width: "auto", marginRight: 8 } }}
                                className="overflow-hidden flex items-center"
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                              </motion.span>
                              <span>Learn More</span>
                            </div>
                            <motion.span
                              variants={{ initial: { opacity: 1, x: 0, width: "auto" }, hover: { opacity: 0, x: 10, width: 0 } }}
                              className="overflow-hidden flex items-center"
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </motion.span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <div className="flex-shrink-0 w-[50px]" />
                </motion.div>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE / TABLET (< md): simple stacked grid, no animation */}
        <div className="md:hidden pt-24 pb-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl font-black mb-4 tracking-tighter leading-tight">
                Industries We <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Transform</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-medium max-w-xl mx-auto">
                Designing high-performance architectures for the most demanding sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INDUSTRIES.map((industry, idx) => (
                <div key={idx} className="group">
                  <div className={`relative p-6 rounded-3xl border border-white/8 shadow-xl bg-gradient-to-br ${industry.color} backdrop-blur-sm overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-7xl font-black text-white/[0.04] -mr-3 -mt-6 select-none">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${industry.iconColor} bg-white/5`}>
                        <industry.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{industry.name}</h3>
                      <p className="text-gray-200/85 text-sm leading-relaxed mb-4">{industry.desc}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black tracking-wider text-gray-200/70">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span>Enterprise Ready</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                          <span>24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      {/* Testimonials Section */}
      <div className="pt-24">
        <Testimonials />
      </div>

      {/* Contact CTA - Animated "Book Opening" Entrance */}
      <section className="pt-32 container mx-auto px-6 perspective-1000">
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
          className="relative overflow-hidden rounded-t-[4rem] group border border-white/10 min-h-[500px] flex flex-col lg:flex-row shadow-2xl shadow-brand-primary/10 bg-bg-deep"
        >
          {/* Left Side: User's Wireframe Image */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden bg-bg-deep"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
              style={{ backgroundImage: 'url("/images/about/handshake-wf.jpeg")' }}
            />
            {/* Subtle glow overlay matching the image colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-purple-600/10 mix-blend-screen opacity-50" />
            
            {/* Visual Flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

          {/* Right Side: Information & Action */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2 bg-black/40 backdrop-blur-xl p-12 lg:p-20 flex flex-col justify-center lg:border-l border-white/5"
          >
            <div
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Ready to take your <br />
                infrastructure to the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Next Level?</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: Rocket, color: "text-brand-primary", bg: "bg-brand-primary/20", text: "Personalized IT strategies tailored to your specific business growth goals." },
                  { icon: ShieldCheck, color: "text-brand-secondary", bg: "bg-brand-secondary/20", text: "24/7 dedicated support and high-performance server management for zero downtime." },
                  { icon: Cpu, color: "text-white", bg: "bg-white/10", text: "Scale your vision with elite engineering talent and high-precision, cost-optimized tech strategies." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0 mt-1`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-start gap-10"
              >
                <Link
                  href="/contact"
                  className="inline-block w-fit bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-3xl transition-all duration-500 shadow-2xl shadow-brand-primary/30 group overflow-hidden"
                >
                  <motion.div 
                    className="px-12 py-6 flex items-center justify-center"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.span
                      variants={{
                        initial: { opacity: 0, x: -10, width: 0, marginRight: 0 },
                        hover: { opacity: 1, x: 0, width: "auto", marginRight: 16 }
                      }}
                      className="overflow-hidden flex items-center"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.span>
                    
                    <span className="tracking-widest uppercase items-center justify-center flex">Get in Touch</span>
                    
                    <motion.span
                      variants={{
                        initial: { opacity: 1, x: 0, width: "auto", marginLeft: 16 },
                        hover: { opacity: 0, x: 10, width: 0, marginLeft: 0 }
                      }}
                      className="overflow-hidden flex items-center"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.span>
                  </motion.div>
                </Link>


              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
