import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import PaginationComponent from './paginationComponent';
import RepoCard from './repoCard';
import {GithubContext} from "../helpers/context"

function RepositoryList({userName}) {
    const{page,setLoading,setShowDashBoard,setShowError}=useContext(GithubContext)
    const [repositories,setRepositories]=useState();
    const [totalRepositories,setTotalRepositories]=useState();
    useEffect(() => {
      axios.get(`http://localhost:3000/userrepositories?username=${userName}&page=${page}`).then((result)=>{
      setRepositories(result.data.RepoList);
      setTotalRepositories(result.data.TotalRepo)
      setLoading(false)
      console.log(result.data.RepoList);
    }).catch(function (error) {
      console.log(error);
      setShowDashBoard(false)
      setShowError(true)
      setLoading(false)
  });
      
    },[userName,page])
  return (
    <div id="repositories">
      <h1>Repositories</h1>
    <div id="cardContainer">
    {repositories?.map((value)=>{return <RepoCard repoInfo={value} key={value?.id}/>})}
    </div>
    <PaginationComponent totalRepositories={totalRepositories}/>
    </div>
    
  )
}

export default RepositoryList