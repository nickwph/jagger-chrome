/**
 * Created by nickwph on 6/1/16.
 */

import "./VerticalInputGroup.scss";

import React from "react";

export default class VerticalInputGroup extends React.Component {

  render() {
    return (
      <div className="input-group-vertical">{this.props.children}</div>
    );
  }
}