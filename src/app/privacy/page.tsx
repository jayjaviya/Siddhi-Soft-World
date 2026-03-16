"use client";

import { useRef, createRef, useMemo } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import PageHero from "@/features/service-details/PageHero";

const POLICY_POINTS = [
  { id: "collection", title: "1. Information Collection", desc: "We collect data directly from you when you request consultations, sign up for newsletters, or communicate with our support. This includes names, emails, and project specifics." },
  { id: "use", title: "2. Use of Information", desc: "Data is used to provide, maintain, and improve our high-performance IT services, communicate project updates, and ensure compliance with legal obligations." },
  { id: "storage", title: "3. Data Storage & Security", desc: "We implement enterprise-grade security measures to safeguard your data. Our infrastructure is constantly monitored and updated against emerging threats." },
  { id: "cookies", title: "4. Cookies & Tracking", desc: "We use essential cookies to enhance site functionality and analytical cookies to understand how our high-precision solutions are being used by our clients." },
  { id: "sharing", title: "5. Third-Party Disclosure", desc: "We do not sell or trade your personal data. Trusted third parties who assist us agree to keep information confidential as per strict NDA protocols." },
  { id: "rights", title: "6. User Rights (GDPR/CCPA)", desc: "You have the right to access, rectify, or delete your data. We fully comply with global data protection standards giving you full control over your digital footprint." },
  { id: "transfers", title: "7. International Transfers", desc: "Data may be processed globally. We ensure all international transfers meet the necessary legal safeguards for data residency and protection." },
  { id: "retention", title: "8. Data Retention Policy", desc: "We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or to comply with mandatory legal requirements." },
  { id: "children", title: "9. Children's Privacy", desc: "Our services are not directed to individuals under 13. We do not knowingly collect information from children. If detected, data is immediately purged." },
  { id: "links", title: "10. Third-Party Links", desc: "Our site may contain links to elite partners. We are not responsible for their privacy practices and encourage reviewing their policies upon exit." },
  { id: "updates", title: "11. Policy Updates", desc: "We may update this policy periodically to reflect evolving security standards. Major changes will be notified via email or a prominent site notice." },
  { id: "contact", title: "12. Contact Information", desc: "For any inquiries regarding your privacy or data rights, please contact our dedicated legal team at legal@siddhisoftworld.com." }
];

function PolicyNavItem({
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
      className="text-left group relative transition-all duration-500 ease-out py-1 outline-none"
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

export default function PrivacyPage() {
  const sectionRefs = useMemo(
    () => POLICY_POINTS.map(() => createRef<HTMLElement>()),
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
        title="Privacy Policy" 
        subtitle="Your privacy is paramount. This policy outlines how Siddhi Soft World collects, uses, and safeguards your information with enterprise-grade precision."
        breadcrumb="Privacy Policy"
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-24 lg:py-32 z-20 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Sidebar Navigation - Matching Service/Terms Page Split */}
          <aside className="hidden lg:block lg:w-[38%] shrink-0 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <nav className="flex flex-col gap-3 lg:gap-2 w-full pr-0 lg:pr-12">
              {POLICY_POINTS.map((s, idx) => (
                <PolicyNavItem
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

          {/* Main Content Area - Matching Service/Terms Page Split */}
          <main className="w-full lg:w-[62%] relative flex flex-col gap-16 md:gap-20 lg:gap-24">
            {POLICY_POINTS.map((point, idx) => (
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
                    Last Revised: March 14, 2026
                  </p>
                  <p className="text-white/40 font-medium text-sm">
                    © 2026 Siddhi Soft World. All rights reserved.
                  </p>
                </div>
                <div className="text-white/20 text-sm italic max-w-xs leading-relaxed">
                  Ensuring high-performance engineering with the highest standards of data integrity and confidentiality.
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
