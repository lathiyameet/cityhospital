import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../reducx/Slice/counterSlice';
import { Box } from '@mui/material';
// import { decrement, increment } from '../../reducx/action/counter.action';

function Counter(props) {
    const [number ,setnumber] = useState(0)
    const Dispatch = useDispatch();
    const counterval = useSelector(state => state.counter)

    console.log(counterval);
    const handleINC = () => {
        Dispatch(increment());
    }

    const handleDIC = () => {
        Dispatch(decrement());
    }

    const handleFAT = () => {
        console.log("kkkijij");
            let fact = 1 ;
            for(let i = number; i>=1; i--) {
                 fact = fact * i ;
                
            }

            return fact
        
    }
    const Result = useMemo(() => {
        console.log("hiii");
        return handleFAT()
    } , [number])
    return (<div className='justify-content-center' >


        <div className="section-title">
            <h2>coun</h2>
            <button onClick={() => handleINC()}>+</button>
            <span>{counterval.count}</span>
            <button onClick={() => handleDIC()}>-</button>
        </div>

        <div >
            <input type='number' onChange={(e) => setnumber(parseInt(e.target.value))} />
            <span>Factoriyal is :{Result}</span>
        </div>

    </div>

    );
}

export default Counter;