"use client";
import dynamic from "next/dynamic";

import BackgroundParticles from "@/components/BackgroundParticles";
import { projects } from "@/lib/projects";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
});

const featuredProjects = projects.filter((project) => project.featured);

const WorkPage = () => {
  return (
    <>
      <BackgroundParticles />

      <main className="relative px-6 py-24 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-blue-500">
            Crafted with Code & Purpose
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
            Explore a curated collection of full-stack projects—each built with
            thoughtful design, clean code, and real-world utility.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 text-base font-medium text-blue-500 transition-all duration-300 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
          >
            View More Projects →
          </Link>
        </div> */}
      </main>
    </>
  );
};

export default WorkPage;
