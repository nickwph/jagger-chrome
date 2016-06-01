/**
 * Created by nickwph on 5/18/16.
 */

import '../../prebuilds/bootstrap/css/bootstrap.min.css'
import '../../prebuilds/bootstrap/css/bootstrap-theme.min.css'
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
import VerticalInputGroup from './VerticalInputGroup'

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
        <VerticalInputGroup>
          <FormGroup>
            <FormControl type="text" ref="title" placeholder="Title" value="sample title 2"/>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" ref="url" placeholder="Url" value="sample url"/>
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="textarea" ref="description" rows="1" placeholder="Description" value="sample"/>
          </FormGroup>
        </VerticalInputGroup>
        <Panel header='Javascript'>
          <CodeMirror ref="editor" options={{lineNumbers: false}} value="console.log('hello world')"/>
        </Panel>
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <DropdownButton dropup bsStyle="primary" title="Add New">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
              <MenuItem eventKey="3">Dropdown link</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="4">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <Button>Save</Button>
          <Button onClick={this.handleSubmit}>Apply</Button>
        </ButtonToolbar>
      </div>
    );
  }
}