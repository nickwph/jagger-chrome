import '../../prebuilds/bootstrap/css/bootstrap.min.css'
import '../../prebuilds/bootstrap/css/bootstrap-theme.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import EditView from '../components/edit_view/EditView'

import jquery from 'jquery'
import firebase from 'firebase'

const database = firebase.initializeApp({
  apiKey: "AIzaSyAWrJsws7eJnGppqqwdnJ1d66zdWgi-ZaA",
  authDomain: "jaguar-490dc.firebaseapp.com",
  databaseURL: "https://jaguar-490dc.firebaseio.com",
  storageBucket: "jaguar-490dc.appspot.com",
}).database();


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this); // bind this to method
  }

  handleSubmit() {
    console.log("got it!");
    let script = this.refs.editView.refs.editor.codeMirror.getValue();

    chrome.tabs.getSelected(null, (tab) => {
      console.log("getSelected");
      console.log(tab);
      console.log(script);
      jquery.get('https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', (data, textStatus, jqXHR) => {
        console.log("jquery ");
        chrome.tabs.executeScript(tab.id, {code: data}, (result) => {
          console.log("executeScript - file", result);
          chrome.tabs.executeScript(tab.id, {code: script}, (result) => {
            console.log("executeScript - script", result);
            database.ref().child('scripts').push().set({script: script});
          });
        });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <EditView onSubmit={this.handleSubmit} ref="editView"/>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('content'));