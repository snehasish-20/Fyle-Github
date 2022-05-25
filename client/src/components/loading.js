import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

//Component to show a loading screen while fetching data
function Loading() {
  return (
    <div id="loading">
        <Spinner animation="border" variant="primary" id="spinner"/>
        Loading...
    </div>
  )
}

export default Loading
