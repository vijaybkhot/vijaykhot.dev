"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { techIcons as icons } from "@/lib/icons";
import ButtonLink from "./ButtonLink";
import { FaExpand, FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

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
  apiDocs?: string;
};

// Helper to render bold text from markdown-style **bold**
const renderDescription = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const closeModal = () => {
    setIsModalOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    document.body.style.overflow = "";
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 3));
  const zoomOut = () => {
    setZoom((z) => {
      const newZoom = Math.max(z - 0.1, 0.5);
      if (newZoom <= 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
        return;
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomOut();
        return;
      }
      e.preventDefault();
      closeModal();
    };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isModalOpen]);

  const getLabelClasses = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("team") || l.includes("group"))
      return "bg-blue-600 text-white";
    if (l.includes("solo") || l.includes("individual"))
      return "bg-green-600 text-white";
    if (l.includes("in progress") || l.includes("ongoing"))
      return "bg-indigo-600 text-white";
    if (l.includes("email") || l.includes("outreach") || l.includes("ses"))
      return "bg-amber-500 text-slate-900";
    if (l.includes("cloud") || l.includes("aws") || l.includes("vercel"))
      return "bg-sky-600 text-white";
    if (l.includes("backend") || l.includes("api"))
      return "bg-rose-600 text-white";
    if (l.includes("worker") || l.includes("bullmq"))
      return "bg-fuchsia-600 text-white";
    if (l.includes("compliance") || l.includes("security"))
      return "bg-emerald-600 text-white";
    if (l.includes("best") || l.includes("featured"))
      return "bg-yellow-400 text-slate-900";
    if (l.includes("hackathon")) return "bg-violet-600 text-white";
    if (l.includes("course") || l.includes("class"))
      return "bg-amber-600 text-slate-900";
    if (l.includes("hci") || l.includes("ui"))
      return "bg-purple-600 text-white";
    return "bg-gray-600 text-white";
  };

  const handleCardClick = () => {
    if (project.github) window.open(project.github, "_blank");
  };

  return (
    <>
      {/* --- LIGHTBOX MODAL --- */}
      {isModalOpen &&
        project.image &&
        createPortal(
          <div
            className="z-[100] bg-black/95 backdrop-blur-sm fixed inset-0 flex items-center justify-center overflow-hidden"
            onClick={closeModal}
          >
            <button
              className="absolute z-20 text-white transition top-4 right-4 hover:text-red-400"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <FaTimes size={28} />
            </button>
            <div
              className="absolute z-20 flex gap-2 top-4 left-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-slate-800/80 hover:bg-slate-700"
                onClick={zoomOut}
              >
                <FaSearchMinus size={16} />
              </button>
              <span className="flex items-center justify-center px-3 text-sm text-white rounded-full bg-slate-800/80">
                {Math.round(zoom * 100)}%
              </span>
              <button
                className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-slate-800/80 hover:bg-slate-700"
                onClick={zoomIn}
              >
                <FaSearchPlus size={16} />
              </button>
            </div>
            <div
              className="pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transition: isDragging ? "none" : "transform 0.2s ease-out",
                cursor:
                  zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
              }}
            >
              <Image
                src={project.image}
                alt={`${project.title} Architecture`}
                width={1200}
                height={800}
                className="object-contain select-none pointer-events-none max-w-[85vw] max-h-[80vh] w-auto h-auto"
                quality={100}
                priority
                draggable={false}
              />
            </div>
            <div className="absolute left-0 right-0 z-20 text-center pointer-events-none bottom-4">
              <span className="inline-block px-4 py-2 text-sm text-white border rounded-full bg-black/60 backdrop-blur-md border-white/10">
                {project.title} — Scroll/Pinch to zoom • Drag to pan
              </span>
            </div>
          </div>,
          document.body
        )}

      {/* --- PROJECT CARD (Compact Version) --- */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        // Changed p-6 to p-5 for tighter feel
        className="flex flex-col h-full bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-blue-500/20 hover:shadow-lg cursor-pointer group"
      >
        {/* Media Section */}
        {project.image ? (
          <div
            // Changed h-[220px] to h-[190px] and mb-5 to mb-4
            className="relative w-full h-[190px] mb-4 rounded-lg overflow-hidden border border-slate-700/50 bg-slate-900"
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 600px"
              priority={project.featured}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 opacity-0 bg-black/0 group-hover:bg-black/20 group-hover:opacity-100">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white transition-transform transform translate-y-2 border rounded-full shadow-xl bg-slate-900/80 backdrop-blur border-slate-600 group-hover:translate-y-0">
                <FaExpand /> View Architecture
              </div>
            </div>
          </div>
        ) : project.youtube || project.embed ? (
          <div
            className="mb-4 overflow-hidden rounded-lg aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={project.youtube || project.embed}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : null}

        {/* Header */}
        <div className="mb-auto">
          <h3 className="mb-2 text-lg font-bold leading-tight text-white transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>

          {project.labels && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.labels.map((label) => (
                <span
                  key={label}
                  className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded-full ${getLabelClasses(
                    label
                  )}`}
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Description with bold support */}
          <div
            className={`text-slate-300 text-sm leading-relaxed mb-3 ${
              !expanded ? "line-clamp-3" : "whitespace-pre-line"
            }`}
          >
            {renderDescription(project.description)}
          </div>

          {project.description.length > 150 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((prev) => !prev);
              }}
              className="mb-3 text-xs font-bold tracking-wide text-blue-400 uppercase hover:text-blue-300 focus:outline-none"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}

          {project.contribution && (
            // Reduced padding p-3 to p-2.5
            <div className="p-2.5 mb-4 border-l-2 rounded bg-slate-800/50 border-blue-500/50">
              <p className="text-xs italic leading-relaxed text-slate-400">
                <span className="block mb-0.5 not-italic font-bold text-blue-400">
                  {project.labels?.some((l) => l.includes("Solo"))
                    ? "What I built:"
                    : "My Role:"}
                </span>
                {project.contribution}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div>
          <div className="flex flex-wrap gap-2.5 pt-3 mb-4 border-t border-slate-700/50">
            {project.tech.map((tech) => {
              const iconObject = icons.find((icon) => icon.name === tech);
              return (
                <div key={tech} className="relative group/icon" title={tech}>
                  <div className="text-lg transition-colors text-slate-400 hover:text-white cursor-help">
                    {iconObject?.icon}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="flex flex-wrap gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <ButtonLink
                href={project.github}
                label="GitHub"
                variant="primary"
              />
            )}
            {project.live && (
              <ButtonLink
                href={project.live}
                label="Live App"
                variant="outlined"
              />
            )}
            {project.apiDocs && (
              <ButtonLink
                href={project.apiDocs}
                label="API Docs"
                variant="outlined"
              />
            )}
            {(project.youtube || project.embed) && (
              <ButtonLink
                href={project.youtube || project.embed || ""}
                label="Watch Walkthrough"
                variant="outlined"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
