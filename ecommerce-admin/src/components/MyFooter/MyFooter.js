import React, { Component } from "react";

export default class MyFooter extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <p>Shopping cart © 2022</p>
            </div>
            <div className="col-sm-6 text-right"></div>
          </div>
        </div>
      </footer>
    );
  }
}
