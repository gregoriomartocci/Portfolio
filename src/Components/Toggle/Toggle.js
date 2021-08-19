import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Toggle.css";

function Toggle({ theme, toggleTheme }) {
  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <i className="moon-icon">
          <FiMoon />
        </i>
      ) : (
        <i className="sun-icon">
          <FiSun />
        </i>
      )}
    </div>
  );
}

export default Toggle;
