/**
 * Created by nickwph on 5/18/16.
 */

import '../../../prebuilds/bootstrap/css/bootstrap.min.css'
import '../../../prebuilds/bootstrap/css/bootstrap-theme.min.css'
import './EditView.scss'

import React from 'react'
import CodeMirror from '../codemirror/CodeMirrorView'

export default  class EditView extends React.Component {
  render() {
    return (
      <form>
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
          <CodeMirror className="editor" value="function(){ console.log('hello') }" options={{lineNumbers: false}}/>
        </div>
        <button type="reset" className="btn btn-link">Cancel</button>
        <button type="submit" className="btn btn-primary">Inject</button>
      </form>
    );
  }
}