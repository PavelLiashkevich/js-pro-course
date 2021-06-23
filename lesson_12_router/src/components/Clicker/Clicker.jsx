import "./Clicker.css";
import React from "react";
import { useState } from "react";

export const Clicker = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <h1>Clicker</h1>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button className="button buttonInc" onClick={inc}>
            +
          </button>
          <button className="button buttonReset" onClick={reset}>
            Reset
          </button>
          <button className="button buttonDec" onClick={dec}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
