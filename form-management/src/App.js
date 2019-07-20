import React, { useState, useEffect}from 'react';
import './App.css';
import RegForm from "./Components/RegForm";
import axiosWithAuth from "./Auth"
import UserInfoList from "./Components/UserInfoList"
import { Redirect, Route, BrowserRouter as Router} from "react/router/dom";
 import Meals from "./Components/UserInfoList";

function App() {
  const [userInfo, setUserInfo] = useState([])

  const retData = res => {
    setUserInfo(res)

  }

useEffect (() => {
 axiosWithAuth()
 .get(userInfo)
 .then(res => retData(res.data))
 .catch(error => console.log(error)
 )
},[]
)

  return (
    <div className="App">
      {/* <RegForm />
      <UserInfoList userInfo={userInfo}/> */}
      <Route path="/RegForm" component={RegForm} />
      <PrivateRoute path="/meals" component={Meals} />
    </div>
  );
}

export default App;
