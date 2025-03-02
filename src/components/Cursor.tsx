"use client";

import { useEffect } from "react";

// TODO: toggle flashlight on/off, set flashlight strength??
export default function CursorLight() {
  useEffect(() => {
    // do not render on mobile
    if (window.innerWidth <= 768) return;

    const light = document.createElement("div");
    light.style.position = "absolute";
    light.style.borderRadius = "50%";
    light.style.pointerEvents = "none";
    light.style.transition = "transform 0.05s ease-out";
    light.style.transition = "box-shadow 0.1s ease-out";
    light.style.zIndex = "9999";
    document.body.appendChild(light);

    let mouseX = 0;
    let mouseY = 0;

    const updateLightPosition = () => {
      light.style.left = `${mouseX + window.scrollX - 50}px`;
      light.style.top = `${mouseY + window.scrollY - 50}px`;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      updateLightPosition();

      light.style.boxShadow = `0 0 480px 120px rgba(0, 255, 255, 0.3)`;
    };

    const handleScroll = () => {
      updateLightPosition();
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(light);
    };
  }, []);

  return null;
}
