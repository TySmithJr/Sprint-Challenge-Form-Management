import React, { useState, useEffect}from 'react';
import './App.css';
import RegForm from "./Components/RegForm";
import axios from "axios";

function App() {
  const [userInfo, setUserInfo] = useState([])

  const retData = res => {
    setUserInfo(res)
  }

useEffect (() => {
 axios
 .get(userInfo)
 .then(res => retData(res.data))
 .catch(error => console.log(error)
 )
},[]
)

  return (
    <div className="App">
      <RegForm />
    </div>
  );
}

export default App;
