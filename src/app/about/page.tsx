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
            Building Robust Backend Systems.
          </h1>

          <h2 className="w-full mb-6 text-2xl font-semibold leading-snug sm:text-3xl text-slate-100">
            I&#39;m{" "}
            <span className="font-semibold text-blue-400">Vijay Khot</span> — a
            software engineer passionate about creating the scalable, reliable
            infrastructure that powers modern applications.
          </h2>
          <hr className="w-full my-4 border-t-2 border-slate-700" />

          {/* The Core Skills & Current Focus */}
          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            My expertise lies in the **JavaScript/TypeScript ecosystem**. I
            build and deploy full-stack applications using tools like{" "}
            <span className="font-medium text-white">
              Node.js, Next.js, React, and PostgreSQL
            </span>
            . From designing GraphQL APIs to implementing efficient database
            schemas with Prisma, I enjoy crafting clean, maintainable code that
            performs under pressure.
          </p>

          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            Lately, my passion has pulled me deeper into the world of
            large-scale systems. I&#39;m currently expanding my skillset into
            the{" "}
            <span className="font-medium text-white">
              Java ecosystem by building microservices with Spring Boot
            </span>
            , and I&#39;m deeply immersed in system design principles, studying
            foundational texts like Kleppmann&#39;s &#39;Designing
            Data-Intensive Applications&#39;. This includes hands-on
            infrastructure work, from deploying containerized applications on{" "}
            <span className="font-medium text-white">
              AWS EC2 to configuring an Nginx reverse proxy
            </span>
            .
          </p>

          {/* The Origin Story (Condensed) */}
          <h2 className="mb-4 text-2xl font-semibold text-blue-400">
            My &quot;Why&quot;
          </h2>
          <p className="w-full mb-6 text-lg leading-relaxed text-slate-300">
            My journey into tech was driven by six years as a Project Engineer
            on large-scale construction sites. That experience taught me
            firsthand the importance of reliable systems and the frustration of
            using tools that don&#39;t meet real-world needs. It&#39;s what
            drives me to build software that is not just technically elegant,
            but also robust and practical. To me, a strong foundation in
            algorithms is key to great system design, so I continue to sharpen
            my problem-solving skills on{" "}
            <span className="font-medium text-white">
              LeetCode (600+ problems, top 0.5%)
            </span>
            .
          </p>

          {/* Skills Section */}
          <div className="py-8">
            <Skills />
          </div>

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
