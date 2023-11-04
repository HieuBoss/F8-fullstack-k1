import React, { useContext } from "react";
import { AppContext } from "../App01";
import ComponentC from "./ComponentC";
export default function ComponentB() {
  const context = useContext(AppContext);
  //   console.log(context);
  return (
    <div>
      <h1>ComponentB</h1>
      <h2>{context.data.title}</h2>
      <ComponentC />
    </div>
  );
}
