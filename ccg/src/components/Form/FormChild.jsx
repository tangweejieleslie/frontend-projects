import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props!==prevProps){
        // console.log(this.props.details);
        this.setState({
            name: this.props.details.name,
            email: this.props.details.email
        })
    }
  }
  render() {
    return (
      <div className="Form">
        Name: {this.state.name} <br></br>
        E-Mail: {this.state.email}
      </div>
    );
  }
}

export default Form;
