/**
 * Created by nickwph on 5/16/16.
 */

import 'codemirror/lib/codemirror.css'
import './CodeMirrorComponent.scss'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import React from 'react'
import className from 'classnames'
import debounce from 'lodash.debounce'

export default class CodeMirrorComponent extends React.Component {

  constructor(props) {
    super(props)
    this.codeMirror = null
    this.props = props
    this.state = {
      isFocused: false
    }
  }

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || require('codemirror')
  }

  componentDidMount() {
    let textareaNode = this.refs.textarea
    let codeMirrorInstance = this.getCodeMirrorInstance()
    this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options)
    this.codeMirror.on('change', this.onValueChanged.bind(this))
    this.codeMirror.on('focus', this.onFocusChanged.bind(this, true))
    this.codeMirror.on('blur', this.onFocusChanged.bind(this, false))
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '')
  }

  get value() {
    if (this.codeMirror) {
      return this.codeMirror.getValue()
    }
  }

  get focus() {
    if (this.codeMirror) {
      this.codeMirror.focus()
    }
  }

  onFocusChanged(focused) {
    this.setState({
      isFocused: focused
    })
    this.props.onFocusChange && this.props.onFocusChange(focused)
  }

  onValueChanged(doc, change) {
    if (this.props.onChange && change.origin != 'setValue') {
      this.props.onChange(doc.getValue())
    }
  }

  // override
  componentWillUnmount() {
    // is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea()
    }
  }

  // override
  componentWillReceiveProps() {
    debounce(function (nextProps) {
      if (this.codeMirror && nextProps.value !== undefined && this.codeMirror.getValue() != nextProps.value) {
        this.codeMirror.setValue(nextProps.value)
      }
      if (typeof nextProps.options === 'object') {
        for (let optionName in nextProps.options) {
          if (nextProps.options.hasOwnProperty(optionName)) {
            this.codeMirror.setOption(optionName, nextProps.options[optionName])
          }
        }
      }
    }, 0)
  }

  // override
  render() {
    const editorClassName = className(
      'ReactCodeMirror',
      this.state.isFocused ? 'ReactCodeMirror--focused' : null,
      this.props.className
    )
    return (
      <div className={editorClassName}>
        <textarea ref="textarea"
                  name={this.props.path}
                  defaultValue={this.props.value}
                  autoComplete="off"/>
      </div>
    )
  }
}

CodeMirrorComponent.propTypes = {
  // listeners
  onChange: React.PropTypes.func,
  onFocusChange: React.PropTypes.func,
  onScroll: React.PropTypes.func,
  // options
  options: React.PropTypes.object,
  path: React.PropTypes.string,
  value: React.PropTypes.string,
  className: React.PropTypes.any,
  // instance
  codeMirrorInstance: React.PropTypes.object,
}