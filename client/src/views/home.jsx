import React from "react";
import "../styles/home.css";
import SideBar from "../components/sidebar/sidebar";

export default function home() {
  return (
    <div className="home">
      <h3 className="title">T-shirts Challenge</h3>
      <div id="home-container" className="home-body">
        {" "}
        <SideBar />
      </div>
    </div>
  );
}
