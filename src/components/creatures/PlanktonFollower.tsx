"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Plankton.module.css";

interface PlanktonFollowerProps {
  onClick: (x: number, y: number) => void;
  spawnPosition: { x: number; y: number };
}

export default function PlanktonFollower({
  onClick,
  spawnPosition,
}: PlanktonFollowerProps) {
  const [renderPosition, setRenderPosition] = useState(spawnPosition);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  // Generate random styles ONCE on mount
  const randomStyles = useMemo(
    () => ({
      inner: {
        borderRadius: generateRandomBorderRadius(),
        width: generateSize(95),
        height: generateSize(95),
      },
      outer: {
        borderRadius: generateRandomBorderRadius(),
        width: generateSize(120),
        height: generateSize(120),
      },
      glow: {
        borderRadius: generateRandomBorderRadius(),
        width: generateSize(170),
        height: generateSize(170),
      },
    }),
    []
  );

  // TODO remove this
  useEffect(() => {
    console.log("PlanktonFollower mounted at", spawnPosition);
  }, []);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = {
        x: event.clientX,
        y: event.clientY + window.scrollY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const maxSpeed = 2;
    const maxForce = 0.08;
    const wanderStrength = 0.3;
    const damping = 0.9;
    const maxX = window.innerWidth * 0.9;

    const animate = () => {
      const toTarget = {
        x: targetRef.current.x - positionRef.current.x,
        y: targetRef.current.y - positionRef.current.y,
      };
      const distance = Math.sqrt(toTarget.x ** 2 + toTarget.y ** 2);

      let desiredVelocity = { x: 0, y: 0 };

      if (distance > 250) {
        const angleToTarget = Math.atan2(toTarget.y, toTarget.x);
        const wanderAngle =
          angleToTarget + (Math.random() - 0.5) * wanderStrength;
        desiredVelocity.x = Math.cos(wanderAngle) * maxSpeed;
        desiredVelocity.y = Math.sin(wanderAngle) * maxSpeed;
      } else {
        const noise =
          Math.sin(
            positionRef.current.x * 0.02 + positionRef.current.y * 0.02
          ) * 0.5;
        desiredVelocity.x = Math.cos(noise) * maxSpeed * 0.5;
        desiredVelocity.y = Math.sin(noise) * maxSpeed * 0.5;
      }

      const steer = {
        x: (desiredVelocity.x - velocityRef.current.x) * maxForce,
        y: (desiredVelocity.y - velocityRef.current.y) * maxForce,
      };

      // Update velocity with damping
      velocityRef.current.x = (velocityRef.current.x + steer.x) * damping;
      velocityRef.current.y = (velocityRef.current.y + steer.y) * damping;

      // Update position with horizontal constraints
      positionRef.current.x = Math.min(
        maxX,
        positionRef.current.x + velocityRef.current.x
      );

      positionRef.current.y += velocityRef.current.y;

      setRenderPosition({
        x: positionRef.current.x,
        y: positionRef.current.y,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleClick = () => {
    onClick(targetRef.current.x, targetRef.current.y);
  };

  return (
    <div
      className={styles.hydrozoan}
      onClick={handleClick}
      style={{
        position: "absolute",
        transform: `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
        transition: "transform",
        left: spawnPosition.x,
        top: spawnPosition.y,
      }}
    >
      <div className={styles.inner} style={randomStyles.inner}></div>
      <div className={styles.outer} style={randomStyles.outer}></div>
      <div className={styles.glow} style={randomStyles.glow}></div>
    </div>
  );
}

const generateRandomBorderRadius = () => {
  return `${40 + Math.random() * 30}% ${40 + Math.random() * 30}% 
          ${40 + Math.random() * 30}% ${40 + Math.random() * 30}%`;
};

const generateSize = (base: number) => `${base + Math.random() * 20}%`;
