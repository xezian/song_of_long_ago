import styled from "styled-components";

const GameAreaStylings = styled.div`
  background-color: #98b4d4;
  height: 100%;
  div.canvas {
    width: 100%;
    height: 100%;
    canvas {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      margin: auto;
      border: 1px solid #00539c;
    }
    div.controls {
      position: absolute;
      top: 0;
      left: 20;
    }
  }
  div.inventory {
    position: absolute;
    bottom: 0;
    left: 20;
  }
  button {
    height: 3em;
    min-width: 6em;
    margin: 1em;
    font-weight: bold;
    font-size: 0.5em;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    border: 1px solid white;
    background-color: #00539c;
  }
  button:hover {
    color: black;
    background-color: #00baff;
  }
  button:focus {
    border: 1px solid #00baff;
    outline: 0;
  }
  button:active {
    background-color: #1f1f1f;
    color: white;
  }
`;
export default GameAreaStylings;
