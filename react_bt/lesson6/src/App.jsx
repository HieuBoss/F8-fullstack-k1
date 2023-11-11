import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./home/HomePage";
import "./index.css";
import { FaSun, FaMoon } from "react-icons/fa";
import Toast from "./components/toast/Toast";
export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div
      className={` ${isDarkMode ? "dark-mode" : "light-mode"}`}
      style={{ height: "100vh" }}
    >
      <div
        className="container shadow p-4 rounded "
        style={{ color: "#319795" }}
      >
        <Toast />
        <button>
          <label>
            <input type="checkbox" onChange={toggleTheme} className="d-none" />
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </label>
        </button>
        <HomePage />
      </div>
    </div>
  );
}
