// import React from "react";
import { useState, useEffect } from "react";
let a = 10;
export default function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    setCount((count) => count + 1);
    a++;
  };

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("Unmount 1");
    };
  }, []);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
