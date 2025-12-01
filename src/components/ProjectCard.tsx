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
  architecture?: boolean;
  apiDocs?: string;
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
      if (newZoom <= 1) {
        setPan({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  // Handle drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle modal keyboard controls and body scroll lock
  useEffect(() => {
    if (!isModalOpen) return;

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Zoom controls
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
      // Close on any other key
      e.preventDefault();
      closeModal();
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isModalOpen]);

  // Map common label text to Tailwind color classes
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
    if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <>
      {/* --- LIGHTBOX MODAL --- */}
      {isModalOpen &&
        project.image &&
        createPortal(
          <div
            className="z-[100] bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Close Button */}
            <button
              className="z-20 text-white transition hover:text-red-400"
              style={{ position: "fixed", top: "1rem", right: "1rem" }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close"
            >
              <FaTimes size={28} />
            </button>

            {/* Zoom Controls */}
            <div
              className="z-20 flex gap-2"
              style={{ position: "fixed", top: "1rem", left: "1rem" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-slate-800/80 hover:bg-slate-700"
                onClick={zoomOut}
                aria-label="Zoom out"
              >
                <FaSearchMinus size={16} />
              </button>
              <span className="flex items-center justify-center px-3 text-sm text-white rounded-full bg-slate-800/80">
                {Math.round(zoom * 100)}%
              </span>
              <button
                className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-slate-800/80 hover:bg-slate-700"
                onClick={zoomIn}
                aria-label="Zoom in"
              >
                <FaSearchPlus size={16} />
              </button>
            </div>

            {/* Centered Image */}
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
                className="object-contain select-none"
                style={{
                  maxWidth: "85vw",
                  maxHeight: "80vh",
                  width: "auto",
                  height: "auto",
                  pointerEvents: "none",
                }}
                quality={100}
                priority
                draggable={false}
              />
            </div>

            {/* Caption */}
            <div
              className="z-20 text-center pointer-events-none"
              style={{ position: "fixed", bottom: "1rem", left: 0, right: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm text-white border rounded-full bg-black/60 backdrop-blur-md border-white/10">
                {project.title} — Scroll to zoom
                {zoom > 1 ? " • Drag to pan" : ""} • Click outside to close
              </span>
            </div>
          </div>,
          document.body
        )}

      {/* --- PROJECT CARD --- */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        className="flex flex-col h-full bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-blue-500/20 hover:shadow-lg cursor-pointer group"
      >
        {/* Media Section: Priority Image -> YouTube -> Embed */}
        {project.image ? (
          <div
            className="relative w-full h-[220px] mb-5 rounded-lg overflow-hidden border border-slate-700/50 bg-slate-900"
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
            {/* Hover Overlay with "Expand" Hint */}
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 opacity-0 bg-black/0 group-hover:bg-black/20 group-hover:opacity-100">
              <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white transition-transform transform translate-y-2 border rounded-full shadow-xl bg-slate-900/80 backdrop-blur border-slate-600 group-hover:translate-y-0">
                <FaExpand />{" "}
                {project.architecture ? "View Architecture" : "View Image"}
              </div>
            </div>
          </div>
        ) : project.youtube ? (
          <div
            className="mb-5 overflow-hidden rounded-lg aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={project.youtube}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : project.embed ? (
          <div
            className="mb-5 overflow-hidden rounded-lg aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={project.embed}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        ) : null}

        {/* Header */}
        <div className="mb-auto">
          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>

          {/* Labels */}
          {project.labels && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.labels.map((label) => (
                <span
                  key={label}
                  className={`inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full ${getLabelClasses(
                    label
                  )}`}
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          <p
            className={`text-slate-300 text-sm leading-relaxed mb-4 ${
              !expanded ? "line-clamp-3" : ""
            }`}
          >
            {project.description}
          </p>

          {/* Read More Toggle */}
          {project.description.length > 150 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((prev) => !prev);
              }}
              className="mb-4 text-xs font-bold tracking-wide text-blue-400 uppercase hover:text-blue-300 focus:outline-none"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}

          {/* Contribution */}
          {project.contribution && (
            <div className="p-3 mb-5 border-l-2 rounded bg-slate-800/50 border-blue-500/50">
              <p className="text-xs italic leading-relaxed text-slate-400">
                <span className="block mb-1 not-italic font-bold text-blue-400">
                  {project.labels?.some((l) => l.includes("Solo"))
                    ? "What I built:"
                    : "My Role:"}
                </span>
                {project.contribution}
              </p>
            </div>
          )}
        </div>

        {/* Footer: Tech & Links */}
        <div>
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-3 pt-4 mb-6 border-t border-slate-700/50">
            {project.tech.map((tech) => {
              const iconObject = icons.find((icon) => icon.name === tech);
              return (
                <div key={tech} className="relative group/icon" title={tech}>
                  <div className="text-xl transition-colors text-slate-400 hover:text-white cursor-help">
                    {iconObject?.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* UPDATED Action Buttons */}
          <div
            className="flex flex-wrap gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              // CHANGED: Primary variant for GitHub
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
            {(project.youtube || project.embed) && (
              <ButtonLink
                href={project.youtube || project.embed || ""}
                label="Watch Walkthrough"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
