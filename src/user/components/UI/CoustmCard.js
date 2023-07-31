import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CoustmCard({ values, btnVal, onclik1,onclik2 }) {
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
            <CardBody>
                <CardTitle tag="h5">
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
                    className="mb-2 text-muted"
                    tag="h6"
                >  {values.price}
                </CardSubtitle>
                <CardText>
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