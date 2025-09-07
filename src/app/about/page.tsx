"use client";
import dynamic from "next/dynamic";
import ButtonLink from "@/components/ButtonLink";

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-brand text-slate-100">
        <section className="max-w-6xl px-6 py-24 mx-auto sm:px-20">
          {/* Header */}
          <h1 className="mb-4 text-4xl font-bold text-blue-500 sm:text-5xl">
            From Blueprints to Backend.
          </h1>

          <h2 className="w-full mb-6 text-2xl font-semibold leading-snug sm:text-3xl text-slate-100">
            I&#39;m{" "}
            <span className="font-semibold text-blue-400">Vijay Khot</span> — a
            software engineer with a 6-year background in project engineering.
          </h2>
          <hr className="w-full my-4 border-t-2 border-slate-700" />

          {/* The Story */}
          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            Before I ever wrote a line of code, I spent six years on the ground
            as a{" "}
            <span className="font-medium text-white">Project Engineer</span>. I
            managed government housing projects from start to finish—everything
            from drafting proposals and securing approvals to handling the
            payment gateway for subsidies. At one point, I was appointed{" "}
            <span className="font-medium text-white">
              District Nodal Officer
            </span>
            , where I had the chance to lead and coordinate work across 13
            different teams.
          </p>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            That experience gave me a unique perspective. I don&#39;t just see
            software as code; I see it as the critical tool that prevents costly
            errors and turns a complex plan into a real-world project. This
            insight is what drove me to pivot my career and earn a{" "}
            <span className="font-medium text-white">
              Master&#39;s in Computer Science from Stevens Institute of
              Technology (GPA: 3.97)
            </span>
            . I wanted to build the tools I wished Id had in the field.
          </p>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            Today, I&#39;m a backend-focused developer who&#39;s proficient in{" "}
            <span className="font-medium text-white">
              Node.js, Python, TypeScript, and SQL
            </span>
            , and I build full-stack apps with modern tools like React, Next.js,
            Docker, and AWS. I also love a good challenge, which is why I&#39;ve
            solved over{" "}
            <span className="font-medium text-white">
              600 LeetCode problems (top 0.5%)
            </span>
            it&#39;s a great way to stay sharp and practice writing clean,
            efficient code.
          </p>

          {/* The Goal */}
          <h2 className="mb-4 text-2xl font-semibold text-blue-400">
            My Mission
          </h2>
          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            I&#39;m looking for opportunities where I can combine my skills—as
            both an engineer and a developer—to build the next generation of
            software in the{" "}
            <span className="font-medium text-white">
              ConTech, PropTech, and AEC (Architecture, Engineering &
              Construction) industries
            </span>
            . I&#39;m excited to help create solutions that aren&#39;t just
            technically excellent, but are built with a real understanding of
            the people who will use them every day.
          </p>

          {/* Skills Section */}
          <div className="py-8">
            <Skills />
          </div>

          {/* Personal Touch */}
          <h2 className="mb-4 text-2xl font-semibold text-blue-400">
            Outside of the IDE
          </h2>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            When I&#39;m not coding, I enjoy staying active with workouts and
            yoga. And as a long-suffering but dedicated Manchester United
            supporter, I&#39;ve developed a deep resilience that serves me well
            when I&#39;m debugging tricky code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <ButtonLink href="/work" label="View My Work" variant="primary" />
            <ButtonLink
              href="/resume.pdf" // Make sure your resume PDF is in the /public folder
              label="View My Resume"
              variant="primary"
            />
            <ButtonLink href="/contact" label="Contact Me" variant="outlined" />
          </div>
        </section>
      </main>
    </>
  );
}
