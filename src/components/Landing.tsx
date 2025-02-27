"use client";

import { useState } from "react";
import PlanktonFollower from "./creatures/PlanktonFollower";

export default function Landing() {
  const [planktonFollowers, setPlanktonFollowers] = useState([
    { id: 0, spawnPosition: { x: 0, y: 0 } },
  ]);
  const [nextId, setNextId] = useState(1);

  const addPlanktonFollower = (x: number, y: number) => {
    const newPlankton = { id: nextId, spawnPosition: { x, y } };
    setPlanktonFollowers((prev) => [...prev, newPlankton]);
    setNextId(nextId + 1);
  };

  const removePlankton = (id: number) => {
    setPlanktonFollowers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <section className="section-top flex flex-col items-center justify-center min-h-screen p-4">
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
