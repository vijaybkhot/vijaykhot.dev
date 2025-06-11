import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vijay Khot | Software Developer",
  description:
    "Portfolio of Vijay Khot – a passionate full-stack web developer with experience in React, Next.js, Node.js, and MongoDB.",
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
      </body>
    </html>
  );
}
