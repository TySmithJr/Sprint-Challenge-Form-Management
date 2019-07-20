import React, { useState, useEffect} from 'react';
import { axiosWithAuth } from "../Components/common/axios"

const Data = () => {
    const [state, setState] = useState([])

    const token = localStorage.getItem("token")
    console.log(token)
        const updateState = () => {
            axiosWithAuth().get("http://localhost:5000/api/restricted/data")
            .then(res => setState(res.data))
            .catch(error => console.log(error)) 
        }

        useEffect(() =>{updateState()}, []) 
            console.log(state)
    return (
        <div>
                {state.map((item, i ) => 
                <div key={i}>
                <h1>{item.name}</h1>  <h1>{item.course}</h1> <h1>{item.technique}</h1></div>)}
                
        </div>
    );
};

export default Data;