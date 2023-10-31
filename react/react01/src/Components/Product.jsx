import React, { Component } from "react";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("1.constructor");
  }

  componentDidMount = () => {
    console.log("3.componentDidMount");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("4.componentDidUpdate");
    console.log(prevState, this.state);
  };

  componentWillUnmount = () => {
    console.log("5.componentWillUnmount");
  };

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    console.log("2.render");
    return (
      <div>
        <h1>Product</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
