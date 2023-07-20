import { styled } from "styled-components";


export const Baseinput = styled.input`

border:${props => props.Errorstext !== '' ? '1px solid red' : '1px solid #CED4DA'}; 
`;

export const InputError = styled.span`

display :${props => props.Errorstext !== '' ? 'inline-block' : 'none'};
    color: red;
`;