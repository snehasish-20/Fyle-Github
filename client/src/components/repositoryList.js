import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import PaginationComponent from './paginationComponent';
import RepoCard from './repoCard';
import {GithubContext} from "../helpers/context"

//Component to fetch and display all the repositories of a particular user
function RepositoryList({userName}) {
    const{page,setLoading,setShowDashBoard,setShowError,setErrorMssg}=useContext(GithubContext)
    const [repositories,setRepositories]=useState(); //to store data about all the repositories
    const [totalRepositories,setTotalRepositories]=useState(); //to store the count of total no of repositories

    //API call to fetch the repositories when user name or page no changes
    useEffect(() => {
      axios.get(`/userrepositories?username=${userName}&page=${page}`).then((result)=>{
      setRepositories(result.data.RepoList);
      setTotalRepositories(result.data.TotalRepo)
      setLoading(false)
    }).catch(function (error) {
      console.log(error);
      setShowDashBoard(false)
      setErrorMssg("OOPS! Something went wrong, please try again.")
      setShowError(true)
      setLoading(false)
  });
      
    },[userName,page])
 
  return (
    <div id="repositories">
      <h1>Repositories</h1>
    <div id="cardContainer">
    {/* Rendering cards for each repository*/}
    {repositories?.map((value)=>{return <RepoCard repoInfo={value} key={value?.id}/>})}
    </div>
    <PaginationComponent totalRepositories={totalRepositories}/>
    </div>
    
  )
}

export default RepositoryList