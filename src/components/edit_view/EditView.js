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
            <input type="text" className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Url"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="1" placeholder="Description"/>
          </div>
        </fieldset>
        <div className="form-group">
          <CodeMirror className="editor" ref="editor"
                      value="alert('hello world')"
                      options={{lineNumbers: false}}/>
        </div>
        <button type="reset" className="btn btn-link">Cancel</button>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Inject</button>
      </div>
    );
  }
}