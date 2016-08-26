/**
 * Created by nickwph on 6/26/16.
 */

import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import CodeMirrorComponent from "./CodeMirrorComponent"

export default class ScriptEditComponent extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      header: prop.header,
      type: prop.type,
      value: defaultValueIfEmpty(prop.value, prop.type),
    }
  }

  get value() {
    return this.refs.editor.value
  }

  set value(value) {
    this.setState({value: value})
  }

  get header() {
    return this.state.header
  }

  get type() {
    return this.state.type
  }

  render() {
    return (
      <Panel header={this.state.header}>
        <CodeMirrorComponent ref="editor" value={this.state.value} options={codeMirrorOptions(this.state.type)}/>
      </Panel>
    )
  }
}

ScriptEditComponent.propTypes = {
  header: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
}

function codeMirrorOptions(mode) {
  return {
    lineNumbers: false,
    mode: mode,
  }
}

function defaultValueIfEmpty(value, type) {
  if (value) {
    return value
  } else if (type == 'javascript') {
    return 'alert("hello world!")'
  } else if (type == 'css') {
    return '.your-custom-class { left: 0 }'
  } else {
    return 'error!'
  }
}