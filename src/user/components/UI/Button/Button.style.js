import { styled } from "styled-components";

const BesaButton = styled.button`
  
    // background: #FF6337;
    border: 0;
    padding: 10px 35px;
   
    transition: 0.4s;
    border-radius: 50px;
    margin: 10px;

  
`;

export const primaryButton =styled(BesaButton)`
    background: ${props => props.disabled ? 'gray' : '#FF6337'};
    color: #fff;

    &:hover {
        background:  ${props => props.disabled ? 'gray' : '#1c84e3'};
`;

export const seconderyButton =styled(BesaButton)`
    background: #000;
    color: #fff;

    &:hover {
        background: #1c84e3;
`;

export const outliendButton =styled(BesaButton)`
    background: none;
    color: #000;
    border: 2px solid #000;
    &:hover {
        background: #1c84e3;
`;