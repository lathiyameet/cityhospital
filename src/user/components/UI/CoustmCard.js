import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CoustmCard({values}) {
    return (
        
        <Card
            style={{
                width: '18rem'
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
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >  {values.price}
                </CardSubtitle>
                <CardText>
                {values.date}<br/>
                    {values.desc}
                </CardText>
                {
                    values.btnVal ? <Button>
                        Button
                    </Button> : null
                }

            </CardBody>
        </Card>
    );
}

export default CoustmCard;