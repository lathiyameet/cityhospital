import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { AddDoctordata, DeleteDoctordata, EditDoctordata, grt_doctorsData } from '../../../reducx/action/doctors.action';
import { DataGrid } from '@mui/x-data-grid';
import DoctorForm from './DoctorForm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';


function Doctorsadmin(props) {
    const [update, setUpdate] = React.useState(null);
    const Dispatch = useDispatch()
    const doctors = useSelector(state => state.doctors)


    console.log(doctors);
    
    useEffect(() => {
        Dispatch(grt_doctorsData())
    }, [])


   const handleDelete = (id) => {
        Dispatch(DeleteDoctordata(id))
   }
   const handleUpdate = (data) => {
    Dispatch(EditDoctordata(data)) 
        setUpdate(data)
   }
    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
              <>
                <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleUpdate(params.row)}>
                  <EditIcon />
                </IconButton>
      
              </>
      
            )
          },
     
    ];

const handleSubmit = (data) => {
    console.log(data);
    if(update){
        Dispatch(EditDoctordata(data))
    }else{
        Dispatch(AddDoctordata(data));

    }  
    setUpdate(null)
}
    return (
        <div>
{   
    doctors.loading ?<CircularProgress /> :
    <>
     <DoctorForm onHandlesumit={handleSubmit} update={update}/>
            {/* <h2>doctor</h2>   */}

            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                    rows={doctors.doctor}
                    columns={columns}
                   
                />
            </div>
    
    </>
}
       

        </div>
    );
}

export default Doctorsadmin;