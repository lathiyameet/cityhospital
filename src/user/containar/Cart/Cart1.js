import React, { useEffect, useState } from 'react';

function Cart1(props) {
    const [medicineData, setmedicineData] = useState([]);
    const [localdata, setLocaldata] = useState([]);

    useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem('cart'));
        setLocaldata(localdata)
        try {
            fetch("http://localhost:3004/medicines")
                .then((response) => response.json())
                .then((data) => setmedicineData(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])
    console.log(localdata);
    let cartdata = localdata.map((v) => {
        let medata = medicineData.find((m) => m.id === v.pid)

        let Fdata = { ...medata, ...v }

        // localStorage.setItem('cart',JSON.stringify(Fdata))
        return Fdata

    })

    let totalPrice = cartdata.reduce((acc, value) => acc + value.price * value.Qty, 0);


    console.log("totalPrice :-" +totalPrice);


    const handleInc = (id) => {
        let  ADDcartdata =localdata.map((v)=> {
            if(v.pid === id){
                // let index = localdata.findIndex((v) => v.pid == id)

               return {...v , Qty :v.Qty+1}
                // let Fdata= localdata[index].Qty++
         
                //  console.log(v);
                

            }else{
                return v ;
            }
           
        })
        setLocaldata(ADDcartdata)
        localStorage.setItem('cart',JSON.stringify(ADDcartdata))
        
      
        
    }
    const handleDec = (id) => {
        let  ADDcartdata =localdata.map((v)=> {
            if(v.pid === id && v.Qty >1){
                // let index = localdata.findIndex((v) => v.pid == id)
         
                    return {...v , Qty :v.Qty-1}
            
                
              
                // let Fdata= localdata[index].Qty++
         
                //  console.log(v);
                

            }else{
                return v ;
            }
           
        })
        setLocaldata(ADDcartdata)
        localStorage.setItem('cart',JSON.stringify(ADDcartdata))
       
    }

    const handleRemove = (id) => {
        let fdata = cartdata.filter((v) => v.pid != id)
        setLocaldata(fdata)
        localStorage.setItem('cart',JSON.stringify(fdata))
    }
    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>cart</h2>

                </div>
            </div>
            <div className="container">
                <div className="card mb-3">
                    {
                        cartdata.map((v) => {
                            return (

                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">

                                            <div className="ms-3">
                                                <h5>{v.name}</h5>
                                                <p className="small mb-0">{v.desc}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 50 }}>
                                                <button onClick={() => handleDec(v.pid)}>-</button>
                                                <h5 className="fw-normal mb-0">{v.Qty}</h5>
                                                <button onClick={() => handleInc(v.pid)}>+</button>
                                            </div>
                                            <div style={{ width: 80 }}>
                                                <h5 className="mb-0">{v.Qty*v.price}</h5>
                                            </div>
                                            <a href="#" style={{ color: '#cecece' }} onClick={() => handleRemove(v.pid)}><i className="fas fa-trash-alt" /></a>
                                        </div>

                                    </div>
                                </div>



                                /* <div>
                                <hr className="my-4" />
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                        <h6 className="text-muted">{v.name}</h6>
                                        <h6 className="text-black mb-0">{v.desc.substring(0,20)}</h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button className="btn btn-link px-2"onClick={() => handleDec(v.pid)}>
                                            <i className="fas fa-minus" />
                                        </button>
                                        <input id="form1" min={0} name="quantity" defaultValue={v.Qty} type="number" className="form-control form-control-sm" />
                                        <button className="btn btn-link px-2" onClick={() => handleInc(v.pid)}>
                                            <i className="fas fa-plus" />
                                        </button>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h6 className="mb-0">{v.price}</h6>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                    </div>
                                </div>
                                </div> */
                            )
                        })
                    }
                    <div className=" card-body card mb-3 ms-3 d-flex justify-content-between d-flex flex-row align-items-center">
                        Total
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">{totalPrice}</h5>
                        </div>
                    </div>

                </div>


            </div>

        </section>

    );
}

export default Cart1;