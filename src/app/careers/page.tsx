"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Globe, Heart, Shield } from "lucide-react";
import PageHero from "@/features/service-details/PageHero";
import EnvironmentSection from "@/features/careers/EnvironmentSection";
import WorkingCycle from "@/features/careers/WorkingCycle";
import HiringProcess from "@/features/careers/HiringProcess";
import CareersForm from "@/features/careers/CareersForm";

const JOBS = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Ahmedabad / Remote",
    type: "Full-time",
    salary: "Competitive",
  },
  {
    title: "Infrastructure Specialist",
    department: "DevOps & Cloud",
    location: "Vadodara / Remote",
    type: "Full-time",
    salary: "Competitive",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    salary: "Hourly",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#080808] min-h-screen font-[family-name:var(--font-sans)] rounded-t-[4rem]">
      <PageHero 
        title="Join the Elite Team" 
        subtitle="We are looking for exceptional engineering talent to help us craft digital solutions that perform, scale, and endure."
        breadcrumb="Careers"
      />

      <div className="relative z-20">
        <EnvironmentSection />
        
        <WorkingCycle />

        <div className="container mx-auto px-6 py-24">
          {/* Job Listings Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter text-white leading-[0.9] mb-6"
            >
              OPEN <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">POSITIONS</span>
            </motion.h2>
            <p className="text-gray-500 font-medium">Don't see a role? Email us at <span className="text-white">careers@siddhisoftworld.com</span></p>
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {JOBS.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <Link
                  href="#apply"
                  className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 px-2 py-1 rounded bg-white/5">{job.department}</span>
                      <span className="text-[10px] font-black tracking-widest uppercase text-brand-primary px-2 py-1 rounded bg-brand-primary/10">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">{job.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{job.location} • {job.salary}</p>
                  </div>
                  <div className="flex items-center gap-4 text-white font-black tracking-widest uppercase text-xs">
                    Apply Now
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <HiringProcess />

        <CareersForm />
      </div>
    </div>
  );
}
