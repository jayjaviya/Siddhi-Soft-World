import { promises as fs } from "fs";
import path from "path";
import PageHero from "@/features/service-details/PageHero";
import ServiceOverview from "@/features/service-details/ServiceOverview";
import ServiceCapabilities from "@/features/service-details/ServiceCapabilities";
import ServiceProcess from "@/features/service-details/ServiceProcess";
import ServiceBenefits from "@/features/service-details/ServiceBenefits";
import ServiceSidebar from "@/features/service-details/ServiceSidebar";
import { notFound } from "next/navigation";

interface ServiceData {
  title: string;
  overview: string;
  capabilities: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  summary: string;
}

const CONTENT_DIR = path.join(process.cwd(), "_content");

async function getServiceContent(slug: string): Promise<ServiceData | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Crude markdown parser for the specific format found in _content
    const titleMatch = fileContent.match(/# (.*)/);
    const title = titleMatch ? titleMatch[1].split(" - ")[0] : slug;

    const sections = fileContent.split("## ");
    
    let overview = "";
    let summary = "";
    let capabilities: { title: string; desc: string }[] = [];
    let benefits: { title: string; desc: string }[] = [];

    sections.forEach(section => {
      const sectionLower = section.toLowerCase();
      if (sectionLower.startsWith("overview")) {
        overview = section.replace(/^Overview\s+/i, "").trim();
      } else if (sectionLower.startsWith("summary")) {
        summary = section.replace(/^Summary\s+/i, "").trim();
      } else if (sectionLower.startsWith("key services")) {
        const lines = section.split("\n").filter(line => line.trim().startsWith("- **"));
        const newCapabilities = lines.map(line => {
          const parts = line.replace("- **", "").split(":** ");
          return {
            title: parts[0] ? parts[0].trim() : "Service Capability",
            desc: parts[1] ? parts[1].trim() : ""
          };
        });
        capabilities = [...capabilities, ...newCapabilities];
      } else if (sectionLower.startsWith("benefits")) {
        const lines = section.split("\n").filter(line => line.trim().startsWith("- **"));
        const newBenefits = lines.map(line => {
          const parts = line.replace("- **", "").split(":** ");
          return {
            title: parts[0] ? parts[0].trim() : "Benefit",
            desc: parts[1] ? parts[1].trim() : ""
          };
        });
        benefits = [...benefits, ...newBenefits];
      }
    });

    return { 
      title: title || slug, 
      overview: overview || "Comprehensive IT services tailored for enterprise-grade performance and reliability.", 
      capabilities, 
      benefits, 
      summary: summary || "Delivering strategic value through high-performance engineering." 
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files
      .filter(file => file.endsWith(".md") && !["about.md", "contact.md", "home.md", "project-overview.md", "additional-services.md"].includes(file))
      .map(file => ({
        slug: file.replace(".md", ""),
      }));
  } catch (error) {
    return [];
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getServiceContent(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-bg-deep min-h-screen rounded-t-[4rem]">
      <PageHero 
        title={data.title}
        subtitle={data.overview.split(".")[0] + "."}
        breadcrumb={data.title}
      />
      
      {/* Sidebar + Content layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 pb-32">
        <ServiceSidebar />
        
        <div className="flex-1 min-w-0">
          <ServiceOverview 
            overview={data.overview}
            summary={data.summary}
          />

          <ServiceCapabilities capabilities={data.capabilities} />
          
          <ServiceProcess />
          
          <ServiceBenefits benefits={data.benefits} />
        </div>
      </div>
    </div>
  );
}
