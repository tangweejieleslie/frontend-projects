import React, { Component } from "react";
import './Child.css'
// import {helloworld } from '../../helpers/data_processor'

// helloworld("name");

class ChildOfChild extends Component {
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
      <div className="Child">
        <h2>Child Affects Child 2</h2>
        Locale String: {this.state.newDate}

      </div>
    );
  }
}

export default ChildOfChild;
