"use client";
import dynamic from "next/dynamic";
import BackgroundParticles from "@/components/BackgroundParticles";
import ButtonLink from "@/components/ButtonLink";

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      <BackgroundParticles />

      <main className="min-h-screen bg-brand text-slate-100">
        <section className="max-w-6xl px-6 py-24 mx-auto sm:px-20">
          {/* Header */}
          <h1 className="mb-4 text-4xl font-bold text-blue-500 sm:text-5xl">
            Hey there!
          </h1>

          <h2 className="w-full mb-6 text-2xl font-semibold leading-snug sm:text-3xl text-slate-100">
            I&apos;m{" "}
            <span className="font-semibold text-blue-400">Vijay Khot</span> — a
            software developer with a passion for building impactful,
            user-focused technologies.
          </h2>
          <hr className="w-full my-4 border-t-2 border-slate-700" />

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            I&apos;m a{" "}
            <span className="font-medium text-white">software developer</span>{" "}
            with a unique background in{" "}
            <span className="font-medium text-white">
              Civil Engineering and Sciences
            </span>
            , and several years of industry experience. A recent graduate of the
            Master’s in Computer Science program at Stevens Institute of
            Technology, I built a strong foundation in software engineering and
            web development through both coursework and self-learning. Along the
            way, I’ve worked on multiple individual and team projects, gaining
            hands-on experience with{" "}
            <span className="font-medium text-white">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I love turning ideas into scalable solutions and continuously
            explore new tools to grow as an engineer.
          </p>
          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            To strengthen my problem-solving skills, I regularly practice coding
            challenges on platforms like{" "}
            <span className="font-medium text-white">LeetCode</span>, which has
            helped me sharpen my thinking and improve my efficiency in writing
            clean, optimized code.
          </p>

          {/* Skills Section */}
          <Skills />

          {/* Detailed Bio */}
          <h2 className="mb-4 text-2xl font-semibold text-blue-400">
            Beyond the Code
          </h2>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            Before transitioning into software development, I spent nearly seven
            years in Civil Engineering, managing complex projects and developing
            a strong foundation in structured problem-solving and team
            collaboration. My growing interest in technology and its potential
            to improve real-world systems inspired me to transition and pursue a
            Master&apos;s in Computer Science.
          </p>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            Outside of coding, I enjoy staying active through workouts and yoga,
            and I&apos;m a dedicated Manchester United supporter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <ButtonLink href="/work" label="View My Work" variant="primary" />
            <ButtonLink
              href="https://leetcode.com/u/vijay_khot/"
              label="View My LeetCode Stats"
              variant="primary"
            />
            <ButtonLink href="/contact" label="Contact Me" variant="outlined" />{" "}
          </div>
          {/* <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="/work"
              className="px-6 py-3 text-sm font-medium transition rounded-full"
              style={{
                backgroundColor: "#3B82F6",
                color: "#ffffff",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563EB")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#3B82F6")
              }
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 text-sm font-medium transition border rounded-full"
              style={{
                borderColor: "#60A5FA",
                color: "#60A5FA",
                backgroundColor: "transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3B82F6";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#60A5FA";
              }}
            >
              Contact Me
            </a>
          </div> */}
        </section>
      </main>
    </>
  );
}
