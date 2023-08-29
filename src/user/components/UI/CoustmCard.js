import React, { useContext } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemContext } from '../../../context/ThemContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

function CoustmCard({ values, btnVal, onclik1, onclik2 }) {
    const them = useContext(ThemContext)
    const FavoriteData = useSelector(state => state.datalike)
    const data = FavoriteData.Favorite.map((v) => v.pid)
    let delete_index = FavoriteData.Favorite.findIndex((m) => m.pid === values.id)
    console.log(data[delete_index]);
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
                    {
                        
                        values.id === data[delete_index] ? <FavoriteIcon
                            style={{
                                position: 'absolute',
                                right: '30px',
                                color: 'red',
                            }}
                            onClick={() => onclik2(values.id)}
                        /> :
                            <FavoriteBorderIcon
                                style={{
                                    position: 'absolute',
                                    right: '30px',

                                }}
                                onClick={() => onclik2(values.id)}
                            />


                    }

                    {/* <FavoriteBorderIcon
                        style={{
                            position: 'absolute',
                            right: '30px',

                        }}
                        onClick={() => onclik2(values.id)}
                    /> */}
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


        // values.map((v) => {
        //     return (
        //         <div className="product">
        //             <div className="product-card">
        //                 <h2 className="name">{v.name}</h2>
        //                 <span className="price">${v.price}.00</span>
        //                 <a className="popup-btn">Quick View</a>
        //                 {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmedicine&psig=AOvVaw04IfeMmb8rzsiMJG_epTPe&ust=1692109551046000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIChrpOv3IADFQAAAAAdAAAAABAE" className="product-img" alt /> */}
        //             </div>
        //             <div className="popup-view">
        //                 <div className="popup-card">
        //                     <a><i className="fas fa-times close-btn" /></a>
        //                     <div className="product-img">
        //                         {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmedicine&psig=AOvVaw04IfeMmb8rzsiMJG_epTPe&ust=1692109551046000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIChrpOv3IADFQAAAAAdAAAAABAE" alt /> */}
        //                     </div>
        //                     <div className="info">
        //                         <h2>{v.name}
        //                             {/* {
        //                                 v.id === localDataIcon ?
        //                                     <FavoriteIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={handleRemoveicon} />
        //                                     :
        //                                     <FavoriteBorderIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={() => Onicon(v.id)} />
        //                             } */}
        //                         </h2>
        //                         <p>{v.desc}</p>
        //                         <span className="price">$ {v.price}.00</span>
        //                         <a href="#" onClick={() => onclik1(v.id)} className="add-cart-btn">Add to Cart</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // })

    );
}

export default CoustmCard;