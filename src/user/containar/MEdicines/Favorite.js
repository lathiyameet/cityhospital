import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite_medicinesRemove } from '../../../reducx/action/favorite.action';
import { Card } from '@mui/material';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { ThemContext } from '../../../context/ThemContext';


function Favorite(props) {
    const Dispatch = useDispatch()
    const meData = useSelector(state => state.mediciness)
    const FavoriteData = useSelector(state => state.datalike)
    console.log(meData, FavoriteData);
    const them =useContext(ThemContext) 

    const handleRemove = (id) => {
        console.log(id);
        Dispatch(Favorite_medicinesRemove(id))
    }



    const favordata = FavoriteData.Favorite.map((v) => {
        let Data = meData.medicine.find((m) => m.id === v.pid)

        let Fdata = { ...Data, ...v }

        return Fdata
    })
    console.log(favordata);
    return (
        <section id="medicines" className={`medicines  ${them.them}`}>
            <div className="container">
                <div className="section-title">
                    <h2 className={`${them.them}`}>Favorite</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className=" container">
                <div className="row" style={{display:'flex'}}>
                    {
                        favordata.map((v) => {
                            return (
                                <div className='col-md-3 g-2 ' >
                                <Card 
                                    style={{
                                        width: '16rem',
                                        position: 'relative',
                                        border:'1px solid #fff'
                                    }}
                                >
                                    <CardBody  className={`${them.them}`}>
                                        <CardTitle tag="h5"  className={`${them.them}`}>
                                            {v.name}
                                            <a href="#!" style={{
                                                 color: '#cecece',
                                                 position:'absolute',
                                                 right:'10px'
                                         }} onClick={() => handleRemove(v.pid)}><i className={`fas fa-trash-alt ${them.them}`} /></a>
                                        </CardTitle>
                                        <CardSubtitle
                                            className={`mb-2 text-muted ${them.them} `}
                                            tag="h6"
                                        >  {v.price}
                                        </CardSubtitle>
                                        <CardText >
                                            {v.date}<br />
                                            {v.desc.substring(0, 100)}
                                            {v.desc.length > 100 ? '...' : ''}
                                        </CardText>
                                    </CardBody>
                                </Card>
                                </div>
                            )
                            // return (

                            //     <div className="card-body">
                            //         <div className="d-flex justify-content-between">
                            //             <div className="d-flex flex-row align-items-center">

                            //                 <div className="ms-3">
                            //                     <h5>{v.name}</h5>
                            //                     <p className="small mb-0">{v.desc}</p>
                            //                 </div>
                            //             </div>
                            //             <div className="d-flex flex-row align-items-center">
                            //                 <div style={{ width: 50 }}>

                            //                     <h5 className="fw-normal mb-0">{v.Qty}</h5>

                            //                 </div>
                            //                 <div style={{ width: 80 }}>
                            //                     <h5 className="mb-0">{v.Qty * v.price}</h5>
                            //                 </div>
                            //                 <a href="#!" style={{ color: '#cecece' }} onClick={() => handleRemove(v.pid)}><i className="fas fa-trash-alt" /></a>
                            //             </div>

                            //         </div>
                            //     </div>



                            //     /* <div>
                            //     <hr className="my-4" />
                            //     <div className="row mb-4 d-flex justify-content-between align-items-center">
                            //         <div className="col-md-3 col-lg-3 col-xl-3">
                            //             <h6 className="text-muted">{v.name}</h6>
                            //             <h6 className="text-black mb-0">{v.desc.substring(0,20)}</h6>
                            //         </div>
                            //         <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            //             <button className="btn btn-link px-2"onClick={() => handleDec(v.pid)}>
                            //                 <i className="fas fa-minus" />
                            //             </button>
                            //             <input id="form1" min={0} name="quantity" defaultValue={v.Qty} type="number" className="form-control form-control-sm" />
                            //             <button className="btn btn-link px-2" onClick={() => handleInc(v.pid)}>
                            //                 <i className="fas fa-plus" />
                            //             </button>
                            //         </div>
                            //         <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            //             <h6 className="mb-0">{v.price}</h6>
                            //         </div>
                            //         <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            //             <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                            //         </div>
                            //     </div>
                            //     </div> */
                            // )
                        })
                    }
                    

                </div>


            </div>
        </section>
    );
}

export default Favorite;