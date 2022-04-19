import React, { Component } from "react";
import LinkHere from "../components/LinkHere/LinkHere";
import Register from "../components/LoginRegister/Register";

export default class Register extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
        <LinkHere url={url}></LinkHere>

        <Register></Register>
      </div>
    );
  }
}
