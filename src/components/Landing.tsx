"use client";

import { useState } from "react";
import PlanktonFollower from "./creatures/PlanktonFollower";

export default function Landing() {
  // FIXME: bug where new plankton with x, y using distance relative to spawn point instead of absolute position
  const [planktonFollowers, setPlanktonFollowers] = useState([
    { id: 0, spawnPosition: { x: 0, y: 0 } },
  ]);

  const addPlanktonFollower = (x: number, y: number) => {
    console.log("spawn plankton");

    setPlanktonFollowers((prev) => [
      ...prev,
      { id: prev.length, spawnPosition: { x, y } },
    ]);
  };

  return (
    <section className="section-top flex flex-col items-center justify-center min-h-screen p-4">
      {planktonFollowers.map((plankton) => (
        <PlanktonFollower
          key={plankton.id}
          onClick={addPlanktonFollower}
          spawnPosition={plankton.spawnPosition}
        />
      ))}
    </section>
  );
}
