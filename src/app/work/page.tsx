"use client";
import dynamic from "next/dynamic";
import { projects } from "@/lib/projects";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
});

const allProjects = projects;

const WorkPage = () => {
  return (
    <>
      <main className="relative px-6 py-24 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-5xl font-extrabold text-white">
            Full Engineering Archive
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
            A complete collection of my software engineering work, ranging from
            production-grade infrastructure to experimental prototypes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default WorkPage;
