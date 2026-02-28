"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

const SERVICES = [
  { name: "Software Development", href: "/services/software-development" },
  { name: "Application Development", href: "/services/application-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Managed Network Services", href: "/services/managed-network-services" },
  { name: "Microsoft Windows Servers", href: "/services/microsoft-windows-servers" },
  { name: "Managed Services", href: "/services/managed-services" },
  { name: "Storage Management", href: "/services/storage-management" },
  { name: "Disaster Recovery & Backup", href: "/services/disaster-recovery" },
];

const COMPANY = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "#" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "#" },
];

const RESOURCES = [
  { name: "Blog", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Support", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg-deep">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Brand + CTA */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
              Building Software<br />
              that empowers, scales,<br />
              and delivers
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 rounded-full text-[11px] font-black tracking-[0.3em] uppercase text-white hover:bg-white hover:text-bg-deep transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary rounded-full text-[11px] font-black tracking-[0.3em] uppercase text-white hover:bg-brand-secondary transition-all duration-300 shadow-lg shadow-brand-primary/25"
              >
                About Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Columns: Links */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Services */}
            <div>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-6 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                Services
              </h4>
              <ul className="space-y-3">
                {SERVICES.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-6 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2" />
                Company
              </h4>
              <ul className="space-y-3">
                {COMPANY.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-6 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                Resources
              </h4>
              <ul className="space-y-3">
                {RESOURCES.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-4 flex items-center">
              <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2" />
              Stay Updated
            </h4>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              Get the latest insights on software development, server management, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder='e.g. "you@company.com"'
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[13px] text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary/60 transition-colors"
              />
              <button className="w-full flex items-center justify-center space-x-2 bg-brand-primary hover:bg-brand-secondary text-white text-[11px] font-black tracking-[0.2em] uppercase rounded-xl px-6 py-3.5 transition-all duration-300 shadow-lg shadow-brand-primary/20 group">
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Contact Quick Info */}
            <div className="mt-8 space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] text-gray-400">+91 94283 38806</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] text-gray-400">info@siddhisoftworld.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span className="text-[13px] text-gray-400">Vadodara & Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-600">
            © {new Date().getFullYear()} Siddhi Soft World. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "#" },
            ].map((item, i) => (
              <span key={item.name} className="flex items-center space-x-6">
                {i > 0 && <span className="text-gray-700 mr-6">•</span>}
                <Link
                  href={item.href}
                  className="text-[12px] text-gray-600 hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
