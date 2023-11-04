import React, { useContext } from "react";
import { AppContext } from "../App01";

export default function ComponentC() {
  const context = useContext(AppContext);

  return (
    <div>
      <h1>ComponentC</h1>
      <button
        onClick={() => {
          context.handleUpdateTitle("Hello");
        }}
      >
        Click me
      </button>
    </div>
  );
}
