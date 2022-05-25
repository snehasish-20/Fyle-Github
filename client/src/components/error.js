import React,{useContext} from 'react'
import Toast from 'react-bootstrap/Toast'
import {GithubContext} from "../helpers/context"

//Component to show error message incase any error occurs during fetching data
function Error() {
  const{setShowError,errorMssg}=useContext(GithubContext)
  return (
    <Toast id="error"className="errorMssg m-1" bg="danger" onClose={() => setShowError(false)} delay={3000} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error!</strong>
      </Toast.Header>
      <Toast.Body className='text-white'>
       {errorMssg}
      </Toast.Body>
    </Toast>
  )
}

export default Error