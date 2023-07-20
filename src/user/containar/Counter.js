import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../reducx/action/counter.action';

function Counter(props) {

const Dispatch = useDispatch();
const counterval = useSelector(state => state.counter)

console.log(counterval);
    const handleINC = () => {
        Dispatch(increment());
    }

    const handleDIC = () => {
        Dispatch(decrement());
    }

    return (
        <div>
            <button onClick={() => handleINC()}>+</button>
            <span>{counterval.count}</span>
            <button onClick={() => handleDIC()}>-</button>
        </div>
    );
}

export default Counter;