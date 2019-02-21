import React, { Component } from "react";
import "./styles/CameraList.css";
import Camera from "./Camera";

class CameraList extends Component {
  render() {
    return (
      <div className="container-list">
        {this.props.cameraList.map((item, index) => {
          return <Camera camera={item} key={index} />;
        })}
      </div>
    );
  }
}
export default CameraList;
