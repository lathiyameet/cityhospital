import React, { useEffect, useState } from 'react';
import CoustmCard from '../../components/UI/CoustmCard';

function Medicines1({setcartcount}) {
    const [getdata, setgetdata] = useState([])
    // const [cart ,setcartdata] =useState()

   
    // console.log(localData);

    useEffect(() => {
        try {
            fetch("http://localhost:3004/medicines")
                .then((response) => response.json())
                .then((data) => setgetdata(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
       
    }, [])
     const handlecart1 = (id) => {
        let localData= JSON.parse(localStorage.getItem('cart'));
        let cartarr= [];
        // console.log(localData);
       if(localData === null){
        cartarr.push({
            pid: id,
            Qty: 1
        })
        localStorage.setItem('cart',JSON.stringify(cartarr))
       }else{
        let cdata = localData.find((v) => v.pid === id)
        if(cdata){
            cdata.Qty++
            localStorage.setItem('cart',JSON.stringify(localData));
        }else{
            localData.push({
                pid: id,
                Qty: 1,
            })
            localStorage.setItem('cart',JSON.stringify(localData));

            // localStorage.setItem('cart',JSON.stringify([{
            //     pid: id,
            //     qyt: 1
            // }]))
        }
       
       }   
       setcartcount((prev) => prev+1)
        
    }
    
    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <div className='row g-3'>

                    {
                        getdata.map((v) => {
                            return (
                                <div className='col-md-3 g-3'>
                                <CoustmCard
                                    values={v}
                                    btnVal={'ADD to cart'}
                                    onclik1={handlecart1}
                                />
                                 </div>
                            )
                        })
                    }



                </div>

            </div>

        </section>

    );
}

export default Medicines1;