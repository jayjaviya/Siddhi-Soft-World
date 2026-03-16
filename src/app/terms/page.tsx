"use client";

import { useRef, createRef, useMemo, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import PageHero from "@/features/service-details/PageHero";

const TERMS_POINTS = [
  { id: "acceptance", title: "1. Acceptance of Terms", desc: "By accessing or using Siddhi Soft World's services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our high-performance IT solutions." },
  { id: "scope", title: "2. Scope of Services", desc: "Our services include custom software development, managed IT support, and cloud infrastructure management. Specific deliverables and timelines are defined in project-specific Statements of Work (SOW)." },
  { id: "standards", title: "3. Professional Standards", desc: "We commit to delivering engineering excellence. Our work adheres to globally recognized coding standards and security protocols to ensure the highest quality for your business infrastructure." },
  { id: "obligations", title: "4. Client Obligations", desc: "Clients must provide timely access to information, requirements, and feedback. Delays in providing necessary approvals may result in project timeline adjustments." },
  { id: "property", title: "5. Intellectual Property Rights", desc: "Upon full payment, all custom code and digital assets developed specifically for the client become the client's intellectual property, unless otherwise specified in written agreements." },
  { id: "payment", title: "6. Fees and Payment Structure", desc: "Service fees are project-based or on a retainer model. Invoices are due within the timeframe specified in the contract. Late payments may result in a temporary suspension of active services." },
  { id: "termination", title: "7. Term and Termination", desc: "Either party may terminate the service agreement with written notice as per the contract terms. Upon termination, all outstanding fees for work completed become immediately due." },
  { id: "confidentiality", title: "8. Confidentiality & NDA", desc: "Both parties agree to protect sensitive information disclosed during the engagement. We treat all client data, project logic, and proprietary info with absolute confidentiality." },
  { id: "warranties", title: "9. Warranties & Reps", desc: "We warrant that our services will be performed in a professional manner. However, we do not warrant that software will be entirely error-free due to the nature of complex IT systems." },
  { id: "liability", title: "10. Limitation of Liability", desc: "Siddhi Soft World's liability for any claim arising out of our services is limited to the total amount paid by the client for the specific project in question." },
  { id: "indemnity", title: "11. Indemnification", desc: "Clients agree to indemnify and hold Siddhi Soft World harmless from any claims resulting from the client's misuse of the developed software or breach of these terms." },
  { id: "governing", title: "12. Governing Law", desc: "These terms are governed by the laws of India. Any disputes arising from these services shall be resolved through arbitration or in the courts located in Ahmedabad, Gujarat." }
];

function TermsNavItem({
  title,
  sectionRef,
  onClick,
}: {
  title: string;
  sectionRef: React.RefObject<HTMLElement | null>;
  onClick: () => void;
}) {
  const isInView = useInView(sectionRef, {
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
          color: isInView ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)",
          rotateX: isInView ? [90, 0] : 0,
          opacity: isInView ? 1 : 0.4,
          filter: isInView ? "blur(0px)" : "blur(1px)",
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block text-base lg:text-[clamp(1rem,1.5vw,1.5rem)] font-bold tracking-tight origin-center whitespace-normal lg:whitespace-nowrap break-words"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        {title}
      </motion.span>
    </button>
  );
}

export default function TermsPage() {
  const sectionRefs = useMemo(
    () => TERMS_POINTS.map(() => createRef<HTMLElement>()),
    []
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#080808] min-h-screen font-[family-name:var(--font-sans)] leading-relaxed text-white selection:bg-brand-primary selection:text-black rounded-t-[4rem]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <PageHero 
        title="Terms of Service" 
        subtitle="Professional excellence governed by clear expectations. This agreement outlines the standards and mutual obligations of our high-performance IT partnership."
        breadcrumb="Terms of Service"
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-24 lg:py-32 z-20 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Sidebar Navigation - Matching Service Page Split */}
          <aside className="hidden lg:block lg:w-[38%] shrink-0 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <nav className="flex flex-col gap-3 lg:gap-2 w-full pr-0 lg:pr-12">
              {TERMS_POINTS.map((s, idx) => (
                <TermsNavItem
                  key={idx}
                  title={s.title.split(". ")[1]}
                  sectionRef={sectionRefs[idx]}
                  onClick={() =>
                    sectionRefs[idx].current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                />
              ))}
            </nav>
            </div>
          </aside>

          {/* Main Content Area - Matching Service Page Split */}
          <main className="w-full lg:w-[62%] relative flex flex-col gap-16 md:gap-20 lg:gap-24">
            {TERMS_POINTS.map((point, idx) => (
              <section
                ref={sectionRefs[idx]}
                id={point.id}
                key={point.id}
                className="group scroll-mt-48"
              >
                <div className="relative pl-8 md:pl-12 border-l border-white/5 group-hover:border-brand-primary/20 transition-all duration-700 pt-2 pb-8">
                  {/* Section Content */}
                  <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-brand-primary transition-colors duration-500">
                      {point.title}
                    </h2>
                    
                    <p className="text-white/45 text-lg md:text-xl leading-relaxed max-w-2xl font-medium group-hover:text-white/70 transition-colors duration-500">
                      {point.desc}
                    </p>

                    {/* Decorative Detail */}
                    <div className="h-[2px] w-24 bg-white/5 group-hover:bg-brand-primary/30 group-hover:w-48 transition-all duration-700" />
                  </div>
                </div>
              </section>
            ))}

            {/* Footer Sign-off */}
            <div className="mt-20 pt-16 border-t border-white/5 pb-20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                  <p className="text-white/20 text-xs font-black tracking-[0.2em] uppercase mb-2">
                    Last updated: March 14, 2026
                  </p>
                  <p className="text-white/40 font-medium text-sm">
                    © 2026 Siddhi Soft World. All rights reserved.
                  </p>
                </div>
                <div className="text-white/20 text-sm italic max-w-xs leading-relaxed">
                  Redefining the standards of professional IT services through transparency, excellence, and mutual accountability.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

