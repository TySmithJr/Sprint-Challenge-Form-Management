import React from "react";

const LoginOut = props => {
 const remove = () => {
   localStorage.removeItem("token");
   
   props.history.push("/Login");

 };
 return <div>{remove()}</div>;
};

export default LoginOut;