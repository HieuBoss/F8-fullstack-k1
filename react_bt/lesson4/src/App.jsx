import React from "react";
import { login } from "./Service/authService";

export default function App() {
  const value = "dhchsgs12@gmail.com";
  login(value).then((test) => {
    console.log(test);
  });

  return (
    <>
      <div>App</div>
    </>
  );
}
