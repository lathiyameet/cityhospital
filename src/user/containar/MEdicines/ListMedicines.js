import React from 'react';
import CoustmCard from '../../components/UI/CoustmCard';

function ListMedicines({Mdata}) {
    return (
        <>
        {
            Mdata.map((v,i) => {
                return (
                    <div className='col-md-3'>
                        <CoustmCard values={v} />
                    </div>
                )
            })
        }
            
        </>
    );
}

export default ListMedicines;