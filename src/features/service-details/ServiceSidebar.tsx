"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monitor, Code, Globe, Network, Server, Settings, HardDrive, Database, ShieldCheck } from "lucide-react";

const ALL_SERVICES = [
  { title: "Application Development", slug: "application-development", icon: Monitor },
  { title: "Software Development", slug: "software-development", icon: Code },
  { title: "Web Development", slug: "web-development", icon: Globe },
  { title: "Managed Network Services", slug: "managed-network-services", icon: Network },
  { title: "MS Windows Servers", slug: "microsoft-windows-servers", icon: Server },
  { title: "Managed Services", slug: "managed-services", icon: Settings },
  { title: "Storage Management", slug: "storage-management", icon: HardDrive },
  { title: "IIS Server", slug: "internet-information-server", icon: Database },
  { title: "Disaster Recovery", slug: "disaster-recovery-backup", icon: ShieldCheck },
];

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="lg:sticky lg:top-28">
        <h3 className="text-xs font-black tracking-[0.25em] uppercase text-gray-500 mb-6 px-1">
          All Services
        </h3>
        <nav className="space-y-1">
          {ALL_SERVICES.map((service) => {
            const href = `/services/${service.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={service.slug}
                href={href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white border border-transparent"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <service.icon className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-600 group-hover:text-brand-secondary"
                }`} />
                <span className="truncate">{service.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
