import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import DepartmentForm from './DepartmentForm';

import { Adddepartmentdata, Deletedepartmentdata, Editdepartmentdata, FetchDepartment } from '../../../reducx/Slice/departmentSlice';

function Departmentsadmin(props) {
    const [update, setUpdate] = React.useState(null);
    const Dispatch = useDispatch()
    const departments = useSelector(state => state.department)

    console.log(departments.department);


    useEffect(() => {

        Dispatch(FetchDepartment())

    }, [])


    const handleDelete = (data) => {
        Dispatch(Deletedepartmentdata(data))
    }
    const handleUpdate = (data) => {
        // Dispatch(Editdepartmentdata(data)) 
        setUpdate(data)
    }
    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'desc', width: 130 },
        {
            field:'prce', headerName:'image' ,width:130 , height:100 ,
            renderCell: (params) => {
              return(
                 <div>
                    <img src={params.row.prce} alt='' class= "img-thumbnail" height="70px" width="50px"/>
                 </div>
              )

              }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
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
        if (update) {
            Dispatch(Editdepartmentdata(data))
        } else {
            Dispatch(Adddepartmentdata(data));

        }
        setUpdate(null)
    }
    return (
        <div >
            <Box height={100} />
            {
                departments.isLoading ? <CircularProgress /> :
                    departments.error ? <p>{departments.error}</p> :
                        <>

                            <DepartmentForm onHandlesumit={handleSubmit} update={update} />

                            <div style={{ height: "90vh", width: '100%' }}>
                                <DataGrid
                                    rows={departments.department}
                                    columns={columns}
                                />
                            </div>

                        </>
            }


        </div>
    );
}

export default Departmentsadmin;