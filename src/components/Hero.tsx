"use client";

import dynamic from "next/dynamic";
import ButtonLink from "./ButtonLink";

// Dynamically import Skills to avoid SSR hydration mismatches with animations
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section
      className="max-w-4xl px-4 py-4 mx-auto text-center sm:text-left sm:px-0"
      aria-label="Introduction section"
    >
      {/* 1. Name */}
      <h1 className="mt-6 mb-1 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
        Vijay Khot
      </h1>

      {/* 2. Main Headline */}
      <h2 className="mb-3 text-xl font-semibold leading-snug text-blue-400 sm:text-2xl">
        Backend & ML Infrastructure Engineer for the Built World
      </h2>

      {/* 3. Sub-headline (The Hook) */}
      <p className="max-w-3xl mb-3 text-base font-medium leading-relaxed text-slate-200">
        I spent over 7 years managing construction projects before earning my
        Master&apos;s in Computer Science. Now I build backend systems and ML
        tools for the built world, from forecasting engines to permit workflows
        and payment systems.
      </p>

      {/* 4. Supporting Text */}
      <p className="max-w-3xl mb-4 text-sm leading-relaxed text-slate-400">
        My core stack is <strong>Python (FastAPI)</strong>,{" "}
        <strong>Node.js (Fastify)</strong>, <strong>AWS</strong>, and{" "}
        <strong>Docker</strong>. I turn messy, real-world workflows into
        reliable APIs and data pipelines.
      </p>

      {/* 5. The 3-Bullet List (Credibility Proof) */}
      <div className="grid gap-3 mb-5 text-left sm:grid-cols-3">
        <div className="p-3 border rounded-lg bg-slate-800/50 border-slate-700 transition-transform duration-200 hover:scale-105">
          <h3 className="mb-1 text-sm font-semibold text-white">
            Backend & APIs
          </h3>
          <p className="text-xs text-slate-400">
            RESTful services with solid data modeling and caching.
          </p>
        </div>
        <div className="p-3 border rounded-lg bg-slate-800/50 border-slate-700 transition-transform duration-200 hover:scale-105">
          <h3 className="mb-1 text-sm font-semibold text-white">
            ML in Production
          </h3>
          <p className="text-xs text-slate-400">
            Dockerized inference engines with Redis and CI/CD.
          </p>
        </div>
        <div className="p-3 border rounded-lg bg-slate-800/50 border-slate-700 transition-transform duration-200 hover:scale-105">
          <h3 className="mb-1 text-sm font-semibold text-white">
            Construction-Aware
          </h3>
          <p className="text-xs text-slate-400">
            Encoding real-world permit/material workflows into software.
          </p>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="mb-5">
        <Skills />
      </div>

      {/* 7. Action Buttons */}
      <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
        <ButtonLink href="/work" label="Explore My Work" variant="primary" />
        <ButtonLink
          href="/resume/Vijay_Khot_Resume.pdf"
          label="View My Resume"
          variant="primary"
          openInNewTab
        />
        <ButtonLink href="/contact" label="Contact Me" variant="outlined" />
      </div>
    </section>
  );
};

export default Hero;
