"use client";

import { useEffect, useRef, useState } from "react";
import PlanktonFollower from "./creatures/PlanktonFollower";

export default function Landing() {
  const [planktonFollowers, setPlanktonFollowers] = useState([
    { id: 0, spawnPosition: { x: 300, y: 300 } },
  ]);
  const nextId = useRef(1);

  useEffect(() => {
    // repopulate plankton followers and reset environment
    if (!planktonFollowers.length) {
      nextId.current = 0;
      addPlanktonFollower(300, 300);
    }
  }, [planktonFollowers]);

  const addPlanktonFollower = (x: number, y: number) => {
    const newPlankton = { id: nextId.current, spawnPosition: { x, y } };

    setPlanktonFollowers((prev) => [...prev, newPlankton]);
    nextId.current++;
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
