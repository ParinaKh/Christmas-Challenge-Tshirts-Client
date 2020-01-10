import React, { useState } from "react";
import "../../styles/sidebar.css";

export default function Brands({ tshirts }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

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

  function getBrandTshirts() {
    console.log(selectedBrands);
    // if (selectedBrands === "") return null;
    return tshirts.map((tshirt, i) => {
      if (selectedBrands.includes(tshirt.brand))
        return (
          <div className="one-tshirt" key={i}>
            <p id="tshirt-title">{tshirt.name}</p>
            <img id="tshirt-image" src={tshirt.tshirtImage}></img>
            <p id="tshirt-price">{tshirt.price}€</p>
          </div>
        );
    });
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
      <div className="filteredbrand-tshirts">{getBrandTshirts()}</div>
    </div>
  );
}
