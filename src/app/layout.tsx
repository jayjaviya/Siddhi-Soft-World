import type { Metadata } from "next";
import { Inter, Dancing_Script, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout";
import Footer from "@/components/layout/Footer";
// import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-cursive",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Siddhi Soft World | Software Development & Server Management",
  description: "Qualitative, timely delivered, and cost-effective results in Software Development & Server Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${dancingScript.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="relative flex-grow pt-28 md:pt-[136px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
