import React, { useState } from "react";
import Canvas from "./Canvas";
import Inventory from "./Inventory";
import GameAreaStylings from "./styles/GameAreaStylings";

const Game = () => {
  let [inventory, setInventory] = useState({
    a: [],
    b: [],
    c: [],
    d: [],
    e: []
  });
  function updateInventory(inventory) {
    setInventory(inventory);
  }
  return (
    <GameAreaStylings>
      <Canvas />
      <Inventory inventory={inventory} updateInventory={updateInventory} />
    </GameAreaStylings>
  );
};

export default Game;
