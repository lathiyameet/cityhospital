import React from 'react';
import { IconsText } from './icon.styled';

function Icon({...rest}) {
    return (
       <IconsText {...rest} />
    );
}

export default Icon;