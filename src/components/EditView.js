/**
 * Created by nickwph on 5/18/16.
 */

import './EditView.scss'

import React from 'react'
import CodeMirror from './CodeMirrorView'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Panel from 'react-bootstrap/lib/Panel'
import PanelGroup from 'react-bootstrap/lib/PanelGroup'
import VerticalInputGroup from './VerticalInputGroup'

export default class EditView extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      count: 1,
      scripts: [],
    };
  }

  handleSave() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleSubmit() {
    this.props.onSubmit();
  }

  handleNewCss() {
    this.setState({
      scripts: this.pushAndReturnArray(this.state.scripts, {'type': 'css'})
    });
  }

  handleNewCssUrl() {
    this.setState({
      scripts: this.pushAndReturnArray(this.state.scripts, {'type': 'cssUrl'})
    });
  }

  handleNewJavaScript() {
    this.setState({
      scripts: this.pushAndReturnArray(this.state.scripts, {'type': 'js'})
    });
  }

  handleNewJavaScriptUrl() {
    this.setState({
      scripts: this.pushAndReturnArray(this.state.scripts, {'type': 'jsUrl'})
    });
  }

  static pushAndReturnArray(array, object) {
    array.push(object)
    return array
  }

  render() {
    return (
      <div>
        <VerticalInputGroup>
          <FormGroup>
            <FormControl type="text" ref="title" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" ref="url" placeholder="Url"/>
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="textarea" ref="description" rows="1" placeholder="Description"/>
          </FormGroup>
        </VerticalInputGroup>
        <PanelGroup>
          {this.state.scripts.map((script, i) => {
            if (script.type === 'js') {
              return (
                <Panel header={script.type}>
                  <CodeMirror ref="editor"
                              options={{ lineNumbers: false,mode: 'javascript'}}
                              value="console.log('hello world')"/>
                </Panel>
              );
            } else if (script.type === 'css') {
              return (
                <Panel header={script.type}>
                  <CodeMirror ref="editor"
                              options={{ lineNumbers: false,mode: 'css'}}
                              value=".your-custom-class { left: 0 }"/>
                </Panel>
              );
            } else if (script.type === 'jsUrl') {
              return (
                <Panel header={script.type}>
                  <CodeMirror ref="editor"
                              options={{ lineNumbers: false,mode: 'css'}}
                              value=".your-custom-class { left: 0 }"/>
                </Panel>
              );
            } else if (script.type === 'css') {
              return (
                <Panel header={script.type}>
                  <CodeMirror ref="editor"
                              options={{ lineNumbers: false,mode: 'css'}}
                              value=".your-custom-class { left: 0 }"/>
                </Panel>
              );
            }
          })}
        </PanelGroup>
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <DropdownButton dropup bsStyle="primary" title="Add New">
              <MenuItem onClick={this.handleNewJavaScript.bind(this)}>JavaScript</MenuItem>
              <MenuItem onClick={this.handleNewJavaScriptUrl.bind(this)}>JavaScript URL</MenuItem>
              <MenuItem onClick={this.handleNewCss.bind(this)}>CSS</MenuItem>
              <MenuItem onClick={this.handleNewCssUrl.bind(this)}>CSS URL</MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <Button onClick={this.handleSave.bind(this)}>Save {this.state.count}</Button>
          <Button onClick={this.handleSubmit.bind(this)}>Apply</Button>
        </ButtonToolbar>
      </div>
    );
  }
}