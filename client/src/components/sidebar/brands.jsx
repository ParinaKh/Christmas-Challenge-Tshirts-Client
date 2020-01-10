import React, { useState } from "react";
import "../../styles/sidebar.css";

export default function Brands({ tshirts, selectedBrands, setSelectedBrands }) {
  function handleChecked(evt) {
    const isChecked = evt.target.checked;
    const brandName = evt.target.value;
    console.log(isChecked, brandName);

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brandName));
    }
  }

  return (
    <div className="brand-container">
      <p className="filter-title">Brands</p>
      <div id="brand">
        <label for="brand">Ami Paris</label>
        <input
          id="checkbox"
          type="checkbox"
          value="Ami Paris"
          onChange={handleChecked}
        />
      </div>
      <div id="brand">
        <label for="brand">A.P.C</label>
        <input
          id="checkbox"
          type="checkbox"
          value="A.P.C"
          onChange={handleChecked}
        />
      </div>
      <div id="brand">
        {" "}
        <label for="brand">Balmain</label>
        <input
          id="checkbox"
          type="checkbox"
          value="Balmain"
          onChange={handleChecked}
        />
      </div>
      <div id="brand">
        <label for="brand">Comme des Garcons</label>
        <input
          id="checkbox"
          type="checkbox"
          value="Comme des Garcons"
          onChange={handleChecked}
        />
      </div>
      <div id="brand">
        <label for="brand">Off-White</label>
        <input
          id="checkbox"
          type="checkbox"
          value="Off-White"
          onChange={handleChecked}
        />
      </div>
      <div id="brand">
        <label for="brand">Saint Laurent</label>
        <input
          id="checkbox"
          type="checkbox"
          value="Saint Laurent"
          onChange={handleChecked}
        />
      </div>
    </div>
  );
}
