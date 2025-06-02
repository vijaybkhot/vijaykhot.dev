import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageArrows from "@/components/PageArrow";

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
        className={`min-h-screen flex flex-col bg-[#0f172a] text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 3D container */}
        <div
          className="relative overflow-hidden"
          style={{ perspective: "1200px" }} // Or use a Tailwind utility like `perspective-3d`
        >
          <PageTransition>
            <Navbar />
            <PageArrows />
            {children}
            <Footer />
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
