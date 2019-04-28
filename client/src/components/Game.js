import React, {
  useState,
  useRef,
  useMutationEffect,
  useLayoutEffect
} from "react";

const Game = () => {
  let [value, setValue] = useState(0);
  return <>{value}</>;
};

export default Game;
