import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function Privateruotes(props) {
    const auth = useSelector(state => state.auth)

    return (
       
        auth.user? <Outlet/> : <Navigate  to ={"/Auth"} replace/>
      
    );
}

export default Privateruotes;