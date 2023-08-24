import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../reducx/Slice/counterSlice';
import { Box } from '@mui/material';
import { ThemContext } from '../../context/ThemContext';
import { blue } from '@mui/material/colors';
import Listcallback from './Listcallback';
// import { decrement, increment } from '../../reducx/action/counter.action';

function Counter(props) {
    const [number, setnumber] = useState(0)
    const [them, setthem] = useState(false)
    const Dispatch = useDispatch();
    const counterval = useSelector(state => state.counter)

    // console.log(counterval);
    // const handleINC = () => {
    //     Dispatch(increment());
    // }

    // const handleDIC = () => {
    //     Dispatch(decrement());
    // }

    // const handleFAT = () => {
    //     console.log("kkkijij");
    //     let fact = 1;
    //     for (let i = number; i >= 1; i--) {
    //         fact = fact * i;

    //     }

    //     return fact

    // }
    // const Result = useMemo(() => {
    //     console.log("hiii");
    //     return handleFAT()
    // }, [number])


    const styleex ={
        background:them ? '#000' : '#fff', 
        color: them ? '#fff' : '#000'
    }

    const getItem = useCallback((m) => {
            return [number , number+m , number+m+1];
    } , [number])
    return (
        // <div className={`justify-content-center `} style={styleex} >


        //     <div className="section-title"  >
        //         <h2 style={styleex}>call back</h2>
        //         <button onClick={() => handleINC()}>+</button>
        //     <span>{counterval.count}</span>
        //     <button onClick={() => handleDIC()}>-</button>
        //     </div>
        //     <div >
        //     <input type='number' onChange={(e) => setnumber(parseInt(e.target.value))} />
        //     <span>Factoriyal is :{Result}</span>
        // </div>
        // </div>
        <div className={`justify-content-center `} style={styleex} >


        <div className="section-title"  >
            <h2 style={styleex}>call back</h2>
            <button onClick={() => setthem(!them)}  style={{color:'#000'}}> Them</button>
        </div>

        <div>
            <input  onChange={(event) => setnumber(parseInt(event.target.value))}/>
        </div>

        <Listcallback item ={getItem} />
      




       
    </div>


    );
}

export default Counter;