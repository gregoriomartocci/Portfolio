import React from "react";
import "./Button.css";

function Button({ message, color }) {
  return <div className="button">{message}</div>;
}

export default Button;
