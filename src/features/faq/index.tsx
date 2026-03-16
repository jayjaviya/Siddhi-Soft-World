"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What core IT services does Siddhi Soft World specialize in?",
    answer: "We specialize in high-performance Software Development, Application Development, and Web Development. Additionally, we provide expert Managed Network Services, Microsoft Windows Server infrastructure planning, Storage Management (SAN/NAS), and comprehensive Disaster Recovery & Backup solutions."
  },
  {
    question: "How does the agile software outsourcing model benefit my business?",
    answer: "Our agile methodology ensures maximum targeted results through iterative development, continuous quality assurance, and transparent communication. This approach allows for faster delivery cycles, cost-effective resource allocation, and the flexibility to adapt to changing requirements in real-time."
  },
  {
    question: "Do you provide 24/7 server management and monitoring?",
    answer: "Yes, our Managed Services include proactive 24/7 monitoring of your network and server infrastructure. We specialize in IIS Server performance tuning, Active Directory management, and ensuring zero downtime for mission-critical business systems."
  },
  {
    question: "How do you ensure data security and disaster recovery?",
    answer: "We implement multi-layered security protocols, including ironclad encryption and redundant RAID configurations. Our Disaster Recovery services utilize enterprise-grade imaging (like Acronis) for rapid bare metal recovery, ensuring your data is protected and recoverable in any scenario."
  },
  {
    question: "Can you handle complex legacy system migrations?",
    answer: "Absolutely. We have extensive experience in modernizing legacy infrastructure, migrating AD forests, and optimizing Internet Information Server (IIS) configurations up to the latest standards while maintaining system integrity."
  },
  {
    question: "What is the typical timeline for a software project?",
    answer: "Project timelines vary based on complexity, but our agile process allows for rapid delivery. Small projects often take 4-8 weeks, while large-scale enterprise solutions are delivered in iterative phases every 2-4 weeks to provide constant value."
  },
  {
    question: "Do you offer post-deployment support and maintenance?",
    answer: "Yes, we provide comprehensive post-deployment support. Our teams are available for ongoing maintenance, periodic security audits, performance optimizations, and feature updates to ensure your software stays at the cutting edge."
  },
  {
    question: "How do you handle client communication during development?",
    answer: "Transparency is core to our delivery. We use modern project management tools and hold regular sync-ups via video calls. You get a dedicated project manager and direct access to the engineering team for real-time feedback."
  },
  {
    question: "What technology stack do you use for web development?",
    answer: "We utilize modern, scalable technologies including React, Next.js, Node.js, and Python. For databases, we specialize in PostgreSQL, MongoDB, and high-performance SQL Server configurations to ensure your application is future-proof."
  },
  {
    question: "How do I get started with a consultation?",
    answer: "Starting is simple. You can reach out through our contact form or book a direct sync. We'll conduct a preliminary analysis of your requirements and provide a strategic roadmap within 48 hours."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative bg-gradient-blue-soft">
      {/* Background Image for Header */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="/images/faq/hero-bg.webp" 
            alt="FAQ Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradients to blend image */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-deep/40 to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-transparent to-bg-deep" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Details (Sticky) */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-[1.1]">
                  Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Questions</span>
                </h2>
                <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-12 max-w-xl">
                  Everything you need to know about our services, process, and tech expertise. 
                  We're here to help you navigate your digital transformation.
                </p>
                
                <div className="pt-8 border-t border-white/5">
                  <p className="text-white/40 font-medium italic">
                    Still have questions? Reach out to our expert team for a personalized consultation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (Scrollable) */}
          <div className="flex-1 space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group overflow-hidden rounded-3xl border transition-all duration-500 ${
                  activeIndex === idx 
                    ? "bg-white/5 border-brand-primary/30 shadow-2xl shadow-brand-primary/5" 
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-black tracking-widest transition-colors">
                      {idx < 9 ? (
                        <>
                          <span className="text-white/20">0</span>
                          <span className="text-white">{idx + 1}</span>
                        </>
                      ) : (
                        <span className="text-white">{idx + 1}</span>
                      )}
                    </span>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                      activeIndex === idx ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    activeIndex === idx 
                      ? "bg-brand-primary border-brand-primary text-white rotate-180" 
                      : "bg-white/5 border-white/10 text-white/40 group-hover:text-white group-hover:border-white/20"
                  }`}>
                    {activeIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <div className="px-8 pb-8 pt-0 ml-16">
                        <p className="text-lg text-white/40 leading-relaxed font-medium max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
