import React, { Component } from "react";
import './Child.css';
import COC from './ChildOfChild';

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
      let date = this.props.date;
      this.setState({
        newDate: date,
      });
    }
  }
  render() {
    //   https://material-ui.com/getting-started/usage/
    return (
      <div className="Child">
        <h2>Parent Affects Child</h2>
        { this.state.newDate}
        <COC date={this.state.newDate.toLocaleString()}></COC>
      </div>
    );
  }
}

export default Child;
