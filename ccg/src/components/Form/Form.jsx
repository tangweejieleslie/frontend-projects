import React, { Component } from "react";
import "./Form.css";
import FormChild from "./FormChild";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {}

  handleInputChange(e) {
    console.log(e.target.id);
    let id = e.target.id;
    if (id === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if (id === "email") {
      this.setState({
        email: e.target.value,
      });
    }
  }

  //    https://reactjs.org/docs/forms.html
  //    https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  render() {
    return (
      <div className="Form">
        <form>
          <h1>This is a Form</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={e => this.handleInputChange(e)}
          ></input>
          <br></br>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={e => this.handleInputChange(e)}
          ></input>
        </form>
        <h1>Child</h1>
        <FormChild details={this.state}></FormChild>
        <br></br>
      </div>
    );
  }
}

export default Form;
