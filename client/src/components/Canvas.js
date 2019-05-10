import React, { useRef, useEffect, useState } from "react";
import useKeyPresses from "./Controller.js";
/* 
Canvas with hooks start from Koen van Gilst's tutorial: https://itnext.io/using-react-hooks-with-canvas-f188d6e416c0
Repo here: https://github.com/vnglst/react-hooks-canvas
 */
const STAR_PERSON =
  "M8 54 L34 38 L50 58 L40 36 L40 30 L56 16 L40 26 L40 10 L34 8 L30 10 L30 24 L12 20 L28 28 L28 36 Z";

const STAR_PATH = new Path2D(STAR_PERSON);
const SCALE = 0.5;
const OFFSET = 40;

function draw(ctx, location) {
  ctx.fillStyle = "#9B1B30";
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.fill(STAR_PATH);
  ctx.restore();
}

// this is from 3rd answer by Ryan Artecona on https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element

function relMouseCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  } while ((currentElement = currentElement.offsetParent));

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;

  return { x: canvasX, y: canvasY };
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

const Canvas = () => {
  const [location, setLocation] = useState({});
  const canvasRef = useRef(null);
  const presses = useKeyPresses(["a", "w", "s", "d"]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let x = location.x;
    let y = location.y;
    let speed = 0.077;
    ctx.fillStyle = "#FF6F61";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (!presses[0].includes("w") && presses[1].includes("w")) {
      x = location.x;
      y = location.y - speed <= 0 ? location.y : location.y - speed;
    }
    if (!presses[0].includes("d") && presses[1].includes("d")) {
      x = location.x + speed >= canvas.width ? location.x : location.x + speed;
      y = location.y;
    }
    if (!presses[0].includes("a") && presses[1].includes("a")) {
      x = location.x - speed <= 0 ? location.x : location.x - speed;
      y = location.y;
    }
    if (!presses[0].includes("s") && presses[1].includes("s")) {
      x = location.x;
      y = location.y + speed >= canvas.height ? location.y : location.y + speed;
    }
    const newLocation = { x, y };
    setLocation(newLocation);
    draw(ctx, location);
  }, [presses, location]);

  function handleCanvasClick(e) {
    const canvas = canvasRef.current;
    const coords = canvas.relMouseCoords(e);
    const canvasX = coords.x;
    const canvasY = coords.y;
    const newLocation = { x: canvasX, y: canvasY };
    setLocation(newLocation);
  }

  return (
    <div className="canvas">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        onClick={handleCanvasClick}
      />
    </div>
  );
};

export default Canvas;
