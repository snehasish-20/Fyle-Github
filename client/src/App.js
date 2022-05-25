import './App.css';
import React, { useState } from 'react'
import Dasdhboard from './components/dashboard';
import Search from './components/search';
import {GithubContext} from "./helpers/context"
import Loading from './components/loading';
import Error from './components/error';

function App() {
  const [userName,setUserName]=useState("") //state to store and handle the username
  const [showDashBoard,setShowDashBoard]=useState(false) //to handle visibility of dashboard
  const [loading,setLoading]=useState(false) //to handle the state of loading screen
  const [page,setPage]=useState(1) //to handle the current page state in pagination
  const [showError,setShowError]=useState(false) //to handle the visibility state of error message
  const [errorMssg,setErrorMssg]=useState("OOPS! Something went wrong, please try again.") //to handle the content of the error message
  return (
    //context which will be used by all the components for state management
    <GithubContext.Provider value={{userName,setUserName,setShowDashBoard,loading,setLoading,page,setPage,setShowError,errorMssg,setErrorMssg}}>
      {loading &&<Loading/>} 
      {!showDashBoard && <Search/>}
      {showDashBoard && <Dasdhboard/>}
      {showError && <Error/>}
    </GithubContext.Provider>
  );
}

export default App;
