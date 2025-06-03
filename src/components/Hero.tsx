"use client";

import ButtonLink from "./ButtonLink";

const Hero = () => {
  return (
    <section
      className="max-w-4xl px-4 py-24 mx-auto text-center sm:text-left sm:px-0"
      aria-label="Introduction section"
      style={{
        color: "#ffffff",
      }}
    >
      <h1 className="mb-4 text-5xl font-extrabold leading-tight sm:text-7xl">
        Vijay Khot
      </h1>

      <h2
        className="mb-6 text-2xl font-medium sm:text-3xl"
        style={{ color: "#60A5FA" }}
      >
        Full-Stack Web Developer & Problem Solver
      </h2>

      <p
        className="max-w-2xl mb-10 text-lg leading-relaxed"
        style={{ color: "#cbd5e1" }}
      >
        I build fast, scalable, and intuitive web apps using React, Next.js, and
        Node.js.
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
