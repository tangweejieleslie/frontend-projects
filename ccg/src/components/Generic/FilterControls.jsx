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

  renderControls(controlList) {
    let filterList = [];
    for (let i = 0; controlList.length; i++) {
      let item = controlList[i];
      filterList.push(<input id={item}>{item}</input>);
    }
    console.log(filterList);
    // return filterList;
  }

  array = [{ name: "Queen" }, { name: "King" }];

  render() {
    return (
      <div>
        {/* {this.renderControls(this.state.filterList)} */}

        {this.array.map((item, i) => (
          <div>
            <h1>{item.name}</h1>
          </div>
        ))}

        <button>hi</button>
      </div>
    );
  }
}

export default Filters;
