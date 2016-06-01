/**
 * Created by nickwph on 5/16/16.
 */

import '../../prebuilds/codemirror/codemirror.css'
import './CodeMirrorView.scss'

import React from 'react'
import className from 'classnames'
import debounce from 'lodash.debounce'
import 'codemirror/mode/javascript/javascript'

export default class CodeMirrorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isFocused: false
    };
  }

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || require('codemirror');
  }

  componentDidMount() {
    let textareaNode = this.refs.textarea;
    let codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged.bind(this));
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
  }

  componentWillUnmount() {
    // is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  componentWillReceiveProps() {
    debounce(function (nextProps) {
      if (this.codeMirror && nextProps.value !== undefined && this.codeMirror.getValue() != nextProps.value) {
        this.codeMirror.setValue(nextProps.value);
      }
      if (typeof nextProps.options === 'object') {
        for (let optionName in nextProps.options) {
          if (nextProps.options.hasOwnProperty(optionName)) {
            this.codeMirror.setOption(optionName, nextProps.options[optionName]);
          }
        }
      }
    }, 0)
  }

  getCodeMirror() {
    return this.codeMirror;
  }

  focus() {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  }

  focusChanged(focused) {
    this.setState({
      isFocused: focused
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }

  codemirrorValueChanged(doc, change) {
    if (this.props.onChange && change.origin != 'setValue') {
      this.props.onChange(doc.getValue());
    }
  }

  render() {
    const editorClassName = className(
      'ReactCodeMirror',
      this.state.isFocused ? 'ReactCodeMirror--focused' : null,
      this.props.className
    );
    return (
      <div className={editorClassName}>
        <textarea ref="textarea"
                  name={this.props.path}
                  defaultValue={this.props.value}
                  autoComplete="off"/>
      </div>
    );
  }
}

CodeMirrorComponent.propTypes = {
  onChange: React.PropTypes.func,
  onFocusChange: React.PropTypes.func,
  onScroll: React.PropTypes.func,
  options: React.PropTypes.object,
  path: React.PropTypes.string,
  value: React.PropTypes.string,
  className: React.PropTypes.any,
  codeMirrorInstance: React.PropTypes.object,
};