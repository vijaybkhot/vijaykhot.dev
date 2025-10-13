"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { FC, useState } from "react";
import { techIcons as icons } from "@/lib/icons";
import ButtonLink from "./ButtonLink";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string | null;
  youtube?: string;
  embed?: string;
  image?: string;
  contribution?: string;
  featured?: boolean;
  courseProject?: boolean;
  labels?: string[];
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  // Map common label text to Tailwind color classes for consistent presentation
  const getLabelClasses = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("team") || l.includes("group"))
      return "bg-blue-600 text-white";
    if (
      l.includes("solo") ||
      l.includes("individual") ||
      l.includes("personal")
    )
      return "bg-green-600 text-white";
    if (
      l.includes("in progress") ||
      l.includes("in-progress") ||
      l.includes("ongoing")
    )
      return "bg-indigo-600 text-white";
    if (l.includes("email") || l.includes("outreach") || l.includes("ses"))
      return "bg-amber-500 text-slate-900";
    if (
      l.includes("cloud") ||
      l.includes("aws") ||
      l.includes("vercel") ||
      l.includes("render")
    )
      return "bg-sky-600 text-white";
    if (l.includes("backend") || l.includes("api") || l.includes("server"))
      return "bg-rose-600 text-white";
    if (l.includes("worker") || l.includes("bullmq") || l.includes("queue"))
      return "bg-fuchsia-600 text-white";
    if (
      l.includes("compliance") ||
      l.includes("security") ||
      l.includes("governance")
    )
      return "bg-emerald-600 text-white";
    if (l.includes("best") || l.includes("featured") || l.includes("top"))
      return "bg-yellow-400 text-slate-900";
    if (l.includes("hackathon") || l.includes("challenge"))
      return "bg-violet-600 text-white";
    if (l.includes("course") || l.includes("class") || l.includes("assignment"))
      return "bg-amber-600 text-slate-900";
    if (l.includes("hci") || l.includes("ui/ux") || l.includes("ui"))
      return "bg-purple-600 text-white";
    // default
    return "bg-gray-600 text-white";
  };

  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick();
      }}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue-500/20 hover:shadow-md cursor-pointer"
    >
      {/* Media */}
      {project.youtube ? (
        <div
          className="overflow-hidden rounded aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={project.youtube}
            title={`${project.title} demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
      ) : project.embed ? (
        <div
          className="overflow-hidden rounded aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={project.embed}
            title={`${project.title} demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
      ) : project.image ? (
        <div
          className="relative w-full h-[250px] mb-4 rounded overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
      ) : null}

      {/* Title & Description */}
      <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
      {/* Labels */}
      {project.labels && project.labels.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.labels.map((label) => (
            <span
              key={label}
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getLabelClasses(
                label
              )}`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
      <p className={`text-slate-300 mb-2 ${!expanded ? "line-clamp-2" : ""}`}>
        {project.description}
      </p>

      {/* Read More */}
      {project.description.length > 150 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          className="mb-3 text-sm text-blue-400 hover:underline focus:outline-none"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Contribution */}
      {project.contribution && (
        <p className="mb-3 text-sm italic text-slate-400">
          <span className="font-medium text-blue-400">
            {project.labels?.some(
              (label) =>
                label.toLowerCase().includes("solo") ||
                label.toLowerCase().includes("individual")
            )
              ? "What I built:"
              : "My Role:"}
          </span>{" "}
          {project.contribution}
        </p>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-4 mb-3 text-sm font-medium text-blue-400">
        {project.tech.map((tech) => {
          const iconObject = icons.find((icon) => icon.name === tech);
          return (
            <div
              key={tech}
              className="flex flex-col items-center min-w-[60px] gap-1"
              title={tech}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.span
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-2xl cursor-pointer"
              >
                {iconObject?.icon}
              </motion.span>
              <span className="text-xs text-slate-300">{tech}</span>
            </div>
          );
        })}
      </div>

      {/* Manual Links */}
      <div
        className="flex flex-wrap gap-3 mt-4"
        onClick={(e) => e.stopPropagation()}
      >
        {project.github && (
          <ButtonLink href={project.github} label="GitHub" variant="outlined" />
        )}
        {project.live && (
          <ButtonLink
            href={project.live}
            label="Live Demo"
            variant="outlined"
          />
        )}
        {project.youtube && (
          <ButtonLink
            href={project.youtube}
            label="Watch Video"
            variant="outlined"
          />
        )}
        {project.embed && (
          <ButtonLink
            href={project.embed}
            label="View Video"
            variant="outlined"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
