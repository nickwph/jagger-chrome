import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-material-design/dist/css/ripples.min.css'
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'

import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import ScriptPackageComponent from '../components/ScriptPackageComponent'

import jquery from 'jquery'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAWrJsws7eJnGppqqwdnJ1d66zdWgi-ZaA",
  authDomain: "jaguar-490dc.firebaseapp.com",
  databaseURL: "https://jaguar-490dc.firebaseio.com",
  storageBucket: "jaguar-490dc.appspot.com",
});

const database = firebase.database();
const auth = firebase.auth();
const reference = database.ref();

let scriptRef;

auth.onAuthStateChanged(user => {
  console.log("onAuthStateChanged", user);
  if (user === null) {
    auth.signInAnonymously().then((result) => {
      console.log("signInAnonymously", result);
    }).catch(error => {
      console.log("signInAnonymously", "error", error);
    });
  }
});

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.reference = reference.child('users/' + auth.currentUser.uid + '/package')
  }

  handleSubmit() {
    console.log("hello!!")
    console.log(this.refs.editView)
    console.log(this.refs.editView)
    let editView = this.refs.editView
    console.log(editView.title)
    console.log(editView.url)
    console.log(editView.description)

    let data = {
      title: editView.title,
      url: editView.url,
      description: editView.description,
      scripts: editView.scripts,
    }

    // let editViewRefs = this.refs.editView.refs;
    // let url = editViewRefs.url.value;
    // let title = editViewRefs.title.value;
    // let description = editViewRefs.description.value;
    // let script = editViewRefs.editor.codeMirror.getValue();

    if (scriptRef == null) {
      scriptRef = reference.child('users/' + auth.currentUser.uid + '/scripts').push();
      scriptRef.set({
        created_at: new Date().getTime()
      })
    }

    

    // chrome.tabs.getSelected(null, (tab) => {
    //   jquery.get('https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', (data, textStatus, jqXHR) => {
    //     chrome.tabs.executeScript(tab.id, {code: data}, (result) => {
    //       console.log("executeScript - file", result);
    //       chrome.tabs.executeScript(tab.id, {code: script}, (result) => {
    //         console.log("executeScript - script", result);
    //         scriptRef.set({
    //           title: title,
    //           url: url,
    //           description: description,
    //           script: script,
    //           modified_at: new Date().getTime(),
    //         });
    //       });
    //     });
    //   });
    // });
  }

  render() {
    return (
      <div className="container">
        <ScriptPackageComponent onSubmit={this.handleSubmit.bind(this)} ref="editView"/>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('content'));