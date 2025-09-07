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

      {/* This is the new, powerful headline */}
      <h2
        className="mb-6 text-2xl font-medium sm:text-3xl"
        style={{ color: "#60A5FA" }}
      >
        Software Engineer with 6 Years of Project Engineering Experience
      </h2>

      {/* This paragraph tells your story and value prop */}
      <p
        className="max-w-2xl mb-10 text-lg leading-relaxed"
        style={{ color: "#cbd5e1" }}
      >
        I don&#39;t just build software; I build it with the perspective of an
        end-user who has managed multi-million dollar projects. My background in
        civil engineering, combined with a Master&#39;s in Computer Science,
        allows me to create robust, backend systems that solve real-world
        operational challenges.
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
        <ButtonLink href="/work" label="Explore My Work" variant="primary" />
        <ButtonLink
          href="/resume.pdf" // Changed this to link directly to your resume
          label="View My Resume"
          variant="primary"
        />
        <ButtonLink href="/contact" label="Contact Me" variant="outlined" />{" "}
      </div>
    </section>
  );
};

export default Hero;
