"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 120 },
          size: { value: 2 },
          color: { value: "#ffffff" },
          opacity: { value: 0.1 },
          move: { enable: true, speed: 0.3 },
          links: {
            enable: true,
            color: "#888888",
            distance: 130,
            opacity: 0.05,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        background: {
          color: { value: "#0f172a" },
          image: "linear-gradient(135deg, #0f172a, #1e293b)",
        },
      }}
    />
  );
}
