import React, { useContext } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemContext } from '../../../context/ThemContext';

function CoustmCard({ values, btnVal, onclik1,onclik2 }) {
    const them =useContext(ThemContext) 
    return (

        <Card
            style={{
                width: '16rem',
                position: 'relative'

            }}
        >
            {
                values.url ? <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                /> :
                    null
            }
            <CardBody className={`${them.them}`}>
                <CardTitle tag="h5" className={`${them.them}`}>
                    {values.name}
                    <FavoriteBorderIcon 
                        style={{
                            position: 'absolute',
                            right: '30px',

                        }}
                        onClick={() => onclik2(values.id)}
                    />
                </CardTitle>
                <CardSubtitle
                    className={`mb-2 text-muted ${them.them}`}
                    tag="h6"
                >  {values.price}
                </CardSubtitle>
                <CardText className={`${them.them}`}>
                    {values.date}<br />
                    {values.desc.substring(0, 100)}
                    {values.desc.length > 100 ? '...' : ''}
                </CardText>
                {
                    btnVal ? <Button onClick={() => onclik1(values.id)}>
                        {btnVal}
                    </Button> : null
                }

            </CardBody>
        </Card>
    );
}

export default CoustmCard;