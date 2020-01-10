import React, { useState, useEffect } from "react";
import "../../styles/sidebar.css";
import axios from "axios";

import ResetButton from "./resetButton";
import PriceMax from "./priceMax";
import Brands from "./brands";
import Colors from "./colors";

export default function Sidebar({ props }) {
  const [tshirts, setTshirts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/tshirts")

      .then(apiRes => {
        setTshirts(tshirt => [...tshirt, ...apiRes.data]);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);

  return (
    <>
      <div className="sidebar-container">
        <ResetButton tshirts={tshirts} />
        <PriceMax tshirts={tshirts} />
        <Brands tshirts={tshirts} />
        <Colors tshirts={tshirts} />
      </div>
      {/* {tshirts.map((tshirt, i) => {
          return (
            <div className="one-tshirt" key={i}>
              <p id="tshirt-title">{tshirt.name}</p>

              <img id="tshirt-image" src={tshirt.tshirtImage}></img>

              <p id="tshirt-price">{tshirt.price}€</p>
            </div>
          );
        })} */}
    </>
  );
}
