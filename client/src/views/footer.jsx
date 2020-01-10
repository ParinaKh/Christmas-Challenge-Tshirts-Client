import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";

const iconHeart = <FontAwesomeIcon icon={faHeart} />;

export default function FooterMain() {
  return (
    <footer id="footer_main">
      <b>Made with passion & {iconHeart}</b>
    </footer>
  );
}
