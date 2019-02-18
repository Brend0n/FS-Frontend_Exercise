import React, { Component } from "react";

class Camera extends Component {
  render() {
    return (
      <div
        className={
          "container-camera " +
          (!this.props.camera.active ? "camera-inactive" : "")
        }
      >
        <img
          className="camera-thumbnail"
          alt="Camera Thumbnail"
          src={this.props.camera.thumbnail}
        />
        <div className="camera-info">
          <div
            className={
              "color-marker " + (this.props.camera.active ? "green" : "red")
            }
          />
          <span className="camera-status">
            {this.props.camera.active ? "ACTIVE" : "INACTIVE"}
          </span>
          <p className="camera-title">{this.props.camera.name}</p>
        </div>
      </div>
    );
  }
}

export default Camera;
