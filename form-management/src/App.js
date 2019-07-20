import React from 'react';
import { Link, Route,} from "react-router-dom";
import './App.css';
import Login from "./Components/Auth/Login";
import RegForm from "./Components/Auth/RegForm";
import Data from "./Components/Data";
import Logout from "./Components/Auth/Logout";

function App() {
  return (
    <div className="App">
     <header>
       <Link to="/Login">
        Login
       </Link>
       <Link to="/RegForm">
        RegForm
       </Link>
       <Link to="/Data">
        Data
       </Link>
       <Link to="/Logout">
        Logout
       </Link>
     </header>
     <div>
       <Route exact path="/Login" component={Login}/>
       <Route  exact path="/RegForm" component={RegForm}/>
       <Route  exact path="/Data" component={Data}/>
       <Route  exact path="/Logout" component={Logout}/>
     </div>
    </div>
  );
}

export default App;
