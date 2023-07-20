import React from 'react';
import { Pteg } from './subtitles.styled';

function Subtitles({...rest}) {
    return (
       <Pteg{...rest}></Pteg>
    );
}

export default Subtitles;