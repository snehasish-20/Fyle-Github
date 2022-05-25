import React,{useContext} from 'react'
import Toast from 'react-bootstrap/Toast'
import {GithubContext} from "../helpers/context"

function Error() {
    const{setShowError}=useContext(GithubContext)
  return (
    <Toast id="error"className="errorMssg m-1" bg="danger" onClose={() => setShowError(false)} delay={3000} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error!</strong>
      </Toast.Header>
      <Toast.Body className='text-white'>
        OOPS! Some error occured, please try again.
      </Toast.Body>
    </Toast>
  )
}

export default Error