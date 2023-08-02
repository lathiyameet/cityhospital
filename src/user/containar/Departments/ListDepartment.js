import React from 'react';
import CoustmCard from '../../components/UI/CoustmCard';


function ListDepartment({departmentData}) {
    return (
        <>
            {
                departmentData.map((v, i) => {
                    return (
                        <div className='col-md-3 g-2'>
                            <CoustmCard
                                values={v}
                                btnVal={'ADD to Department'}
                            />
                        </div>
                    )
                })
            }

        </>
    );
}

export default ListDepartment;