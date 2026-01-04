"use client";

import ButtonLink from "@/components/ButtonLink";
import {
  FaChessKnight,
  FaServer,
  FaRoad,
  FaPuzzlePiece,
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
      <section className="max-w-5xl px-6 py-20 mx-auto">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl">
          From Concrete to Code.
        </h1>
        <h2 className="max-w-3xl mb-12 text-xl font-medium leading-relaxed text-slate-300">
          I am a Backend and ML Infrastructure Engineer bringing 7+ years of
          engineering operations experience to software development.
        </h2>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Main Narrative Column */}
          <div className="space-y-12">
            {/* Section 1: The Origin & Pivot */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaRoad className="text-xl" />
                The Pivot: Why I Stopped Watching
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Before earning my M.S. in Computer Science, I spent seven years
                as a Project Engineer managing large-scale housing projects. I
                saw the technological innovations transforming other industries
                -- automation, data pipelines, predictive modeling -- and felt
                that construction was just beginning to catch up.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                I realized I didn&apos;t just want to watch that transformation
                happen;{" "}
                <strong>I wanted to be the one building the solutions.</strong>{" "}
                That shift drove me to fully transition into engineering robust
                backend systems and ML pipelines.
              </p>
            </div>

            {/* Section 2: Operational Grit */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaPuzzlePiece className="text-xl" />
                Operational Grit & Resourceful Ownership
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                My background in engineering operations taught me that
                engineering isn&apos;t just about writing code -- it&apos;s
                about solving bottlenecks under constraints. Whether
                volunteering for non-profits like <strong>JerseySTEM</strong>{" "}
                and <strong>The Chad Foundation</strong> or building personal
                projects, I focus on end-to-end ownership.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                I don&apos;t just reach for the most expensive tool. I design
                systems that solve real-world problems efficiently -- often
                figuring out the best possible solution within limited resource
                constraints.
              </p>
            </div>

            {/* Section 3: Technical Expertise */}
            <div>
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-400">
                <FaServer className="text-xl" />
                What I Build Today
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                I combine operational grit with software architecture to build
                reliable infrastructure. My recent work includes:
              </p>
              <ul className="pl-5 space-y-4 text-lg leading-relaxed list-disc text-slate-300 marker:text-blue-500">
                <li>
                  <strong className="text-white">
                    Material Forecasting Engine:
                  </strong>{" "}
                  An AI-driven pipeline (Python/FastAPI/Docker) tackling
                  construction pricing volatility.
                </li>
                <li>
                  <strong className="text-white">
                    Permit Workflow Service:
                  </strong>{" "}
                  A backend service (Node.js/TypeScript) modeling complex
                  municipal compliance lifecycles.
                </li>
                <li>
                  <strong className="text-white">Integration Pipelines:</strong>{" "}
                  Architecting cost-effective data syncs (Make.com/Integrate.io)
                  that drastically reduce API costs for non-profits.
                </li>
              </ul>
            </div>

            {/* Section 4: Looking Forward */}
            <div className="pt-8 border-t border-slate-800">
              <p className="text-lg italic leading-relaxed text-slate-300">
                Based in the NYC area (open to relocation). While my background
                draws me to challenges in{" "}
                <strong>ConTech, PropTech, and AEC</strong>, I am passionate
                about any role where I can build reliable backend or ML
                infrastructure.
              </p>
            </div>
          </div>

          {/* Sidebar: Stats & Resume */}
          <div className="flex flex-col gap-6">
            {/* LeetCode Knight Badge (Top Proof of Skill) */}
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
                    <span>Provost&apos;s Merit Scholarship</span>
                  </div>
                </div>

                {/* MTech */}
                <div className="relative pl-4 border-l-2 border-slate-700">
                  <div className="font-bold text-white">
                    M.Tech Const. & Mgmt.
                  </div>
                  <div className="text-sm text-slate-400">
                    College of Engineering, Pune
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    2015
                  </div>
                </div>

                {/* BTech */}
                <div className="relative pl-4 border-l-2 border-slate-700">
                  <div className="font-bold text-white">
                    B.Tech Civil Engineering
                  </div>
                  <div className="text-sm text-slate-400">Dr. B. A. M. U.</div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    2012
                  </div>
                  <div className="flex items-start gap-1.5 mt-2 text-xs text-slate-400">
                    <FaAward className="text-yellow-500 shrink-0 mt-0.5" />
                    <span>Rank #1 in University</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect Card */}
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

              {/* Social Icons */}
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
