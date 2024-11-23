"use client";
import { Eater } from 'next/font/google';
import Image from 'next/image'
import { useState } from 'react';
import { getRock, Rock } from './rock';

export default function Home() {
  const [rocks, setRocks] = useState<Rock[]>([]);
  const [clout, setClout] = useState(0);
  const [phase, setPhase] = useState('');
  const [inventorySize, setInventorySize] = useState(10);

  const collectRock = () => {
    if(rocks.length < inventorySize) {
      setRocks([...rocks, getRock()]);
    }
  };

  const eatRock = () => {
    if (rocks.length > 0) {
      const [rock, ...restOfRocks] = rocks;
      setRocks(restOfRocks);
      setClout(clout + (rock.weight * rock.luster));
    }
  };

  const gameZone = (phase: String) => {
      return phase == "collecting_rocks" ? ( 
        <>
          <button onClick={() => collectRock()}>Collect Rock</button>
          <button onClick={() => setPhase("eating_rocks")}>Go to rock kitchen</button>
        </>
      ) : (
        <>
          <button onClick={eatRock}>Eat Rock</button>
          <button onClick={() => setPhase("collecting_rocks")}>Go to rock quary</button>
        </>
      );
  };

  const inventory = (rocks: Rock[]) => {
    return (
      <ul>{rocks.map((rock: Rock) => <li>Name: {rock.name}, Weight: {rock.weight}, Luster: {rock.luster}</li>)}</ul>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Clout: {clout}</div>
      {gameZone(phase)}
      <div>{inventory(rocks)}</div>
      <div>Inventory: {rocks.length}/{inventorySize}</div>
    </main>
  )
}
