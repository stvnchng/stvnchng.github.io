"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function MarineSnow() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: false,
              },
            },
            modes: {
              repulse: {
                distance: 69,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              enable: true,
              outModes: {
                default: "none",
              },
              random: true,
              speed: { min: 0.2, max: 0.6 },
              straight: false,
              angle: { offset: 50, value: 69 },
            },
            number: {
              value: 69,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "polygon"],
            },
            angle: { value: 90, offset: 45 },
            size: {
              value: { min: 1.5, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
