"use client";

import ButtonLink from "@/components/ButtonLink";
import {
  FaChessKnight,
  FaServer,
  FaHardHat,
  FaCodeBranch,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 pb-20">
      <section className="max-w-4xl px-6 py-20 mx-auto">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
          From Concrete to Code.
        </h1>
        <h2 className="max-w-2xl mb-12 text-xl font-medium leading-relaxed text-slate-300">
          I apply the engineering rigor of large-scale construction to building
          fault-tolerant backend systems and ML infrastructure.
        </h2>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Main Narrative Column */}
          <div className="space-y-10">
            {/* Section 1: Engineering Philosophy */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaHardHat className="text-xl" />
                The Engineering Philosophy
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                For seven years, I worked as a project engineer on
                government-subsidized affordable housing, coordinating the
                construction of more than 600 homes across multiple sites. In
                construction, you can&apos;t simply &quot;revert&quot; a
                structural error. A single oversight triggers cascading schedule
                overruns and budget explosions. I bring that same high-stakes
                accountability to software engineering.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                I don&apos;t just write code that works; I design systems that
                survive failure. Whether it&apos;s handling race conditions in a
                database or managing distributed state, I focus on constraints,
                safety, and reliability.
              </p>
            </div>

            {/* Section 2: Current Focus (ML Infra) */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaServer className="text-xl" />
                Current Focus: ML Infrastructure
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                I realized that the biggest bottleneck in AI isn&apos;t the
                model, it&apos;s the <strong>pipeline</strong>. I&apos;m focused
                on building the plumbing that makes models production-ready:
                data ingestion, storage, serving, and monitoring.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                In practice, this means building systems like my{" "}
                <strong>Material Forecasting Engine</strong>: ingesting messy
                economic time-series data into PostgreSQL, serving ARIMA-based
                forecasts via <strong>FastAPI</strong>, caching responses in{" "}
                <strong>Redis</strong>, and packaging everything in{" "}
                <strong>Docker</strong> for reliable deployment.
              </p>
            </div>

            {/* Section 3: What I'm Building (The Proof) */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaCodeBranch className="text-xl" />
                What I&apos;ve Built Recently
              </h3>
              <ul className="pl-5 space-y-4 text-lg leading-relaxed list-disc text-slate-300 marker:text-blue-500">
                <li>
                  <strong className="text-white">
                    Material Forecasting Engine:
                  </strong>{" "}
                  An end-to-end ML pipeline using Python (FastAPI), PostgreSQL,
                  Redis, and Docker to predict construction material costs.
                </li>
                <li>
                  <strong className="text-white">
                    Permit Workflow Service:
                  </strong>{" "}
                  A Node.js/TypeScript backend that encodes complex permit
                  lifecycles into a guarded state machine with async PDF
                  generation workers.
                </li>
                <li>
                  <strong className="text-white">
                    Email Outreach Platform:
                  </strong>{" "}
                  A full-stack system leveraging AWS SES for production-grade
                  email deliverability and authentication (SPF/DKIM).
                </li>
              </ul>

              {/* NEW: Writing/Communication Section */}
              <p className="pt-6 mt-8 text-lg leading-relaxed border-t text-slate-300 border-slate-700">
                I also document what I learn and build, writing about backend
                architecture, data pipelines, and real-world debugging stories
                on{" "}
                <a
                  href="https://medium.com/@vijaysinh.khot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 underline-offset-4 decoration-blue-400/30 hover:decoration-blue-400"
                >
                  Medium
                </a>
                .
              </p>
            </div>
          </div>

          {/* Sidebar: Stats & Resume */}
          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <div className="p-6 transition-all duration-300 border shadow-xl bg-slate-800/50 border-slate-700 rounded-2xl hover:border-blue-500/50 hover:scale-[1.02]">
              <h4 className="flex items-center gap-2 mb-6 font-semibold text-white">
                <FaGraduationCap className="text-xl text-blue-400" />
                Education
              </h4>

              <div className="space-y-8">
                {/* Masters */}
                <div className="relative pl-4 border-l-2 border-blue-500/30">
                  <div className="font-bold text-white">
                    M.S. Computer Science
                  </div>
                  <div className="text-sm text-slate-400">
                    Stevens Institute of Technology
                  </div>
                  <div className="mt-1 font-mono text-xs text-blue-400">
                    3.97 GPA • 2025
                  </div>
                  <div className="flex items-start gap-1.5 mt-2 text-xs text-slate-300">
                    <FaAward className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>Provost&apos;s Merit Scholarship ($14k)</span>
                  </div>
                </div>

                {/* MTech */}
                <div className="relative pl-4 border-l-2 border-slate-700">
                  <div className="font-bold text-white">
                    M.Tech Construction & Management
                  </div>
                  <div className="text-sm text-slate-400">
                    College of Engineering, Pune
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    2015
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-xs text-slate-400">
                    <div className="flex items-start gap-1.5">
                      <FaAward className="text-yellow-500 shrink-0 mt-0.5" />
                      <span>AICTE Research Scholar</span>
                    </div>
                    <div className="leading-tight text-slate-500">
                      Thesis: Cost Overrun Analysis via Principal Component
                      Analysis
                    </div>
                  </div>
                </div>

                {/* BTech */}
                <div className="relative pl-4 border-l-2 border-slate-700">
                  <div className="font-bold text-white">
                    B.Tech Civil Engineering
                  </div>
                  <div className="text-sm text-slate-400">
                    Dr. B. A. M. U. , Aurangabad
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    2012
                  </div>
                  <div className="flex flex-col gap-1 mt-2 text-xs text-slate-400">
                    <div className="flex items-start gap-1.5">
                      <FaAward className="text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300">
                        Rank #1 in University
                      </span>
                    </div>
                    <div className="leading-tight text-slate-500">
                      General Secretary, Student Council
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LeetCode Knight Badge */}
            <a
              href="https://leetcode.com/u/vijay_khot/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 transition-all duration-300 border shadow-xl bg-slate-800/50 border-slate-700 rounded-2xl hover:border-yellow-500/50 hover:scale-[1.02] cursor-pointer block group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                  <SiLeetcode className="text-[#FFA116] text-2xl" />
                  LeetCode
                </div>
                <span className="px-2 py-1 text-xs font-bold text-slate-900 bg-[#FFA116] rounded">
                  Top 0.4%
                </span>
              </div>

              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 border rounded-full bg-slate-900 border-slate-700">
                  <FaChessKnight className="text-3xl text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Knight</div>
                  <div className="text-sm text-slate-400">Badge Earned</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Problems Solved</span>
                  <span className="font-mono font-bold text-white">650+</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 pt-3 mt-3 text-xs text-slate-500 group-hover:text-yellow-500/80">
                <span>View Profile</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </a>

            {/* Connect Card with Socials */}
            <div className="p-6 border bg-slate-800/50 border-slate-700 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:scale-[1.02]">
              <h4 className="mb-4 font-semibold text-white">Connect</h4>
              <div className="flex flex-col gap-3 mb-6">
                <ButtonLink
                  href="/resume/Vijay_Khot_Resume.pdf"
                  label="Download Resume"
                  variant="primary"
                />
                <ButtonLink
                  href="/contact"
                  label="Contact Me"
                  variant="outlined"
                />
              </div>

              {/* Social Icons Row */}
              <div className="flex justify-center gap-6 pt-6 border-t border-slate-700">
                <a
                  href="https://github.com/vijaybkhot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-2xl transition-colors transform text-slate-400 hover:text-white hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vijay-khot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-2xl transition-colors transform text-slate-400 hover:text-blue-400 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://medium.com/@vijaysinh.khot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Medium"
                  className="text-2xl transition-colors transform text-slate-400 hover:text-white hover:scale-110"
                >
                  <FaMedium />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
