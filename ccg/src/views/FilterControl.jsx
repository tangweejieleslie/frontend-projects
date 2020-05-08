// A reusable button that can be looped and gives a different output. Possible use case -> filtering

import React, { Component } from "react";
import FilterControls from "../components/Generic/FilterControls";

class FilterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <FilterControls></FilterControls>
        <h1>Filter Controls</h1>
      </div>
    );
  }
}

export default FilterControl;
