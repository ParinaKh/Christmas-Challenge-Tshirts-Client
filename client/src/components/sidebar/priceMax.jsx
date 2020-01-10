import React, { useState } from "react";
import "../../styles/sidebar.css";

export default function PriceMax({ tshirts }) {
  const [priceMax, setPriceMax] = useState();

  function handleChange(evt) {
    const value = evt.target.value;
    if (value === "") setPriceMax("");
    else setPriceMax(Number(value));
  }

  function getTshirts() {
    if (priceMax === "") return null;
    return tshirts.map((tshirt, i) => {
      if (priceMax >= tshirt.price)
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
          // defaultValue="300"
        />
        <br />
        <p>{priceMax} €</p>
      </div>
      <div className="filteredprice-tshirts">{getTshirts()}</div>
    </>
  );
}
