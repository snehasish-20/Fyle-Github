import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import {GithubContext} from "../helpers/context"

function UserInfo({userName}) {
    const{loading,setLoading,setShowError,setShowDashBoard}=useContext(GithubContext)
    const [userDetails,setUserDetails]=useState();
    useEffect(() => {
      axios.get(`/userdetails?username=${userName}`).then((result)=>{
      setLoading(false)
      setUserDetails(result.data);
    }).catch(function (error) {
      console.log(error);
      setShowDashBoard(false)
      setShowError(true)
      setLoading(false)
  });
      
    },[userName])
    
  return (
    <div id="userProfile">
      <img src={userDetails?.avatar_url}alt="snehasish" id="userImage" />  
      <h2>{userDetails?.name}</h2>
      <h3>{userDetails?.login}</h3>
      <h6>Followers: {userDetails?.followers} Following: {userDetails?.followers}</h6>
      <p>{userDetails?.bio}</p>
      <a href={userDetails?.html_url} target="_blank" rel="noopener noreferrer">{userDetails?.html_url}</a>

    </div>
  )
}

export default UserInfo