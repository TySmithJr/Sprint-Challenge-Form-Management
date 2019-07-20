import React, { useState, useEffect } from "react";
import UserInfoList from "./UserInfoList";
import AllUserInfo from "./AllUserInfo";
import axiosWithAuth from "../auth";

UserInfoList = (props) => {
    const [state, setState] = useState()
    
    useEffect(( ) => {
        axios.get('http://localhost:5000/api/restricted/data', {headers:{
            'Authorization': localStorage.getItem('token')
        }}).then(response => setState(response.data))
        .catch(error => console.error(error))
    }, [])



    return (
        <>
        {props.state.map(item) => ( 
            <div>
                <p>{item.name}</p>
                <p>{item.course}</p>
                <p>{item.technique}</p>
            
            </div>
        )
        )}
        </>
    );
}



export default UserInfoList;