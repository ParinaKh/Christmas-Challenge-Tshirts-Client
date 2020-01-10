import React, { useState } from "react";
import "../../styles/sidebar.css";

export default function PriceMax({ tshirts, priceMax, setPriceMax }) {
  function handleChange(evt) {
    const value = evt.target.value;
    if (value === "") setPriceMax("");
    else setPriceMax(Number(value));
  }

  return (
    <>
      <div className="priceMax">
        <p className="filter-title">Price Max</p>
        <input
          type="range"
          value={priceMax}
          onChange={handleChange}
          min={0}
          max="300"
          step="5"
        />
        <br />
        <p>{priceMax} €</p>
      </div>
    </>
  );
}
