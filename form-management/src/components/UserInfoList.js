import React, { useState, useEffect } from "react";
// import AllUserInfo from "./AllUserInfo";
import axios from "axios";


const UserInfoList = () => {
    const [state, setState] = useState()
    
    useEffect(( ) => {
        axios.get('http://localhost:5000/api/restricted/data', {headers:{
            'Authorization': localStorage.getItem('token')
        }}).then(response => setState(response.data))
        .catch(error => console.error(error))
    }, [])



    return (
        <>
        {state.map((item) => {
            return <div>
                        <p>{item.name}</p>
                        <p>{item.course}</p>
                        <p>{item.technique}</p>
                    
                    </div>
        
        })}
        </>
    );
}



export default UserInfoList;