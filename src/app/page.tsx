"use client";
import { Eater } from 'next/font/google';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [rocks, setRocks] = useState(0);
  const [clout, setClout] = useState(0);
  const [phase, setPhase] = useState('');
  const [inventorySize, setInventorySize] = useState(10);

  const eatRock = () => {
    if (rocks > 0) {
      setRocks(rocks - 1);
      setClout(clout + 1);
    }
  };

  const gameZone = (phase: String) => {
      return phase == "collecting_rocks" ? ( 
        <>
          <button onClick={() => setRocks(rocks < inventorySize ? rocks + 1 : rocks)}>Collect Rock</button>
          <button onClick={() => setPhase("eating_rocks")}>Go to rock kitchen</button>
        </>
      ) : (
        <>
          <button onClick={eatRock}>Eat Rock</button>
          <button onClick={() => setPhase("collecting_rocks")}>Go to rock quary</button>
        </>
      );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Inventory: {rocks}/{inventorySize}</div>
      <div>Clout: {clout}</div>
      {gameZone(phase)}
    </main>
  )
}
