import React, { useEffect, useState } from 'react';

function Listcallback({item}) {
    const [data ,setdata]=useState([])
    
    useEffect(()=> {
        console.log("useEffect");
        setdata(item(1))
    },[item])
    return (
        <div>
            <ul>
                {
                    data.map((v,i) => {
                        return(
                            <li key={i}>{v}</li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
}

export default Listcallback;