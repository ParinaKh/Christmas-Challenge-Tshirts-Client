import React from "react";
import "../../styles/sidebar.css";

export default function resetButton({ tshirts, handleReset }) {
  return (
    <div>
      <div className="reset-button" onClick={handleReset}>
        Reset filters
      </div>
    </div>
  );
}
