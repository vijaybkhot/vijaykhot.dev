import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <div className="relative flex flex-col min-h-screen overflow-hidden">
          {/* --- THE SYSTEMS BLUEPRINT BACKGROUND --- */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            {/* 1. Base Dark Background */}
            <div className="absolute inset-0 bg-[#0f172a]" />

            {/* 2. The Technical Grid */}
            <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px]" />

            {/* 3. Subtle Vignette (Gradient Overlay) 
                This fades the grid out at the bottom, keeping focus on the content.
                Safer and more performant than complex masking. */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]" />
          </div>
          {/* ---------------------------------------- */}

          <Navbar />

          <main className="relative flex-1 z-10">
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
