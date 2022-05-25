import './App.css';
import React, { useState } from 'react'
import Dasdhboard from './components/dashboard';
import Search from './components/search';
import {GithubContext} from "./helpers/context"
import Loading from './components/loading';
import Error from './components/error';
function App() {
  const [userName,setUserName]=useState("")
  const [showDashBoard,setShowDashBoard]=useState(false)
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [showError,setShowError]=useState(false)
  return (
    <GithubContext.Provider value={{userName,setUserName,setShowDashBoard,loading,setLoading,page,setPage,setShowError}}>
      {loading &&<Loading/>}
      {!showDashBoard && <Search/>}
      {showDashBoard && <Dasdhboard/>}
      {showError && <Error/>}
    </GithubContext.Provider>
  );
}

export default App;
