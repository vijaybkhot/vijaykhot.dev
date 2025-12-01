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
      className="flex flex-col w-full max-w-4xl px-4 mx-auto text-center sm:text-left sm:px-0"
      aria-label="Introduction section"
    >
      {/* 1. Name */}
      <h1 className="mb-2 text-2xl font-extrabold leading-tight text-white sm:text-5xl">
        Vijay Khot
      </h1>

      {/* 2. Main Headline */}
      <h2 className="mb-3 text-base font-semibold leading-snug text-blue-400 sm:text-2xl">
        Backend &amp; ML Infrastructure Engineer for the Built World
      </h2>

      {/* 3. Sub-headline */}
      <p className="mb-3 text-sm font-medium leading-relaxed text-slate-200">
        I spent over 7 years managing construction projects before earning my
        Master&apos;s in Computer Science. Now I build backend systems and ML
        tools for the built world, from forecasting engines to permit workflows
        and payment systems.
      </p>

      {/* 4. Supporting Text */}
      <p className="mb-4 text-xs leading-relaxed sm:text-sm text-slate-400">
        My core stack is <strong>Python (FastAPI)</strong>,{" "}
        <strong>Node.js (Fastify)</strong>, <strong>AWS</strong>, and{" "}
        <strong>Docker</strong>. I turn messy, real-world workflows into
        reliable APIs and data pipelines.
      </p>

      {/* 5. The 3-Bullet List - Stack on mobile, grid on desktop */}
      <div className="flex flex-col gap-2 mb-4 text-left sm:grid sm:grid-cols-3">
        <div className="p-3 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-1 font-semibold text-white text-sm">
            Backend &amp; APIs
          </h3>
          <p className="text-xs text-slate-400">
            RESTful services with solid data modeling and caching.
          </p>
        </div>
        <div className="p-3 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-1 font-semibold text-white text-sm">
            ML in Production
          </h3>
          <p className="text-xs text-slate-400">
            Dockerized inference engines with Redis and CI/CD.
          </p>
        </div>
        <div className="p-3 transition-colors border rounded-lg bg-slate-800/50 border-slate-700 hover:border-blue-500/50">
          <h3 className="mb-1 font-semibold text-white text-sm">
            Construction-Aware
          </h3>
          <p className="text-xs text-slate-400">
            Encoding real-world permit/material workflows into software.
          </p>
        </div>
      </div>

      {/* 6. Skills Marquee */}
      <div className="mb-4">
        <Skills />
      </div>

      {/* 7. Action Buttons */}
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

        {/* Secondary: Dual Text Links */}
        <div className="flex gap-6 text-xs font-medium sm:text-sm text-slate-400">
          <a
            href="#work"
            className="transition hover:text-white underline-offset-4 hover:underline"
          >
            View Work ↓
          </a>
          <a
            href="/about"
            className="transition hover:text-blue-400 underline-offset-4 hover:underline"
          >
            About &amp; Education →
          </a>
        </div>
      </div>

      {/* 8. Scroll Indicator */}
      <div className="flex justify-center w-full mt-6">
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
