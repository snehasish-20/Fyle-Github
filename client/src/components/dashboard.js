import React,{useContext} from 'react'
import UserInfo from './userInfo'
import RepositoryList from './repositoryList'
import {GithubContext} from "../helpers/context"

//Dashboard component to display the user data and the user's repositories
function Dasdhboard() {
  const{userName}=useContext(GithubContext)
  return (
    <div id="dashboard">
        <UserInfo userName={userName}/>{/*Component to display data about the user*/}
        <RepositoryList userName={userName}/>{/*Component to show all the repositories*/}
    </div>
  )
}

export default Dasdhboard