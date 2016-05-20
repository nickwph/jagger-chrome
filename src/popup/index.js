import '../../prebuilds/bootstrap/css/bootstrap.min.css'
import '../../prebuilds/bootstrap/css/bootstrap-theme.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import EditView from '../components/edit_view/EditView'

ReactDOM.render(
  <div className="container">
    <EditView/>
  </div>,
  document.getElementById('content'));