import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function Adminpage(props) {
    const auth = useSelector(state => state.auth)
    if(auth.user.email === 'lathiyameet80@gmail.com'){
        
    }
    return (
        auth.user? <Outlet/> : <Navigate  to ={"/Auth"} replace/>
    );
}

export default Adminpage;