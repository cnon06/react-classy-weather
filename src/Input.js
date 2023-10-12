import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search from location..."
        value={this.props.location}
        onChange={this.props.onSetLocation}
      />
    );
  }
}

export default Input;
