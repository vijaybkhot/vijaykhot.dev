"use client";

import ButtonLink from "./ButtonLink";

const Hero = () => {
  return (
    <section
      className="max-w-4xl px-4 py-16 mx-auto text-center sm:text-left sm:px-0"
      aria-label="Introduction section"
      style={{
        color: "#ffffff",
      }}
    >
      <h1 className="mb-4 text-5xl font-extrabold leading-tight sm:text-7xl">
        Vijay Khot
      </h1>
      <h3 className="mb-4 text-lg font-medium sm:text-xl text-slate-300">
        M.S. Computer Science, Stevens Institute of Technology
      </h3>

      <h2
        className="mb-6 text-2xl font-medium sm:text-3xl"
        style={{ color: "#60A5FA" }}
      >
        Backend-Focused Software Engineer & Problem Solver
      </h2>

      <p
        className="max-w-2xl mb-10 text-lg leading-relaxed"
        style={{ color: "#cbd5e1" }}
      >
        I build fast, scalable web applications using Next.js, Node.js, and
        GraphQL—focused on performance and developer experience.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
        <ButtonLink
          href="/work"
          label="Explore My Projects"
          variant="primary"
        />
        <ButtonLink
          href="https://leetcode.com/u/vijay_khot/"
          label="View My LeetCode Stats"
          variant="primary"
        />
        <ButtonLink href="/contact" label="Contact Me" variant="outlined" />{" "}
      </div>
    </section>
  );
};

export default Hero;
