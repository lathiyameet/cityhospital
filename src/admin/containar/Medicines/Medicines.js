import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import Medicinefom from './Medicinefom';
import { useDispatch, useSelector } from 'react-redux';
import { Addmedicinedata, Deletemedicinedata, Editmedicinedata, get_medicinesdata } from '../../../reducx/action/Medicines.action';


function Medicines(props) {
  const [update, setUpdate] = React.useState(null);
  const Dispatch =useDispatch()
  const medicinedata = useSelector(state => state.mediciness)

  useEffect(() => {

  Dispatch(get_medicinesdata())

  }, [])
  
  const handleDelete = (id) => {
    Dispatch(Deletemedicinedata(id))
  }

  const handleUpdate = (data) => {
    Dispatch(Editmedicinedata(data))
    setUpdate(data)
  }
  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'expiry', headerName: 'Expiry_Date', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
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
    if(update){
      Dispatch(Editmedicinedata(data))
  }else{
      Dispatch(Addmedicinedata(data));

  }
  setUpdate(null)
  }
  return (
    <>


    <Medicinefom onHandlesumit={handleSubmit} update={update}/>
      <div style={{ height: "90vh", width: '100%' }}>
        <DataGrid
          rows={medicinedata.medicine}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Medicines;