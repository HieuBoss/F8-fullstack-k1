import React from "react";
import logo from "../../assets/img/logo.jpg";

export default function Logo() {
  return (
    <div>
      <a>
        <img style={{ width: "140px" }} src={logo} alt="logo" />
      </a>
    </div>
  );
}
