"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AboutHero from "@/features/about/AboutHero";
import Testimonials from "@/features/testimonials";
import HandshakeAnimation from "@/components/ui/HandshakeAnimation";
import { Target, Eye, Shield, Globe, Landmark, Building2, ShoppingCart, Hotel, Sprout, PhoneCall, Rocket, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

const PRINCIPLES = [
  { icon: Shield, title: "Standards", desc: "Dedicated to high standards in everything we do, ensuring quality and precision." },
  { icon: Eye, title: "Vision", desc: "To become a world leader in vertical IT solutions, setting new benchmarks." },
  { icon: Target, title: "Mission", desc: "To be the first choice for IT solutions for our clients globally." },
  { icon: Globe, title: "Focus", desc: "Providing secure, scalable, and reliable systems that allow businesses to grow." },
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

export default function AboutPage() {
  const industriesRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: industriesRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", scrollRange ? `-${scrollRange}px` : "0px"]);

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
    <div className="pb-32 bg-bg-deep rounded-t-[4rem]">
      <AboutHero />

      {/* Principles Section - Styled like Home Pillars */}
      <section className="pb-32 container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 flex flex-col md:flex-row justify-center items-center md:space-x-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Our Core
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary"
            >
              Principles
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            The foundational values that guide our strategy and commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200, scaleX: 0.3 }}
          whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          style={{ transformOrigin: 'right center' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-brand-secondary/10 border border-brand-secondary/20 backdrop-blur-md p-[30px] rounded-[3rem]"
        >
          {PRINCIPLES.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-10 rounded-[2.5rem] group relative overflow-hidden hover:border-blue-400/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] transition-all duration-500"
            >
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-white/10 transition-all duration-500 group-hover:rotate-12">
                  <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries we serve - Sticky horizontal scroll cards (vertical scroll drives horizontal track) */}
      <section className="relative pt-32 pb-32 bg-white/[0.03] backdrop-blur-2xl">
        {/* Tall wrapper to allow pinning */}
        <div ref={industriesRef} className="w-full">
          <div className="h-[400vh]">
            <div className="sticky top-24 h-[60vh] flex flex-col items-center justify-center">
              <div className="container mx-auto px-6 mb-8">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-tight">
                    Industries We <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Transform</span>
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
                    Designing high-performance architectures for the most demanding sectors.
                  </p>
                </div>
              </div>

              <div className="container mx-auto px-6 w-full flex-1 flex items-center">
                <div className="relative w-full">
                  <motion.div ref={trackRef} className="flex gap-8 will-change-transform pl-[20%]" style={{ x }}>
                    {INDUSTRIES.map((industry, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.06 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="min-w-[300px] md:min-w-[380px] flex-shrink-0 group cursor-pointer"
                      >
                        <div className={`relative p-8 rounded-3xl border border-white/8 shadow-xl bg-gradient-to-br ${industry.color} backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl`}>
                          {/* Decorative background element */}
                          <div className="absolute top-0 right-0 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 -mr-4 -mt-8 select-none">
                            {(idx + 1).toString().padStart(2, '0')}
                          </div>

                          {/* Top accent line */}
                          <motion.div 
                            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ width: "100%" }}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          />

                          <div className="relative z-10">
                            {/* Icon with enhanced styling */}
                            <motion.div 
                              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${industry.iconColor} bg-white/5 group-hover:bg-white/10 transition-all duration-500`}
                              whileHover={{ rotate: 15, scale: 1.1 }}
                            >
                              <industry.icon className="w-7 h-7" />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{industry.name}</h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{industry.desc}</p>

                            {/* Stats or features */}
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

                            {/* CTA Button */}
                            <motion.button 
                              className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/8 text-sm font-black tracking-wide uppercase text-gray-300 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300 flex items-center justify-between"
                              whileHover={{ gap: 10 }}
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div className="flex-shrink-0 w-[10%]" />
                  </motion.div>
                </div>
              </div>
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
          className="relative overflow-hidden rounded-t-[4rem] group border border-white/10 min-h-[500px] flex flex-col md:flex-row shadow-2xl shadow-brand-primary/10 bg-bg-deep"
        >
          {/* Left Side: User's Wireframe Image */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden bg-bg-deep"
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
            className="w-full md:w-1/2 bg-black/40 backdrop-blur-xl p-12 md:p-20 flex flex-col justify-center border-l border-white/5"
          >
            <div
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Ready to take your <br />
                infrastructure to the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Next Level?</span>
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
                    <p className="text-gray-300 text-lg leading-relaxed">{item.text}</p>
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
