import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageArrows from "@/components/PageArrow";
import BackgroundParticles from "@/components/BackgroundParticles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijay Khot | Backend & ML Infrastructure Engineer",
  description:
    "Backend Engineer focused on APIs, data pipelines, and ML-powered services for the built world. Experienced with Python (FastAPI), Node.js (Fastify), PostgreSQL, Redis, Docker, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`h-full bg-[#0f172a] text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="relative flex flex-col min-h-screen overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <Navbar />

          <PageArrows />

          <main className="flex-1">
            <BackgroundParticles />
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
        </div>
        {/* Analytics  */}
        <Analytics />
      </body>
    </html>
  );
}
