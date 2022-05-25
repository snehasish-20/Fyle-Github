import React,{useContext} from 'react'
import {GithubContext} from "../helpers/context"
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import logo from '../images/logo.png'

function Search() {
    //using context
    const{userName,setUserName,setShowDashBoard,setLoading}=useContext(GithubContext)

    const search=()=>
    {
        if(userName==="")
         alert("Please enter valid user name")
        else
        {
            setLoading(true)
            setShowDashBoard(true)
        }
    }
  return (
    <div id="searchWrapper">
        <div id="searchSection">
        <img src={logo} alt="github" id="logo"/>
        <h1>GitHub.com</h1>
        <InputGroup className="mb-3" id="searchContainer">
            <FormControl
             placeholder="Enter Username"
             aria-label="username"
             aria-describedby="basic-addon2"
             value={userName}
             onChange={e=>{setUserName(e.target.value)}}
             id="searchbox"
            />
            <Button variant="primary" id="button-addon2" onClick={()=>search()}>
                Search
            </Button>
        </InputGroup>
        </div>
    </div>
  )
}

export default Search