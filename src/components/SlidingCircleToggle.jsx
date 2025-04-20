// components/SlidingCircleToggle.js
import React from "react";
import "./SlidingCircleToggle.css";

const SlidingCircleToggle = ({ checked, onChange }) => {
  return (
    <div
      className={`toggle-container ${checked ? "right" : "left"}`}
      onClick={() => onChange(!checked)}
    >
      <div className="toggle-circle" />
    </div>
  );
};

export default SlidingCircleToggle;
