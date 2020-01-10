import React, { useState, useEffect } from "react";
import "../../styles/sidebar.css";
import axios from "axios";

import ResetButton from "./resetButton";
import PriceMax from "./priceMax";
import Brands from "./brands";
import Colors from "./colors";

export default function Sidebar({ props }) {
  const [tshirts, setTshirts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [priceMax, setPriceMax] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tshirts")

      .then(apiRes => {
        setTshirts(tshirt => [...tshirt, ...apiRes.data]);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  function handleReset() {
    return <div>No filter yet</div>;
  }

  function getfilteredTshirts() {
    console.log(selectedBrands);
    return tshirts.map((tshirt, i) => {
      if (selectedBrands.includes(tshirt.brand))
        if (selectedColor.includes(tshirt.color))
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
      <div className="sidebar-container">
        <ResetButton tshirts={tshirts} />
        <PriceMax
          tshirts={tshirts}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
        />
        <Brands
          tshirts={tshirts}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <Colors
          tshirts={tshirts}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div className="filtered-tshirts">{getfilteredTshirts()}</div>
    </>
  );
}
