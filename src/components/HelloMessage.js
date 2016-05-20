/**
 * Created by nickwph on 5/16/16.
 */

import React from 'react'

export default  class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}