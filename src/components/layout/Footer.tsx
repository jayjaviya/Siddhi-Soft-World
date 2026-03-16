"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import XIcon from "@/components/ui/XIcon";
import Logo from "@/components/ui/Logo";

const SERVICES = [
  // 2-word services
  { name: "Software Development", href: "/services/software-development" },
  { name: "App Development", href: "/services/application-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Managed Services", href: "/services/managed-services" },
  // 3-word (and more) services
  { name: "Managed Network Services", href: "/services/managed-network-services" },
  { name: "Microsoft Windows Servers", href: "/services/microsoft-windows-servers" },
  { name: "Internet Information Server", href: "/services/internet-information-server" },
  { name: "Disaster Recovery & Backup", href: "/services/disaster-recovery-backup" },
  { name: "Storage Management", href: "/services/storage-management" },
];

const COMPANY = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/siddhisoftworld", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/siddhisoftworldcom/", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/siddhisoftworld", label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#080808] border-t border-white/[0.06] overflow-hidden">

      {/* ── Main grid ── */}
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <h2 className="max-w-[13ch] text-3xl md:text-4xl font-black leading-tight tracking-tight text-white font-[family-name:var(--font-display)]">
              Crafting digital solutions that perform, scale, and <wbr />endure.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[11px] font-black tracking-[0.25em] uppercase text-white hover:bg-white hover:text-[#080808] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-10">

            {/* Services */}
            <div className="sm:col-span-2">
              <div className="mb-6">
                <div className="mb-4 flex items-start">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="h-px w-3 -ml-px bg-white/15 rotate-[35deg] origin-left" />
                </div>
                <h4 className="text-[12px] font-black tracking-[0.24em] uppercase text-gray-300">
                  Services
                </h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {SERVICES.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-gray-500 hover:text-white transition-colors duration-200 leading-snug block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="mb-6">
                <div className="mb-4 flex items-start">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="h-px w-3 -ml-px bg-white/15 rotate-[35deg] origin-left" />
                </div>
                <h4 className="text-[12px] font-black tracking-[0.24em] uppercase text-gray-300">
                  Company
                </h4>
              </div>
              <ul className="space-y-3">
                {COMPANY.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-gray-500 hover:text-white transition-colors duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="mb-6">
                <div className="mb-4 flex items-start">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="h-px w-3 -ml-px bg-white/15 rotate-[35deg] origin-left" />
                </div>
                <h4 className="text-[12px] font-black tracking-[0.24em] uppercase text-gray-300">
                  Contact
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-gray-500 shrink-0 mt-[4px]" />
                  <span className="text-[16px] text-gray-500 leading-snug">+91 94283 38806</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-gray-500 shrink-0 mt-[4px]" />
                  <span className="text-[16px] text-gray-500 leading-snug break-all">info@siddhisoftworld.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-[4px]" />
                  <span className="text-[16px] text-gray-500 leading-snug">Vadodara &amp; Ahmedabad,<br />Gujarat, India</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Watermark + Bottom bar ── */}
      <div className="relative">
        {/* Large brand watermark */}
        <div className="pointer-events-none select-none overflow-hidden leading-none py-1">
          <div className="flex w-max whitespace-nowrap animate-marquee-ltr">
            {[...Array(4)].map((_, index) => (
              <span
                key={index}
                className="inline-block px-6 text-[clamp(84px,16vw,260px)] tracking-tight text-white/[0.04] -mb-3 font-burnout-techniques"
              >
                <span className="text-white/20">S</span>IDDHI SOFT WORLD
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar sits over watermark */}
        <div className="relative border-t border-white/[0.06]">
          <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-gray-600">
              © {new Date().getFullYear()} Siddhi Soft World. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 group"
                >
                  <social.icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
