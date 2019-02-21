import React from "react";
import "./styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner-img"
        alt="camera logo"
        src={require("../assets/img/Logo.svg")}
      />
    </div>
  );
};

export default Banner;
