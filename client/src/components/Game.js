import React, { useState } from "react";
import Canvas from "./Canvas";
import Inventory from "./Inventory";
import GameAreaStylings from "./styles/GameAreaStylings";

const Game = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [inventory, setInventory] = useState({
    a: [],
    b: [],
    c: [],
    d: [],
    e: []
  });
  let [open, setOpen] = useState(false);
  return (
    <GameAreaStylings>
      <Canvas position={position} />
      <Inventory open={open} inventory={inventory} />
    </GameAreaStylings>
  );
};

export default Game;
