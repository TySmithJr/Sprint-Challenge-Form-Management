import React, { useState, useEffect}from 'react';
import './App.css';
import RegForm from "./components/RegForm";
import axiosWithAuth from "./Auth"
import UserInfoList from "./components/UserInfoList"
import { Redirect, Route, BrowserRouter } from "react-router-dom";
 import Meals from "./components/UserInfoList";

function App() {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    axiosWithAuth()
 .get(userInfo)
 .then(res => setUserInfo(res.data))
 .catch(error => console.log(error)
 )
  
  }, [])
  


  return (
    <div className="App">
       <RegForm />
      <UserInfoList userInfo={userInfo}/>
      <Route path="/RegForm" component={RegForm} />
      {/* <PrivateRoute path="/meals" component={Meals} /> */}
    </div>
  );
}

export default App;
