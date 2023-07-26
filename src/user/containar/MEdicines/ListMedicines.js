import React from 'react';
import CoustmCard from '../../components/UI/CoustmCard';

function ListMedicines({ Mdata, handlecart1 }) {
    console.log(Mdata);
    return (
        <>
            {
                Mdata.map((v, i) => {
                    return (
                        <div className='col-md-3 g-2'>
                            <CoustmCard
                                values={v}
                                btnVal={'ADD to cart'}
                                onclik1 ={handlecart1}
                            />
                        </div>
                    )
                })
            }

        </>
    );
}

export default ListMedicines;