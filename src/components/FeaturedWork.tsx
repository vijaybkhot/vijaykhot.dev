"use client";

import { FaServer } from "react-icons/fa";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const FeaturedWork = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 w-full">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <FaServer className="text-blue-500" />
          Selected Engineering Work
        </h2>
        <Link
          href="/work"
          className="hidden sm:block text-sm font-medium text-blue-400 hover:text-blue-300 transition"
        >
          View Full Archive →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/work"
          className="text-sm font-medium text-blue-400 hover:text-blue-300 transition"
        >
          View Full Archive →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
