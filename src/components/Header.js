import React, { Component } from "react";
import "./styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h2 className="title">Your Cameras</h2>
        <p className="subtitle">Total devices: {this.props.cameraNumber}</p>
      </div>
    );
  }
}

export default Header;
