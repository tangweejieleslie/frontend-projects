import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Child from "../components/Home/ChildrenComponent";
import Form from "../components/Form";
import './Home.css'

class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2020-30-01T05:00:00",
    };
  }

  componentDidUpdate(prev) {}

  handleClick(e) {
    this.setState({
      date: Date.now(),
    });
  }

  render() {
    //   https://material-ui.com/getting-started/usage/
    return (
      <div className="Home">
        <h1>{this.state.date}</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => this.handleClick(e)}
        >
          Change Child
        </Button>
        <Child date={this.state.date}></Child>
        <Form></Form>
      </div>
    );
  }
}

export default ComponentName;

// https://stackoverflow.com/questions/47497090/react-how-to-pass-props-from-onclick-to-function/47497741
// https://reactjs.org/docs/faq-functions.html
// https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/