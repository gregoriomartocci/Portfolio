import React from "react";
import "./Header.css";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h2 className="header-title">{title}</h2>
      <span className="header-subtitle">{subtitle}</span>
    </div>
  );
}

export default Header;
