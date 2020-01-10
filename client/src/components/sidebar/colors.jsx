import React, { useState } from "react";

export default function Colors({ tshirts, selectedColor, setSelectedColor }) {
  const handleClick = e => {
    console.log(selectedColor);
    const copyColors = [...selectedColor];
    if (e.target.className.includes("selected")) {
      e.target.classList.remove("selected");
      copyColors.splice(copyColors.indexOf(e.target.value), 1);
    } else {
      e.target.classList.add("selected");
      copyColors.push(e.target.value);
    }
    setSelectedColor(copyColors);
  };

  return (
    <>
      <div>
        <p className="filter-title">Colors</p>
        <div className="color-container">
          <input
            id="color"
            style={{ background: "black", color: "black" }}
            name="black"
            className=""
            value="black"
            key={tshirts.color}
            onClick={handleClick}
          />
          <input
            id="color"
            style={{ background: "red", color: "red" }}
            name="red"
            value="red"
            key={tshirts.color}
            onClick={handleClick}
          />
          <input
            id="color"
            style={{ background: "blue", color: "blue" }}
            name="blue"
            value="blue"
            key={tshirts.color}
            onClick={handleClick}
          />
          <input
            id="color"
            style={{ background: "white", color: "white" }}
            name="white"
            value="white"
            key={tshirts.color}
            onClick={handleClick}
          />
          <input
            id="color"
            style={{ background: "green", color: "green" }}
            name="green"
            value="green"
            key={tshirts.color}
            onClick={handleClick}
          />
          <input
            id="color"
            style={{ background: "purple", color: "purple" }}
            name="purple"
            value="purple"
            key={tshirts.color}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
