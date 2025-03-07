"use client";

import { useEffect, useRef, useState } from "react";
import PlanktonFollower from "./creatures/PlanktonFollower";

export default function Landing() {
  const [planktonFollowers, setPlanktonFollowers] = useState([
    { id: 0, spawnPosition: { x: 250, y: 250 } },
  ]);
  const nextId = useRef(1);

  useEffect(() => {
    // repopulate plankton followers and reset environment
    if (!planktonFollowers.length) {
      nextId.current = 0;
      addPlanktonFollower(250, 250);
    }
  }, [planktonFollowers]);

  const addPlanktonFollower = (x: number, y: number) => {
    if (planktonFollowers.length >= 10) return;
    const newPlankton = { id: nextId.current, spawnPosition: { x, y } };

    setPlanktonFollowers((prev) => [...prev, newPlankton]);
    nextId.current++;
  };

  const removePlankton = (id: number) => {
    setPlanktonFollowers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center min-h-screen p-4">
      {planktonFollowers.map((plankton) => (
        <PlanktonFollower
          key={plankton.id}
          id={plankton.id}
          onClick={addPlanktonFollower}
          removePlankton={removePlankton}
          spawnPosition={plankton.spawnPosition}
        />
      ))}
    </section>
  );
}
