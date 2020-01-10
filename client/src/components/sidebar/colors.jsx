import React, { useState } from "react";

export default function Colors({ tshirts }) {
  const [getTshirts, setGetTshirts] = useState();
  const [selectedColor, setSelectedColor] = useState([]);

  // function handleClick(evt) {
  //   const color = evt.target.value;
  //   console.log(clickedColor);
  //   const copyColors

  //   if (clickedColor) {
  //     setSelectedColor([...selectedColor, color]);
  //   }
  //   if ({
  //     setSelectedColor(selectedColor.filter(c => c !== clickedColor));
  //   }
  // }

  // function addColor(color) {
  //     selectedColor.push(color);
  //     document.getElementById("color").value = selectedColor.join('');
  // }

  const handleClick = e => {
    const clickedColor = e.target.name;
    console.log(clickedColor);
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

  function getColoredTshirts() {
    console.log(selectedColor);

    return tshirts.map((tshirt, i) => {
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
      <div>
        <p className="filter-title">Colors</p>
        <div className="color-container">
          <div
            id="color"
            style={{ background: "black" }}
            name="black"
            value="black"
            key={tshirts.color}
            onClick={handleClick}
          ></div>
          <div
            id="color"
            style={{ background: "red" }}
            name="red"
            value="red"
            key={tshirts.color}
            onClick={handleClick}
          />
          <div
            id="color"
            style={{ background: "blue" }}
            name="blue"
            value="blue"
            key={tshirts.color}
            onClick={handleClick}
          ></div>
          <div
            id="color"
            style={{ background: "white" }}
            name="white"
            value="white"
            key={tshirts.color}
            onClick={handleClick}
          ></div>
          <div
            id="color"
            style={{ background: "green" }}
            name="green"
            value="green"
            key={tshirts.color}
            onClick={handleClick}
          ></div>
          <div
            id="color"
            style={{ background: "purple" }}
            name="purple"
            value="purple"
            key={tshirts.color}
            onClick={handleClick}
          ></div>
        </div>
        <div className="filteredcolored-tshirts">{getColoredTshirts()}</div>
      </div>
    </>
  );
}
