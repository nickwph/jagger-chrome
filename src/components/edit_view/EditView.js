/**
 * Created by nickwph on 5/18/16.
 */

import '../../../prebuilds/bootstrap/css/bootstrap.min.css'
import '../../../prebuilds/bootstrap/css/bootstrap-theme.min.css'
import './EditView.scss'

import React from 'react'
import CodeMirror from '../codemirror/CodeMirrorView'

export default class EditView extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this); // bind this to method
  }

  handleSubmit() {
    this.props.onSubmit();
  }

  render() {
    return (
      <div>
        <fieldset className="input-group-vertical">
          <div className="form-group">
            <input type="text" ref="title"
                   className="form-control"
                   placeholder="Title"
                   value="sample title"/>
          </div>
          <div className="form-group">
            <input type="text" ref="url"
                   className="form-control"
                   placeholder="Url"
                   value="sample url"/>
          </div>
          <div className="form-group">
            <textarea ref="description"
                      rows="1"
                      className="form-control"
                      placeholder="Description"
                      value="sample decription"/>
          </div>
        </fieldset>
        <div className="form-group">
          <CodeMirror className="editor"
                      ref="editor"
                      value="console.log('hello world')"
                      options={{lineNumbers: false}}/>
        </div>
        <button type="reset" className="btn btn-link">Cancel</button>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Inject</button>
      </div>
    );
  }
}