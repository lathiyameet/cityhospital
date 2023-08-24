import React, { useEffect, useRef, useState } from 'react';

function Refexm(props) {
const [name ,setname]=useState('')
  const   ref = useRef(0)
  const nameref = useRef('')

useEffect(()=> {
    ref.current=ref.current +1;
},[name])

const handleFocus = (RefI) => {
    RefI.current.style.background='red'
}
    return (
        <div>
            <br></br><br></br>
            <input  
            ref={nameref}
            type='text' 
            onFocus={() => handleFocus(nameref)}
            onChange={(event) =>setname(event.target.value) }/> 

            <p>your name is : {name}</p>

            <p>your name is : {ref.current}</p>
        </div>
    );
}

export default Refexm;