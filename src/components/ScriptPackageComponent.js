/**
 * Created by nickwph on 5/18/16.
 */

import './ScriptPackageComponent.scss'

import React from 'react'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import PanelGroup from 'react-bootstrap/lib/PanelGroup'

import VerticalInputGroup from './VerticalInputGroup'
import ScriptComponent from './ScriptComponent'

export default class ScriptPackageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmitHandler = this.props.onSubmit
    this.state = {
      title: props.title ? props.title : "Untitled",
      url: props.url,
      description: props.description,
      scripts: props.scripts ? props.scripts : [],
    }
  }

  handleSave() {
    console.log("save! -> ", this.title)
  }

  handleSubmit() {
    console.log("submit!")
    this.onSubmitHandler()
  }

  handleNewScript(type) {
    this.state.scripts.push({
      'type': type
    })
    this.setState({
      scripts: this.state.scripts
    })
  }

  handleChange(key, value) {
    let change = {}
    change[key] = value.target.value
    this.setState(change)
  }

  get title() {
    return this.state.title
  }

  set title(title) {
    setState({title: title})
  }

  get url() {
    return this.state.url
  }

  set url(url) {
    setState({url: url})
  }

  get description() {
    return this.state.description
  }

  set description(description) {
    setState({description: description})
  }

  render() {
    return (
      <div>
        <VerticalInputGroup>
          <FormGroup>
            <FormControl type="text" ref="title" placeholder="Title" value={this.state.title}
                         onChange={this.handleChange.bind(this, 'title')}/>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" ref="url" placeholder="Url" value={this.state.url}
                         onChange={this.handleChange.bind(this, 'url')}/>
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="textarea" ref="description" rows="1" placeholder="Description"
                         value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
          </FormGroup>
        </VerticalInputGroup>
        <PanelGroup>
          {this.state.scripts.map((script, i) => {
            return (
              <ScriptComponent key={i} type={script.type} header={script.type}/>
            )
          })}
        </PanelGroup>
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <DropdownButton dropup bsStyle="primary" title="Add New">
              <MenuItem onClick={this.handleNewScript.bind(this, 'javascript')}>JavaScript</MenuItem>
              <MenuItem onClick={this.handleNewScript.bind(this, 'javascript-url')}>JavaScript URL</MenuItem>
              <MenuItem onClick={this.handleNewScript.bind(this, 'css')}>CSS</MenuItem>
              <MenuItem onClick={this.handleNewScript.bind(this, 'css-url')}>CSS URL</MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <Button onClick={this.handleSave.bind(this)}>Save</Button>
          <Button onClick={this.handleSubmit.bind(this)}>Apply</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

ScriptPackageComponent.propTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  description: React.PropTypes.string,
  scripts: React.PropTypes.array,
}
