import React from 'react';
import { Baseinput, InputError } from './Input.style';

function Input({Errorstext , ...rest}) {
    return (
        <>
        <Baseinput className="form-control" Errorstext={Errorstext} {...rest }/>
        
        <InputError Errorstext={Errorstext}>{Errorstext}</InputError>
        </>
    );
}

export default Input;