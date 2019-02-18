import React, { Component } from "react";

class Separator extends Component {
  render() {
    return (
      <div className="list-separator">
        <span className="list-separator-text">{this.props.text}</span>
        <hr />
      </div>
    );
  }
}

export default Separator;
