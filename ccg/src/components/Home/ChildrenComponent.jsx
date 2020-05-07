import React, { Component } from "react";


class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2020-30-01T05:00:00",
      newDate: "not updated"
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        newDate: this.props.date,
      });
    }
  }
  render() {
    //   https://material-ui.com/getting-started/usage/
    return (
      <div>
        <h2>Parent Affects Child</h2>
        {this.state.newDate}

      </div>
    );
  }
}

export default Child;
