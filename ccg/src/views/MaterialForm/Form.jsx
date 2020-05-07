import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import './Form.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  render() {
    return (
      <div className="materialForm">
        <FormGroup>
          <h1>Material Form Group</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

export default Form;
