import React from "react";
import Header from "../Header/Header";
import "./Journey.css";
import Tabs from "./Tabs/Tabs";

function Journey() {
  return (
    <div id="journey" className="journey">
      <Header title="Qualification" subtitle="my personal journey" />
      <div className="journey-content">
        <Tabs />
      </div>
    </div>
  );
}

export default Journey;
