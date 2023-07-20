import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Adminpage(props) {
    let loginData =localStorage.getItem("login")
    return (
        loginData ? <Outlet/> : <Navigate  to ={"/Auth"} replace/>
    );
}

export default Adminpage;