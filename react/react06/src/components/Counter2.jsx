import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
/*
-->useEffect

1. state thay đổi
2. re-render component
3. UI update
4. callback trong useEffect chạy

-->useLayoutEffect

1. state thay đổi
2. re-render component
3. callback trong useLayoutEffect chạy
4. đợi callback chạy xong -> UI update
*/
