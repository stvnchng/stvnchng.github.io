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
  const lifespan = useRef(50000 / (id + 1));
  const positionRef = useRef(spawnPosition);
  const targetRef = useRef(spawnPosition);
  const velocityRef = useRef({ x: 0, y: 0 });

  // Generate random styles ONCE on mount
  const randomStyles = useMemo(() => generateRandomStyles(id), [id]);

  useEffect(() => {
    // console.log("Plankton spawned at", spawnPosition, "ttl:", lifespan);
    const checkLifespan = setInterval(() => {
      if (lifespan.current <= 0) {
        removePlankton(id);
        return;
      } else if (lifespan.current <= 1000) {
        setOpacity(0);
      }
      lifespan.current -= 1000;
    }, 1000);

    return () => {
      // console.log("RIP Plankton", id);
      clearInterval(checkLifespan);
    };
  }, [id, removePlankton]);

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
    const maxSpeed = Math.E;
    const maxForce = 0.06;
    const wanderStrength = 0.3;
    const damping = 0.9;
    const maxX = window.innerWidth;

    const animate = () => {
      const toTarget = {
        x: targetRef.current.x - positionRef.current.x,
        y: targetRef.current.y - positionRef.current.y,
      };
      const distance = Math.sqrt(toTarget.x ** 2 + toTarget.y ** 2);

      const desiredVelocity = { x: 0, y: 0 };

      const angleToTarget = Math.atan2(toTarget.y, toTarget.x);
      if (distance > 180) {
        const wanderAngle = angleToTarget + Math.random() * wanderStrength;
        desiredVelocity.x =
          Math.cos(wanderAngle) * maxSpeed + id * 0.1 * (-1) ** id;
        desiredVelocity.y =
          Math.sin(wanderAngle) * maxSpeed + id * 0.1 * (-1) ** id;
      } else {
        // "heal" the plankton
        if (distance < 150) {
          lifespan.current += 10;
        }

        const oppositeAngle = angleToTarget + Math.PI / 2 + Math.random();
        desiredVelocity.x =
          Math.cos(oppositeAngle) * maxSpeed + id * 0.1 * (-1) ** id;
        desiredVelocity.y =
          Math.sin(oppositeAngle) * maxSpeed + id * 0.1 * (-1) ** id;
      }

      const steer = {
        x: (desiredVelocity.x - velocityRef.current.x) * maxForce,
        y: (desiredVelocity.y - velocityRef.current.y) * maxForce,
      };

      velocityRef.current.x = (velocityRef.current.x + steer.x) * damping;
      velocityRef.current.y = (velocityRef.current.y + steer.y) * damping;

      positionRef.current.x += velocityRef.current.x;

      if (positionRef.current.x > maxX) {
        positionRef.current.x = maxX;
        velocityRef.current.x *= -1;
      }

      if (positionRef.current.y < 0) {
        positionRef.current.y = 0;
        velocityRef.current.y *= -1;
      } else if (
        positionRef.current.y >
        document.documentElement.scrollHeight - window.innerHeight / 6
      ) {
        positionRef.current.y =
          document.documentElement.scrollHeight - window.innerHeight / 6;
        velocityRef.current.y *= -1;
      } else {
        positionRef.current.y += velocityRef.current.y;
      }

      setRenderPosition({
        x: positionRef.current.x,
        y: positionRef.current.y,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [id]);

  const handleClick = () => {
    onClick(targetRef.current.x, targetRef.current.y);
  };

  return (
    <div
      className="absolute w-24 h-24 flex items-center justify-center"
      onClick={handleClick}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
        transition: "transform, opacity 1s ease-out",
        opacity: `${opacity}`,
        pointerEvents: lifespan.current <= 1000 ? "none" : "auto",
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
  const innerSize = 40;
  const outerSize = 65;
  const glowSize = 90;
  return {
    inner: {
      borderRadius: `${detRnd(id, 40, 30)}% ${detRnd(id + 1, 40, 30)}% 
                    ${detRnd(id + 2, 40, 30)}% ${detRnd(id + 3, 40, 30)}%`,
      width: `${detRnd(id + 4, innerSize, 15)}%`,
      height: `${detRnd(id + 5, innerSize, 15)}%`,
    },
    outer: {
      borderRadius: `${detRnd(id + 6, 40, 30)}% ${detRnd(id + 7, 40, 30)}% 
                    ${detRnd(id + 8, 40, 30)}% ${detRnd(id + 9, 40, 30)}%`,
      width: `${detRnd(id + 10, outerSize, 15)}%`,
      height: `${detRnd(id + 11, outerSize, 15)}%`,
    },
    glow: {
      borderRadius: `${detRnd(id + 12, 40, 30)}% ${detRnd(id + 13, 40, 30)}% 
                    ${detRnd(id + 14, 40, 30)}% ${detRnd(id + 15, 40, 30)}%`,
      boxShadow: `
        0 0 ${detRnd(id + 6, 30, 40)}px rgba(0, 255, 255, 0.3),
        0 0 ${detRnd(id + 7, 60, 40)}px rgba(0, 255, 255, 0.2),
        0 0 ${detRnd(id + 8, 100, 50)}px rgba(0, 255, 255, 0.1)
      `,
      width: `${detRnd(id + 16, glowSize, 15)}%`,
      height: `${detRnd(id + 17, glowSize, 15)}%`,
    },
  };
};
