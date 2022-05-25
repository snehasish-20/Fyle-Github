import React,{useContext} from 'react'
import UserInfo from './userInfo'
import RepositoryList from './repositoryList'
import {GithubContext} from "../helpers/context"

function Dasdhboard() {
  const{userName,setLoading}=useContext(GithubContext)
  return (
    <div id="dashboard">
        <UserInfo userName={userName}/>
        <RepositoryList userName={userName}/>
    </div>
  )
}

export default Dasdhboard