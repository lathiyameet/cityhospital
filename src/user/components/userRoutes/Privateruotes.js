import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Privateruotes(props) {
    let loginData =localStorage.getItem("login")

    return (
       
            loginData ? <Outlet/> : <Navigate  to ={"/Auth"} replace/>
      
    );
}

export default Privateruotes;