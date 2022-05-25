import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function Loading
() {
  return (
    <div id="loading">
        <Spinner animation="border" variant="primary" id="spinner"/>
        Loading...
    </div>
  )
}

export default Loading
