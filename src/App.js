import React, { Component } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Separator from "./components/Separator";
import CameraList from "./components/CameraList";
import Filter from "./components/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cameraList: [],
      display: "name"
    };
    this.backupCam = [];
  }

  componentWillMount() {
    const dataStatus = require("./assets/data/sample-status.json");
    const dataDevices = require("./assets/data/sample-devices.json");

    // merging the 2 JSON files into a single array
    let cameras = dataDevices.devices;
    for (let device of cameras) {
      for (let status of dataStatus.status) {
        if (status.deviceId === device.id) {
          device["active"] = status.active;
          device["thumbnail"] = status.thumbnail;
          break;
        }
      }
    }
    // sorting the list by alphabetical order
    cameras.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      cameraList: cameras,
      cameraNumber: cameras.length
    });
    this.backupCam = cameras;
  }

  // to toggle display from Sorted by Name/Status
  updateDisplay = display => {
    this.setState({
      display
    });
  };

  updateSearch = text => {
    // if search bar recover all the cameras
    if (!text) {
      this.setState({
        cameraList: this.backupCam
      });
    } else {
      let newList = this.backupCam.filter(
        camera =>
          camera.name.toLowerCase().includes(text.toLowerCase()) ||
          camera.id === Number.parseInt(text)
      );
      this.setState({
        cameraList: newList
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Banner />
        <div className="main">
          <Header cameraNumber={this.backupCam.length} />
          <Filter
            updateDisplay={this.updateDisplay}
            updateSearch={this.updateSearch}
          />
          {this.state.display === "name" ? (
            <div>
              <Separator
                text={"All Devices (" + this.state.cameraList.length + ")"}
              />
              <CameraList cameraList={this.state.cameraList} />
            </div>
          ) : (
            <div>
              <Separator
                text={
                  "Actives Cameras (" +
                  this.state.cameraList.filter(camera => camera.active).length +
                  ")"
                }
              />
              <CameraList
                cameraList={this.state.cameraList.filter(
                  camera => camera.active
                )}
              />
              <Separator
                text={
                  "Inactives Cameras (" +
                  this.state.cameraList.filter(camera => !camera.active)
                    .length +
                  ")"
                }
              />
              <CameraList
                cameraList={this.state.cameraList.filter(
                  camera => !camera.active
                )}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
