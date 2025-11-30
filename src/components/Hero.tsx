"use client";

import dynamic from "next/dynamic";
import { FaChevronDown, FaFileDownload } from "react-icons/fa";

// Dynamically import Skills to avoid SSR hydration mismatches
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center min-h-[calc(100vh-64px)] max-w-4xl px-4 mx-auto text-center sm:text-left sm:px-0 pt-2"
      aria-label="Introduction section"
    >
      {/* 1. Name (Smaller & Tighter) */}
      <h1 className="mb-1 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        Vijay Khot
      </h1>

      {/* 2. Main Headline */}
      <h2 className="mb-3 text-lg font-semibold leading-snug text-blue-400 sm:text-2xl">
        Backend & ML Infrastructure Engineer for the Built World
      </h2>

      {/* 3. Sub-headline */}
      <p className="max-w-3xl mb-3 text-sm font-medium leading-relaxed text-slate-200">
        I spent over 7 years managing construction projects before earning my
        Master’s in Computer Science. Now I build backend systems and ML tools
        for the built world, from forecasting engines to permit workflows and
        payment systems.
      </p>

      {/* 4. Supporting Text */}
      <p className="max-w-3xl mb-4 text-xs leading-relaxed sm:text-sm text-slate-400">
        My core stack is <strong>Python (FastAPI)</strong>,{" "}
        <strong>Node.js (Fastify)</strong>, <strong>AWS</strong>, and{" "}
        <strong>Docker</strong>. I turn messy, real-world workflows into
        reliable APIs and data pipelines.
      </p>

      {/* 5. The 3-Bullet List (Ultra Compact Padding) */}
      <div className="grid gap-2 mb-4 text-left sm:grid-cols-3">
        <div className="p-2 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-0.5 font-semibold text-white text-xs sm:text-sm">
            Backend & APIs
          </h3>
          <p className="text-[10px] sm:text-xs text-slate-400">
            RESTful services with solid data modeling and caching.
          </p>
        </div>
        <div className="p-2 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-0.5 font-semibold text-white text-xs sm:text-sm">
            ML in Production
          </h3>
          <p className="text-[10px] sm:text-xs text-slate-400">
            Dockerized inference engines with Redis and CI/CD.
          </p>
        </div>
        <div className="p-2 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-0.5 font-semibold text-white text-xs sm:text-sm">
            Construction-Aware
          </h3>
          <p className="text-[10px] sm:text-xs text-slate-400">
            Encoding real-world permit/material workflows into software.
          </p>
        </div>
      </div>

      {/* 6. Skills Marquee (Minimal Margin) */}
      <div className="mb-4">
        <Skills />
      </div>

      {/* 7. Action Buttons (Compact) */}
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
        {/* Primary CTA: Resume */}
        <a
          href="/resume/Vijay_Khot_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/20"
        >
          <FaFileDownload />
          View Resume
        </a>

        {/* Secondary: Explore */}
        <a
          href="#work"
          className="text-xs font-medium transition sm:text-sm text-slate-400 hover:text-white underline-offset-4 hover:underline"
        >
          Or explore my work below ↓
        </a>
      </div>

      {/* 8. Scroll Indicator (Pulled Up) */}
      <div className="justify-center hidden w-full mt-6 sm:flex">
        <a
          href="#experience"
          aria-label="Scroll to Experience"
          className="flex flex-col items-center gap-1 transition-colors text-slate-500 hover:text-blue-400 group"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Experience
          </span>
          <div className="animate-bounce p-1.5 bg-slate-800/50 rounded-full border border-slate-700 group-hover:border-blue-500/50 transition-colors">
            <FaChevronDown size={12} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
