import React, { Component } from "react";
import "./styles/Filter.css";

class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by device name or ID..."
          className="search-input"
          onChange={e => this.props.updateSearch(e.target.value)}
        />
        <select
          className="filter"
          onChange={e => this.props.updateDisplay(e.target.value)}
        >
          <option value="name">Sorted By: Name</option>
          <option value="status">Sorted By: Status</option>
        </select>
      </div>
    );
  }
}

export default Filter;
