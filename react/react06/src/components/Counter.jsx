import React, { useState } from "react";
import Content from "./Content";
import { color } from "../libs/color";
const Counter = (title, color) => {
  const [Count, setCounter] = useState(0);
  let a;
  if (Count < 10) {
    a = Count;
  }
  console.log(title);
  console.log(color);
  return (
    <div>
      <h1>Count: {Count}</h1>

      <button
        onClick={() => {
          setCounter(Count + 1);
        }}
      >
        +
      </button>
      <Content count={a} />
    </div>
  );
};
export default color(Counter);
