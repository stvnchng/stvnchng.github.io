"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Plankton.module.css";

interface PlanktonFollowerProps {
  id: number;
  onClick: (x: number, y: number) => void;
  removePlankton: (id: number) => void;
  spawnPosition: { x: number; y: number };
}

export default function PlanktonFollower({
  id,
  onClick,
  removePlankton,
  spawnPosition,
}: PlanktonFollowerProps) {
  const [renderPosition, setRenderPosition] = useState(spawnPosition);
  const [opacity, setOpacity] = useState(1);
  const positionRef = useRef(spawnPosition);
  const targetRef = useRef(spawnPosition);
  const velocityRef = useRef({ x: 0, y: 0 });

  // Generate random styles ONCE on mount
  const randomStyles = useMemo(() => generateRandomStyles(id), [id]);

  // TODO remove this
  useEffect(() => {
    const lifespan = 30000 / (id + 1);
    console.log("Plankton spawned at", spawnPosition, "ttl:", lifespan);

    const fadeTimeout = setTimeout(() => setOpacity(0), lifespan - 1000);
    const lifespanTimeout = setTimeout(() => removePlankton(id), lifespan);

    return () => {
      console.log("RIP Plankton", id);
      clearTimeout(fadeTimeout);
      clearTimeout(lifespanTimeout);
    };
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

      const desiredVelocity = { x: 0, y: 0 };

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
      // console.log(
      //   `Plankton ${id} at ${positionRef.current.x}, ${positionRef.current.y}`
      // );

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
        top: 0,
        left: 0,
        transform: `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
        transition: "transform, opacity 1s ease-out",
        opacity: `${opacity}`,
      }}
    >
      <div className={styles.inner} style={randomStyles.inner}></div>
      <div className={styles.outer} style={randomStyles.outer}></div>
      <div className={styles.glow} style={randomStyles.glow}></div>
    </div>
  );
}

const detRnd = (seed: number, min: number, factor: number) => {
  const x = Math.sin(seed) * 10000;
  return min + (x - Math.floor(x)) * factor;
};

const generateRandomStyles = (id: number) => {
  return {
    inner: {
      borderRadius: `${detRnd(id, 40, 30)}% ${detRnd(id + 1, 40, 30)}% 
                    ${detRnd(id + 2, 40, 30)}% ${detRnd(id + 3, 40, 30)}%`,
      width: `${detRnd(id + 4, 95, 20)}%`,
      height: `${detRnd(id + 5, 95, 20)}%`,
    },
    outer: {
      borderRadius: `${detRnd(id + 6, 40, 30)}% ${detRnd(id + 7, 40, 30)}% 
                    ${detRnd(id + 8, 40, 30)}% ${detRnd(id + 9, 40, 30)}%`,
      width: `${detRnd(id + 10, 120, 20)}%`,
      height: `${detRnd(id + 11, 120, 20)}%`,
    },
    glow: {
      borderRadius: `${detRnd(id + 12, 40, 30)}% ${detRnd(id + 13, 40, 30)}% 
                    ${detRnd(id + 14, 40, 30)}% ${detRnd(id + 15, 40, 30)}%`,
      width: `${detRnd(id + 16, 170, 20)}%`,
      height: `${detRnd(id + 17, 170, 20)}%`,
    },
  };
};
