import React, { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export const AppContext = React.createContext();
// console.log(AppContext);

export default function App01() {
  const [title, setTitle] = useState("");
  const data = {
    name: "Duy Hiếu",
    email: "duyhieu06112003@gmail.com",
    title,
  };

  const handleUpdateTitle = (value) => {
    setTitle(value);
  };
  return (
    <AppContext.Provider value={{ data, handleUpdateTitle }}>
      <ComponentA />
      <ComponentB />
    </AppContext.Provider>
  );
}
