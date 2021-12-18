import { useState, useEffect } from "react";

function useKeyPresses(keychain) {
  // State for keeping track of whether key is pressed
  const [keysUp, setKeysUp] = useState([]);
  const [keysDown, setKeysDown] = useState([]);

  // If pressed key is new  key then set to true
  const downHandler = ({ key }) => {
    if (keychain.includes(key)) {
      if (!keysDown.includes(key)) {
        const newKeysUp = [...keysUp];
        const newKeysDown = [...keysDown];
        if (keysUp.includes(key)) {
          newKeysUp[newKeysUp.indexOf(key)] = newKeysUp[newKeysUp.length - 1];
          newKeysUp.pop();
          setKeysUp(newKeysUp);
        }
        newKeysDown.push(key);
        setKeysDown(newKeysDown);
      }
    }
  };

  // If released key is new key then set to false
  const upHandler = ({ key }) => {
    if (keychain.includes(key)) {
      if (!keysUp.includes(key)) {
        const newKeysUp = [...keysUp];
        const newKeysDown = [...keysDown];
        if (keysDown.includes(key)) {
          newKeysDown[newKeysDown.indexOf(key)] =
            newKeysDown[newKeysDown.length - 1];
          newKeysDown.pop();
          setKeysDown(newKeysDown);
        }
        newKeysUp.push(key);
        setKeysUp(newKeysUp);
      }
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return [keysUp, keysDown];
}
export default useKeyPresses;
