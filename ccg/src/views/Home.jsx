import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button";

class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2020-30-01T05:00:00",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        date: this.props.date,
      });
    }
  }
  render() {
    //   https://material-ui.com/getting-started/usage/
    return (
      <div>
        <h1>{this.state.date}</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default ComponentName;
