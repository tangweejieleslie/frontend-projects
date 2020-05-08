// A reusable button that can be looped and gives a different output. Possible use case -> filtering

import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      filterList: ["Violent", "Will", "Swift"],
      selected: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.filter !== prevProps.filter) {
    }
  }

  // https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
  handleClick(e) {
    console.log(e.target.id);
    // console.log(e.target.name);
    let filterId = e.target.id;
    this.setState({
      selected: e.target.id,
    });
  }

  renderControls(controlList) {
    let filterList = [];
    for (let i = 0; controlList.length; i++) {
      let item = controlList[i];
      filterList.push(<input id={item}>{item}</input>);
    }
    console.log(filterList);
    // return filterList;
  }

  array = [
    { name: "Queen", id: "Q" },
    { name: "King", id: "K" },
  ];

  render() {
    return (
      <div>
        {/* {this.renderControls(this.state.filterList)} */}

        {this.array.map((item, i) => (
          <div>
            <button id={item.id} onClick={(e) => this.handleClick(e)}>
              {item.name}
            </button>
          </div>
        ))}

          <div>
            Clicked Value: {this.state.selected}
          </div>
      </div>
    );
  }
}

export default Filters;
