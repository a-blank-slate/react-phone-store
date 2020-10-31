import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container mx-auto text-center my-5 text-title">
        <div className="row">
          <div className="col-10">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h3>not found</h3>
            <h4>
              The Requested URL was not found{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
