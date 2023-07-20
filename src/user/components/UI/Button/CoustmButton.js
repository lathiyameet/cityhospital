import styled from 'styled-components';
import React from 'react';
import { outliendButton, primaryButton, seconderyButton } from './Button.style';
// import { Button } from './Button.style';

function CoustmButton({children,type, btndisabled = false}) {
  console.log(type);

  const buttontype = () => {
    switch(type){
      case 'primary' :
        return primaryButton;
      case 'secondery' :
        return seconderyButton;
      case 'outliend' :
        return outliendButton;
        default :
        return primaryButton;
    }
  }
  const CoustmButton =buttontype();
    return (
      <CoustmButton disabled={btndisabled}>
            {children}
      </CoustmButton>
    );
}

export default CoustmButton;