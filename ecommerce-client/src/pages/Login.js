import React, { Component } from "react";
import LinkHere from "../components/LinkHere/LinkHere";
import Login from "../components/LoginRegister/Login";

export default class Login extends Component {
  render() {
    const url = this.props.match.match.url;
    return (
      <div>
        <LinkHere url={url}></LinkHere>

        <Login></Login>
      </div>
    );
  }
}
