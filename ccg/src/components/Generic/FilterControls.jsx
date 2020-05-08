// A reusable button that can be looped and gives a different output. Possible use case -> filtering

import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      filterList: ["Violent", "Will", "Swift"],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.filter !== prevProps.filter) {
    }
  }

  // https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
  handleClick(e) {
    let filterId = e.target.id;
    this.setState({
      [filterId]: e.target.value,
    });
  }

  render() {
    let filterList = [];
    let AllFilters = this.state.filterList;
    for (let i = 0; AllFilters.length; i++) {
      let item = AllFilters[i];
      filterList.push(<input id={item}>{item}</input>);
    }
    return (
      <div>
        {/* {filterList}
         */}
         <button>
         hi
         </button>
      </div>
    );
  }
}

export default Filters;
